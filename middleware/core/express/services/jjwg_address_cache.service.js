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

class JjwgAddresCacheService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgAddressCache(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgAddressCache.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgAddressCache.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgAddressCache(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgAddressCache.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgAddressCache.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgAddresCache(newJjwgAddresCache) {
		try {
			let objJjwgAddresCache;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgAddressCache.primaryKeys.id.type.toString())) {
			    newJjwgAddresCache.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.create(newJjwgAddresCache);
			} else {
				objJjwgAddresCache = new models.mongoose.jjwgAddressCache(newJjwgAddresCache);
				await objJjwgAddresCache.save();
			}
			return objJjwgAddresCache;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgAddresCache(id, updateJjwgAddresCache) {
		try {
			let objJjwgAddresCache;
			if(sql) {
				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { id: util.Char(id) }});
				if (objJjwgAddresCache) {
					await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { id: util.Char(id) } });
					objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgAddresCache._id;
				objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({id:id}, {$set: updateJjwgAddresCache}, {new: true});
			}
			return objJjwgAddresCache;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgAddresCache(id, query) {
		try {
			let objJjwgAddresCache;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgAddresCache = await models.mongoose.jjwgAddressCache.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgAddresCache;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgAddresCache(id) {
		try {
			let objJjwgAddresCache;
			if(sql) {
				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({ where: { id: util.Char(id) } });
				if (objJjwgAddresCache) {
					await models.sequelize.jjwgAddressCache.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgAddresCache = await models.mongoose.jjwgAddressCache.deleteOne({id:util.Char(id)});
			}
			return objJjwgAddresCache;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({id: id});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({deleted: deleted});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLat(lat, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lat: lat },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({lat: lat});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLng(lng, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lng: lng },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({lng: lng});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({name: name});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({description: description});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({date_entered: dateEntered});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({date_modified: dateModified});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({modified_user_id: modifiedUserId});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({created_by: createdBy});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOne({assigned_user_id: assignedUserId});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgAddresCacheById(id, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { id: id }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { id: id } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({id: id}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByDeleted(deleted, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { deleted: deleted }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByLat(lat, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { lat: lat }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { lat: lat } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({lat: lat}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByLng(lng, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { lng: lng }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { lng: lng } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({lng: lng}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByName(name, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { name: name }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { name: name } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({name: name}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByDescription(description, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { description: description }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { description: description } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({description: description}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByDateEntered(dateEntered, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { date_entered: dateEntered }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({date_entered: dateEntered}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByDateModified(dateModified, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { date_modified: dateModified }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByModifiedUserId(modifiedUserId, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByCreatedBy(createdBy, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { created_by: createdBy }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAddresCacheByAssignedUserId(assignedUserId, updateJjwgAddresCache) {
    	try {
    		let objJjwgAddresCache;
    		if(sql) {
    			objJjwgAddresCache = await models.sequelize.jjwgAddressCache.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objJjwgAddresCache) {
    				objJjwgAddresCache = await models.sequelize.jjwgAddressCache.update(updateJjwgAddresCache, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objJjwgAddresCache = await models.mongoose.jjwgAddressCache.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateJjwgAddresCache}, {new: true});
    		}
    		return objJjwgAddresCache;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgAddresCacheService;
//</es-section>
