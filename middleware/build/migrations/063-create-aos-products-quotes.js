'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_products_quotes', {


      
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
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "product_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "group_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_products_quotes');
  }
};
