/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Time: 4:41:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:54 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:54
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

class AodIndexService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAodIndex(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aodIndex.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aodIndex.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAodIndex(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aodIndex.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aodIndex.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAodIndex(newAodIndex) {
		try {
			let objAodIndex;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aodIndex.primaryKeys.id.type.toString())) {
			    newAodIndex.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAodIndex = await models.sequelize.aodIndex.create(newAodIndex);
			} else {
				objAodIndex = new models.mongoose.aodIndex(newAodIndex);
				await objAodIndex.save();
			}
			return objAodIndex;
		} catch (error) {
			throw error;
		}
	}

	static async updateAodIndex(id, updateAodIndex) {
		try {
			let objAodIndex;
			if(sql) {
				objAodIndex = await models.sequelize.aodIndex.findOne({where: { id: util.Char(id) }});
				if (objAodIndex) {
					await models.sequelize.aodIndex.update(updateAodIndex, { where: { id: util.Char(id) } });
					objAodIndex = await models.sequelize.aodIndex.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAodIndex._id;
				objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({id:id}, {$set: updateAodIndex}, {new: true});
			}
			return objAodIndex;
		} catch (error) {
			throw error;
		}
	}

	static async getAAodIndex(id, query) {
		try {
			let objAodIndex;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAodIndex = await models.sequelize.aodIndex.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAodIndex = await models.mongoose.aodIndex.find({id:util.Char(id)}).select(query.select);
			}
			return objAodIndex;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAodIndex(id) {
		try {
			let objAodIndex;
			if(sql) {
				objAodIndex = await models.sequelize.aodIndex.findOne({ where: { id: util.Char(id) } });
				if (objAodIndex) {
					await models.sequelize.aodIndex.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAodIndex = await models.mongoose.aodIndex.deleteOne({id:util.Char(id)});
			}
			return objAodIndex;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({id: id});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({deleted: deleted});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({name: name});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLocation(location, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { location: location },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({location: location});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({description: description});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({date_entered: dateEntered});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({date_modified: dateModified});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastOptimised(lastOptimised, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_optimised: lastOptimised },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({last_optimised: lastOptimised});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({created_by: createdBy});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAodIndexById(id, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { id: id }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { id: id } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({id: id}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByDeleted(deleted, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { deleted: deleted }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { deleted: deleted } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({deleted: deleted}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByName(name, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { name: name }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { name: name } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({name: name}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByLocation(location, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { location: location }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { location: location } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({location: location}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByDescription(description, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { description: description }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { description: description } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({description: description}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByDateEntered(dateEntered, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { date_entered: dateEntered }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByDateModified(dateModified, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { date_modified: dateModified }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({date_modified: dateModified}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByLastOptimised(lastOptimised, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { last_optimised: lastOptimised }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { last_optimised: lastOptimised } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({last_optimised: lastOptimised}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByModifiedUserId(modifiedUserId, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByCreatedBy(createdBy, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { created_by: createdBy }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({created_by: createdBy}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexByAssignedUserId(assignedUserId, updateAodIndex) {
    	try {
    		let objAodIndex;
    		if(sql) {
    			objAodIndex = await models.sequelize.aodIndex.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAodIndex) {
    				objAodIndex = await models.sequelize.aodIndex.update(updateAodIndex, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAodIndex = await models.mongoose.aodIndex.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAodIndex}, {new: true});
    		}
    		return objAodIndex;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AodIndexService;
//</es-section>
