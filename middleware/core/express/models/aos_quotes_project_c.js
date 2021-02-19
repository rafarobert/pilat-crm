/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:21 GMT-0400 (Bolivia Time)
 * Time: 18:36:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:21 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:21
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosQuotesProjectC = sequelize.define('aosQuotesProjectC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aos_quotes1112_quotes_ida: DataTypes.STRING,
      
      aos_quotes7207project_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_quotes_project_c',
      timestamps: false,
    });
    aosQuotesProjectC.associate = (models) => {
      
    };
    return aosQuotesProjectC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosQuotesProjectC", new Schema({
    
    
    
    aos_quotes1112_quotes_ida: {type: String},
    
    aos_quotes7207project_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aos_quotes_project_c');
  //</es-section>
