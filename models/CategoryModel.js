const TABLE_NAME = 'categories'
//const ProductModel = require('./ProductModel')

let CatModel = (sequelize, DataTypes) => {
  const cModel = sequelize.define(
    TABLE_NAME,
    {
      cat_name: { type: DataTypes.STRING, allowNull: false }
    },
    { freezeTableName: true, timestamps: true }
  )
 /*  cModel.hasMany(ProductModel(sequelize, DataTypes), {
    foreignKey: {
      allowNull: false
    }
  }) */
  return cModel
}
module.exports = CatModel
