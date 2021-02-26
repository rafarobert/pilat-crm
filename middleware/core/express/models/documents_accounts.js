/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:44 GMT-0400 (Bolivia Time)
 * Time: 0:22:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:44 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:44
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentsAccounts = sequelize.define('documentsAccounts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      document_id: DataTypes.STRING,
      
      account_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents_accounts',
      timestamps: false,
    });
    documentsAccounts.associate = (models) => {
      
    };
    return documentsAccounts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentsAccounts", new Schema({
    
    
    
    document_id: {type: String},
    
    account_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'documents_accounts');
  //</es-section>
