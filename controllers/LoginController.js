const models = require('../models')
const bcrypt = require('bcrypt')
const AppUtils = require('../utils/AppUtils')
const saltRounds = 10

const getAllUsers = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    data = await models.User.findAll({})
  } catch (e) {
    message = e.message
    error = 1
  }
  res.send({ error: error, message: message, data: data })
}
const login = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    const user = await models.User.findOne({
      where: {
        username: req.body.username
      }
    })
    if (user != null) {
      const match = await bcrypt.compare(req.body.password, user.password)
      if (match) {
        const newAuthtoken = AppUtils.generateAuthtoken()
        await user.update({ authtoken: newAuthtoken })
        data = await models.User.findOne({
          attributes: { exclude: ['password', 'roles'] },
          where: {
            username: req.body.username
          },
          include: [{ model: models.Role, as: 'user_role' }]
        })
        
      } else {
        error = 1
        message = 'Incorrect password!'
      }
    } else {
      error = 1
      message = 'User not exists!'
    }
  } catch (e) {
    message = e.message
    error = 1
  }
  res.send({ error: error, message: message, data: data })
}
const register = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    const authtoken = AppUtils.generateAuthtoken()
    const passPlain = req.body.password
    const hash = await bcrypt.hash(passPlain, saltRounds)
    const insertedData = await models.User.create({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      authtoken: authtoken
    })
    data = await models.User.findOne({
      attributes: { exclude: ['password', 'roles'] },
      where: {
        id: insertedData.id
      },
      include: [{ model: models.Role, as: 'user_role' }]
    })
  } catch (e) {
    message = e.errors.length > 0 ? e.errors[0].message : e.message
    error = 1
  }
  res.send({ error: error, message: message, data: data })
}
/* const getAllCats = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    data = await models.categories.findAll({})
  } catch (e) {
    message = e.message
    error = 1
  }
  res.send({
    error: error,
    message: message,
    data: data
  })
} */
module.exports = {
  login,
  register,
  getAllUsers
}
