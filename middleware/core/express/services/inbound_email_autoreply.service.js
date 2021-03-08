/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:20 GMT-0400 (Bolivia Time)
 * Time: 15:36:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:20 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:20
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

class InboundEmailAutoreplyService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllInboundEmailAutoreply(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.inboundEmailAutoreply.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.inboundEmailAutoreply.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllInboundEmailAutoreply(select = []) {
		try {
			if(sql) {
				return await models.sequelize.inboundEmailAutoreply.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.inboundEmailAutoreply.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addInboundEmailAutoreply(newInboundEmailAutoreply) {
		try {
			let objInboundEmailAutoreply;
			if(util.PrimaryKeyTypeIsString(models.sequelize.inboundEmailAutoreply.primaryKeys.id.type.toString())) {
			    newInboundEmailAutoreply.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.create(newInboundEmailAutoreply);
			} else {
				objInboundEmailAutoreply = new models.mongoose.inboundEmailAutoreply(newInboundEmailAutoreply);
				await objInboundEmailAutoreply.save();
			}
			return objInboundEmailAutoreply;
		} catch (error) {
			throw error;
		}
	}

	static async updateInboundEmailAutoreply(id, updateInboundEmailAutoreply) {
		try {
			let objInboundEmailAutoreply;
			if(sql) {
				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { id: util.Char(id) }});
				if (objInboundEmailAutoreply) {
					await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { id: util.Char(id) } });
					objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateInboundEmailAutoreply._id;
				objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({id:id}, {$set: updateInboundEmailAutoreply}, {new: true});
			}
			return objInboundEmailAutoreply;
		} catch (error) {
			throw error;
		}
	}

	static async getAInboundEmailAutoreply(id, query) {
		try {
			let objInboundEmailAutoreply;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.find({id:util.Char(id)}).select(query.select);
			}
			return objInboundEmailAutoreply;
		} catch (error) {
			throw error;
		}
	}

	static async deleteInboundEmailAutoreply(id) {
		try {
			let objInboundEmailAutoreply;
			if(sql) {
				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({ where: { id: util.Char(id) } });
				if (objInboundEmailAutoreply) {
					await models.sequelize.inboundEmailAutoreply.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.deleteOne({id:util.Char(id)});
			}
			return objInboundEmailAutoreply;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({id: id});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({deleted: deleted});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAutorepliedTo(autorepliedTo, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { autoreplied_to: autorepliedTo },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({autoreplied_to: autorepliedTo});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({date_entered: dateEntered});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({date_modified: dateModified});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIeId(ieId, query = {}) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ie_id: ieId },
    			});
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOne({ie_id: ieId});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateInboundEmailAutoreplyById(id, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { id: id }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { id: id } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({id: id}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailAutoreplyByDeleted(deleted, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { deleted: deleted }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { deleted: deleted } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({deleted: deleted}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailAutoreplyByAutorepliedTo(autorepliedTo, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { autoreplied_to: autorepliedTo }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { autoreplied_to: autorepliedTo } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({autoreplied_to: autorepliedTo}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailAutoreplyByDateEntered(dateEntered, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { date_entered: dateEntered }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({date_entered: dateEntered}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailAutoreplyByDateModified(dateModified, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { date_modified: dateModified }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({date_modified: dateModified}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateInboundEmailAutoreplyByIeId(ieId, updateInboundEmailAutoreply) {
    	try {
    		let objInboundEmailAutoreply;
    		if(sql) {
    			objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.findOne({where: { ie_id: ieId }});
    			if (objInboundEmailAutoreply) {
    				objInboundEmailAutoreply = await models.sequelize.inboundEmailAutoreply.update(updateInboundEmailAutoreply, { where: { ie_id: ieId } });
    			}
    		} else {
    			objInboundEmailAutoreply = await models.mongoose.inboundEmailAutoreply.findOneAndUpdate({ie_id: ieId}, {$set: updateInboundEmailAutoreply}, {new: true});
    		}
    		return objInboundEmailAutoreply;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = InboundEmailAutoreplyService;
//</es-section>
