/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:34 GMT-0400 (Bolivia Time)
 * Time: 14:56:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:34 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:34
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

class CaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.cases.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.cases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.cases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.cases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCase(newCase) {
		try {
			let objCase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.cases.primaryKeys.id.type.toString())) {
			    newCase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCase = await models.sequelize.cases.create(newCase);
			} else {
				objCase = new models.mongoose.cases(newCase);
				await objCase.save();
			}
			return objCase;
		} catch (error) {
			throw error;
		}
	}

	static async updateCase(id, updateCase) {
		try {
			let objCase;
			if(sql) {
				objCase = await models.sequelize.cases.findOne({where: { id: util.Char(id) }});
				if (objCase) {
					await models.sequelize.cases.update(updateCase, { where: { id: util.Char(id) } });
					objCase = await models.sequelize.cases.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCase._id;
				objCase = await models.mongoose.cases.findOneAndUpdate({id:id}, {$set: updateCase}, {new: true});
			}
			return objCase;
		} catch (error) {
			throw error;
		}
	}

	static async getACase(id, query) {
		try {
			let objCase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCase = await models.sequelize.cases.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCase = await models.mongoose.cases.find({id:util.Char(id)}).select(query.select);
			}
			return objCase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCase(id) {
		try {
			let objCase;
			if(sql) {
				objCase = await models.sequelize.cases.findOne({ where: { id: util.Char(id) } });
				if (objCase) {
					await models.sequelize.cases.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCase = await models.mongoose.cases.deleteOne({id:util.Char(id)});
			}
			return objCase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({id: id});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({deleted: deleted});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCaseNumber(caseNumber, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { case_number: caseNumber },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({case_number: caseNumber});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({name: name});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({type: type});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({status: status});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({priority: priority});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByState(state, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { state: state },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({state: state});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({description: description});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByResolution(resolution, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { resolution: resolution },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({resolution: resolution});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByWorkLog(workLog, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { work_log: workLog },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({work_log: workLog});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({date_entered: dateEntered});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({date_modified: dateModified});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({modified_user_id: modifiedUserId});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({created_by: createdBy});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({assigned_user_id: assignedUserId});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({account_id: accountId});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactCreatedById(contactCreatedById, query = {}) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_created_by_id: contactCreatedById },
    			});
    		} else {
    			objCase = await models.mongoose.cases.findOne({contact_created_by_id: contactCreatedById});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCaseById(id, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { id: id }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { id: id } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({id: id}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByDeleted(deleted, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { deleted: deleted }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { deleted: deleted } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({deleted: deleted}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByCaseNumber(caseNumber, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { case_number: caseNumber }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { case_number: caseNumber } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({case_number: caseNumber}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByName(name, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { name: name }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { name: name } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({name: name}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByType(type, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { type: type }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { type: type } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({type: type}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByStatus(status, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { status: status }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { status: status } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({status: status}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByPriority(priority, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { priority: priority }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { priority: priority } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({priority: priority}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByState(state, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { state: state }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { state: state } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({state: state}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByDescription(description, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { description: description }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { description: description } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({description: description}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByResolution(resolution, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { resolution: resolution }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { resolution: resolution } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({resolution: resolution}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByWorkLog(workLog, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { work_log: workLog }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { work_log: workLog } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({work_log: workLog}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByDateEntered(dateEntered, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { date_entered: dateEntered }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({date_entered: dateEntered}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByDateModified(dateModified, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { date_modified: dateModified }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({date_modified: dateModified}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByModifiedUserId(modifiedUserId, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByCreatedBy(createdBy, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { created_by: createdBy }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({created_by: createdBy}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByAssignedUserId(assignedUserId, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByAccountId(accountId, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { account_id: accountId }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { account_id: accountId } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({account_id: accountId}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCaseByContactCreatedById(contactCreatedById, updateCase) {
    	try {
    		let objCase;
    		if(sql) {
    			objCase = await models.sequelize.cases.findOne({where: { contact_created_by_id: contactCreatedById }});
    			if (objCase) {
    				objCase = await models.sequelize.cases.update(updateCase, { where: { contact_created_by_id: contactCreatedById } });
    			}
    		} else {
    			objCase = await models.mongoose.cases.findOneAndUpdate({contact_created_by_id: contactCreatedById}, {$set: updateCase}, {new: true});
    		}
    		return objCase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CaseService;
//</es-section>
