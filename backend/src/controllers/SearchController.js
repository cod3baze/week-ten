const Dev = require('../model/Dev')

const { parseStringAsArray } = require('../Utils/stringAsArray')

module.exports = {
   async index(req, res) {
      const { latitude, longitude, techs } = req.query

      const arrayTechs = parseStringAsArray(techs)

      const dev = await Dev.findAll({ 
         where: { 
            techs: arrayTechs
         } 
      })

      return res.json(dev)
   } 
}