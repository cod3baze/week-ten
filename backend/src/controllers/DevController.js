const Dev = require('../model/Dev')
const setPoints = require('../model/Utils/setPoints')

const { parseStringAsArray } = require('../Utils/stringAsArray')

module.exports = {
   async index(req, res) {
      const dev = await Dev.findAll()

      return res.json(dev)
   },

   async store(req, res) {
      const { github_username, avatar_url, techs, bio, name, latitude, longitude } = req.body

      const point = setPoints(longitude, latitude)

      let dev = await Dev.findOne({ where: { github_username } })

      if (!dev) {
         const arrayTechs = parseStringAsArray(techs)

         dev = await Dev.create({ 
            github_username, 
            name,
            bio,
            avatar_url,
            techs: arrayTechs,
            locations: point,
         })
      }
      // console.log(dev, typeof(dev))
      return res.json(dev)
   }
}