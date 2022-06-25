import mongoose from 'mongoose'

export async function connectToDataBase (connectionUri: string): Promise<any> {
  return await mongoose.connect(connectionUri)
}
