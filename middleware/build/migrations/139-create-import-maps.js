'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('import_maps', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "has_header": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 254
      },
      
      "source": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "enclosure": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      "delimiter": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      "module": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "is_published": {
        type: 'Sequelize.STRING',
        length: 3
      },
      
      
      "content": {
        type: 'Sequelize.TEXT',
      },
      
      "default_values": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('import_maps');
  }
};
