/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:05 GMT-0400 (Bolivia Time)
 * Time: 18:39:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:05 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:5
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

class UserPreferenceService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUserPreferences(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.userPreferences.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.userPreferences.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUserPreferences(select = []) {
		try {
			if(sql) {
				return await models.sequelize.userPreferences.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.userPreferences.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUserPreference(newUserPreference) {
		try {
			let objUserPreference;
			if(util.PrimaryKeyTypeIsString(models.sequelize.userPreferences.primaryKeys.id.type.toString())) {
			    newUserPreference.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUserPreference = await models.sequelize.userPreferences.create(newUserPreference);
			} else {
				objUserPreference = new models.mongoose.userPreferences(newUserPreference);
				await objUserPreference.save();
			}
			return objUserPreference;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserPreference(id, updateUserPreference) {
		try {
			let objUserPreference;
			if(sql) {
				objUserPreference = await models.sequelize.userPreferences.findOne({where: { id: util.Char(id) }});
				if (objUserPreference) {
					await models.sequelize.userPreferences.update(updateUserPreference, { where: { id: util.Char(id) } });
					objUserPreference = await models.sequelize.userPreferences.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUserPreference._id;
				objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({id:id}, {$set: updateUserPreference}, {new: true});
			}
			return objUserPreference;
		} catch (error) {
			throw error;
		}
	}

	static async getAUserPreference(id, query) {
		try {
			let objUserPreference;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUserPreference = await models.sequelize.userPreferences.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUserPreference = await models.mongoose.userPreferences.find({id:util.Char(id)}).select(query.select);
			}
			return objUserPreference;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserPreference(id) {
		try {
			let objUserPreference;
			if(sql) {
				objUserPreference = await models.sequelize.userPreferences.findOne({ where: { id: util.Char(id) } });
				if (objUserPreference) {
					await models.sequelize.userPreferences.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUserPreference = await models.mongoose.userPreferences.deleteOne({id:util.Char(id)});
			}
			return objUserPreference;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({id: id});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({deleted: deleted});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategory(category, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category: category },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({category: category});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContents(contents, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contents: contents },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({contents: contents});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({date_entered: dateEntered});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({date_modified: dateModified});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOne({assigned_user_id: assignedUserId});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserPreferenceById(id, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { id: id }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { id: id } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({id: id}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByDeleted(deleted, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { deleted: deleted }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { deleted: deleted } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({deleted: deleted}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByCategory(category, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { category: category }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { category: category } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({category: category}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByContents(contents, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { contents: contents }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { contents: contents } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({contents: contents}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByDateEntered(dateEntered, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { date_entered: dateEntered }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({date_entered: dateEntered}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByDateModified(dateModified, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { date_modified: dateModified }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({date_modified: dateModified}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPreferenceByAssignedUserId(assignedUserId, updateUserPreference) {
    	try {
    		let objUserPreference;
    		if(sql) {
    			objUserPreference = await models.sequelize.userPreferences.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objUserPreference) {
    				objUserPreference = await models.sequelize.userPreferences.update(updateUserPreference, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objUserPreference = await models.mongoose.userPreferences.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateUserPreference}, {new: true});
    		}
    		return objUserPreference;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserPreferenceService;
//</es-section>
