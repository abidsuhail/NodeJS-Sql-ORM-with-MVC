const models = require('../models')
const Sequelize = require('sequelize')

module.exports = {
  getAllPosts: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.Post.findAll({
        attributes: {
          include: [
            //[Sequelize.where(Sequelize.col('likes.userId'), '=', req.user.id),"likedByMe"]
            [
              Sequelize.literal(
                `(SELECT COUNT(*) FROM likes WHERE likes.userId=${req.user.id} AND likes.postId=Post.id)`
              ),
              'isLikedByMe'
            ],
            [
              Sequelize.literal(
                `(SELECT COUNT(*) FROM likes WHERE likes.postId=Post.id)`
              ),
              'total_likes'
            ]
            //[Sequelize.fn('COUNT', Sequelize.col('likes.postId')), 'likesCount']
            /* [
              //Sequelize.fn('COUNT',  Sequelize.where(Sequelize.col('likes.userId'), '=', req.user.id)),
              Sequelize.fn('COUNT',Sequelize.where(Sequelize.col('likes.userId'), '=', req.user.id)),
              'likedByMe'
            ] */
          ]
        }

        /*  include: [
          {
            model: models.Like,
            as: 'likes'
            // attributes: [],
          }
        ] */
        // group: ['Post.id']
      })
      // res.send(data.likes.find(o=>o.userId))
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
      await models.Post.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.user.id
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
      data = await models.Post.findAll({
        include: [
          {
            model: models.User,
            attributes: ['username'],
            required: true
          }
        ]
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
  getPostLikes: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = {}
    try {
      const likes = await models.Like.count({
        where: {
          postId: req.body.postId
        }
      })
      const isLikedByMe =
        (await models.Like.findOne({
          where: {
            userId: req.user.id,
            postId: req.body.postId
          }
        })) !== null
      data.total_likes = likes
      data.liked = isLikedByMe
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
