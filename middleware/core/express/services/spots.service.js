/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Time: 14:57:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:44 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:44
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

class SpotService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSpots(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.spots.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.spots.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSpots(select = []) {
		try {
			if(sql) {
				return await models.sequelize.spots.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.spots.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSpot(newSpot) {
		try {
			let objSpot;
			if(util.PrimaryKeyTypeIsString(models.sequelize.spots.primaryKeys.id.type.toString())) {
			    newSpot.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSpot = await models.sequelize.spots.create(newSpot);
			} else {
				objSpot = new models.mongoose.spots(newSpot);
				await objSpot.save();
			}
			return objSpot;
		} catch (error) {
			throw error;
		}
	}

	static async updateSpot(id, updateSpot) {
		try {
			let objSpot;
			if(sql) {
				objSpot = await models.sequelize.spots.findOne({where: { id: util.Char(id) }});
				if (objSpot) {
					await models.sequelize.spots.update(updateSpot, { where: { id: util.Char(id) } });
					objSpot = await models.sequelize.spots.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSpot._id;
				objSpot = await models.mongoose.spots.findOneAndUpdate({id:id}, {$set: updateSpot}, {new: true});
			}
			return objSpot;
		} catch (error) {
			throw error;
		}
	}

	static async getASpot(id, query) {
		try {
			let objSpot;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSpot = await models.sequelize.spots.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSpot = await models.mongoose.spots.find({id:util.Char(id)}).select(query.select);
			}
			return objSpot;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSpot(id) {
		try {
			let objSpot;
			if(sql) {
				objSpot = await models.sequelize.spots.findOne({ where: { id: util.Char(id) } });
				if (objSpot) {
					await models.sequelize.spots.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSpot = await models.mongoose.spots.deleteOne({id:util.Char(id)});
			}
			return objSpot;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({id: id});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({deleted: deleted});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({name: name});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({type: type});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({description: description});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConfig(config, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { config: config },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({config: config});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({date_entered: dateEntered});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({date_modified: dateModified});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({created_by: createdBy});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSpot = await models.mongoose.spots.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSpotById(id, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { id: id }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { id: id } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({id: id}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByDeleted(deleted, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { deleted: deleted }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { deleted: deleted } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({deleted: deleted}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByName(name, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { name: name }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { name: name } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({name: name}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByType(type, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { type: type }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { type: type } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({type: type}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByDescription(description, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { description: description }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { description: description } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({description: description}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByConfig(config, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { config: config }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { config: config } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({config: config}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByDateEntered(dateEntered, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { date_entered: dateEntered }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByDateModified(dateModified, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { date_modified: dateModified }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({date_modified: dateModified}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByModifiedUserId(modifiedUserId, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByCreatedBy(createdBy, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { created_by: createdBy }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({created_by: createdBy}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSpotByAssignedUserId(assignedUserId, updateSpot) {
    	try {
    		let objSpot;
    		if(sql) {
    			objSpot = await models.sequelize.spots.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSpot) {
    				objSpot = await models.sequelize.spots.update(updateSpot, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSpot = await models.mongoose.spots.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSpot}, {new: true});
    		}
    		return objSpot;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SpotService;
//</es-section>
