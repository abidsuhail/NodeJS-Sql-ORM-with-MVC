const models = require('../models')

const createCat = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    await models.categories.create({
      cat_name: req.body.cat_name
    })
  } catch (e) {
    message = e.message
    error = 1
  }
  res.send({ error: error, message: message, data: data })
}
const getAllCats = async function (req, res) {
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
}
module.exports = {
  createCat,
  getAllCats
}
