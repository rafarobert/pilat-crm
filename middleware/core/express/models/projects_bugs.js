/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:32 GMT-0400 (Bolivia Time)
 * Time: 0:23:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:32 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:32
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectsBugs = sequelize.define('projectsBugs', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      bug_id: DataTypes.STRING,
      
      project_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'projects_bugs',
      timestamps: false,
    });
    projectsBugs.associate = (models) => {
      
    };
    return projectsBugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectsBugs", new Schema({
    
    
    
    bug_id: {type: String},
    
    project_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'projects_bugs');
  //</es-section>
