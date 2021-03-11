/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Time: 14:56:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:5
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aorReports = sequelize.define('aorReports', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      graphs_per_row: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      report_module: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aor_reports',
      timestamps: false,
    });
    aorReports.associate = (models) => {
      
    };
    return aorReports;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aorReports", new Schema({
    
    graphs_per_row: {type: Number},
    
    
    
    name: {type: String},
    
    report_module: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aor_reports');
  //</es-section>
