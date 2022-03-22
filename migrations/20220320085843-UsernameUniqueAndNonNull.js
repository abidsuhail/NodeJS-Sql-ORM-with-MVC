'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
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
