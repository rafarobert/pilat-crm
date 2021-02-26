/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:42 GMT-0400 (Bolivia Time)
 * Time: 0:22:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:42 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:42
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const customFields = sequelize.define('customFields', {
      
      
      
      set_num: DataTypes.INTEGER,
      
      
      
      bean_id: DataTypes.STRING,
      
      field0: DataTypes.STRING,
      
      field1: DataTypes.STRING,
      
      field2: DataTypes.STRING,
      
      field3: DataTypes.STRING,
      
      field4: DataTypes.STRING,
      
      field5: DataTypes.STRING,
      
      field6: DataTypes.STRING,
      
      field7: DataTypes.STRING,
      
      field8: DataTypes.STRING,
      
      field9: DataTypes.STRING,
      
      
      
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'custom_fields',
      timestamps: false,
    });
    customFields.associate = (models) => {
      
    };
    return customFields;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("customFields", new Schema({
    
    set_num: {type: Number},
    
    
    
    bean_id: {type: String},
    
    field0: {type: String},
    
    field1: {type: String},
    
    field2: {type: String},
    
    field3: {type: String},
    
    field4: {type: String},
    
    field5: {type: String},
    
    field6: {type: String},
    
    field7: {type: String},
    
    field8: {type: String},
    
    field9: {type: String},
    
    
    
    
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'custom_fields');
  //</es-section>
