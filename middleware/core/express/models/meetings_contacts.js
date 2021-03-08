/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:32 GMT-0400 (Bolivia Time)
 * Time: 15:36:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:32 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:32
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const meetingsContacts = sequelize.define('meetingsContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      meeting_id: DataTypes.STRING,
      
      contact_id: DataTypes.STRING,
      
      required: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'meetings_contacts',
      timestamps: false,
    });
    meetingsContacts.associate = (models) => {
      
    };
    return meetingsContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("meetingsContacts", new Schema({
    
    
    
    meeting_id: {type: String},
    
    contact_id: {type: String},
    
    required: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'meetings_contacts');
  //</es-section>
