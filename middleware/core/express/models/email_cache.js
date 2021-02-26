/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:51 GMT-0400 (Bolivia Time)
 * Time: 0:22:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:51 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:51
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailCache = sequelize.define('emailCache', {
      
      
      
      mailsize: DataTypes.INTEGER,
      
      imap_uid: DataTypes.INTEGER,
      
      msgno: DataTypes.INTEGER,
      
      
      
      mbox: DataTypes.STRING,
      
      subject: DataTypes.STRING,
      
      fromaddr: DataTypes.STRING,
      
      toaddr: DataTypes.STRING,
      
      message_id: DataTypes.STRING,
      
      
      
      
      senddate: DataTypes.DATE,
      
      
      
      ie_id: DataTypes.CHAR,
      
      
      
      
      recent: DataTypes.TINYINT,
      
      flagged: DataTypes.TINYINT,
      
      answered: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      seen: DataTypes.TINYINT,
      
      draft: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_cache',
      timestamps: false,
    });
    emailCache.associate = (models) => {
      
    };
    return emailCache;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailCache", new Schema({
    
    mailsize: {type: Number},
    
    imap_uid: {type: Number},
    
    msgno: {type: Number},
    
    
    
    mbox: {type: String},
    
    subject: {type: String},
    
    fromaddr: {type: String},
    
    toaddr: {type: String},
    
    message_id: {type: String},
    
    
    
    
    
    senddate: {type: Date},
    
    
    
    ie_id: {type: String},
    
    
    
    
    recent: {type: Number},
    
    flagged: {type: Number},
    
    answered: {type: Number},
    
    deleted: {type: Number},
    
    seen: {type: Number},
    
    draft: {type: Number},
    
    
  }),'email_cache');
  //</es-section>
