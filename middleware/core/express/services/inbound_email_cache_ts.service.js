/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:04 GMT-0400 (Bolivia Time)
 * Time: 14:57:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:04 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:4
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

class InboundEmailCacheTService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllInboundEmailCacheTs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.inboundEmailCacheTs.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.inboundEmailCacheTs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllInboundEmailCacheTs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.inboundEmailCacheTs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.inboundEmailCacheTs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addInboundEmailCacheT(newInboundEmailCacheT) {
		try {
			let objInboundEmailCacheT;
			if(util.PrimaryKeyTypeIsString(models.sequelize.inboundEmailCacheTs.primaryKeys.id.type.toString())) {
			    newInboundEmailCacheT.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.create(newInboundEmailCacheT);
			} else {
				objInboundEmailCacheT = new models.mongoose.inboundEmailCacheTs(newInboundEmailCacheT);
				await objInboundEmailCacheT.save();
			}
			return objInboundEmailCacheT;
		} catch (error) {
			throw error;
		}
	}

	static async updateInboundEmailCacheT(id, updateInboundEmailCacheT) {
		try {
			let objInboundEmailCacheT;
			if(sql) {
				objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({where: { id: util.String(id) }});
				if (objInboundEmailCacheT) {
					await models.sequelize.inboundEmailCacheTs.update(updateInboundEmailCacheT, { where: { id: util.String(id) } });
					objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateInboundEmailCacheT._id;
				objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.findOneAndUpdate({id:id}, {$set: updateInboundEmailCacheT}, {new: true});
			}
			return objInboundEmailCacheT;
		} catch (error) {
			throw error;
		}
	}

	static async getAInboundEmailCacheT(id, query) {
		try {
			let objInboundEmailCacheT;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.find({id:util.String(id)}).select(query.select);
			}
			return objInboundEmailCacheT;
		} catch (error) {
			throw error;
		}
	}

	static async deleteInboundEmailCacheT(id) {
		try {
			let objInboundEmailCacheT;
			if(sql) {
				objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({ where: { id: util.String(id) } });
				if (objInboundEmailCacheT) {
					await models.sequelize.inboundEmailCacheTs.destroy({where: { id: util.String(id) }});
				}
			} else {
				objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.deleteOne({id:util.String(id)});
			}
			return objInboundEmailCacheT;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objInboundEmailCacheT;
    		if(sql) {
    			objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.findOne({id: id});
    		}
    		return objInboundEmailCacheT;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIeTimestamp(ieTimestamp, query = {}) {
    	try {
    		let objInboundEmailCacheT;
    		if(sql) {
    			objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ie_timestamp: ieTimestamp },
    			});
    		} else {
    			objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.findOne({ie_timestamp: ieTimestamp});
    		}
    		return objInboundEmailCacheT;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateInboundEmailCacheTById(id, updateInboundEmailCacheT) {
    	try {
    		let objInboundEmailCacheT;
    		if(sql) {
    			objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({where: { id: id }});
    			if (objInboundEmailCacheT) {
    				objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.update(updateInboundEmailCacheT, { where: { id: id } });
    			}
    		} else {
    			objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.findOneAndUpdate({id: id}, {$set: updateInboundEmailCacheT}, {new: true});
    		}
    		return objInboundEmailCacheT;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailCacheTByIeTimestamp(ieTimestamp, updateInboundEmailCacheT) {
    	try {
    		let objInboundEmailCacheT;
    		if(sql) {
    			objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.findOne({where: { ie_timestamp: ieTimestamp }});
    			if (objInboundEmailCacheT) {
    				objInboundEmailCacheT = await models.sequelize.inboundEmailCacheTs.update(updateInboundEmailCacheT, { where: { ie_timestamp: ieTimestamp } });
    			}
    		} else {
    			objInboundEmailCacheT = await models.mongoose.inboundEmailCacheTs.findOneAndUpdate({ie_timestamp: ieTimestamp}, {$set: updateInboundEmailCacheT}, {new: true});
    		}
    		return objInboundEmailCacheT;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = InboundEmailCacheTService;
//</es-section>
