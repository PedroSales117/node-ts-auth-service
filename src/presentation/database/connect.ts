import mongoose from 'mongoose'
import { user } from '../protocols/user'

export class DataBase {
  async connect (connectionUriString: string): Promise<any> {
    try {
      return await mongoose.connect(connectionUriString)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async sendData (connectionUriString: string, data: user): Promise<any> {
    try {
      const db = mongoose.createConnection(connectionUriString)
      const userIdCreated = (await db.collection('user').insertOne(data)).insertedId
      return userIdCreated
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async findUserByEmail (connectionUriString: string, email: string): Promise<any> {
    try {
      const db = mongoose.createConnection()
      await db.openUri(connectionUriString)
      const userIdFind = db.collection('user').findOne({ email: email })
      return await userIdFind
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
