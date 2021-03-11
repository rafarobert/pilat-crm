/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:24 GMT-0400 (Bolivia Time)
 * Time: 14:57:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:24
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatCrons = sequelize.define('pilatCrons', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      
      
      
      cro_description: DataTypes.STRING,
      
      cro_expression: DataTypes.STRING,
      
      cro_group: DataTypes.STRING,
      
      cro_mai_id: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      cro_status: DataTypes.TINYINT,
      
      
    }, {
      tableName:'pilat_crons',
      timestamps: false,
    });
    pilatCrons.associate = (models) => {
      
    };
    return pilatCrons;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatCrons", new Schema({
    
    
    id: {type: Number},
    
    
    cro_description: {type: String},
    
    cro_expression: {type: String},
    
    cro_group: {type: String},
    
    cro_mai_id: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    cro_status: {type: Number},
    
    
  }),'pilat_crons');
  //</es-section>
