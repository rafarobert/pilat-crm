'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('securitygroups_records', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "securitygroup_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "record_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "module": {
        type: 'Sequelize.CHAR',
        length: 36
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
    return queryInterface.dropTable('securitygroups_records');
  }
};
