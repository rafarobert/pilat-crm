/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Time: 15:35:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:1
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const addressBook = sequelize.define('addressBook', {
      
      
      
      
      
      bean: DataTypes.STRING,
      
      
      
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      bean_id: DataTypes.CHAR,
      
      
      
      
      
    }, {
      tableName:'address_book',
      timestamps: false,
    });
    addressBook.associate = (models) => {
      
    };
    return addressBook;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("addressBook", new Schema({
    
    
    
    bean: {type: String},
    
    
    
    
    
    
    
    assigned_user_id: {type: String},
    
    bean_id: {type: String},
    
    
    
    
    
  }),'address_book');
  //</es-section>
