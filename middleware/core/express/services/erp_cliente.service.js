/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Time: 14:56:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:50
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

class ErpClienteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllErpCliente(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.erpCliente.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.erpCliente.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllErpCliente(select = []) {
		try {
			if(sql) {
				return await models.sequelize.erpCliente.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.erpCliente.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addErpCliente(newErpCliente) {
		try {
			let objErpCliente;
			if(util.PrimaryKeyTypeIsString(models.sequelize.erpCliente.primaryKeys.id.type.toString())) {
			    newErpCliente.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objErpCliente = await models.sequelize.erpCliente.create(newErpCliente);
			} else {
				objErpCliente = new models.mongoose.erpCliente(newErpCliente);
				await objErpCliente.save();
			}
			return objErpCliente;
		} catch (error) {
			throw error;
		}
	}

	static async updateErpCliente(id, updateErpCliente) {
		try {
			let objErpCliente;
			if(sql) {
				objErpCliente = await models.sequelize.erpCliente.findOne({where: { id: util.Char(id) }});
				if (objErpCliente) {
					await models.sequelize.erpCliente.update(updateErpCliente, { where: { id: util.Char(id) } });
					objErpCliente = await models.sequelize.erpCliente.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateErpCliente._id;
				objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({id:id}, {$set: updateErpCliente}, {new: true});
			}
			return objErpCliente;
		} catch (error) {
			throw error;
		}
	}

	static async getAErpCliente(id, query) {
		try {
			let objErpCliente;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objErpCliente = await models.sequelize.erpCliente.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objErpCliente = await models.mongoose.erpCliente.find({id:util.Char(id)}).select(query.select);
			}
			return objErpCliente;
		} catch (error) {
			throw error;
		}
	}

	static async deleteErpCliente(id) {
		try {
			let objErpCliente;
			if(sql) {
				objErpCliente = await models.sequelize.erpCliente.findOne({ where: { id: util.Char(id) } });
				if (objErpCliente) {
					await models.sequelize.erpCliente.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objErpCliente = await models.mongoose.erpCliente.deleteOne({id:util.Char(id)});
			}
			return objErpCliente;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({id: id});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({deleted: deleted});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({name: name});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({description: description});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({date_entered: dateEntered});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({date_modified: dateModified});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({modified_user_id: modifiedUserId});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({created_by: createdBy});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOne({assigned_user_id: assignedUserId});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateErpClienteById(id, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { id: id }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { id: id } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({id: id}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByDeleted(deleted, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { deleted: deleted }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { deleted: deleted } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({deleted: deleted}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByName(name, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { name: name }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { name: name } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({name: name}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByDescription(description, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { description: description }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { description: description } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({description: description}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByDateEntered(dateEntered, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { date_entered: dateEntered }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({date_entered: dateEntered}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByDateModified(dateModified, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { date_modified: dateModified }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({date_modified: dateModified}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByModifiedUserId(modifiedUserId, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByCreatedBy(createdBy, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { created_by: createdBy }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { created_by: createdBy } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({created_by: createdBy}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateErpClienteByAssignedUserId(assignedUserId, updateErpCliente) {
    	try {
    		let objErpCliente;
    		if(sql) {
    			objErpCliente = await models.sequelize.erpCliente.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objErpCliente) {
    				objErpCliente = await models.sequelize.erpCliente.update(updateErpCliente, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objErpCliente = await models.mongoose.erpCliente.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateErpCliente}, {new: true});
    		}
    		return objErpCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ErpClienteService;
//</es-section>
