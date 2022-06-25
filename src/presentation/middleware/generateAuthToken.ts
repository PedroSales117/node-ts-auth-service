import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/index'

export class Authenticator {
  encode (toEncode: any): any {
    try {
      const authToken = jwt.sign({ exp: 3000, data: toEncode }, JWT_SECRET)
      return authToken
    } catch (error) {
      return error
    }
  }

  decode (toDecode: any): any {
    try {
      const tokenDecode = jwt.verify(toDecode, JWT_SECRET)
      return tokenDecode
    } catch (error) {
      return error
    }
  }
}
