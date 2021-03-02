/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:13 GMT-0400 (Bolivia Time)
 * Time: 14:0:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:13
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aorScheduledReports = sequelize.define('aorScheduledReports', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      schedule: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      email_recipients: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      last_run: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aor_report_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aor_scheduled_reports',
      timestamps: false,
    });
    aorScheduledReports.associate = (models) => {
      
    };
    return aorScheduledReports;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aorScheduledReports", new Schema({
    
    
    
    name: {type: String},
    
    schedule: {type: String},
    
    status: {type: String},
    
    
    description: {type: String},
    
    email_recipients: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    last_run: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aor_report_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aor_scheduled_reports');
  //</es-section>
