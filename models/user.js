'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      User.belongsTo(models.Role, { foreignKey: 'roles',as:'user_role' })
      models.Role.hasMany(User, { foreignKey: 'roles' ,as:'users'})
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, unique: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: { type: DataTypes.STRING, allowNull: false },
      authtoken: { type: DataTypes.STRING, allowNull: false },
      roles: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },

      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
