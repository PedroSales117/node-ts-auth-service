import { Request, Response } from 'express'
import { router } from '../config/express.config'
import { Authenticator } from '../middleware/generateAuthToken'
import { UserMakeController } from '../controllers/userController'

export const CreateUserRouter = router

CreateUserRouter.post('/create', (request: Request, response: Response) => {
  const { email, pass } = request.body
  const requiredFields = ['email', 'pass']
  for (const field of requiredFields) {
    if (!request.body[field]) {
      return response.status(400).json({
        error: `Missing field ${field}`
      })
    }
  }
  void new UserMakeController().findUser(email).then(userFind => {
    if (userFind?.email === email) {
      return response.status(400).json({
        error: 'E-mail already in use'
      })
    } else {
      const encodedPass = new Authenticator().encode(pass)
      void new UserMakeController().createUser({ email: email, pass: encodedPass })
        .then(async dataBaseResponse => {
          try {
            return response.status(200).json({
              idCreated: await dataBaseResponse
            })
          } catch (error) {
            console.log(error)
            return error
          }
        }).catch(error => {
          return response.status(500).json({
            error: error
          })
        })
    }
  })
})
