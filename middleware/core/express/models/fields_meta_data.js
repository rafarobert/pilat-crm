/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:06 GMT-0400 (Bolivia Time)
 * Time: 4:43:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:06 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:6
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fieldsMetaData = sequelize.define('fieldsMetaData', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      len: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      vname: DataTypes.STRING,
      
      comments: DataTypes.STRING,
      
      help: DataTypes.STRING,
      
      custom_module: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      default_value: DataTypes.STRING,
      
      importable: DataTypes.STRING,
      
      ext1: DataTypes.STRING,
      
      ext2: DataTypes.STRING,
      
      ext3: DataTypes.STRING,
      
      
      ext4: DataTypes.TEXT,
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      required: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      audited: DataTypes.TINYINT,
      
      massupdate: DataTypes.TINYINT,
      
      reportable: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fields_meta_data',
      timestamps: false,
    });
    fieldsMetaData.associate = (models) => {
      
    };
    return fieldsMetaData;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fieldsMetaData", new Schema({
    
    len: {type: Number},
    
    
    
    name: {type: String},
    
    vname: {type: String},
    
    comments: {type: String},
    
    help: {type: String},
    
    custom_module: {type: String},
    
    type: {type: String},
    
    default_value: {type: String},
    
    importable: {type: String},
    
    ext1: {type: String},
    
    ext2: {type: String},
    
    ext3: {type: String},
    
    
    ext4: {type: String},
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    required: {type: Number},
    
    deleted: {type: Number},
    
    audited: {type: Number},
    
    massupdate: {type: Number},
    
    reportable: {type: Number},
    
    
  }),'fields_meta_data');
  //</es-section>
