/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Time: 14:56:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:48 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:48
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailMarketing = sequelize.define('emailMarketing', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      from_name: DataTypes.STRING,
      
      from_addr: DataTypes.STRING,
      
      reply_to_name: DataTypes.STRING,
      
      reply_to_addr: DataTypes.STRING,
      
      inbound_email_id: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_start: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      template_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      outbound_email_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      all_prospect_lists: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_marketing',
      timestamps: false,
    });
    emailMarketing.associate = (models) => {
      
    };
    return emailMarketing;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailMarketing", new Schema({
    
    
    
    name: {type: String},
    
    from_name: {type: String},
    
    from_addr: {type: String},
    
    reply_to_name: {type: String},
    
    reply_to_addr: {type: String},
    
    inbound_email_id: {type: String},
    
    status: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_start: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    template_id: {type: String},
    
    campaign_id: {type: String},
    
    outbound_email_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    all_prospect_lists: {type: Number},
    
    
  }),'email_marketing');
  //</es-section>
