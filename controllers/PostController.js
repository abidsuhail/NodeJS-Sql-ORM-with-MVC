const models = require('../models')

module.exports = {
  getAllPosts: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.posts.findAll({})
    } catch (e) {
      message = e.message
      error = 1
    }
    res.send({
      error: error,
      message: message,
      data: data
    })
  },
  createPost: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      await models.posts.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId
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
  },
  getAllPostsWithUser: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.posts.findAll({
        include: [{ model: models.users, attributes: ['username'] }]
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
}
