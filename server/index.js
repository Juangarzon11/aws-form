const express = require('express')
const path = require('path')
const initDB = require('../config/db')
const config = require('../config/config')
const bodyParser = require("body-parser")
const usersRouter = require('./routes/users')

const app = express()

const PORT = config.PORT


// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../client/build')))

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: true 
}))
// for parsing json
app.use(bodyParser.json({
  limit: '20mb'
}))

app.use(usersRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`app Server listening on ${PORT}`)
})

initDB()