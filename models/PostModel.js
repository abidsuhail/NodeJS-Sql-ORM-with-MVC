const TABLE_NAME = 'posts'
//const CatModel = require('./CategoryModel')
let PostModel = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLE_NAME,
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false }
    },
    { freezeTableName: true, timestamps: true }
  )
}
module.exports = PostModel
