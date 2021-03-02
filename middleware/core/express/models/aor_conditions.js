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
    const aorConditions = sequelize.define('aorConditions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      condition_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      logic_op: DataTypes.STRING,
      
      parenthesis: DataTypes.STRING,
      
      field: DataTypes.STRING,
      
      operator: DataTypes.STRING,
      
      value_type: DataTypes.STRING,
      
      value: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      module_path: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aor_report_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      parameter: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aor_conditions',
      timestamps: false,
    });
    aorConditions.associate = (models) => {
      
    };
    return aorConditions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aorConditions", new Schema({
    
    condition_order: {type: Number},
    
    
    
    name: {type: String},
    
    logic_op: {type: String},
    
    parenthesis: {type: String},
    
    field: {type: String},
    
    operator: {type: String},
    
    value_type: {type: String},
    
    value: {type: String},
    
    
    description: {type: String},
    
    module_path: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aor_report_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    parameter: {type: Number},
    
    
  }),'aor_conditions');
  //</es-section>
