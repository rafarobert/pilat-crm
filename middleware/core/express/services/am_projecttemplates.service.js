/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:29 GMT-0400 (Bolivia Time)
 * Time: 18:35:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:29 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:29
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

class AmProjecttemplateService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAmProjecttemplates(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.amProjecttemplates.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.amProjecttemplates.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAmProjecttemplates(select = []) {
		try {
			if(sql) {
				return await models.sequelize.amProjecttemplates.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.amProjecttemplates.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAmProjecttemplate(newAmProjecttemplate) {
		try {
			let objAmProjecttemplate;
			if(util.PrimaryKeyTypeIsString(models.sequelize.amProjecttemplates.primaryKeys.id.type.toString())) {
			    newAmProjecttemplate.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAmProjecttemplate = await models.sequelize.amProjecttemplates.create(newAmProjecttemplate);
			} else {
				objAmProjecttemplate = new models.mongoose.amProjecttemplates(newAmProjecttemplate);
				await objAmProjecttemplate.save();
			}
			return objAmProjecttemplate;
		} catch (error) {
			throw error;
		}
	}

	static async updateAmProjecttemplate(id, updateAmProjecttemplate) {
		try {
			let objAmProjecttemplate;
			if(sql) {
				objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { id: util.Char(id) }});
				if (objAmProjecttemplate) {
					await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { id: util.Char(id) } });
					objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAmProjecttemplate._id;
				objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({id:id}, {$set: updateAmProjecttemplate}, {new: true});
			}
			return objAmProjecttemplate;
		} catch (error) {
			throw error;
		}
	}

	static async getAAmProjecttemplate(id, query) {
		try {
			let objAmProjecttemplate;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAmProjecttemplate = await models.mongoose.amProjecttemplates.find({id:util.Char(id)}).select(query.select);
			}
			return objAmProjecttemplate;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAmProjecttemplate(id) {
		try {
			let objAmProjecttemplate;
			if(sql) {
				objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({ where: { id: util.Char(id) } });
				if (objAmProjecttemplate) {
					await models.sequelize.amProjecttemplates.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAmProjecttemplate = await models.mongoose.amProjecttemplates.deleteOne({id:util.Char(id)});
			}
			return objAmProjecttemplate;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({id: id});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({deleted: deleted});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOverrideBusinessHours(overrideBusinessHours, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { override_business_hours: overrideBusinessHours },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({override_business_hours: overrideBusinessHours});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({name: name});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({status: status});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({priority: priority});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({description: description});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({date_entered: dateEntered});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({date_modified: dateModified});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({created_by: createdBy});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAmProjecttemplateById(id, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { id: id }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { id: id } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({id: id}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByDeleted(deleted, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { deleted: deleted }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { deleted: deleted } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({deleted: deleted}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByOverrideBusinessHours(overrideBusinessHours, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { override_business_hours: overrideBusinessHours }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { override_business_hours: overrideBusinessHours } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({override_business_hours: overrideBusinessHours}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByName(name, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { name: name }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { name: name } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({name: name}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByStatus(status, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { status: status }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { status: status } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({status: status}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByPriority(priority, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { priority: priority }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { priority: priority } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({priority: priority}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByDescription(description, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { description: description }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { description: description } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({description: description}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByDateEntered(dateEntered, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { date_entered: dateEntered }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByDateModified(dateModified, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { date_modified: dateModified }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({date_modified: dateModified}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByModifiedUserId(modifiedUserId, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByCreatedBy(createdBy, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { created_by: createdBy }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({created_by: createdBy}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAmProjecttemplateByAssignedUserId(assignedUserId, updateAmProjecttemplate) {
    	try {
    		let objAmProjecttemplate;
    		if(sql) {
    			objAmProjecttemplate = await models.sequelize.amProjecttemplates.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAmProjecttemplate) {
    				objAmProjecttemplate = await models.sequelize.amProjecttemplates.update(updateAmProjecttemplate, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAmProjecttemplate = await models.mongoose.amProjecttemplates.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAmProjecttemplate}, {new: true});
    		}
    		return objAmProjecttemplate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AmProjecttemplateService;
//</es-section>
