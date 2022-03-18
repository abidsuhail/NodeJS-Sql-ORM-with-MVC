const TABLE_NAME = 'user'
let UserModel = (sequelize, DataTypes) => {
 return sequelize.define(
    TABLE_NAME,
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      lastname: { type: DataTypes.STRING, allowNull: false }
    },
    { freezeTableName: true }
  )
}
module.exports = UserModel
