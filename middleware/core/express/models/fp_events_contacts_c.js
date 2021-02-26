/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:59 GMT-0400 (Bolivia Time)
 * Time: 0:22:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:59 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:59
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventsContactsC = sequelize.define('fpEventsContactsC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      email_responded: DataTypes.INTEGER,
      
      
      
      fp_events_contactsfp_events_ida: DataTypes.STRING,
      
      fp_events_contactscontacts_idb: DataTypes.STRING,
      
      invite_status: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events_contacts_c',
      timestamps: false,
    });
    fpEventsContactsC.associate = (models) => {
      
    };
    return fpEventsContactsC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventsContactsC", new Schema({
    
    email_responded: {type: Number},
    
    
    
    fp_events_contactsfp_events_ida: {type: String},
    
    fp_events_contactscontacts_idb: {type: String},
    
    invite_status: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_events_contacts_c');
  //</es-section>
