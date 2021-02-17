'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_feeds', {


      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "rank": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "feed_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_feeds');
  }
};
