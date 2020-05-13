const { Model, DataTypes } = require('sequelize')

class Dev extends Model {
   static init(sequelize) {
      super.init({
         github_username: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         name: {
            type: DataTypes.STRING,
            allowNull: true,
         },
         bio: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         avatar_url: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         techs: {
            type: [DataTypes.STRING],
            allowNull: false,
         },
         locations: {
            type: DataTypes.GEOMETRY('POINT'),
            allowNull: false,
         }
      }, {
         sequelize
      })
   }
}

module.exports = Dev