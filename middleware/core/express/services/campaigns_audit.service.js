/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:45 GMT-0400 (Bolivia Time)
 * Time: 15:35:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:45 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:45
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

class CampaignAuditService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCampaignsAudit(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.campaignsAudit.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.campaignsAudit.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCampaignsAudit(select = []) {
		try {
			if(sql) {
				return await models.sequelize.campaignsAudit.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.campaignsAudit.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCampaignAudit(newCampaignAudit) {
		try {
			let objCampaignAudit;
			if(util.PrimaryKeyTypeIsString(models.sequelize.campaignsAudit.primaryKeys.id.type.toString())) {
			    newCampaignAudit.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCampaignAudit = await models.sequelize.campaignsAudit.create(newCampaignAudit);
			} else {
				objCampaignAudit = new models.mongoose.campaignsAudit(newCampaignAudit);
				await objCampaignAudit.save();
			}
			return objCampaignAudit;
		} catch (error) {
			throw error;
		}
	}

	static async updateCampaignAudit(id, updateCampaignAudit) {
		try {
			let objCampaignAudit;
			if(sql) {
				objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { id: util.Char(id) }});
				if (objCampaignAudit) {
					await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { id: util.Char(id) } });
					objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateCampaignAudit._id;
				objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({id:id}, {$set: updateCampaignAudit}, {new: true});
			}
			return objCampaignAudit;
		} catch (error) {
			throw error;
		}
	}

	static async getACampaignAudit(id, query) {
		try {
			let objCampaignAudit;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCampaignAudit = await models.mongoose.campaignsAudit.find({id:util.Char(id)}).select(query.select);
			}
			return objCampaignAudit;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCampaignAudit(id) {
		try {
			let objCampaignAudit;
			if(sql) {
				objCampaignAudit = await models.sequelize.campaignsAudit.findOne({ where: { id: util.Char(id) } });
				if (objCampaignAudit) {
					await models.sequelize.campaignsAudit.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objCampaignAudit = await models.mongoose.campaignsAudit.deleteOne({id:util.Char(id)});
			}
			return objCampaignAudit;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({id: id});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({created_by: createdBy});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFieldName(fieldName, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { field_name: fieldName },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({field_name: fieldName});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDataType(dataType, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { data_type: dataType },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({data_type: dataType});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueString(beforeValueString, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_string: beforeValueString },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({before_value_string: beforeValueString});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueString(afterValueString, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_string: afterValueString },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({after_value_string: afterValueString});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeforeValueText(beforeValueText, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { before_value_text: beforeValueText },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({before_value_text: beforeValueText});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAfterValueText(afterValueText, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { after_value_text: afterValueText },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({after_value_text: afterValueText});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateCreated(dateCreated, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_created: dateCreated },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({date_created: dateCreated});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOne({parent_id: parentId});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCampaignAuditById(id, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { id: id }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { id: id } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({id: id}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByCreatedBy(createdBy, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { created_by: createdBy }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { created_by: createdBy } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({created_by: createdBy}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByFieldName(fieldName, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { field_name: fieldName }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { field_name: fieldName } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({field_name: fieldName}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByDataType(dataType, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { data_type: dataType }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { data_type: dataType } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({data_type: dataType}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByBeforeValueString(beforeValueString, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { before_value_string: beforeValueString }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { before_value_string: beforeValueString } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({before_value_string: beforeValueString}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByAfterValueString(afterValueString, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { after_value_string: afterValueString }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { after_value_string: afterValueString } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({after_value_string: afterValueString}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByBeforeValueText(beforeValueText, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { before_value_text: beforeValueText }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { before_value_text: beforeValueText } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({before_value_text: beforeValueText}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByAfterValueText(afterValueText, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { after_value_text: afterValueText }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { after_value_text: afterValueText } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({after_value_text: afterValueText}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByDateCreated(dateCreated, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { date_created: dateCreated }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { date_created: dateCreated } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({date_created: dateCreated}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCampaignAuditByParentId(parentId, updateCampaignAudit) {
    	try {
    		let objCampaignAudit;
    		if(sql) {
    			objCampaignAudit = await models.sequelize.campaignsAudit.findOne({where: { parent_id: parentId }});
    			if (objCampaignAudit) {
    				objCampaignAudit = await models.sequelize.campaignsAudit.update(updateCampaignAudit, { where: { parent_id: parentId } });
    			}
    		} else {
    			objCampaignAudit = await models.mongoose.campaignsAudit.findOneAndUpdate({parent_id: parentId}, {$set: updateCampaignAudit}, {new: true});
    		}
    		return objCampaignAudit;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CampaignAuditService;
//</es-section>
