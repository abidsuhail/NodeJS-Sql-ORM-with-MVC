'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
   /*    id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      }, */
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes')
  }
}
