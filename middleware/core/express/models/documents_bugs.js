/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:55 GMT-0400 (Bolivia Time)
 * Time: 18:36:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:55
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentsBugs = sequelize.define('documentsBugs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      document_id: DataTypes.STRING,
      
      bug_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents_bugs',
      timestamps: false,
    });
    documentsBugs.associate = (models) => {
      
    };
    return documentsBugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentsBugs", new Schema({
    
    
    
    document_id: {type: String},
    
    bug_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'documents_bugs');
  //</es-section>
