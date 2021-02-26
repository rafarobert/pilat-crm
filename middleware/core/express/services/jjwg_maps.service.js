/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:09 GMT-0400 (Bolivia Time)
 * Time: 0:23:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:09 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:9
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

class JjwgMapService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMaps(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMaps.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMaps.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMaps(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMaps.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMaps.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMap(newJjwgMap) {
		try {
			let objJjwgMap;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMaps.primaryKeys.id.type.toString())) {
			    newJjwgMap.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMap = await models.sequelize.jjwgMaps.create(newJjwgMap);
			} else {
				objJjwgMap = new models.mongoose.jjwgMaps(newJjwgMap);
				await objJjwgMap.save();
			}
			return objJjwgMap;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMap(id, updateJjwgMap) {
		try {
			let objJjwgMap;
			if(sql) {
				objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { id: util.Char(id) }});
				if (objJjwgMap) {
					await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { id: util.Char(id) } });
					objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgMap._id;
				objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({id:id}, {$set: updateJjwgMap}, {new: true});
			}
			return objJjwgMap;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMap(id, query) {
		try {
			let objJjwgMap;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMap = await models.sequelize.jjwgMaps.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMap = await models.mongoose.jjwgMaps.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgMap;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMap(id) {
		try {
			let objJjwgMap;
			if(sql) {
				objJjwgMap = await models.sequelize.jjwgMaps.findOne({ where: { id: util.Char(id) } });
				if (objJjwgMap) {
					await models.sequelize.jjwgMaps.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgMap = await models.mongoose.jjwgMaps.deleteOne({id:util.Char(id)});
			}
			return objJjwgMap;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({id: id});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({deleted: deleted});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDistance(distance, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { distance: distance },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({distance: distance});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({name: name});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUnitType(unitType, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { unit_type: unitType },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({unit_type: unitType});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModuleType(moduleType, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module_type: moduleType },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({module_type: moduleType});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({parent_type: parentType});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({description: description});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({date_entered: dateEntered});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({date_modified: dateModified});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({modified_user_id: modifiedUserId});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({created_by: createdBy});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({assigned_user_id: assignedUserId});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOne({parent_id: parentId});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMapById(id, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { id: id }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { id: id } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({id: id}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByDeleted(deleted, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { deleted: deleted }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByDistance(distance, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { distance: distance }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { distance: distance } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({distance: distance}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByName(name, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { name: name }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { name: name } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({name: name}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByUnitType(unitType, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { unit_type: unitType }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { unit_type: unitType } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({unit_type: unitType}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByModuleType(moduleType, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { module_type: moduleType }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { module_type: moduleType } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({module_type: moduleType}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByParentType(parentType, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { parent_type: parentType }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { parent_type: parentType } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({parent_type: parentType}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByDescription(description, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { description: description }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { description: description } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({description: description}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByDateEntered(dateEntered, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { date_entered: dateEntered }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({date_entered: dateEntered}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByDateModified(dateModified, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { date_modified: dateModified }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByModifiedUserId(modifiedUserId, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByCreatedBy(createdBy, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { created_by: createdBy }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByAssignedUserId(assignedUserId, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapByParentId(parentId, updateJjwgMap) {
    	try {
    		let objJjwgMap;
    		if(sql) {
    			objJjwgMap = await models.sequelize.jjwgMaps.findOne({where: { parent_id: parentId }});
    			if (objJjwgMap) {
    				objJjwgMap = await models.sequelize.jjwgMaps.update(updateJjwgMap, { where: { parent_id: parentId } });
    			}
    		} else {
    			objJjwgMap = await models.mongoose.jjwgMaps.findOneAndUpdate({parent_id: parentId}, {$set: updateJjwgMap}, {new: true});
    		}
    		return objJjwgMap;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMapService;
//</es-section>
