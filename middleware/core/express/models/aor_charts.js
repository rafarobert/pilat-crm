/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:11 GMT-0400 (Bolivia Time)
 * Time: 14:0:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:11 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:11
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aorCharts = sequelize.define('aorCharts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      x_field: DataTypes.INTEGER,
      
      y_field: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aor_report_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aor_charts',
      timestamps: false,
    });
    aorCharts.associate = (models) => {
      
    };
    return aorCharts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aorCharts", new Schema({
    
    x_field: {type: Number},
    
    y_field: {type: Number},
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aor_report_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aor_charts');
  //</es-section>
