/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:35 GMT-0400 (Bolivia Time)
 * Time: 18:37:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:35
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

class JjwgAreaService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgAreas(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgAreas.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgAreas.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgAreas(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgAreas.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgAreas.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgArea(newJjwgArea) {
		try {
			let objJjwgArea;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgAreas.primaryKeys.id.type.toString())) {
			    newJjwgArea.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgArea = await models.sequelize.jjwgAreas.create(newJjwgArea);
			} else {
				objJjwgArea = new models.mongoose.jjwgAreas(newJjwgArea);
				await objJjwgArea.save();
			}
			return objJjwgArea;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgArea(id, updateJjwgArea) {
		try {
			let objJjwgArea;
			if(sql) {
				objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { id: util.Char(id) }});
				if (objJjwgArea) {
					await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { id: util.Char(id) } });
					objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgArea._id;
				objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({id:id}, {$set: updateJjwgArea}, {new: true});
			}
			return objJjwgArea;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgArea(id, query) {
		try {
			let objJjwgArea;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgArea = await models.sequelize.jjwgAreas.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgArea = await models.mongoose.jjwgAreas.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgArea;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgArea(id) {
		try {
			let objJjwgArea;
			if(sql) {
				objJjwgArea = await models.sequelize.jjwgAreas.findOne({ where: { id: util.Char(id) } });
				if (objJjwgArea) {
					await models.sequelize.jjwgAreas.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgArea = await models.mongoose.jjwgAreas.deleteOne({id:util.Char(id)});
			}
			return objJjwgArea;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({id: id});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({deleted: deleted});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({name: name});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCity(city, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { city: city },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({city: city});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByState(state, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { state: state },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({state: state});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCountry(country, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { country: country },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({country: country});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({description: description});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCoordinates(coordinates, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { coordinates: coordinates },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({coordinates: coordinates});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({date_entered: dateEntered});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({date_modified: dateModified});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({modified_user_id: modifiedUserId});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({created_by: createdBy});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOne({assigned_user_id: assignedUserId});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgAreaById(id, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { id: id }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { id: id } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({id: id}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByDeleted(deleted, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { deleted: deleted }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByName(name, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { name: name }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { name: name } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({name: name}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByCity(city, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { city: city }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { city: city } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({city: city}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByState(state, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { state: state }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { state: state } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({state: state}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByCountry(country, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { country: country }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { country: country } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({country: country}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByDescription(description, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { description: description }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { description: description } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({description: description}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByCoordinates(coordinates, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { coordinates: coordinates }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { coordinates: coordinates } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({coordinates: coordinates}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByDateEntered(dateEntered, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { date_entered: dateEntered }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({date_entered: dateEntered}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByDateModified(dateModified, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { date_modified: dateModified }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByModifiedUserId(modifiedUserId, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByCreatedBy(createdBy, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { created_by: createdBy }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgAreaByAssignedUserId(assignedUserId, updateJjwgArea) {
    	try {
    		let objJjwgArea;
    		if(sql) {
    			objJjwgArea = await models.sequelize.jjwgAreas.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objJjwgArea) {
    				objJjwgArea = await models.sequelize.jjwgAreas.update(updateJjwgArea, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objJjwgArea = await models.mongoose.jjwgAreas.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateJjwgArea}, {new: true});
    		}
    		return objJjwgArea;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgAreaService;
//</es-section>
