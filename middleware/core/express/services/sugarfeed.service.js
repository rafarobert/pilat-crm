/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:11 GMT-0400 (Bolivia Time)
 * Time: 4:44:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:11 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:11
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

class SugarfeedService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSugarfeed(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.sugarfeed.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.sugarfeed.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSugarfeed(select = []) {
		try {
			if(sql) {
				return await models.sequelize.sugarfeed.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.sugarfeed.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSugarfeed(newSugarfeed) {
		try {
			let objSugarfeed;
			if(util.PrimaryKeyTypeIsString(models.sequelize.sugarfeed.primaryKeys.id.type.toString())) {
			    newSugarfeed.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSugarfeed = await models.sequelize.sugarfeed.create(newSugarfeed);
			} else {
				objSugarfeed = new models.mongoose.sugarfeed(newSugarfeed);
				await objSugarfeed.save();
			}
			return objSugarfeed;
		} catch (error) {
			throw error;
		}
	}

	static async updateSugarfeed(id, updateSugarfeed) {
		try {
			let objSugarfeed;
			if(sql) {
				objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: util.Char(id) }});
				if (objSugarfeed) {
					await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { id: util.Char(id) } });
					objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateSugarfeed._id;
				objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({id:id}, {$set: updateSugarfeed}, {new: true});
			}
			return objSugarfeed;
		} catch (error) {
			throw error;
		}
	}

	static async getASugarfeed(id, query) {
		try {
			let objSugarfeed;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSugarfeed = await models.sequelize.sugarfeed.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSugarfeed = await models.mongoose.sugarfeed.find({id:util.Char(id)}).select(query.select);
			}
			return objSugarfeed;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSugarfeed(id) {
		try {
			let objSugarfeed;
			if(sql) {
				objSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { id: util.Char(id) } });
				if (objSugarfeed) {
					await models.sequelize.sugarfeed.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objSugarfeed = await models.mongoose.sugarfeed.deleteOne({id:util.Char(id)});
			}
			return objSugarfeed;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({id: id});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({deleted: deleted});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({name: name});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedModule(relatedModule, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_module: relatedModule },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({related_module: relatedModule});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLinkUrl(linkUrl, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { link_url: linkUrl },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({link_url: linkUrl});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLinkType(linkType, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { link_type: linkType },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({link_type: linkType});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({description: description});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({date_entered: dateEntered});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({date_modified: dateModified});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({modified_user_id: modifiedUserId});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({created_by: createdBy});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({assigned_user_id: assignedUserId});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedId(relatedId, query = {}) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_id: relatedId },
    			});
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOne({related_id: relatedId});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSugarfeedById(id, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: id }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { id: id } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({id: id}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByDeleted(deleted, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { deleted: deleted }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { deleted: deleted } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({deleted: deleted}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByName(name, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { name: name }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { name: name } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({name: name}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByRelatedModule(relatedModule, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_module: relatedModule }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { related_module: relatedModule } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({related_module: relatedModule}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByLinkUrl(linkUrl, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { link_url: linkUrl }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { link_url: linkUrl } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({link_url: linkUrl}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByLinkType(linkType, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { link_type: linkType }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { link_type: linkType } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({link_type: linkType}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByDescription(description, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { description: description }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { description: description } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({description: description}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByDateEntered(dateEntered, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { date_entered: dateEntered }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({date_entered: dateEntered}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByDateModified(dateModified, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { date_modified: dateModified }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({date_modified: dateModified}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByModifiedUserId(modifiedUserId, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByCreatedBy(createdBy, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { created_by: createdBy }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { created_by: createdBy } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({created_by: createdBy}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByAssignedUserId(assignedUserId, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSugarfeedByRelatedId(relatedId, updateSugarfeed) {
    	try {
    		let objSugarfeed;
    		if(sql) {
    			objSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: relatedId }});
    			if (objSugarfeed) {
    				objSugarfeed = await models.sequelize.sugarfeed.update(updateSugarfeed, { where: { related_id: relatedId } });
    			}
    		} else {
    			objSugarfeed = await models.mongoose.sugarfeed.findOneAndUpdate({related_id: relatedId}, {$set: updateSugarfeed}, {new: true});
    		}
    		return objSugarfeed;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SugarfeedService;
//</es-section>
