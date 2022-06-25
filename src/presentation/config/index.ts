import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export const PORT: any = process.env.PORT
export const JWT_SECRET: string = process.env.JWT_SECRET
export const JWT_EXPIRE_TIME: any = process.env.JWT_EXPIRE_TIME
export const DB_STRING_CONNECTION: string = process.env.MONGO_DB_STRING_CONNECTION
