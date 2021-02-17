'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('securitygroups_default', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "module": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "securitygroup_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "securitygroup_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('securitygroups_default');
  }
};
