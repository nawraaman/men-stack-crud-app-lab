// server.js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const dogRoute = require('./routes/dogs')

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(dogRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
