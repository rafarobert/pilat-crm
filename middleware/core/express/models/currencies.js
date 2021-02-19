/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:51 GMT-0400 (Bolivia Time)
 * Time: 18:36:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:51 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:51
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const currencies = sequelize.define('currencies', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      symbol: DataTypes.STRING,
      
      iso4217: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
      conversion_rate: DataTypes.DOUBLE,
      
    }, {
      tableName:'currencies',
      timestamps: false,
    });
    currencies.associate = (models) => {
      
    };
    return currencies;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("currencies", new Schema({
    
    
    
    name: {type: String},
    
    symbol: {type: String},
    
    iso4217: {type: String},
    
    status: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
    conversion_rate: {type: mongoose.Types.Decimal128},
    
  }),'currencies');
  //</es-section>
