import { Authenticator } from '../middleware/Authenticator'
import { loginInterface } from '../protocols/signIn'

export class SignInController {
  logIn (loginData: loginInterface): any {
    const passDecode = new Authenticator().decode(loginData.password)
    return passDecode
  }
}
