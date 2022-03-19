const TABLE_NAME = 'likes'
//const CatModel = require('./CategoryModel')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLE_NAME,
    {
     // id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      postId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
    },
    { freezeTableName: true, timestamps: true }
  )
}
