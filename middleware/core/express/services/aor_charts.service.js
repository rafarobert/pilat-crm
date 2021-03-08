/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:14 GMT-0400 (Bolivia Time)
 * Time: 15:35:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:14
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

class AorChartService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAorCharts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aorCharts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aorCharts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAorCharts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aorCharts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aorCharts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAorChart(newAorChart) {
		try {
			let objAorChart;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aorCharts.primaryKeys.id.type.toString())) {
			    newAorChart.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAorChart = await models.sequelize.aorCharts.create(newAorChart);
			} else {
				objAorChart = new models.mongoose.aorCharts(newAorChart);
				await objAorChart.save();
			}
			return objAorChart;
		} catch (error) {
			throw error;
		}
	}

	static async updateAorChart(id, updateAorChart) {
		try {
			let objAorChart;
			if(sql) {
				objAorChart = await models.sequelize.aorCharts.findOne({where: { id: util.Char(id) }});
				if (objAorChart) {
					await models.sequelize.aorCharts.update(updateAorChart, { where: { id: util.Char(id) } });
					objAorChart = await models.sequelize.aorCharts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAorChart._id;
				objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({id:id}, {$set: updateAorChart}, {new: true});
			}
			return objAorChart;
		} catch (error) {
			throw error;
		}
	}

	static async getAAorChart(id, query) {
		try {
			let objAorChart;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAorChart = await models.sequelize.aorCharts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAorChart = await models.mongoose.aorCharts.find({id:util.Char(id)}).select(query.select);
			}
			return objAorChart;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAorChart(id) {
		try {
			let objAorChart;
			if(sql) {
				objAorChart = await models.sequelize.aorCharts.findOne({ where: { id: util.Char(id) } });
				if (objAorChart) {
					await models.sequelize.aorCharts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAorChart = await models.mongoose.aorCharts.deleteOne({id:util.Char(id)});
			}
			return objAorChart;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({id: id});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({deleted: deleted});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByXField(xField, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { x_field: xField },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({x_field: xField});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByYField(yField, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { y_field: yField },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({y_field: yField});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({name: name});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({type: type});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({description: description});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({date_entered: dateEntered});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({date_modified: dateModified});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({created_by: createdBy});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAorReportId(aorReportId, query = {}) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aor_report_id: aorReportId },
    			});
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOne({aor_report_id: aorReportId});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAorChartById(id, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { id: id }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { id: id } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({id: id}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByDeleted(deleted, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { deleted: deleted }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { deleted: deleted } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({deleted: deleted}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByXField(xField, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { x_field: xField }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { x_field: xField } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({x_field: xField}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByYField(yField, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { y_field: yField }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { y_field: yField } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({y_field: yField}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByName(name, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { name: name }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { name: name } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({name: name}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByType(type, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { type: type }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { type: type } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({type: type}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByDescription(description, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { description: description }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { description: description } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({description: description}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByDateEntered(dateEntered, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { date_entered: dateEntered }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByDateModified(dateModified, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { date_modified: dateModified }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({date_modified: dateModified}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByModifiedUserId(modifiedUserId, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByCreatedBy(createdBy, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { created_by: createdBy }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({created_by: createdBy}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAorChartByAorReportId(aorReportId, updateAorChart) {
    	try {
    		let objAorChart;
    		if(sql) {
    			objAorChart = await models.sequelize.aorCharts.findOne({where: { aor_report_id: aorReportId }});
    			if (objAorChart) {
    				objAorChart = await models.sequelize.aorCharts.update(updateAorChart, { where: { aor_report_id: aorReportId } });
    			}
    		} else {
    			objAorChart = await models.mongoose.aorCharts.findOneAndUpdate({aor_report_id: aorReportId}, {$set: updateAorChart}, {new: true});
    		}
    		return objAorChart;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AorChartService;
//</es-section>
