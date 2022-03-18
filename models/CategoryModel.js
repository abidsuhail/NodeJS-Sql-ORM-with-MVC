const TABLE_NAME = 'categories'

let CatModel = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLE_NAME,
    {
      cat_name: { type: DataTypes.STRING, allowNull: false }
    },
    { freezeTableName: true, timestamps: true }
  )
}
module.exports = CatModel
