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
db.posts = require('./PostModel')(sequelize, DataTypes)
db.likes = require('./LikeModel')(sequelize, DataTypes)

//==================RELATIONS===============================
db.products.belongsTo(db.categories, {
  foreignKey: {
    allowNull: false
  }
})
db.categories.hasMany(db.products, {
  foreignKey: {
    allowNull: false
  }
})
db.posts.belongsTo(db.users, {
  foreignKey: {
    allowNull: false
  }
})
db.users.hasMany(db.posts, {
  foreignKey: {
    allowNull: false
  }
})
db.likes.belongsTo(db.posts, {
  foreignKey: {
    allowNull: false
  }
})
db.likes.belongsTo(db.users, {
  foreignKey: {
    allowNull: false
  }
})
db.posts.hasMany(db.likes, {
  foreignKey: {
    allowNull: false
  }
})
db.users.hasMany(db.likes, {
  foreignKey: {
    allowNull: false
  }
})
//==================END RELATIONS===============================

db.sequelize.sync({ force: false })
module.exports = db
