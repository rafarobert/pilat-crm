'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('securitygroups_records', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
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
      
      "record_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "module": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('securitygroups_records');
  }
};
