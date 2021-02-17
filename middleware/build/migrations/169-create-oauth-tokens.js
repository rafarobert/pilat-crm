'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth_tokens', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      "deleted": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.TINYINT'
      },
      
      
      "token_ts": {
        type: 'Sequelize.BIGINT'
      },
      
      
      
      
      
      
      
      
      "secret": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "tstate": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      "verify": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "callback_url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      
      
      "consumer": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('oauth_tokens');
  }
};
