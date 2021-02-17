'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('acl_actions', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "aclaccess": {
        type: 'Sequelize.INTEGER',
        length: 3,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "category": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "acltype": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('acl_actions');
  }
};
