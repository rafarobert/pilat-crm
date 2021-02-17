'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('acl_roles_actions', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "access_override": {
        type: 'Sequelize.INTEGER',
        length: 3,
      },
      
      
      
      
      
      
      "role_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "action_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('acl_roles_actions');
  }
};
