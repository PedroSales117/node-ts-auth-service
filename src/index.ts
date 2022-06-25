import express from 'express'
import { connectToDataBase } from './presentation/database/connect'
import { PORT, DB_STRING_CONNECTION } from './presentation/config/index'

connectToDataBase(DB_STRING_CONNECTION)
  .then(() => {
    express().listen(PORT, () => {
      console.log(`Listen on https://localhost:${PORT}`)
    })
  }).catch((err) => {
    console.log(err)
  })
