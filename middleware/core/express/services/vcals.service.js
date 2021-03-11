/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Time: 14:57:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:56
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

class VcalService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllVcals(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.vcals.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.vcals.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllVcals(select = []) {
		try {
			if(sql) {
				return await models.sequelize.vcals.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.vcals.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addVcal(newVcal) {
		try {
			let objVcal;
			if(util.PrimaryKeyTypeIsString(models.sequelize.vcals.primaryKeys.id.type.toString())) {
			    newVcal.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objVcal = await models.sequelize.vcals.create(newVcal);
			} else {
				objVcal = new models.mongoose.vcals(newVcal);
				await objVcal.save();
			}
			return objVcal;
		} catch (error) {
			throw error;
		}
	}

	static async updateVcal(id, updateVcal) {
		try {
			let objVcal;
			if(sql) {
				objVcal = await models.sequelize.vcals.findOne({where: { id: util.Char(id) }});
				if (objVcal) {
					await models.sequelize.vcals.update(updateVcal, { where: { id: util.Char(id) } });
					objVcal = await models.sequelize.vcals.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateVcal._id;
				objVcal = await models.mongoose.vcals.findOneAndUpdate({id:id}, {$set: updateVcal}, {new: true});
			}
			return objVcal;
		} catch (error) {
			throw error;
		}
	}

	static async getAVcal(id, query) {
		try {
			let objVcal;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objVcal = await models.sequelize.vcals.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objVcal = await models.mongoose.vcals.find({id:util.Char(id)}).select(query.select);
			}
			return objVcal;
		} catch (error) {
			throw error;
		}
	}

	static async deleteVcal(id) {
		try {
			let objVcal;
			if(sql) {
				objVcal = await models.sequelize.vcals.findOne({ where: { id: util.Char(id) } });
				if (objVcal) {
					await models.sequelize.vcals.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objVcal = await models.mongoose.vcals.deleteOne({id:util.Char(id)});
			}
			return objVcal;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({id: id});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({deleted: deleted});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({type: type});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySource(source, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { source: source },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({source: source});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContent(content, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { content: content },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({content: content});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({date_entered: dateEntered});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({date_modified: dateModified});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objVcal = await models.mongoose.vcals.findOne({user_id: userId});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateVcalById(id, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { id: id }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { id: id } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({id: id}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByDeleted(deleted, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { deleted: deleted }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { deleted: deleted } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({deleted: deleted}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByType(type, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { type: type }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { type: type } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({type: type}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalBySource(source, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { source: source }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { source: source } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({source: source}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByContent(content, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { content: content }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { content: content } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({content: content}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByDateEntered(dateEntered, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { date_entered: dateEntered }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({date_entered: dateEntered}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByDateModified(dateModified, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { date_modified: dateModified }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({date_modified: dateModified}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateVcalByUserId(userId, updateVcal) {
    	try {
    		let objVcal;
    		if(sql) {
    			objVcal = await models.sequelize.vcals.findOne({where: { user_id: userId }});
    			if (objVcal) {
    				objVcal = await models.sequelize.vcals.update(updateVcal, { where: { user_id: userId } });
    			}
    		} else {
    			objVcal = await models.mongoose.vcals.findOneAndUpdate({user_id: userId}, {$set: updateVcal}, {new: true});
    		}
    		return objVcal;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = VcalService;
//</es-section>
