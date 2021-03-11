/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Time: 14:56:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:41
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
