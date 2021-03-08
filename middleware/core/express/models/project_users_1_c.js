/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Time: 15:36:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:51
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectUsers1C = sequelize.define('projectUsers1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      project_users_1project_ida: DataTypes.STRING,
      
      project_users_1users_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'project_users_1_c',
      timestamps: false,
    });
    projectUsers1C.associate = (models) => {
      
    };
    return projectUsers1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectUsers1C", new Schema({
    
    
    
    project_users_1project_ida: {type: String},
    
    project_users_1users_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'project_users_1_c');
  //</es-section>
