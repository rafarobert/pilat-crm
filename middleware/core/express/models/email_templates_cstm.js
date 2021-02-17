/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:04 GMT-0400 (Bolivia Time)
 * Time: 4:43:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:04 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:4
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailTemplatesCstm = sequelize.define('emailTemplatesCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      sms_module_c: DataTypes.STRING,
      
      
      
      
      
      
      
      
      
      
    }, {
      tableName:'email_templates_cstm',
      timestamps: false,
    });
    emailTemplatesCstm.associate = (models) => {
      
    };
    return emailTemplatesCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailTemplatesCstm", new Schema({
    
    
    
    sms_module_c: {type: String},
    
    
    
    
    
    
    
    
    
    
    
  }),'email_templates_cstm');
  //</es-section>