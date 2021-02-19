/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:38 GMT-0400 (Bolivia Time)
 * Time: 18:35:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:38 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:38
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

class AodIndexeventService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAodIndexevent(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aodIndexevent.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aodIndexevent.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAodIndexevent(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aodIndexevent.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aodIndexevent.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAodIndexevent(newAodIndexevent) {
		try {
			let objAodIndexevent;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aodIndexevent.primaryKeys.id.type.toString())) {
			    newAodIndexevent.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAodIndexevent = await models.sequelize.aodIndexevent.create(newAodIndexevent);
			} else {
				objAodIndexevent = new models.mongoose.aodIndexevent(newAodIndexevent);
				await objAodIndexevent.save();
			}
			return objAodIndexevent;
		} catch (error) {
			throw error;
		}
	}

	static async updateAodIndexevent(id, updateAodIndexevent) {
		try {
			let objAodIndexevent;
			if(sql) {
				objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: util.Char(id) }});
				if (objAodIndexevent) {
					await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { id: util.Char(id) } });
					objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAodIndexevent._id;
				objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({id:id}, {$set: updateAodIndexevent}, {new: true});
			}
			return objAodIndexevent;
		} catch (error) {
			throw error;
		}
	}

	static async getAAodIndexevent(id, query) {
		try {
			let objAodIndexevent;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAodIndexevent = await models.mongoose.aodIndexevent.find({id:util.Char(id)}).select(query.select);
			}
			return objAodIndexevent;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAodIndexevent(id) {
		try {
			let objAodIndexevent;
			if(sql) {
				objAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { id: util.Char(id) } });
				if (objAodIndexevent) {
					await models.sequelize.aodIndexevent.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAodIndexevent = await models.mongoose.aodIndexevent.deleteOne({id:util.Char(id)});
			}
			return objAodIndexevent;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({id: id});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({deleted: deleted});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySuccess(success, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { success: success },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({success: success});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({name: name});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByError(error, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { error: error },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({error: error});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRecordModule(recordModule, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { record_module: recordModule },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({record_module: recordModule});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({description: description});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({date_entered: dateEntered});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({date_modified: dateModified});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({created_by: createdBy});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRecordId(recordId, query = {}) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { record_id: recordId },
    			});
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOne({record_id: recordId});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAodIndexeventById(id, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: id }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { id: id } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({id: id}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByDeleted(deleted, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { deleted: deleted }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { deleted: deleted } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({deleted: deleted}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventBySuccess(success, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { success: success }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { success: success } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({success: success}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByName(name, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { name: name }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { name: name } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({name: name}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByError(error, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { error: error }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { error: error } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({error: error}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByRecordModule(recordModule, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_module: recordModule }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { record_module: recordModule } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({record_module: recordModule}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByDescription(description, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { description: description }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { description: description } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({description: description}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByDateEntered(dateEntered, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { date_entered: dateEntered }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByDateModified(dateModified, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { date_modified: dateModified }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({date_modified: dateModified}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByModifiedUserId(modifiedUserId, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByCreatedBy(createdBy, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { created_by: createdBy }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({created_by: createdBy}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByAssignedUserId(assignedUserId, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAodIndexeventByRecordId(recordId, updateAodIndexevent) {
    	try {
    		let objAodIndexevent;
    		if(sql) {
    			objAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: recordId }});
    			if (objAodIndexevent) {
    				objAodIndexevent = await models.sequelize.aodIndexevent.update(updateAodIndexevent, { where: { record_id: recordId } });
    			}
    		} else {
    			objAodIndexevent = await models.mongoose.aodIndexevent.findOneAndUpdate({record_id: recordId}, {$set: updateAodIndexevent}, {new: true});
    		}
    		return objAodIndexevent;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AodIndexeventService;
//</es-section>
