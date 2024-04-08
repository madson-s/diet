import jwt from 'jsonwebtoken';

const secretKey = process.env.TOKEN_KEY!;

export class TokenService {
  generate(paylaod: any): string {
    return jwt.sign(paylaod, secretKey, { expiresIn: '1m' });
  }
  
  verify(token: string): any | null {
    try {
      const decoded = jwt.verify(token, secretKey) as any;
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

