/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Time: 15:36:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:51
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

class ProjectTaskAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProjectTaskAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.projectTaskAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.projectTaskAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProjectTaskAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.projectTaskAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.projectTaskAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProjectTaskAudit(newProjectTaskAudit) {
		try {
			let objProjectTaskAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.projectTaskAudit.primaryKeys.id.type.toString())) {
			    newProjectTaskAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProjectTaskAudit = await models.sequelize.projectTaskAudit.create(newProjectTaskAudit);
			} else {
				objProjectTaskAudit = new models.mongoose.projectTaskAudit(newProjectTaskAudit);
				await objProjectTaskAudit.save();
			}
			return objProjectTaskAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateProjectTaskAudit(id, updateProjectTaskAudit) {
		try {
			let objProjectTaskAudit;
			if(sql) {
				objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { id: util.Char(id) }});
				if (objProjectTaskAudit) {
					await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { id: util.Char(id) } });
					objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateProjectTaskAudit._id;
				objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({id:id}, {$set: updateProjectTaskAudit}, {new: true});
			}
			return objProjectTaskAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAProjectTaskAudit(id, query) {
		try {
			let objProjectTaskAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProjectTaskAudit = await models.mongoose.projectTaskAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objProjectTaskAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProjectTaskAudit(id) {
		try {
			let objProjectTaskAudit;
			if(sql) {
				objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({ where: { id: util.Char(id) } });
				if (objProjectTaskAudit) {
					await models.sequelize.projectTaskAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objProjectTaskAudit = await models.mongoose.projectTaskAudit.deleteOne({id:util.Char(id)});
			}
			return objProjectTaskAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({id: id});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({created_by: createdBy});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({field_name: fieldName});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({data_type: dataType});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({after_value_string: afterValueString});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({after_value_text: afterValueText});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({date_created: dateCreated});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOne({parent_id: parentId});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProjectTaskAuditById(id, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { id: id }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { id: id } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({id: id}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByCreatedBy(createdBy, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { created_by: createdBy }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByFieldName(fieldName, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { field_name: fieldName }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByDataType(dataType, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { data_type: dataType }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({data_type: dataType}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByBeforeValueString(beforeValueString, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByAfterValueString(afterValueString, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByBeforeValueText(beforeValueText, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByAfterValueText(afterValueText, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByDateCreated(dateCreated, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { date_created: dateCreated }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProjectTaskAuditByParentId(parentId, updateProjectTaskAudit) {
    	try {
    		let objProjectTaskAudit;
    		if(sql) {
    			objProjectTaskAudit = await models.sequelize.projectTaskAudit.findOne({where: { parent_id: parentId }});
    			if (objProjectTaskAudit) {
    				objProjectTaskAudit = await models.sequelize.projectTaskAudit.update(updateProjectTaskAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objProjectTaskAudit = await models.mongoose.projectTaskAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateProjectTaskAudit}, {new: true});
    		}
    		return objProjectTaskAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProjectTaskAuditService;
//</es-section>
