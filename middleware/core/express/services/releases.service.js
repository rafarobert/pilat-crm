/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:37 GMT-0400 (Bolivia Time)
 * Time: 14:57:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:37 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:37
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

class ReleaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllReleases(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.releases.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.releases.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllReleases(select = []) {
		try {
			if(sql) {
				return await models.sequelize.releases.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.releases.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addRelease(newRelease) {
		try {
			let objRelease;
			if(util.PrimaryKeyTypeIsString(models.sequelize.releases.primaryKeys.id.type.toString())) {
			    newRelease.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objRelease = await models.sequelize.releases.create(newRelease);
			} else {
				objRelease = new models.mongoose.releases(newRelease);
				await objRelease.save();
			}
			return objRelease;
		} catch (error) {
			throw error;
		}
	}

	static async updateRelease(id, updateRelease) {
		try {
			let objRelease;
			if(sql) {
				objRelease = await models.sequelize.releases.findOne({where: { id: util.Char(id) }});
				if (objRelease) {
					await models.sequelize.releases.update(updateRelease, { where: { id: util.Char(id) } });
					objRelease = await models.sequelize.releases.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateRelease._id;
				objRelease = await models.mongoose.releases.findOneAndUpdate({id:id}, {$set: updateRelease}, {new: true});
			}
			return objRelease;
		} catch (error) {
			throw error;
		}
	}

	static async getARelease(id, query) {
		try {
			let objRelease;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objRelease = await models.sequelize.releases.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objRelease = await models.mongoose.releases.find({id:util.Char(id)}).select(query.select);
			}
			return objRelease;
		} catch (error) {
			throw error;
		}
	}

	static async deleteRelease(id) {
		try {
			let objRelease;
			if(sql) {
				objRelease = await models.sequelize.releases.findOne({ where: { id: util.Char(id) } });
				if (objRelease) {
					await models.sequelize.releases.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objRelease = await models.mongoose.releases.deleteOne({id:util.Char(id)});
			}
			return objRelease;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({id: id});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({deleted: deleted});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByListOrder(listOrder, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { list_order: listOrder },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({list_order: listOrder});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({name: name});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({status: status});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({date_entered: dateEntered});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({date_modified: dateModified});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({modified_user_id: modifiedUserId});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objRelease = await models.mongoose.releases.findOne({created_by: createdBy});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateReleaseById(id, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { id: id }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { id: id } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({id: id}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByDeleted(deleted, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { deleted: deleted }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { deleted: deleted } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({deleted: deleted}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByListOrder(listOrder, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { list_order: listOrder }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { list_order: listOrder } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({list_order: listOrder}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByName(name, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { name: name }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { name: name } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({name: name}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByStatus(status, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { status: status }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { status: status } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({status: status}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByDateEntered(dateEntered, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { date_entered: dateEntered }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({date_entered: dateEntered}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByDateModified(dateModified, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { date_modified: dateModified }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({date_modified: dateModified}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByModifiedUserId(modifiedUserId, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateReleaseByCreatedBy(createdBy, updateRelease) {
    	try {
    		let objRelease;
    		if(sql) {
    			objRelease = await models.sequelize.releases.findOne({where: { created_by: createdBy }});
    			if (objRelease) {
    				objRelease = await models.sequelize.releases.update(updateRelease, { where: { created_by: createdBy } });
    			}
    		} else {
    			objRelease = await models.mongoose.releases.findOneAndUpdate({created_by: createdBy}, {$set: updateRelease}, {new: true});
    		}
    		return objRelease;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ReleaseService;
//</es-section>
