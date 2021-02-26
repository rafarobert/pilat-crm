/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:41 GMT-0400 (Bolivia Time)
 * Time: 0:22:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:41 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:41
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const contactsUsers = sequelize.define('contactsUsers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      user_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'contacts_users',
      timestamps: false,
    });
    contactsUsers.associate = (models) => {
      
    };
    return contactsUsers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("contactsUsers", new Schema({
    
    
    
    contact_id: {type: String},
    
    user_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'contacts_users');
  //</es-section>
