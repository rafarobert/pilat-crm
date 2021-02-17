'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_invoices', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "number": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "quote_number": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      "total_amt": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 5
      },
      
      "total_amt": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "total_amt_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "subtotal_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "subtotal_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "discount_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "discount_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "tax_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "tax_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "shipping_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "shipping_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "shipping_tax_amt": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "shipping_tax_amt_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "total_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "total_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "subtotal_tax_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "subtotal_tax_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
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
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "template_ddown_c": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "quote_date": {
        type: 'Sequelize.DATE'
      },
      
      "invoice_date": {
        type: 'Sequelize.DATE'
      },
      
      "due_date": {
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
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "billing_account_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "billing_contact_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_invoices');
  }
};
