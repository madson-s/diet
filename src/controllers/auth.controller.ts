import { Request, Response } from 'express';
import { RefreshTokenRepository } from '../repositories/refresh-token.repository';
import { UserRepository } from '../repositories/user.repository';
import { CryptService } from '../services/hash.service';
import { uuid } from 'uuidv4';
import { TokenService } from '../services/jwt.service';

export class AuthController {
  private readonly userRepository: UserRepository;
  private readonly refreshTokenRepository: RefreshTokenRepository;
  private readonly cryptService: CryptService;
  private readonly tokenService: TokenService;

  constructor(
    userRepository: UserRepository,
    refreshTokenRepository: RefreshTokenRepository,
    cryptService: CryptService,
    tokenService: TokenService
  ) {
    this.userRepository = userRepository;
    this.refreshTokenRepository = refreshTokenRepository;
    this.cryptService = cryptService;
    this.tokenService = tokenService;
  }

  private async generateTokens({ user }: { user: { id: number; email: string } }) {
    const refreshToken = uuid();
    await this.refreshTokenRepository.create({
      createParams: {
        data: { token: refreshToken, user: { connect: { id: user.id } } }
      },
      updateParams: {
        where: { userId: user.id },
        data: { deletedAt: new Date() }
      }
    });

    const accessToken = this.tokenService.generate({ user });

    return { accessToken, refreshToken };
  }

  async signup(request: Request, response: Response) {
    try {
      const { email, password, name, type } = request.body;
      const hashedPassword = await this.cryptService.hash(password);

      if (!type || (type !== 'ADMIN' && type !== 'NUTRITIONIST')) {
        return response.status(400).json({ error: 'Invalid or missing user type' });
      }

      await this.userRepository.add({
        email,
        name,
        password: hashedPassword,
        type
      });

      return response.sendStatus(201);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred while registering the user' });
    }
  }

  async signin(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      let user = await this.userRepository.getByEmail(email);

      if (!user) {
        return response.status(401).json({ error: 'Unauthorized' });
      }

      const isPasswordValid = await this.cryptService.compare(password, user.password);

      if (!isPasswordValid) {
        return response.status(401).json({ error: 'Unauthorized' });
      }

      const { accessToken, refreshToken } = await this.generateTokens({
        user: { ...user, email: user.email }
      });

      response.json({ id: user.id, name: user.name, email: user.email, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'An error occurred while signing in the user' });
    }
  }

  async refresh(request: Request, response: Response) {
    try {
      const { token } = request.body;

      const isTokenValid = await this.refreshTokenRepository.getByToken(token);
      if (!isTokenValid) {
        return response.status(401).json({ error: 'Unauthorized' });
      }

      const user = await this.userRepository.getById(isTokenValid.userId);
      if (!user) {
        return response.status(401).json({ error: 'Unauthorized' });
      }

      const { accessToken, refreshToken } = await this.generateTokens({
        user: { id: user.id, email: user.email }
      });

      response.json({ id: user.id, name: user.name, email: user.email, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'An error occurred while refreshing the token' });
    }
  }
}
