/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:06 GMT-0400 (Bolivia Time)
 * Time: 4:42:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:06 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:6
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

class AorScheduledReportService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorScheduledReports(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorScheduledReports.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorScheduledReports.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorScheduledReports(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorScheduledReports.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorScheduledReports.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorScheduledReport(newAorScheduledReport) {
		try {
			let objAorScheduledReport;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorScheduledReports.primaryKeys.id.type.toString())) {
			    newAorScheduledReport.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorScheduledReport = await models.sequelize.aorScheduledReports.create(newAorScheduledReport);
			} else {
				objAorScheduledReport = new models.mongoose.aorScheduledReports(newAorScheduledReport);
				await objAorScheduledReport.save();
			}
			return objAorScheduledReport;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorScheduledReport(id, updateAorScheduledReport) {
		try {
			let objAorScheduledReport;
			if(sql) {
				objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { id: util.Char(id) }});
				if (objAorScheduledReport) {
					await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { id: util.Char(id) } });
					objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorScheduledReport._id;
				objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({id:id}, {$set: updateAorScheduledReport}, {new: true});
			}
			return objAorScheduledReport;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorScheduledReport(id, query) {
		try {
			let objAorScheduledReport;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorScheduledReport = await models.mongoose.aorScheduledReports.find({id:util.Char(id)}).select(query.select);
			}
			return objAorScheduledReport;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorScheduledReport(id) {
		try {
			let objAorScheduledReport;
			if(sql) {
				objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({ where: { id: util.Char(id) } });
				if (objAorScheduledReport) {
					await models.sequelize.aorScheduledReports.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorScheduledReport = await models.mongoose.aorScheduledReports.deleteOne({id:util.Char(id)});
			}
			return objAorScheduledReport;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({id: id});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({deleted: deleted});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({name: name});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySchedule(schedule, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { schedule: schedule },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({schedule: schedule});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({status: status});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({description: description});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailRecipients(emailRecipients, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_recipients: emailRecipients },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({email_recipients: emailRecipients});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({date_entered: dateEntered});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({date_modified: dateModified});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastRun(lastRun, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_run: lastRun },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({last_run: lastRun});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({created_by: createdBy});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAorReportId(aorReportId, query = {}) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aor_report_id: aorReportId },
    			});
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOne({aor_report_id: aorReportId});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorScheduledReportById(id, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { id: id }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { id: id } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({id: id}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByDeleted(deleted, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { deleted: deleted }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { deleted: deleted } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({deleted: deleted}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByName(name, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { name: name }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { name: name } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({name: name}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportBySchedule(schedule, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { schedule: schedule }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { schedule: schedule } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({schedule: schedule}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByStatus(status, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { status: status }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { status: status } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({status: status}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByDescription(description, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { description: description }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { description: description } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({description: description}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByEmailRecipients(emailRecipients, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { email_recipients: emailRecipients }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { email_recipients: emailRecipients } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({email_recipients: emailRecipients}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByDateEntered(dateEntered, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { date_entered: dateEntered }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByDateModified(dateModified, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { date_modified: dateModified }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({date_modified: dateModified}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByLastRun(lastRun, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { last_run: lastRun }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { last_run: lastRun } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({last_run: lastRun}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByModifiedUserId(modifiedUserId, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByCreatedBy(createdBy, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { created_by: createdBy }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({created_by: createdBy}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorScheduledReportByAorReportId(aorReportId, updateAorScheduledReport) {
    	try {
    		let objAorScheduledReport;
    		if(sql) {
    			objAorScheduledReport = await models.sequelize.aorScheduledReports.findOne({where: { aor_report_id: aorReportId }});
    			if (objAorScheduledReport) {
    				objAorScheduledReport = await models.sequelize.aorScheduledReports.update(updateAorScheduledReport, { where: { aor_report_id: aorReportId } });
    			}
    		} else {
    			objAorScheduledReport = await models.mongoose.aorScheduledReports.findOneAndUpdate({aor_report_id: aorReportId}, {$set: updateAorScheduledReport}, {new: true});
    		}
    		return objAorScheduledReport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorScheduledReportService;
//</es-section>
