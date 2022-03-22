'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('likes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name_user_100',
      references: {
        //Required field
        table: 'users',
        field: 'id'
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
