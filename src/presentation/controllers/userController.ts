import { DataBase } from '../database/connect'
import { user } from '../protocols/user'
import { DB_STRING_CONNECTION } from '../config/index'

export class UserMakeController {
  async createUser (data: user): Promise<any> {
    try {
      const sendDataResponse = new DataBase().sendData(DB_STRING_CONNECTION, data)
      return await sendDataResponse
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async findUser (method: string): Promise<any> {
    try {
      const findUserResponse = new DataBase().findUserByEmail(DB_STRING_CONNECTION, method)
      return await findUserResponse
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
