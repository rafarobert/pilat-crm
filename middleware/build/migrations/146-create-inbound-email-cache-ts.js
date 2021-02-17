'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('inbound_email_cache_ts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      
      "ie_timestamp": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "ie_timestamp": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      
      
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inbound_email_cache_ts');
  }
};
