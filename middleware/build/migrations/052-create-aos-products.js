'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_products', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      "cost": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 5
      },
      
      "cost": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "cost_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "price": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      "price_usdollar": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "maincode": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "part_number": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "category": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "product_image": {
        type: 'Sequelize.STRING',
        length: 255
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
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "contact_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "aos_product_category_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_products');
  }
};
