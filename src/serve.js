const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')
const cors = require('cors')

const server = express()

mongoose.connect('mongodb+srv://root:patomalk33@cluster0-0hwzz.mongodb.net/tinderdev?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())

server.use(routes)

server.listen(3333)

//mongodb
//user: root
//pass: GALD0uezcaQm1Mb2