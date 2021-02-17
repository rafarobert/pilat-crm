/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:51 GMT-0400 (Bolivia Time)
 * Time: 4:43:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:51 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:51
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectsCases = sequelize.define('projectsCases', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      case_id: DataTypes.STRING,
      
      project_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'projects_cases',
      timestamps: false,
    });
    projectsCases.associate = (models) => {
      
    };
    return projectsCases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectsCases", new Schema({
    
    
    
    case_id: {type: String},
    
    project_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'projects_cases');
  //</es-section>