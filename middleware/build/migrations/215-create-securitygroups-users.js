'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('securitygroups_users', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "primary_group": {
        type: 'Sequelize.TINYINT'
      },
      
      "noninheritable": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "securitygroup_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "securitygroup_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('securitygroups_users');
  }
};
