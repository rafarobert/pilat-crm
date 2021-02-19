/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:35 GMT-0400 (Bolivia Time)
 * Time: 18:35:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:35
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

class AnalyticReportingService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAnalyticReporting(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.analyticReporting.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.analyticReporting.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAnalyticReporting(select = []) {
		try {
			if(sql) {
				return await models.sequelize.analyticReporting.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.analyticReporting.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAnalyticReporting(newAnalyticReporting) {
		try {
			let objAnalyticReporting;
			if(util.PrimaryKeyTypeIsString(models.sequelize.analyticReporting.primaryKeys.id.type.toString())) {
			    newAnalyticReporting.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAnalyticReporting = await models.sequelize.analyticReporting.create(newAnalyticReporting);
			} else {
				objAnalyticReporting = new models.mongoose.analyticReporting(newAnalyticReporting);
				await objAnalyticReporting.save();
			}
			return objAnalyticReporting;
		} catch (error) {
			throw error;
		}
	}

	static async updateAnalyticReporting(id, updateAnalyticReporting) {
		try {
			let objAnalyticReporting;
			if(sql) {
				objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { id: util.Char(id) }});
				if (objAnalyticReporting) {
					await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { id: util.Char(id) } });
					objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAnalyticReporting._id;
				objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({id:id}, {$set: updateAnalyticReporting}, {new: true});
			}
			return objAnalyticReporting;
		} catch (error) {
			throw error;
		}
	}

	static async getAAnalyticReporting(id, query) {
		try {
			let objAnalyticReporting;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAnalyticReporting = await models.mongoose.analyticReporting.find({id:util.Char(id)}).select(query.select);
			}
			return objAnalyticReporting;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAnalyticReporting(id) {
		try {
			let objAnalyticReporting;
			if(sql) {
				objAnalyticReporting = await models.sequelize.analyticReporting.findOne({ where: { id: util.Char(id) } });
				if (objAnalyticReporting) {
					await models.sequelize.analyticReporting.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAnalyticReporting = await models.mongoose.analyticReporting.deleteOne({id:util.Char(id)});
			}
			return objAnalyticReporting;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({id: id});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({deleted: deleted});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({name: name});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({description: description});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({date_entered: dateEntered});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({date_modified: dateModified});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({created_by: createdBy});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAnalyticReportingById(id, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { id: id }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { id: id } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({id: id}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByDeleted(deleted, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { deleted: deleted }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { deleted: deleted } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({deleted: deleted}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByName(name, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { name: name }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { name: name } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({name: name}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByDescription(description, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { description: description }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { description: description } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({description: description}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByDateEntered(dateEntered, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { date_entered: dateEntered }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByDateModified(dateModified, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { date_modified: dateModified }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({date_modified: dateModified}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByModifiedUserId(modifiedUserId, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByCreatedBy(createdBy, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { created_by: createdBy }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({created_by: createdBy}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAnalyticReportingByAssignedUserId(assignedUserId, updateAnalyticReporting) {
    	try {
    		let objAnalyticReporting;
    		if(sql) {
    			objAnalyticReporting = await models.sequelize.analyticReporting.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAnalyticReporting) {
    				objAnalyticReporting = await models.sequelize.analyticReporting.update(updateAnalyticReporting, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAnalyticReporting = await models.mongoose.analyticReporting.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAnalyticReporting}, {new: true});
    		}
    		return objAnalyticReporting;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AnalyticReportingService;
//</es-section>
