const TABLE_NAME = 'user'
let UserModel = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLE_NAME,
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstname: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      authtoken: { type: DataTypes.STRING, allowNull: false }
    },
    { freezeTableName: true }
  )
}
module.exports = UserModel
