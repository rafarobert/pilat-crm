/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Time: 14:56:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:50
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../utils/Prototipes');
const helpers = require('../../../utils/helpers');
const bcrypt = require("bcrypt");
const models = require('../index');
const Util = require('../../../utils/Utils');
const util = new Util();

import configJson from '../../../config/config';
const sql = configJson.sql;

const { Op } = require("sequelize");

//<es-section>

//</es-section>

class EmailTemplateCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailTemplatesCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailTemplatesCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.emailTemplatesCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailTemplatesCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailTemplatesCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailTemplatesCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailTemplateCstm(newEmailTemplateCstm) {
		try {
			let objEmailTemplateCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailTemplatesCstm.primaryKeys.id_c.type.toString())) {
			    newEmailTemplateCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.create(newEmailTemplateCstm);
			} else {
				objEmailTemplateCstm = new models.mongoose.emailTemplatesCstm(newEmailTemplateCstm);
				await objEmailTemplateCstm.save();
			}
			return objEmailTemplateCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailTemplateCstm(id_c, updateEmailTemplateCstm) {
		try {
			let objEmailTemplateCstm;
			if(sql) {
				objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objEmailTemplateCstm) {
					await models.sequelize.emailTemplatesCstm.update(updateEmailTemplateCstm, { where: { id_c: util.Char(id_c) } });
					objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateEmailTemplateCstm._id;
				objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.findOneAndUpdate({id_c:id_c}, {$set: updateEmailTemplateCstm}, {new: true});
			}
			return objEmailTemplateCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailTemplateCstm(id_c, query) {
		try {
			let objEmailTemplateCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objEmailTemplateCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailTemplateCstm(id_c) {
		try {
			let objEmailTemplateCstm;
			if(sql) {
				objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objEmailTemplateCstm) {
					await models.sequelize.emailTemplatesCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objEmailTemplateCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objEmailTemplateCstm;
    		if(sql) {
    			objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.findOne({id_c: idC});
    		}
    		return objEmailTemplateCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySmsModuleC(smsModuleC, query = {}) {
    	try {
    		let objEmailTemplateCstm;
    		if(sql) {
    			objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sms_module_c: smsModuleC },
    			});
    		} else {
    			objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.findOne({sms_module_c: smsModuleC});
    		}
    		return objEmailTemplateCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailTemplateCstmByIdC(idC, updateEmailTemplateCstm) {
    	try {
    		let objEmailTemplateCstm;
    		if(sql) {
    			objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({where: { id_c: idC }});
    			if (objEmailTemplateCstm) {
    				objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.update(updateEmailTemplateCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.findOneAndUpdate({id_c: idC}, {$set: updateEmailTemplateCstm}, {new: true});
    		}
    		return objEmailTemplateCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailTemplateCstmBySmsModuleC(smsModuleC, updateEmailTemplateCstm) {
    	try {
    		let objEmailTemplateCstm;
    		if(sql) {
    			objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.findOne({where: { sms_module_c: smsModuleC }});
    			if (objEmailTemplateCstm) {
    				objEmailTemplateCstm = await models.sequelize.emailTemplatesCstm.update(updateEmailTemplateCstm, { where: { sms_module_c: smsModuleC } });
    			}
    		} else {
    			objEmailTemplateCstm = await models.mongoose.emailTemplatesCstm.findOneAndUpdate({sms_module_c: smsModuleC}, {$set: updateEmailTemplateCstm}, {new: true});
    		}
    		return objEmailTemplateCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailTemplateCstmService;
//</es-section>
