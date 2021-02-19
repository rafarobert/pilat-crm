/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:52 GMT-0400 (Bolivia Time)
 * Time: 4:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:52
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
