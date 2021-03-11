/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Time: 14:57:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:55
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const usersFeeds = sequelize.define('usersFeeds', {
      
      
      
      rank: DataTypes.INTEGER,
      
      
      
      user_id: DataTypes.STRING,
      
      feed_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'users_feeds',
      timestamps: false,
    });
    usersFeeds.associate = (models) => {
      
    };
    return usersFeeds;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("usersFeeds", new Schema({
    
    rank: {type: Number},
    
    
    
    user_id: {type: String},
    
    feed_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'users_feeds');
  //</es-section>
