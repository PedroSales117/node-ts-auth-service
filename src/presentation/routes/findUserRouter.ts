import { Request, Response } from 'express'
import { router } from '../config/express.config'
import { UserMakeController } from '../controllers/userController'

export const FindUserRouter = router

FindUserRouter.get('/find', (request: Request, response: Response) => {
  const { email } = request.query

  void new UserMakeController().findUser(email)
    .then(userFind => {
      if (userFind === null) {
        return response.status(400).json({ error: 'User not find' })
      }
      try {
        return response.status(200).json({
          data: {
            email: userFind.email,
            phone: userFind.phone,
            address: userFind.address
          },
          message: 'User sucessful find'
        })
      } catch (error) {
        return response.status(500).json({ error: error })
      }
    })
})
