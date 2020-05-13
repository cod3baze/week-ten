const express = require('express')
const Routes = require('./src/routes')

// conexão com o banco de dados
require('./src/database')

const app = express()

app.use(express.json())

Routes.get('/', (req, res) => {
   return res.send({ navigate: {
   	Routers : [
   		"/devs",
   		"/search",
   	]
   } })
})
app.use(Routes)


app.listen(3000)