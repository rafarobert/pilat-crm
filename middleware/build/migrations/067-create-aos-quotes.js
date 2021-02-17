'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_quotes', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "number": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "number": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "billing_address_street": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "billing_address_city": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "billing_address_state": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "billing_address_postalcode": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "billing_address_country": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "shipping_address_street": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "shipping_address_city": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "shipping_address_state": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "shipping_address_postalcode": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "shipping_address_country": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "shipping_tax": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "stage": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "term": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "approval_status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "invoice_status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "approval_issue": {
        type: 'Sequelize.TEXT',
      },
      
      "template_ddown_c": {
        type: 'Sequelize.TEXT',
      },
      
      "terms_c": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "expiration": {
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
      
      "billing_account_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "billing_contact_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "opportunity_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_quotes');
  }
};