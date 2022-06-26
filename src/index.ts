import { app } from './presentation/config/express.config'
import { DataBase } from './presentation/database/connect'
import { PORT, DB_STRING_CONNECTION } from './presentation/config/index'
import { CreateUserRouter, FindUserRouter, signRouter } from './presentation/routes/index'

new DataBase().connect(DB_STRING_CONNECTION)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listen on https://localhost:${PORT}`)
    })
  }).catch((err) => {
    console.log(err)
  })

app.use('/user', signRouter)
app.use('/user', FindUserRouter)
app.use('/user', CreateUserRouter)
