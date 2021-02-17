'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_contracts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "reference_code": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "contract_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "shipping_tax": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "start_date": {
        type: 'Sequelize.DATE'
      },
      
      "end_date": {
        type: 'Sequelize.DATE'
      },
      
      "customer_signed_date": {
        type: 'Sequelize.DATE'
      },
      
      "company_signed_date": {
        type: 'Sequelize.DATE'
      },
      
      "renewal_reminder_date": {
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
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "contract_account_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "opportunity_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "contact_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "call_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_contracts');
  }
};
