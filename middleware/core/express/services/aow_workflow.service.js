/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Time: 14:56:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:25
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

class AowWorkflowService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAowWorkflow(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aowWorkflow.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.aowWorkflow.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAowWorkflow(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aowWorkflow.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aowWorkflow.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAowWorkflow(newAowWorkflow) {
		try {
			let objAowWorkflow;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aowWorkflow.primaryKeys.id.type.toString())) {
			    newAowWorkflow.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAowWorkflow = await models.sequelize.aowWorkflow.create(newAowWorkflow);
			} else {
				objAowWorkflow = new models.mongoose.aowWorkflow(newAowWorkflow);
				await objAowWorkflow.save();
			}
			return objAowWorkflow;
		} catch (error) {
			throw error;
		}
	}

	static async updateAowWorkflow(id, updateAowWorkflow) {
		try {
			let objAowWorkflow;
			if(sql) {
				objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { id: util.Char(id) }});
				if (objAowWorkflow) {
					await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { id: util.Char(id) } });
					objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAowWorkflow._id;
				objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({id:id}, {$set: updateAowWorkflow}, {new: true});
			}
			return objAowWorkflow;
		} catch (error) {
			throw error;
		}
	}

	static async getAAowWorkflow(id, query) {
		try {
			let objAowWorkflow;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAowWorkflow = await models.mongoose.aowWorkflow.find({id:util.Char(id)}).select(query.select);
			}
			return objAowWorkflow;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAowWorkflow(id) {
		try {
			let objAowWorkflow;
			if(sql) {
				objAowWorkflow = await models.sequelize.aowWorkflow.findOne({ where: { id: util.Char(id) } });
				if (objAowWorkflow) {
					await models.sequelize.aowWorkflow.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAowWorkflow = await models.mongoose.aowWorkflow.deleteOne({id:util.Char(id)});
			}
			return objAowWorkflow;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({id: id});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({deleted: deleted});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMultipleRuns(multipleRuns, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { multiple_runs: multipleRuns },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({multiple_runs: multipleRuns});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({name: name});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFlowModule(flowModule, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { flow_module: flowModule },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({flow_module: flowModule});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFlowRunOn(flowRunOn, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { flow_run_on: flowRunOn },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({flow_run_on: flowRunOn});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({status: status});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRunWhen(runWhen, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { run_when: runWhen },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({run_when: runWhen});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({description: description});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({date_entered: dateEntered});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({date_modified: dateModified});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({created_by: createdBy});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAowWorkflowById(id, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { id: id }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { id: id } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({id: id}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByDeleted(deleted, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { deleted: deleted }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { deleted: deleted } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({deleted: deleted}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByMultipleRuns(multipleRuns, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { multiple_runs: multipleRuns }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { multiple_runs: multipleRuns } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({multiple_runs: multipleRuns}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByName(name, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { name: name }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { name: name } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({name: name}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByFlowModule(flowModule, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { flow_module: flowModule }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { flow_module: flowModule } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({flow_module: flowModule}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByFlowRunOn(flowRunOn, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { flow_run_on: flowRunOn }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { flow_run_on: flowRunOn } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({flow_run_on: flowRunOn}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByStatus(status, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { status: status }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { status: status } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({status: status}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByRunWhen(runWhen, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { run_when: runWhen }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { run_when: runWhen } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({run_when: runWhen}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByDescription(description, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { description: description }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { description: description } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({description: description}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByDateEntered(dateEntered, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { date_entered: dateEntered }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByDateModified(dateModified, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { date_modified: dateModified }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({date_modified: dateModified}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByModifiedUserId(modifiedUserId, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByCreatedBy(createdBy, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { created_by: createdBy }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({created_by: createdBy}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAowWorkflowByAssignedUserId(assignedUserId, updateAowWorkflow) {
    	try {
    		let objAowWorkflow;
    		if(sql) {
    			objAowWorkflow = await models.sequelize.aowWorkflow.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAowWorkflow) {
    				objAowWorkflow = await models.sequelize.aowWorkflow.update(updateAowWorkflow, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAowWorkflow = await models.mongoose.aowWorkflow.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAowWorkflow}, {new: true});
    		}
    		return objAowWorkflow;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AowWorkflowService;
//</es-section>
