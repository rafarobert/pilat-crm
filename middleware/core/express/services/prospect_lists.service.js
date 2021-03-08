/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:53 GMT-0400 (Bolivia Time)
 * Time: 15:36:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:53 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:53
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

class ProspectListService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProspectLists(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.prospectLists.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.prospectLists.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProspectLists(select = []) {
		try {
			if(sql) {
				return await models.sequelize.prospectLists.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.prospectLists.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProspectList(newProspectList) {
		try {
			let objProspectList;
			if(util.PrimaryKeyTypeIsString(models.sequelize.prospectLists.primaryKeys.id.type.toString())) {
			    newProspectList.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProspectList = await models.sequelize.prospectLists.create(newProspectList);
			} else {
				objProspectList = new models.mongoose.prospectLists(newProspectList);
				await objProspectList.save();
			}
			return objProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async updateProspectList(id, updateProspectList) {
		try {
			let objProspectList;
			if(sql) {
				objProspectList = await models.sequelize.prospectLists.findOne({where: { id: util.Char(id) }});
				if (objProspectList) {
					await models.sequelize.prospectLists.update(updateProspectList, { where: { id: util.Char(id) } });
					objProspectList = await models.sequelize.prospectLists.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateProspectList._id;
				objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({id:id}, {$set: updateProspectList}, {new: true});
			}
			return objProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async getAProspectList(id, query) {
		try {
			let objProspectList;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProspectList = await models.sequelize.prospectLists.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProspectList = await models.mongoose.prospectLists.find({id:util.Char(id)}).select(query.select);
			}
			return objProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProspectList(id) {
		try {
			let objProspectList;
			if(sql) {
				objProspectList = await models.sequelize.prospectLists.findOne({ where: { id: util.Char(id) } });
				if (objProspectList) {
					await models.sequelize.prospectLists.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objProspectList = await models.mongoose.prospectLists.deleteOne({id:util.Char(id)});
			}
			return objProspectList;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({id: id});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({deleted: deleted});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({name: name});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByListType(listType, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { list_type: listType },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({list_type: listType});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDomainName(domainName, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { domain_name: domainName },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({domain_name: domainName});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({description: description});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({date_entered: dateEntered});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({date_modified: dateModified});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({assigned_user_id: assignedUserId});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({modified_user_id: modifiedUserId});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOne({created_by: createdBy});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProspectListById(id, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { id: id }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { id: id } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({id: id}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByDeleted(deleted, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { deleted: deleted }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { deleted: deleted } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({deleted: deleted}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByName(name, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { name: name }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { name: name } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({name: name}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByListType(listType, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { list_type: listType }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { list_type: listType } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({list_type: listType}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByDomainName(domainName, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { domain_name: domainName }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { domain_name: domainName } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({domain_name: domainName}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByDescription(description, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { description: description }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { description: description } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({description: description}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByDateEntered(dateEntered, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { date_entered: dateEntered }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({date_entered: dateEntered}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByDateModified(dateModified, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { date_modified: dateModified }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({date_modified: dateModified}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByAssignedUserId(assignedUserId, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByModifiedUserId(modifiedUserId, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectListByCreatedBy(createdBy, updateProspectList) {
    	try {
    		let objProspectList;
    		if(sql) {
    			objProspectList = await models.sequelize.prospectLists.findOne({where: { created_by: createdBy }});
    			if (objProspectList) {
    				objProspectList = await models.sequelize.prospectLists.update(updateProspectList, { where: { created_by: createdBy } });
    			}
    		} else {
    			objProspectList = await models.mongoose.prospectLists.findOneAndUpdate({created_by: createdBy}, {$set: updateProspectList}, {new: true});
    		}
    		return objProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProspectListService;
//</es-section>
