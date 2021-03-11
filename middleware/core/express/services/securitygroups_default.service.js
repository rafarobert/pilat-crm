/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Time: 14:57:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:43 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:43
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

class SecuritygroupDefaultService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSecuritygroupsDefault(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.securitygroupsDefault.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.securitygroupsDefault.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSecuritygroupsDefault(select = []) {
		try {
			if(sql) {
				return await models.sequelize.securitygroupsDefault.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.securitygroupsDefault.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSecuritygroupDefault(newSecuritygroupDefault) {
		try {
			let objSecuritygroupDefault;
			if(util.PrimaryKeyTypeIsString(models.sequelize.securitygroupsDefault.primaryKeys.id.type.toString())) {
			    newSecuritygroupDefault.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.create(newSecuritygroupDefault);
			} else {
				objSecuritygroupDefault = new models.mongoose.securitygroupsDefault(newSecuritygroupDefault);
				await objSecuritygroupDefault.save();
			}
			return objSecuritygroupDefault;
		} catch (error) {
			throw error;
		}
	}

	static async updateSecuritygroupDefault(id, updateSecuritygroupDefault) {
		try {
			let objSecuritygroupDefault;
			if(sql) {
				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { id: util.Char(id) }});
				if (objSecuritygroupDefault) {
					await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { id: util.Char(id) } });
					objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSecuritygroupDefault._id;
				objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({id:id}, {$set: updateSecuritygroupDefault}, {new: true});
			}
			return objSecuritygroupDefault;
		} catch (error) {
			throw error;
		}
	}

	static async getASecuritygroupDefault(id, query) {
		try {
			let objSecuritygroupDefault;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.find({id:util.Char(id)}).select(query.select);
			}
			return objSecuritygroupDefault;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSecuritygroupDefault(id) {
		try {
			let objSecuritygroupDefault;
			if(sql) {
				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({ where: { id: util.Char(id) } });
				if (objSecuritygroupDefault) {
					await models.sequelize.securitygroupsDefault.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.deleteOne({id:util.Char(id)});
			}
			return objSecuritygroupDefault;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOne({id: id});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOne({deleted: deleted});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModule(module, query = {}) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module: module },
    			});
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOne({module: module});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOne({date_modified: dateModified});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecuritygroupId(securitygroupId, query = {}) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { securitygroup_id: securitygroupId },
    			});
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOne({securitygroup_id: securitygroupId});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSecuritygroupDefaultById(id, updateSecuritygroupDefault) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { id: id }});
    			if (objSecuritygroupDefault) {
    				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { id: id } });
    			}
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({id: id}, {$set: updateSecuritygroupDefault}, {new: true});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupDefaultByDeleted(deleted, updateSecuritygroupDefault) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { deleted: deleted }});
    			if (objSecuritygroupDefault) {
    				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { deleted: deleted } });
    			}
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({deleted: deleted}, {$set: updateSecuritygroupDefault}, {new: true});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupDefaultByModule(module, updateSecuritygroupDefault) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { module: module }});
    			if (objSecuritygroupDefault) {
    				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { module: module } });
    			}
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({module: module}, {$set: updateSecuritygroupDefault}, {new: true});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupDefaultByDateModified(dateModified, updateSecuritygroupDefault) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { date_modified: dateModified }});
    			if (objSecuritygroupDefault) {
    				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({date_modified: dateModified}, {$set: updateSecuritygroupDefault}, {new: true});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSecuritygroupDefaultBySecuritygroupId(securitygroupId, updateSecuritygroupDefault) {
    	try {
    		let objSecuritygroupDefault;
    		if(sql) {
    			objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.findOne({where: { securitygroup_id: securitygroupId }});
    			if (objSecuritygroupDefault) {
    				objSecuritygroupDefault = await models.sequelize.securitygroupsDefault.update(updateSecuritygroupDefault, { where: { securitygroup_id: securitygroupId } });
    			}
    		} else {
    			objSecuritygroupDefault = await models.mongoose.securitygroupsDefault.findOneAndUpdate({securitygroup_id: securitygroupId}, {$set: updateSecuritygroupDefault}, {new: true});
    		}
    		return objSecuritygroupDefault;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SecuritygroupDefaultService;
//</es-section>
