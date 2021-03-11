/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Time: 14:57:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:02 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:2
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

class IadStickyNoteAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllIadStickyNotesAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.iadStickyNotesAudit.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.iadStickyNotesAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllIadStickyNotesAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.iadStickyNotesAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.iadStickyNotesAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addIadStickyNoteAudit(newIadStickyNoteAudit) {
		try {
			let objIadStickyNoteAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.iadStickyNotesAudit.primaryKeys.id.type.toString())) {
			    newIadStickyNoteAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.create(newIadStickyNoteAudit);
			} else {
				objIadStickyNoteAudit = new models.mongoose.iadStickyNotesAudit(newIadStickyNoteAudit);
				await objIadStickyNoteAudit.save();
			}
			return objIadStickyNoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateIadStickyNoteAudit(id, updateIadStickyNoteAudit) {
		try {
			let objIadStickyNoteAudit;
			if(sql) {
				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { id: util.Char(id) }});
				if (objIadStickyNoteAudit) {
					await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { id: util.Char(id) } });
					objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateIadStickyNoteAudit._id;
				objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({id:id}, {$set: updateIadStickyNoteAudit}, {new: true});
			}
			return objIadStickyNoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getAIadStickyNoteAudit(id, query) {
		try {
			let objIadStickyNoteAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objIadStickyNoteAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteIadStickyNoteAudit(id) {
		try {
			let objIadStickyNoteAudit;
			if(sql) {
				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({ where: { id: util.Char(id) } });
				if (objIadStickyNoteAudit) {
					await models.sequelize.iadStickyNotesAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.deleteOne({id:util.Char(id)});
			}
			return objIadStickyNoteAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({id: id});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({created_by: createdBy});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({field_name: fieldName});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({data_type: dataType});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({after_value_string: afterValueString});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({after_value_text: afterValueText});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({date_created: dateCreated});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOne({parent_id: parentId});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateIadStickyNoteAuditById(id, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { id: id }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { id: id } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({id: id}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByCreatedBy(createdBy, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { created_by: createdBy }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByFieldName(fieldName, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { field_name: fieldName }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByDataType(dataType, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { data_type: dataType }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({data_type: dataType}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByBeforeValueString(beforeValueString, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByAfterValueString(afterValueString, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByBeforeValueText(beforeValueText, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByAfterValueText(afterValueText, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByDateCreated(dateCreated, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { date_created: dateCreated }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateIadStickyNoteAuditByParentId(parentId, updateIadStickyNoteAudit) {
    	try {
    		let objIadStickyNoteAudit;
    		if(sql) {
    			objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.findOne({where: { parent_id: parentId }});
    			if (objIadStickyNoteAudit) {
    				objIadStickyNoteAudit = await models.sequelize.iadStickyNotesAudit.update(updateIadStickyNoteAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objIadStickyNoteAudit = await models.mongoose.iadStickyNotesAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateIadStickyNoteAudit}, {new: true});
    		}
    		return objIadStickyNoteAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = IadStickyNoteAuditService;
//</es-section>
