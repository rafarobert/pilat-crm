/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:26 GMT-0400 (Bolivia Time)
 * Time: 14:57:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:26 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatMails = sequelize.define('pilatMails', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      
      mai_port: DataTypes.INTEGER,
      
      
      
      mai_description: DataTypes.STRING,
      
      mai_user_account: DataTypes.STRING,
      
      mai_user_password: DataTypes.STRING,
      
      mai_host: DataTypes.STRING,
      
      mai_protocol: DataTypes.STRING,
      
      mai_bus_id: DataTypes.STRING,
      
      mai_group: DataTypes.STRING,
      
      mai_subject: DataTypes.STRING,
      
      mai_to: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      
      mai_bcc: DataTypes.TEXT,
      
      mai_cc: DataTypes.TEXT,
      
      mai_text: DataTypes.TEXT,
      
      mai_html: DataTypes.TEXT,
      
      
      mai_par_status_id: DataTypes.STRING,
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_mails',
      timestamps: false,
    });
    pilatMails.associate = (models) => {
      
      models.pilatMails.belongsTo(models.pilatParams,{foreignKey:'mai_par_status_id', targetKey: '_id',  as:'pilatMailMaiParStatus'});
      models.pilatParams.hasMany(models.pilatMails,{foreignKey:'mai_par_status_id', sourceKey: '_id', as:'pilatMailMaiParStatus'});
      
    };
    return pilatMails;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatMails", new Schema({
    
    mai_port: {type: Number},
    
    
    id: {type: Number},
    
    
    mai_description: {type: String},
    
    mai_user_account: {type: String},
    
    mai_user_password: {type: String},
    
    mai_host: {type: String},
    
    mai_protocol: {type: String},
    
    mai_bus_id: {type: String},
    
    mai_group: {type: String},
    
    mai_subject: {type: String},
    
    mai_to: {type: String},
    
    updatedBy: {type: String},
    
    createdBy: {type: String},
    
    
    mai_bcc: {type: String},
    
    mai_cc: {type: String},
    
    mai_text: {type: String},
    
    mai_html: {type: String},
    
    
    
    mai_par_status_id: {type: mongoose.Types.ObjectId},
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_mails');
  //</es-section>
