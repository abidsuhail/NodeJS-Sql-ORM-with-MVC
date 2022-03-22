'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('users', 'roles', {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles',
        key: 'id'
      }
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
