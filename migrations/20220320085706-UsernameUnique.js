'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
