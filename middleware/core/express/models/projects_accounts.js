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
    const projectsAccounts = sequelize.define('projectsAccounts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      account_id: DataTypes.STRING,
      
      project_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'projects_accounts',
      timestamps: false,
    });
    projectsAccounts.associate = (models) => {
      
    };
    return projectsAccounts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectsAccounts", new Schema({
    
    
    
    account_id: {type: String},
    
    project_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'projects_accounts');
  //</es-section>
