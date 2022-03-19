const TABLE_NAME = 'likes'
//const CatModel = require('./CategoryModel')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLE_NAME,
    {},
    { freezeTableName: true, timestamps: true }
  )
}
