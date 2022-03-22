'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      models.User.hasMany(Post, { foreignKey: 'userId' })
    }
  }
  Post.init(
    {
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Post'
    }
  )
  return Post
}
