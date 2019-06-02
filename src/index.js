const express = require('express')
//Run file to connect to database
require('./db/mongoose')
const userRouter = require('./routers/user')
//const restaurantRouter = require('./routers/restaurant')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
//app.use(restaurantRouter)

app.listen(port, () => {
  console.log('Server is up on port ', port)
})
