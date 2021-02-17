'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_last', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "system_generated_password": {
        type: 'Sequelize.TINYINT'
      },
      
      "sugar_login": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_admin": {
        type: 'Sequelize.TINYINT'
      },
      
      "external_auth_only": {
        type: 'Sequelize.TINYINT'
      },
      
      "receive_notifications": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "portal_only": {
        type: 'Sequelize.TINYINT'
      },
      
      "show_on_employees": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_group": {
        type: 'Sequelize.TINYINT'
      },
      
      "factor_auth": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "user_name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "user_name": {
        type: 'Sequelize.STRING',
        length: 60
      },
      
      "user_hash": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "authenticate_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "first_name": {
        type: 'Sequelize.STRING',
        length: 30
      },
      
      "last_name": {
        type: 'Sequelize.STRING',
        length: 30
      },
      
      "title": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "photo": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "department": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "phone_home": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "phone_mobile": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "phone_work": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "phone_other": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "phone_fax": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "address_street": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "address_city": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "address_state": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "address_country": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "address_postalcode": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "employee_status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "messenger_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "messenger_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "factor_auth_interface": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "pwd_last_changed": {
        type: 'Sequelize.DATE'
      },
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
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
      
      "reports_to_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_last');
  }
};
