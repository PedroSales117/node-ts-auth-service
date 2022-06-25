import express, { Response, Request } from 'express'
// import mongoose from 'mongoose'

express().get('/createUser', (request: Request, response: Response) => {
  response.status(200).json({ data: 'User created' })
})
