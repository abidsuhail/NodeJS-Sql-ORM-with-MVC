'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
