/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Time: 14:56:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:05 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:5
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

class AorReportService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorReports(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorReports.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorReports.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorReports(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorReports.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorReports.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorReport(newAorReport) {
		try {
			let objAorReport;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorReports.primaryKeys.id.type.toString())) {
			    newAorReport.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorReport = await models.sequelize.aorReports.create(newAorReport);
			} else {
				objAorReport = new models.mongoose.aorReports(newAorReport);
				await objAorReport.save();
			}
			return objAorReport;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorReport(id, updateAorReport) {
		try {
			let objAorReport;
			if(sql) {
				objAorReport = await models.sequelize.aorReports.findOne({where: { id: util.Char(id) }});
				if (objAorReport) {
					await models.sequelize.aorReports.update(updateAorReport, { where: { id: util.Char(id) } });
					objAorReport = await models.sequelize.aorReports.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorReport._id;
				objAorReport = await models.mongoose.aorReports.findOneAndUpdate({id:id}, {$set: updateAorReport}, {new: true});
			}
			return objAorReport;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorReport(id, query) {
		try {
			let objAorReport;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorReport = await models.sequelize.aorReports.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorReport = await models.mongoose.aorReports.find({id:util.Char(id)}).select(query.select);
			}
			return objAorReport;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorReport(id) {
		try {
			let objAorReport;
			if(sql) {
				objAorReport = await models.sequelize.aorReports.findOne({ where: { id: util.Char(id) } });
				if (objAorReport) {
					await models.sequelize.aorReports.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorReport = await models.mongoose.aorReports.deleteOne({id:util.Char(id)});
			}
			return objAorReport;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({id: id});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({deleted: deleted});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGraphsPerRow(graphsPerRow, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { graphs_per_row: graphsPerRow },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({graphs_per_row: graphsPerRow});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({name: name});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReportModule(reportModule, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { report_module: reportModule },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({report_module: reportModule});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({description: description});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({date_entered: dateEntered});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({date_modified: dateModified});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({created_by: createdBy});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorReportById(id, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { id: id }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { id: id } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({id: id}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByDeleted(deleted, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { deleted: deleted }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { deleted: deleted } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({deleted: deleted}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByGraphsPerRow(graphsPerRow, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { graphs_per_row: graphsPerRow }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { graphs_per_row: graphsPerRow } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({graphs_per_row: graphsPerRow}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByName(name, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { name: name }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { name: name } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({name: name}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByReportModule(reportModule, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { report_module: reportModule }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { report_module: reportModule } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({report_module: reportModule}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByDescription(description, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { description: description }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { description: description } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({description: description}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByDateEntered(dateEntered, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { date_entered: dateEntered }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByDateModified(dateModified, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { date_modified: dateModified }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({date_modified: dateModified}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByModifiedUserId(modifiedUserId, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByCreatedBy(createdBy, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { created_by: createdBy }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({created_by: createdBy}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorReportByAssignedUserId(assignedUserId, updateAorReport) {
    	try {
    		let objAorReport;
    		if(sql) {
    			objAorReport = await models.sequelize.aorReports.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAorReport) {
    				objAorReport = await models.sequelize.aorReports.update(updateAorReport, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAorReport = await models.mongoose.aorReports.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAorReport}, {new: true});
    		}
    		return objAorReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorReportService;
//</es-section>
