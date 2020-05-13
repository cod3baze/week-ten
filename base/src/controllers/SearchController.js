const Dev = require('../models/Dev')
const { stringAsArray } = require('../Utils/stringAsArray')

module.exports = {
   async index(req, res) {
      const { techs, longitude, latitude } = req.query

      const arrayTechs = stringAsArray(techs)

      const devs = await Dev.find({
         techs: {
            $in: arrayTechs,
         },
         location: {
            $near: {
               $geometry: {
                  type: 'Point',
                  coordinates: [longitude, latitude],
               },
               $maxDistance: 10000,
            },
         }
      })

      return res.json(devs)
   }
}
