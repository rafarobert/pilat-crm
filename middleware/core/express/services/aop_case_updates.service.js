/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:02 GMT-0400 (Bolivia Time)
 * Time: 14:56:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:2
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

class AopCaseUpdateService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAopCaseUpdates(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aopCaseUpdates.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.aopCaseUpdates.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAopCaseUpdates(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aopCaseUpdates.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aopCaseUpdates.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAopCaseUpdate(newAopCaseUpdate) {
		try {
			let objAopCaseUpdate;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aopCaseUpdates.primaryKeys.id.type.toString())) {
			    newAopCaseUpdate.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.create(newAopCaseUpdate);
			} else {
				objAopCaseUpdate = new models.mongoose.aopCaseUpdates(newAopCaseUpdate);
				await objAopCaseUpdate.save();
			}
			return objAopCaseUpdate;
		} catch (error) {
			throw error;
		}
	}

	static async updateAopCaseUpdate(id, updateAopCaseUpdate) {
		try {
			let objAopCaseUpdate;
			if(sql) {
				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { id: util.Char(id) }});
				if (objAopCaseUpdate) {
					await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { id: util.Char(id) } });
					objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAopCaseUpdate._id;
				objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({id:id}, {$set: updateAopCaseUpdate}, {new: true});
			}
			return objAopCaseUpdate;
		} catch (error) {
			throw error;
		}
	}

	static async getAAopCaseUpdate(id, query) {
		try {
			let objAopCaseUpdate;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAopCaseUpdate = await models.mongoose.aopCaseUpdates.find({id:util.Char(id)}).select(query.select);
			}
			return objAopCaseUpdate;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAopCaseUpdate(id) {
		try {
			let objAopCaseUpdate;
			if(sql) {
				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({ where: { id: util.Char(id) } });
				if (objAopCaseUpdate) {
					await models.sequelize.aopCaseUpdates.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAopCaseUpdate = await models.mongoose.aopCaseUpdates.deleteOne({id:util.Char(id)});
			}
			return objAopCaseUpdate;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({id: id});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({deleted: deleted});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByInternal(internal, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { internal: internal },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({internal: internal});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({name: name});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({description: description});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({date_entered: dateEntered});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({date_modified: dateModified});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({created_by: createdBy});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseId(caseId, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_id: caseId },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({case_id: caseId});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOne({contact_id: contactId});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAopCaseUpdateById(id, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { id: id }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { id: id } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({id: id}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByDeleted(deleted, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { deleted: deleted }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { deleted: deleted } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({deleted: deleted}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByInternal(internal, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { internal: internal }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { internal: internal } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({internal: internal}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByName(name, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { name: name }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { name: name } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({name: name}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByDescription(description, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { description: description }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { description: description } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({description: description}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByDateEntered(dateEntered, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { date_entered: dateEntered }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByDateModified(dateModified, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { date_modified: dateModified }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({date_modified: dateModified}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByModifiedUserId(modifiedUserId, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByCreatedBy(createdBy, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { created_by: createdBy }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({created_by: createdBy}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByAssignedUserId(assignedUserId, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByCaseId(caseId, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { case_id: caseId }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { case_id: caseId } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({case_id: caseId}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAopCaseUpdateByContactId(contactId, updateAopCaseUpdate) {
    	try {
    		let objAopCaseUpdate;
    		if(sql) {
    			objAopCaseUpdate = await models.sequelize.aopCaseUpdates.findOne({where: { contact_id: contactId }});
    			if (objAopCaseUpdate) {
    				objAopCaseUpdate = await models.sequelize.aopCaseUpdates.update(updateAopCaseUpdate, { where: { contact_id: contactId } });
    			}
    		} else {
    			objAopCaseUpdate = await models.mongoose.aopCaseUpdates.findOneAndUpdate({contact_id: contactId}, {$set: updateAopCaseUpdate}, {new: true});
    		}
    		return objAopCaseUpdate;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AopCaseUpdateService;
//</es-section>
