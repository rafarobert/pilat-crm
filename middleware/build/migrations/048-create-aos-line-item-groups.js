'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_line_item_groups', {


      
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
      
      "parent_type": {
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
      
      "parent_id": {
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
    return queryInterface.dropTable('aos_line_item_groups');
  }
};
