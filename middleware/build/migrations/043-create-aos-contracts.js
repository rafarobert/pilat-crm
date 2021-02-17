'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_contracts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      "total_contract_value": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 5
      },
      
      "total_contract_value": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "total_contract_value_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
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
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "contract_account_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "opportunity_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "contact_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "call_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_contracts');
  }
};
