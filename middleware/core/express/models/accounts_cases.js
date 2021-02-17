/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:43 GMT-0400 (Bolivia Time)
 * Time: 4:41:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:43 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:43
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const accountsCases = sequelize.define('accountsCases', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      account_id: DataTypes.STRING,
      
      case_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'accounts_cases',
      timestamps: false,
    });
    accountsCases.associate = (models) => {
      
    };
    return accountsCases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("accountsCases", new Schema({
    
    
    
    account_id: {type: String},
    
    case_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'accounts_cases');
  //</es-section>