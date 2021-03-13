/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:54 GMT-0400 (Bolivia Time)
 * Time: 14:57:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:54 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:54
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

class UserCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUsersCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.usersCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.usersCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUsersCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.usersCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.usersCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUserCstm(newUserCstm) {
		try {
			let objUserCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.usersCstm.primaryKeys.id_c.type.toString())) {
			    newUserCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUserCstm = await models.sequelize.usersCstm.create(newUserCstm);
			} else {
				objUserCstm = new models.mongoose.usersCstm(newUserCstm);
				await objUserCstm.save();
			}
			return objUserCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserCstm(id_c, updateUserCstm) {
		try {
			let objUserCstm;
			if(sql) {
				objUserCstm = await models.sequelize.usersCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objUserCstm) {
					await models.sequelize.usersCstm.update(updateUserCstm, { where: { id_c: util.Char(id_c) } });
					objUserCstm = await models.sequelize.usersCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateUserCstm._id;
				objUserCstm = await models.mongoose.usersCstm.findOneAndUpdate({id_c:id_c}, {$set: updateUserCstm}, {new: true});
			}
			return objUserCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAUserCstm(id_c, query) {
		try {
			let objUserCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUserCstm = await models.sequelize.usersCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUserCstm = await models.mongoose.usersCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objUserCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserCstm(id_c) {
		try {
			let objUserCstm;
			if(sql) {
				objUserCstm = await models.sequelize.usersCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objUserCstm) {
					await models.sequelize.usersCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objUserCstm = await models.mongoose.usersCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objUserCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOne({id_c: idC});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCodigoAgendaC(codigoAgendaC, query = {}) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { codigo_agenda_c: codigoAgendaC },
    			});
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOne({codigo_agenda_c: codigoAgendaC});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumeroDocumentoC(numeroDocumentoC, query = {}) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { numero_documento_c: numeroDocumentoC },
    			});
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOne({numero_documento_c: numeroDocumentoC});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExtensionDocumentoC(extensionDocumentoC, query = {}) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { extension_documento_c: extensionDocumentoC },
    			});
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOne({extension_documento_c: extensionDocumentoC});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserCstmByIdC(idC, updateUserCstm) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({where: { id_c: idC }});
    			if (objUserCstm) {
    				objUserCstm = await models.sequelize.usersCstm.update(updateUserCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOneAndUpdate({id_c: idC}, {$set: updateUserCstm}, {new: true});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserCstmByCodigoAgendaC(codigoAgendaC, updateUserCstm) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({where: { codigo_agenda_c: codigoAgendaC }});
    			if (objUserCstm) {
    				objUserCstm = await models.sequelize.usersCstm.update(updateUserCstm, { where: { codigo_agenda_c: codigoAgendaC } });
    			}
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOneAndUpdate({codigo_agenda_c: codigoAgendaC}, {$set: updateUserCstm}, {new: true});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserCstmByNumeroDocumentoC(numeroDocumentoC, updateUserCstm) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({where: { numero_documento_c: numeroDocumentoC }});
    			if (objUserCstm) {
    				objUserCstm = await models.sequelize.usersCstm.update(updateUserCstm, { where: { numero_documento_c: numeroDocumentoC } });
    			}
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOneAndUpdate({numero_documento_c: numeroDocumentoC}, {$set: updateUserCstm}, {new: true});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserCstmByExtensionDocumentoC(extensionDocumentoC, updateUserCstm) {
    	try {
    		let objUserCstm;
    		if(sql) {
    			objUserCstm = await models.sequelize.usersCstm.findOne({where: { extension_documento_c: extensionDocumentoC }});
    			if (objUserCstm) {
    				objUserCstm = await models.sequelize.usersCstm.update(updateUserCstm, { where: { extension_documento_c: extensionDocumentoC } });
    			}
    		} else {
    			objUserCstm = await models.mongoose.usersCstm.findOneAndUpdate({extension_documento_c: extensionDocumentoC}, {$set: updateUserCstm}, {new: true});
    		}
    		return objUserCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserCstmService;
//</es-section>
