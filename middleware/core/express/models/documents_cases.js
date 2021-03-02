/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Time: 14:0:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:42 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:42
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentsCases = sequelize.define('documentsCases', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      document_id: DataTypes.STRING,
      
      case_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents_cases',
      timestamps: false,
    });
    documentsCases.associate = (models) => {
      
    };
    return documentsCases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentsCases", new Schema({
    
    
    
    document_id: {type: String},
    
    case_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'documents_cases');
  //</es-section>
