/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:24 GMT-0400 (Bolivia Time)
 * Time: 4:44:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:24 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:24
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

class UserLastImportService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUsersLastImport(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.usersLastImport.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.usersLastImport.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUsersLastImport(select = []) {
		try {
			if(sql) {
				return await models.sequelize.usersLastImport.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.usersLastImport.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUserLastImport(newUserLastImport) {
		try {
			let objUserLastImport;
			if(util.PrimaryKeyTypeIsString(models.sequelize.usersLastImport.primaryKeys.id.type.toString())) {
			    newUserLastImport.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUserLastImport = await models.sequelize.usersLastImport.create(newUserLastImport);
			} else {
				objUserLastImport = new models.mongoose.usersLastImport(newUserLastImport);
				await objUserLastImport.save();
			}
			return objUserLastImport;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserLastImport(id, updateUserLastImport) {
		try {
			let objUserLastImport;
			if(sql) {
				objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { id: util.Char(id) }});
				if (objUserLastImport) {
					await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { id: util.Char(id) } });
					objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUserLastImport._id;
				objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({id:id}, {$set: updateUserLastImport}, {new: true});
			}
			return objUserLastImport;
		} catch (error) {
			throw error;
		}
	}

	static async getAUserLastImport(id, query) {
		try {
			let objUserLastImport;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUserLastImport = await models.sequelize.usersLastImport.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUserLastImport = await models.mongoose.usersLastImport.find({id:util.Char(id)}).select(query.select);
			}
			return objUserLastImport;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserLastImport(id) {
		try {
			let objUserLastImport;
			if(sql) {
				objUserLastImport = await models.sequelize.usersLastImport.findOne({ where: { id: util.Char(id) } });
				if (objUserLastImport) {
					await models.sequelize.usersLastImport.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUserLastImport = await models.mongoose.usersLastImport.deleteOne({id:util.Char(id)});
			}
			return objUserLastImport;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({id: id});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({deleted: deleted});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByImportModule(importModule, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { import_module: importModule },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({import_module: importModule});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanType(beanType, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_type: beanType },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({bean_type: beanType});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({assigned_user_id: assignedUserId});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOne({bean_id: beanId});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserLastImportById(id, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { id: id }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { id: id } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({id: id}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserLastImportByDeleted(deleted, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { deleted: deleted }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { deleted: deleted } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({deleted: deleted}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserLastImportByImportModule(importModule, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { import_module: importModule }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { import_module: importModule } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({import_module: importModule}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserLastImportByBeanType(beanType, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { bean_type: beanType }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { bean_type: beanType } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({bean_type: beanType}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserLastImportByAssignedUserId(assignedUserId, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserLastImportByBeanId(beanId, updateUserLastImport) {
    	try {
    		let objUserLastImport;
    		if(sql) {
    			objUserLastImport = await models.sequelize.usersLastImport.findOne({where: { bean_id: beanId }});
    			if (objUserLastImport) {
    				objUserLastImport = await models.sequelize.usersLastImport.update(updateUserLastImport, { where: { bean_id: beanId } });
    			}
    		} else {
    			objUserLastImport = await models.mongoose.usersLastImport.findOneAndUpdate({bean_id: beanId}, {$set: updateUserLastImport}, {new: true});
    		}
    		return objUserLastImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserLastImportService;
//</es-section>
