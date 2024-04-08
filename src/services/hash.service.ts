import bcrypt from 'bcrypt'


export class CryptService {
  private saltRounds = 10;

  async  hash(textToEncrypt: string) {
    return Promise.resolve(bcrypt.hash(textToEncrypt, this.saltRounds))
  }

  async compare(textToCompare: string, encryptedText: string) {
    return Promise.resolve(bcrypt.compare(textToCompare, encryptedText))
  }
}