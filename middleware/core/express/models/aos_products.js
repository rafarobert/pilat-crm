/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:16 GMT-0400 (Bolivia Time)
 * Time: 4:42:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:16 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:16
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosProducts = sequelize.define('aosProducts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      maincode: DataTypes.STRING,
      
      part_number: DataTypes.STRING,
      
      category: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      url: DataTypes.STRING,
      
      product_image: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      aos_product_category_id: DataTypes.CHAR,
      
      
      
      cost: DataTypes.DECIMAL,
      
      cost_usdollar: DataTypes.DECIMAL,
      
      price: DataTypes.DECIMAL,
      
      price_usdollar: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_products',
      timestamps: false,
    });
    aosProducts.associate = (models) => {
      
    };
    return aosProducts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosProducts", new Schema({
    
    
    
    name: {type: String},
    
    maincode: {type: String},
    
    part_number: {type: String},
    
    category: {type: String},
    
    type: {type: String},
    
    url: {type: String},
    
    product_image: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    currency_id: {type: String},
    
    contact_id: {type: String},
    
    aos_product_category_id: {type: String},
    
    
    
    cost: {type: mongoose.Types.Decimal128},
    
    cost_usdollar: {type: mongoose.Types.Decimal128},
    
    price: {type: mongoose.Types.Decimal128},
    
    price_usdollar: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'aos_products');
  //</es-section>
