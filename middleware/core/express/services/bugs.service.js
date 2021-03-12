/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:27 GMT-0400 (Bolivia Time)
 * Time: 14:56:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:27 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:27
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

class BugService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllBugs(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.bugs.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.bugs.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllBugs(select = []) {
		try {
			if(sql) {
				return await models.sequelize.bugs.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.bugs.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addBug(newBug) {
		try {
			let objBug;
			if(util.PrimaryKeyTypeIsString(models.sequelize.bugs.primaryKeys.id.type.toString())) {
			    newBug.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objBug = await models.sequelize.bugs.create(newBug);
			} else {
				objBug = new models.mongoose.bugs(newBug);
				await objBug.save();
			}
			return objBug;
		} catch (error) {
			throw error;
		}
	}

	static async updateBug(id, updateBug) {
		try {
			let objBug;
			if(sql) {
				objBug = await models.sequelize.bugs.findOne({where: { id: util.Char(id) }});
				if (objBug) {
					await models.sequelize.bugs.update(updateBug, { where: { id: util.Char(id) } });
					objBug = await models.sequelize.bugs.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateBug._id;
				objBug = await models.mongoose.bugs.findOneAndUpdate({id:id}, {$set: updateBug}, {new: true});
			}
			return objBug;
		} catch (error) {
			throw error;
		}
	}

	static async getABug(id, query) {
		try {
			let objBug;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objBug = await models.sequelize.bugs.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objBug = await models.mongoose.bugs.find({id:util.Char(id)}).select(query.select);
			}
			return objBug;
		} catch (error) {
			throw error;
		}
	}

	static async deleteBug(id) {
		try {
			let objBug;
			if(sql) {
				objBug = await models.sequelize.bugs.findOne({ where: { id: util.Char(id) } });
				if (objBug) {
					await models.sequelize.bugs.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objBug = await models.mongoose.bugs.deleteOne({id:util.Char(id)});
			}
			return objBug;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({id: id});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({deleted: deleted});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBugNumber(bugNumber, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bug_number: bugNumber },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({bug_number: bugNumber});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({name: name});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({type: type});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({status: status});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPriority(priority, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { priority: priority },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({priority: priority});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByResolution(resolution, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { resolution: resolution },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({resolution: resolution});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFoundInRelease(foundInRelease, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { found_in_release: foundInRelease },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({found_in_release: foundInRelease});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFixedInRelease(fixedInRelease, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fixed_in_release: fixedInRelease },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({fixed_in_release: fixedInRelease});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySource(source, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { source: source },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({source: source});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProductCategory(productCategory, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { product_category: productCategory },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({product_category: productCategory});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({description: description});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByWorkLog(workLog, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { work_log: workLog },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({work_log: workLog});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({date_entered: dateEntered});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({date_modified: dateModified});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({modified_user_id: modifiedUserId});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({created_by: createdBy});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objBug = await models.mongoose.bugs.findOne({assigned_user_id: assignedUserId});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateBugById(id, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { id: id }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { id: id } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({id: id}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByDeleted(deleted, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { deleted: deleted }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { deleted: deleted } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({deleted: deleted}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByBugNumber(bugNumber, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { bug_number: bugNumber }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { bug_number: bugNumber } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({bug_number: bugNumber}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByName(name, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { name: name }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { name: name } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({name: name}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByType(type, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { type: type }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { type: type } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({type: type}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByStatus(status, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { status: status }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { status: status } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({status: status}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByPriority(priority, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { priority: priority }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { priority: priority } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({priority: priority}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByResolution(resolution, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { resolution: resolution }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { resolution: resolution } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({resolution: resolution}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByFoundInRelease(foundInRelease, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { found_in_release: foundInRelease }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { found_in_release: foundInRelease } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({found_in_release: foundInRelease}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByFixedInRelease(fixedInRelease, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { fixed_in_release: fixedInRelease }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { fixed_in_release: fixedInRelease } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({fixed_in_release: fixedInRelease}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugBySource(source, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { source: source }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { source: source } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({source: source}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByProductCategory(productCategory, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { product_category: productCategory }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { product_category: productCategory } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({product_category: productCategory}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByDescription(description, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { description: description }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { description: description } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({description: description}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByWorkLog(workLog, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { work_log: workLog }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { work_log: workLog } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({work_log: workLog}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByDateEntered(dateEntered, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { date_entered: dateEntered }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({date_entered: dateEntered}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByDateModified(dateModified, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { date_modified: dateModified }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({date_modified: dateModified}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByModifiedUserId(modifiedUserId, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByCreatedBy(createdBy, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { created_by: createdBy }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { created_by: createdBy } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({created_by: createdBy}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateBugByAssignedUserId(assignedUserId, updateBug) {
    	try {
    		let objBug;
    		if(sql) {
    			objBug = await models.sequelize.bugs.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objBug) {
    				objBug = await models.sequelize.bugs.update(updateBug, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objBug = await models.mongoose.bugs.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateBug}, {new: true});
    		}
    		return objBug;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = BugService;
//</es-section>
