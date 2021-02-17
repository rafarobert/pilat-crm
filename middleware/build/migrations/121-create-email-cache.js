'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_cache', {


      
      
      
      "recent": {
        type: 'Sequelize.TINYINT'
      },
      
      "flagged": {
        type: 'Sequelize.TINYINT'
      },
      
      "answered": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "seen": {
        type: 'Sequelize.TINYINT'
      },
      
      "draft": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "mailsize": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "mailsize": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      "imap_uid": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      "msgno": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      
      
      
      "mbox": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mbox": {
        type: 'Sequelize.STRING',
        length: 60
      },
      
      "subject": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "fromaddr": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "toaddr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "message_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "senddate": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "ie_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "ie_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_cache');
  }
};
