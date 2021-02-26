/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:07 GMT-0400 (Bolivia Time)
 * Time: 0:23:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:07 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:7
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const inboundEmailCacheTs = sequelize.define('inboundEmailCacheTs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      ie_timestamp: DataTypes.INTEGER,
      
      
      
      
      
      
      
      
      
      
      
      
    }, {
      tableName:'inbound_email_cache_ts',
      timestamps: false,
    });
    inboundEmailCacheTs.associate = (models) => {
      
    };
    return inboundEmailCacheTs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("inboundEmailCacheTs", new Schema({
    
    ie_timestamp: {type: Number},
    
    
    
    
    
    
    
    
    
    
    
    
    
  }),'inbound_email_cache_ts');
  //</es-section>
