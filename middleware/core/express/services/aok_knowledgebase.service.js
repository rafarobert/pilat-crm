/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Time: 14:55:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:55:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:55:59
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

class AokKnowledgebaseService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAokKnowledgebase(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aokKnowledgebase.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aokKnowledgebase.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAokKnowledgebase(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aokKnowledgebase.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aokKnowledgebase.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAokKnowledgebase(newAokKnowledgebase) {
		try {
			let objAokKnowledgebase;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aokKnowledgebase.primaryKeys.id.type.toString())) {
			    newAokKnowledgebase.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.create(newAokKnowledgebase);
			} else {
				objAokKnowledgebase = new models.mongoose.aokKnowledgebase(newAokKnowledgebase);
				await objAokKnowledgebase.save();
			}
			return objAokKnowledgebase;
		} catch (error) {
			throw error;
		}
	}

	static async updateAokKnowledgebase(id, updateAokKnowledgebase) {
		try {
			let objAokKnowledgebase;
			if(sql) {
				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { id: util.Char(id) }});
				if (objAokKnowledgebase) {
					await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { id: util.Char(id) } });
					objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAokKnowledgebase._id;
				objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({id:id}, {$set: updateAokKnowledgebase}, {new: true});
			}
			return objAokKnowledgebase;
		} catch (error) {
			throw error;
		}
	}

	static async getAAokKnowledgebase(id, query) {
		try {
			let objAokKnowledgebase;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAokKnowledgebase = await models.mongoose.aokKnowledgebase.find({id:util.Char(id)}).select(query.select);
			}
			return objAokKnowledgebase;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAokKnowledgebase(id) {
		try {
			let objAokKnowledgebase;
			if(sql) {
				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({ where: { id: util.Char(id) } });
				if (objAokKnowledgebase) {
					await models.sequelize.aokKnowledgebase.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAokKnowledgebase = await models.mongoose.aokKnowledgebase.deleteOne({id:util.Char(id)});
			}
			return objAokKnowledgebase;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({id: id});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({deleted: deleted});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({name: name});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({status: status});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRevision(revision, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { revision: revision },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({revision: revision});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({description: description});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAdditionalInfo(additionalInfo, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { additional_info: additionalInfo },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({additional_info: additionalInfo});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({date_entered: dateEntered});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({date_modified: dateModified});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({created_by: createdBy});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({assigned_user_id: assignedUserId});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserIdC(userIdC, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id_c: userIdC },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({user_id_c: userIdC});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId1C(userId1C, query = {}) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id1_c: userId1C },
    			});
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOne({user_id1_c: userId1C});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAokKnowledgebaseById(id, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { id: id }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { id: id } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({id: id}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByDeleted(deleted, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { deleted: deleted }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { deleted: deleted } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({deleted: deleted}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByName(name, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { name: name }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { name: name } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({name: name}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByStatus(status, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { status: status }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { status: status } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({status: status}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByRevision(revision, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { revision: revision }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { revision: revision } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({revision: revision}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByDescription(description, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { description: description }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { description: description } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({description: description}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByAdditionalInfo(additionalInfo, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { additional_info: additionalInfo }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { additional_info: additionalInfo } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({additional_info: additionalInfo}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByDateEntered(dateEntered, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { date_entered: dateEntered }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByDateModified(dateModified, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { date_modified: dateModified }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({date_modified: dateModified}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByModifiedUserId(modifiedUserId, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByCreatedBy(createdBy, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { created_by: createdBy }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({created_by: createdBy}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByAssignedUserId(assignedUserId, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByUserIdC(userIdC, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { user_id_c: userIdC }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { user_id_c: userIdC } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({user_id_c: userIdC}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAokKnowledgebaseByUserId1C(userId1C, updateAokKnowledgebase) {
    	try {
    		let objAokKnowledgebase;
    		if(sql) {
    			objAokKnowledgebase = await models.sequelize.aokKnowledgebase.findOne({where: { user_id1_c: userId1C }});
    			if (objAokKnowledgebase) {
    				objAokKnowledgebase = await models.sequelize.aokKnowledgebase.update(updateAokKnowledgebase, { where: { user_id1_c: userId1C } });
    			}
    		} else {
    			objAokKnowledgebase = await models.mongoose.aokKnowledgebase.findOneAndUpdate({user_id1_c: userId1C}, {$set: updateAokKnowledgebase}, {new: true});
    		}
    		return objAokKnowledgebase;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AokKnowledgebaseService;
//</es-section>
