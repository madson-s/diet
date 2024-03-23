import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key_here';

export function generateToken(user: { id: number; username: string }): string {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string): { id: number; username: string } | null {
  try {
    const decoded = jwt.verify(token, secretKey) as { id: number; username: string };
    return decoded;
  } catch (error) {
    return null;
  }
}