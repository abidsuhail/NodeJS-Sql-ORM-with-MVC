'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Like.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
      models.User.hasMany(Like, { foreignKey: 'userId', as: 'likes' })
      Like.belongsTo(models.Post, { foreignKey: 'postId', as: 'posts' })
      models.Post.hasMany(Like, { foreignKey: 'postId', as: 'likes' })
    }
  }
  Like.init(
    {
      userId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      postId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Like'
    }
  )
  return Like
}
