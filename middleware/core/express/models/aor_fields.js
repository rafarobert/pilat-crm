/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:15 GMT-0400 (Bolivia Time)
 * Time: 15:35:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:15 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:15
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aorFields = sequelize.define('aorFields', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      field_order: DataTypes.INTEGER,
      
      group_display: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      field: DataTypes.STRING,
      
      label: DataTypes.STRING,
      
      field_function: DataTypes.STRING,
      
      sort_by: DataTypes.STRING,
      
      format: DataTypes.STRING,
      
      total: DataTypes.STRING,
      
      sort_order: DataTypes.STRING,
      
      group_order: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      module_path: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aor_report_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      display: DataTypes.TINYINT,
      
      link: DataTypes.TINYINT,
      
      group_by: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aor_fields',
      timestamps: false,
    });
    aorFields.associate = (models) => {
      
    };
    return aorFields;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aorFields", new Schema({
    
    field_order: {type: Number},
    
    group_display: {type: Number},
    
    
    
    name: {type: String},
    
    field: {type: String},
    
    label: {type: String},
    
    field_function: {type: String},
    
    sort_by: {type: String},
    
    format: {type: String},
    
    total: {type: String},
    
    sort_order: {type: String},
    
    group_order: {type: String},
    
    
    description: {type: String},
    
    module_path: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aor_report_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    display: {type: Number},
    
    link: {type: Number},
    
    group_by: {type: Number},
    
    
  }),'aor_fields');
  //</es-section>
