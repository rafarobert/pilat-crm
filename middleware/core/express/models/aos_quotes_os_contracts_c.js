/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:26 GMT-0400 (Bolivia Time)
 * Time: 14:0:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:26 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosQuotesOsContractsC = sequelize.define('aosQuotesOsContractsC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aos_quotese81e_quotes_ida: DataTypes.STRING,
      
      aos_quotes4dc0ntracts_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_quotes_os_contracts_c',
      timestamps: false,
    });
    aosQuotesOsContractsC.associate = (models) => {
      
    };
    return aosQuotesOsContractsC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosQuotesOsContractsC", new Schema({
    
    
    
    aos_quotese81e_quotes_ida: {type: String},
    
    aos_quotes4dc0ntracts_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aos_quotes_os_contracts_c');
  //</es-section>
