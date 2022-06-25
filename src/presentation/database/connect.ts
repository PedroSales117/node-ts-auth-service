import mongoose from 'mongoose'

export async function connectToDataBase (connectionUriString: string): Promise<any> {
  return await mongoose.connect(connectionUriString)
}
