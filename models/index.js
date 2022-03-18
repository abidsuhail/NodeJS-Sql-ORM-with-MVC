const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('abiddb', 'root', '@bid1294', {
  host: 'localhost',
  dialect: 'mysql'
})
sequelize
  .authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.categories = require('./CategoryModel')(sequelize, DataTypes)
db.products = require('./ProductModel')(sequelize, DataTypes)
db.users = require('./UserModel')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
module.exports = db
