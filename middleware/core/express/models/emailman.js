/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:47 GMT-0400 (Bolivia Time)
 * Time: 0:22:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:47 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:47
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailman = sequelize.define('emailman', {
      
      id: { type: DataTypes.INTEGER, primaryKey: true },
      
      
      
      send_attempts: DataTypes.INTEGER,
      
      
      
      related_type: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      send_date_time: DataTypes.DATE,
      
      in_queue_date: DataTypes.DATE,
      
      
      
      user_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      marketing_id: DataTypes.CHAR,
      
      list_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      related_id: DataTypes.CHAR,
      
      
      
      
      in_queue: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      related_confirm_opt_in: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emailman',
      timestamps: false,
    });
    emailman.associate = (models) => {
      
    };
    return emailman;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailman", new Schema({
    
    send_attempts: {type: Number},
    
    
    
    related_type: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    send_date_time: {type: Date},
    
    in_queue_date: {type: Date},
    
    
    
    user_id: {type: String},
    
    campaign_id: {type: String},
    
    marketing_id: {type: String},
    
    list_id: {type: String},
    
    modified_user_id: {type: String},
    
    related_id: {type: String},
    
    
    
    
    in_queue: {type: Number},
    
    deleted: {type: Number},
    
    related_confirm_opt_in: {type: Number},
    
    
  }),'emailman');
  //</es-section>
