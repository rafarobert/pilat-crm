/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Time: 4:42:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:34 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:34
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

class CallCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCallsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.callsCstm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.callsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCallsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.callsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.callsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCallCstm(newCallCstm) {
		try {
			let objCallCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.callsCstm.primaryKeys.id_c.type.toString())) {
			    newCallCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCallCstm = await models.sequelize.callsCstm.create(newCallCstm);
			} else {
				objCallCstm = new models.mongoose.callsCstm(newCallCstm);
				await objCallCstm.save();
			}
			return objCallCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateCallCstm(id_c, updateCallCstm) {
		try {
			let objCallCstm;
			if(sql) {
				objCallCstm = await models.sequelize.callsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objCallCstm) {
					await models.sequelize.callsCstm.update(updateCallCstm, { where: { id_c: util.Char(id_c) } });
					objCallCstm = await models.sequelize.callsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateCallCstm._id;
				objCallCstm = await models.mongoose.callsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateCallCstm}, {new: true});
			}
			return objCallCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getACallCstm(id_c, query) {
		try {
			let objCallCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCallCstm = await models.sequelize.callsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCallCstm = await models.mongoose.callsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objCallCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCallCstm(id_c) {
		try {
			let objCallCstm;
			if(sql) {
				objCallCstm = await models.sequelize.callsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objCallCstm) {
					await models.sequelize.callsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objCallCstm = await models.mongoose.callsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objCallCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOne({id_c: idC});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLlamadaRealizadaC(llamadaRealizadaC, query = {}) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { llamada_realizada_c: llamadaRealizadaC },
    			});
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOne({llamada_realizada_c: llamadaRealizadaC});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMessageIdC(messageIdC, query = {}) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { message_id_c: messageIdC },
    			});
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOne({message_id_c: messageIdC});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLlamadaFechaC(llamadaFechaC, query = {}) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { llamada_fecha_c: llamadaFechaC },
    			});
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOne({llamada_fecha_c: llamadaFechaC});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCallCstmByIdC(idC, updateCallCstm) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({where: { id_c: idC }});
    			if (objCallCstm) {
    				objCallCstm = await models.sequelize.callsCstm.update(updateCallCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOneAndUpdate({id_c: idC}, {$set: updateCallCstm}, {new: true});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallCstmByLlamadaRealizadaC(llamadaRealizadaC, updateCallCstm) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({where: { llamada_realizada_c: llamadaRealizadaC }});
    			if (objCallCstm) {
    				objCallCstm = await models.sequelize.callsCstm.update(updateCallCstm, { where: { llamada_realizada_c: llamadaRealizadaC } });
    			}
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOneAndUpdate({llamada_realizada_c: llamadaRealizadaC}, {$set: updateCallCstm}, {new: true});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallCstmByMessageIdC(messageIdC, updateCallCstm) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({where: { message_id_c: messageIdC }});
    			if (objCallCstm) {
    				objCallCstm = await models.sequelize.callsCstm.update(updateCallCstm, { where: { message_id_c: messageIdC } });
    			}
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOneAndUpdate({message_id_c: messageIdC}, {$set: updateCallCstm}, {new: true});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCallCstmByLlamadaFechaC(llamadaFechaC, updateCallCstm) {
    	try {
    		let objCallCstm;
    		if(sql) {
    			objCallCstm = await models.sequelize.callsCstm.findOne({where: { llamada_fecha_c: llamadaFechaC }});
    			if (objCallCstm) {
    				objCallCstm = await models.sequelize.callsCstm.update(updateCallCstm, { where: { llamada_fecha_c: llamadaFechaC } });
    			}
    		} else {
    			objCallCstm = await models.mongoose.callsCstm.findOneAndUpdate({llamada_fecha_c: llamadaFechaC}, {$set: updateCallCstm}, {new: true});
    		}
    		return objCallCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CallCstmService;
//</es-section>
