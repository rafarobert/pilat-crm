'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', {


      
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
      
      "name": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "account_type": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "industry": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "annual_revenue": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_fax": {
        type: 'Sequelize.STRING',
        length: 100
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
      
      "rating": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_office": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "phone_alternate": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "website": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "ownership": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "employees": {
        type: 'Sequelize.STRING',
        length: 10
      },
      
      "ticker_symbol": {
        type: 'Sequelize.STRING',
        length: 10
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
      
      "sic_code": {
        type: 'Sequelize.STRING',
        length: 10
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
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts');
  }
};
