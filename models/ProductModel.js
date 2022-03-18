const TABLE_NAME = 'products'
const CatModel = require('./CategoryModel')
let ProductModel = (sequelize, DataTypes) => {
  let productModel = sequelize.define(
    TABLE_NAME,
    {
      product_name: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false }
    },
    { freezeTableName: true, timestamps: true }
  )
  productModel.belongsTo(CatModel(sequelize, DataTypes), {
    foreignKey: {
      allowNull: false
    }
  })
  return productModel
}
module.exports = ProductModel
