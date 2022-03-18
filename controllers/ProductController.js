const models = require('../models')
const getAllProducts = async (req, res) => {
  let error = 0
  let message = 'success'
  let data = []
  try {
    data = await models.products.findAll({})
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
const createProduct = async (req, res) => {
  let error = 0
  let message = 'success'
  let data = []
  try {
    await models.products.create({
      product_name: req.body.product_name,
      categoryId: req.body.cat_id
    })
  } catch (e) {
    message = e.message
    error = 1
  }
  res.send({ error: error, message: message, data: data })
}
const getProductsByCatId = async function (req, res) {
  let error = 0
  let message = 'success'
  let data = []
  try {
    data = await models.products.findAll({
      where: {
        categoryId: req.body.cat_id
      }
      /* include: [
        { model: models.categories } // load the profile picture. Notice that the spelling must be the exact same as the one in the association
      ] */
    })
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
  getAllProducts,
  createProduct,
  getProductsByCatId
}
