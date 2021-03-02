/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Time: 14:0:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:59
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const inboundEmailAutoreply = sequelize.define('inboundEmailAutoreply', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      autoreplied_to: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      ie_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'inbound_email_autoreply',
      timestamps: false,
    });
    inboundEmailAutoreply.associate = (models) => {
      
    };
    return inboundEmailAutoreply;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("inboundEmailAutoreply", new Schema({
    
    
    
    autoreplied_to: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    ie_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'inbound_email_autoreply');
  //</es-section>
