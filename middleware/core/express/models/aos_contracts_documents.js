/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:00 GMT-0400 (Bolivia Time)
 * Time: 18:36:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:00 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:0
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosContractsDocuments = sequelize.define('aosContractsDocuments', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aos_contracts_id: DataTypes.STRING,
      
      documents_id: DataTypes.STRING,
      
      document_revision_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_contracts_documents',
      timestamps: false,
    });
    aosContractsDocuments.associate = (models) => {
      
    };
    return aosContractsDocuments;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosContractsDocuments", new Schema({
    
    
    
    aos_contracts_id: {type: String},
    
    documents_id: {type: String},
    
    document_revision_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aos_contracts_documents');
  //</es-section>
