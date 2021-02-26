/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:23 GMT-0400 (Bolivia Time)
 * Time: 0:22:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:23 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:23
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosQuotesAosInvoicesC = sequelize.define('aosQuotesAosInvoicesC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aos_quotes77d9_quotes_ida: DataTypes.STRING,
      
      aos_quotes6b83nvoices_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_quotes_aos_invoices_c',
      timestamps: false,
    });
    aosQuotesAosInvoicesC.associate = (models) => {
      
    };
    return aosQuotesAosInvoicesC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosQuotesAosInvoicesC", new Schema({
    
    
    
    aos_quotes77d9_quotes_ida: {type: String},
    
    aos_quotes6b83nvoices_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aos_quotes_aos_invoices_c');
  //</es-section>
