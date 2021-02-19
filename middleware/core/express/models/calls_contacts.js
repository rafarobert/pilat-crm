/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:31 GMT-0400 (Bolivia Time)
 * Time: 18:36:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:31 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:31
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const callsContacts = sequelize.define('callsContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      call_id: DataTypes.STRING,
      
      contact_id: DataTypes.STRING,
      
      required: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'calls_contacts',
      timestamps: false,
    });
    callsContacts.associate = (models) => {
      
    };
    return callsContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("callsContacts", new Schema({
    
    
    
    call_id: {type: String},
    
    contact_id: {type: String},
    
    required: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'calls_contacts');
  //</es-section>
