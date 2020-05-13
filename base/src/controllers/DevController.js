const Dev = require('../models/Dev')
const api = require('../services/api')
const { stringAsArray } = require('../Utils/stringAsArray')

module.exports = {
   async index(req, res){
      const devs = await Dev.find()

      return res.json(devs)
   },

   async store(req, res) {
      const { github_username, techs, latitude, longitude } = req.body

      let dev = await Dev.findOne({ github_username })

      if(!dev) {
         const response = await api.get(`/${github_username}`)
         const { name = login, bio, avatar_url } = response.data

         const arrayTechs = stringAsArray(techs)

         location = {
            type: 'Point',
            coordinates: [longitude, latitude]
         }

         dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: arrayTechs,
            location,
         })
      }

      return res.json(dev)
   },


   // atualizar info do dev
   async update() {

   },

   // deletar dev
   async destroy() {
      
   } 
}