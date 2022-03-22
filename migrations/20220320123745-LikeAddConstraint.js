'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('likes', {
      fields: ['postId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name_post',
      references: {
        //Required field
        table: 'posts',
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
