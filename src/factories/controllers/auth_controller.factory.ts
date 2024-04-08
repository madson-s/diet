import { AuthController } from '../../controllers/auth.controller';
import { RefreshTokenRepository } from '../../repositories/refresh-token.repository';
import { UserRepository } from '../../repositories/user.repository';
import { CryptService } from '../../services/hash.service';
import { TokenService } from '../../services/jwt.service';

export function makeAuthtroller(): AuthController {
  const userRepository = new UserRepository();
  const refreshTokenRepository = new RefreshTokenRepository();
  const cryptService = new CryptService();
  const tokenService = new TokenService();
  return new AuthController(userRepository, refreshTokenRepository, cryptService, tokenService);
}
