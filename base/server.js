const express = require('express')
const mongooose = require('mongoose')
const cors = require('cors')

const routes = require('./src/routes')

const app = express()

mongooose.connect('mongodb+srv://oministack:oministack@cluster0-bcirz.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)