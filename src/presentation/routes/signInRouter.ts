import { Request, Response } from 'express'
import { router } from '../config/express.config'
import { SignInController } from '../controllers/signInController'
import { UserMakeController } from '../controllers/userController'

export const signRouter = router

signRouter.post('/signin', (request: Request, response: Response) => {
  const { email, pass } = request.body
  void new UserMakeController().findUser(email)
    .then(userFind => {
      const loginResult = new SignInController().logIn({
        email: userFind.email,
        password: userFind.pass
      })
      if (pass !== loginResult.data) {
        return response.status(400).json({ error: 'password provided is not valid' })
      }
      return response.status(200).json({ data: 'authenticate👍🏾🔓' })
    })
})
