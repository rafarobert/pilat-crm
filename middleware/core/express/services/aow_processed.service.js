/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:24 GMT-0400 (Bolivia Time)
 * Time: 18:36:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:24 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:24
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

class AowProcessedService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowProcessed(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowProcessed.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aowProcessed.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowProcessed(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowProcessed.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowProcessed.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowProcessed(newAowProcessed) {
		try {
			let objAowProcessed;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowProcessed.primaryKeys.id.type.toString())) {
			    newAowProcessed.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowProcessed = await models.sequelize.aowProcessed.create(newAowProcessed);
			} else {
				objAowProcessed = new models.mongoose.aowProcessed(newAowProcessed);
				await objAowProcessed.save();
			}
			return objAowProcessed;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowProcessed(id, updateAowProcessed) {
		try {
			let objAowProcessed;
			if(sql) {
				objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { id: util.Char(id) }});
				if (objAowProcessed) {
					await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { id: util.Char(id) } });
					objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAowProcessed._id;
				objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({id:id}, {$set: updateAowProcessed}, {new: true});
			}
			return objAowProcessed;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowProcessed(id, query) {
		try {
			let objAowProcessed;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowProcessed = await models.sequelize.aowProcessed.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowProcessed = await models.mongoose.aowProcessed.find({id:util.Char(id)}).select(query.select);
			}
			return objAowProcessed;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowProcessed(id) {
		try {
			let objAowProcessed;
			if(sql) {
				objAowProcessed = await models.sequelize.aowProcessed.findOne({ where: { id: util.Char(id) } });
				if (objAowProcessed) {
					await models.sequelize.aowProcessed.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAowProcessed = await models.mongoose.aowProcessed.deleteOne({id:util.Char(id)});
			}
			return objAowProcessed;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({id: id});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({deleted: deleted});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({name: name});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({parent_type: parentType});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({status: status});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({description: description});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({date_entered: dateEntered});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({date_modified: dateModified});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({created_by: createdBy});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAowWorkflowId(aowWorkflowId, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aow_workflow_id: aowWorkflowId },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({aow_workflow_id: aowWorkflowId});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOne({parent_id: parentId});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowProcessedById(id, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { id: id }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { id: id } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({id: id}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByDeleted(deleted, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { deleted: deleted }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { deleted: deleted } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({deleted: deleted}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByName(name, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { name: name }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { name: name } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({name: name}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByParentType(parentType, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { parent_type: parentType }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { parent_type: parentType } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({parent_type: parentType}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByStatus(status, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { status: status }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { status: status } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({status: status}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByDescription(description, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { description: description }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { description: description } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({description: description}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByDateEntered(dateEntered, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { date_entered: dateEntered }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByDateModified(dateModified, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { date_modified: dateModified }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({date_modified: dateModified}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByModifiedUserId(modifiedUserId, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByCreatedBy(createdBy, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { created_by: createdBy }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({created_by: createdBy}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByAowWorkflowId(aowWorkflowId, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { aow_workflow_id: aowWorkflowId }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { aow_workflow_id: aowWorkflowId } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({aow_workflow_id: aowWorkflowId}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowProcessedByParentId(parentId, updateAowProcessed) {
    	try {
    		let objAowProcessed;
    		if(sql) {
    			objAowProcessed = await models.sequelize.aowProcessed.findOne({where: { parent_id: parentId }});
    			if (objAowProcessed) {
    				objAowProcessed = await models.sequelize.aowProcessed.update(updateAowProcessed, { where: { parent_id: parentId } });
    			}
    		} else {
    			objAowProcessed = await models.mongoose.aowProcessed.findOneAndUpdate({parent_id: parentId}, {$set: updateAowProcessed}, {new: true});
    		}
    		return objAowProcessed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowProcessedService;
//</es-section>
