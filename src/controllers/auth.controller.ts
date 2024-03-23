import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';
import { CryptService } from '../services/hash.service';

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
}
