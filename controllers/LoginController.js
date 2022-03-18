const models = require('../models')
const bcrypt = require('bcrypt')
const AppUtils = require('../utils/AppUtils')
const saltRounds = 10
const login = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    const user = await models.users.findOne({
      where: {
        username: req.body.username
      }
    })
    if (user != null) {
      const match = await bcrypt.compare(req.body.password, user.password)
      if (match) {
        const newAuthtoken = AppUtils.generateAuthtoken()
        await user.update({ authtoken: newAuthtoken })
        data = await models.users.findOne({
          attributes: { exclude: ['password'] },
          where: {
            username: req.body.username
          }
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
    const insertedData = await models.users.create({
      username: req.body.username,
      firstname: req.body.firstname,
      password: hash,
      authtoken: authtoken
    })
    data = await models.users.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: insertedData.id
      }
    })
  } catch (e) {
    message = e.message
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
  register
}
