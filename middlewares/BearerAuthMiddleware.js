const models = require('../models')
const authMiddleware = async (req, res, next) => {
  try {
    const authtoken = req.headers['authorization'].split(' ')[1]
    const data = await models.users.findOne({ where: { authtoken: authtoken } })
    if (data != null) {
      next()
    } else {
      return res.send({
        error: 2,
        message: 'Unauthenticated',
        data: []
      })
    }
  } catch (e) {
    return res.send({
      error: 2,
      message: 'Unauthenticated',
      data: []
    })
  }
}
module.exports = authMiddleware
