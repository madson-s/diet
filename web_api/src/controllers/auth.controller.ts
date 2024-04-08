import { Request, Response } from 'express';
import { RefreshTokenRepository } from '../repositories/refresh-token.repository';
import { UserRepository } from '../repositories/user.repository';
import { CryptService } from '../services/hash.service';
import { uuid } from 'uuidv4';
import { TokenService } from '../services/jwt.service';

async function generateTokens({ user }: { user: { id: number; email: string } }) {
  const refreshToken = uuid();
  const refreshTokenRepository = new RefreshTokenRepository();
  const tokenService = new TokenService();
  await refreshTokenRepository.create({
    createParams: {
      data: { token: refreshToken, user: { connect: { id: user.id } } },
    },
    updateParams: {
      where: { userId: user.id },
      data: { deletedAt: new Date() },
    },
  });

  const accessToken = tokenService.generate({ user });

  return { accessToken, refreshToken };
}

export class AuthController {
  async signup(request: Request, response: Response) {
    try {
      const { email, password, name, type } = request.body;
      const userRepository = new UserRepository();
      const cryptService = new CryptService();
      const hashedPassword = await cryptService.hash(password);

      if (!type || (type !== 'ADMIN' && type !== 'NUTRITIONIST')) {
        return response.status(400).json({ error: 'Invalid or missing user type' });
      }

      await userRepository.add({
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
      const userRepository = new UserRepository();
      const cryptService = new CryptService();
      const tokenService = new TokenService();
  
      let user = await userRepository.getByEmail(email);

      if (!user) {
        return response.status(401).json({ error: 'Unauthorized' });
      }
  
      const isPasswordValid = await cryptService.compare(password, user.password);
  
      if (!isPasswordValid) {
        return response.status(401).json({ error: 'Unauthorized' });
      }
  
      const { accessToken, refreshToken } = await generateTokens({
        user: { id: user.id, email: user.email },
      });
  
      response.json({ id: user.id, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'An error occurred while signing in the user' });
    }
  }

  async refresh(request: Request, response: Response) {
    try {
      const { token } = request.body;
      const userRepository = new UserRepository();
      const refreshTokenRepository = new RefreshTokenRepository();
  
      const isTokenValid = await refreshTokenRepository.getByToken(token);
      if (!isTokenValid) {
        return response.status(401).json({ error: 'Unauthorized' });
      }
  
      const user = await userRepository.getById(isTokenValid.id);
      if (!user) {
        return response.status(401).json({ error: 'Unauthorized' });
      }
  
      const { accessToken, refreshToken } = await generateTokens({
        user: { id: user.id, email: user.email },
      });
  
      response.json({ id: user.id, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'An error occurred while refreshing the token' });
    }
  }
}
