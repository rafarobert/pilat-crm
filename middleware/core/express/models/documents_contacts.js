/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Time: 0:22:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:45
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentsContacts = sequelize.define('documentsContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      document_id: DataTypes.STRING,
      
      contact_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents_contacts',
      timestamps: false,
    });
    documentsContacts.associate = (models) => {
      
    };
    return documentsContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentsContacts", new Schema({
    
    
    
    document_id: {type: String},
    
    contact_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'documents_contacts');
  //</es-section>
