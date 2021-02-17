'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_products_quotes', {


      
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
      
      
      
      "product_qty": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 5
      },
      
      "product_qty": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 4
      },
      
      "product_cost_price": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_cost_price_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_list_price": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_list_price_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_discount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_discount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_discount_amount": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_discount_amount_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_unit_price": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_unit_price_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "vat_amt": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "vat_amt_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_total_price": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "product_total_price_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      
      
      
      "part_number": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "discount": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vat": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "parent_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "name": {
        type: 'Sequelize.TEXT',
      },
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "item_description": {
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
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "product_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "group_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_products_quotes');
  }
};
