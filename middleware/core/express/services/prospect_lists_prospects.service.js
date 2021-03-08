/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Time: 15:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:54
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

class ProspectListProspectService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProspectListsProspects(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.prospectListsProspects.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.prospectListsProspects.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProspectListsProspects(select = []) {
		try {
			if(sql) {
				return await models.sequelize.prospectListsProspects.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.prospectListsProspects.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProspectListProspect(newProspectListProspect) {
		try {
			let objProspectListProspect;
			if(util.PrimaryKeyTypeIsString(models.sequelize.prospectListsProspects.primaryKeys.id.type.toString())) {
			    newProspectListProspect.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProspectListProspect = await models.sequelize.prospectListsProspects.create(newProspectListProspect);
			} else {
				objProspectListProspect = new models.mongoose.prospectListsProspects(newProspectListProspect);
				await objProspectListProspect.save();
			}
			return objProspectListProspect;
		} catch (error) {
			throw error;
		}
	}

	static async updateProspectListProspect(id, updateProspectListProspect) {
		try {
			let objProspectListProspect;
			if(sql) {
				objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { id: util.String(id) }});
				if (objProspectListProspect) {
					await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { id: util.String(id) } });
					objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateProspectListProspect._id;
				objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({id:id}, {$set: updateProspectListProspect}, {new: true});
			}
			return objProspectListProspect;
		} catch (error) {
			throw error;
		}
	}

	static async getAProspectListProspect(id, query) {
		try {
			let objProspectListProspect;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProspectListProspect = await models.mongoose.prospectListsProspects.find({id:util.String(id)}).select(query.select);
			}
			return objProspectListProspect;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProspectListProspect(id) {
		try {
			let objProspectListProspect;
			if(sql) {
				objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({ where: { id: util.String(id) } });
				if (objProspectListProspect) {
					await models.sequelize.prospectListsProspects.destroy({where: { id: util.String(id) }});
				}
			} else {
				objProspectListProspect = await models.mongoose.prospectListsProspects.deleteOne({id:util.String(id)});
			}
			return objProspectListProspect;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({id: id});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({deleted: deleted});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProspectListId(prospectListId, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { prospect_list_id: prospectListId },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({prospect_list_id: prospectListId});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedId(relatedId, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_id: relatedId },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({related_id: relatedId});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedType(relatedType, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_type: relatedType },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({related_type: relatedType});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOne({date_modified: dateModified});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProspectListProspectById(id, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { id: id }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { id: id } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({id: id}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListProspectByDeleted(deleted, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { deleted: deleted }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { deleted: deleted } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({deleted: deleted}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListProspectByProspectListId(prospectListId, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { prospect_list_id: prospectListId }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { prospect_list_id: prospectListId } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({prospect_list_id: prospectListId}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListProspectByRelatedId(relatedId, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { related_id: relatedId }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { related_id: relatedId } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({related_id: relatedId}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListProspectByRelatedType(relatedType, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { related_type: relatedType }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { related_type: relatedType } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({related_type: relatedType}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListProspectByDateModified(dateModified, updateProspectListProspect) {
    	try {
    		let objProspectListProspect;
    		if(sql) {
    			objProspectListProspect = await models.sequelize.prospectListsProspects.findOne({where: { date_modified: dateModified }});
    			if (objProspectListProspect) {
    				objProspectListProspect = await models.sequelize.prospectListsProspects.update(updateProspectListProspect, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProspectListProspect = await models.mongoose.prospectListsProspects.findOneAndUpdate({date_modified: dateModified}, {$set: updateProspectListProspect}, {new: true});
    		}
    		return objProspectListProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProspectListProspectService;
//</es-section>
