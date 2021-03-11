/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Time: 14:56:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const casesBugs = sequelize.define('casesBugs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      case_id: DataTypes.STRING,
      
      bug_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'cases_bugs',
      timestamps: false,
    });
    casesBugs.associate = (models) => {
      
    };
    return casesBugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("casesBugs", new Schema({
    
    
    
    case_id: {type: String},
    
    bug_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'cases_bugs');
  //</es-section>
