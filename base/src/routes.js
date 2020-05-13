const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// pegar todos os devs | cadastrar dev
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
// pegar devs por filtro
routes.get('/search', SearchController.index)


module.exports = routes;
