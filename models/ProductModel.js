const TABLE_NAME = 'products'
//const CatModel = require('./CategoryModel')
let ProductModel = (sequelize, DataTypes) => {
  const productModel = sequelize.define(
    TABLE_NAME,
    {
      product_name: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false }
    },
    { freezeTableName: true, timestamps: true }
  )
  
  return productModel
}
module.exports = ProductModel
