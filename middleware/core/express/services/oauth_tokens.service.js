/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:37 GMT-0400 (Bolivia Time)
 * Time: 15:36:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:37 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:37
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

class OauthTokenService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOauthTokens(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.oauthTokens.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.oauthTokens.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOauthTokens(select = []) {
		try {
			if(sql) {
				return await models.sequelize.oauthTokens.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.oauthTokens.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOauthToken(newOauthToken) {
		try {
			let objOauthToken;
			if(util.PrimaryKeyTypeIsString(models.sequelize.oauthTokens.primaryKeys.id.type.toString())) {
			    newOauthToken.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOauthToken = await models.sequelize.oauthTokens.create(newOauthToken);
			} else {
				objOauthToken = new models.mongoose.oauthTokens(newOauthToken);
				await objOauthToken.save();
			}
			return objOauthToken;
		} catch (error) {
			throw error;
		}
	}

	static async updateOauthToken(id, updateOauthToken) {
		try {
			let objOauthToken;
			if(sql) {
				objOauthToken = await models.sequelize.oauthTokens.findOne({where: { id: util.Char(id) }});
				if (objOauthToken) {
					await models.sequelize.oauthTokens.update(updateOauthToken, { where: { id: util.Char(id) } });
					objOauthToken = await models.sequelize.oauthTokens.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOauthToken._id;
				objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({id:id}, {$set: updateOauthToken}, {new: true});
			}
			return objOauthToken;
		} catch (error) {
			throw error;
		}
	}

	static async getAOauthToken(id, query) {
		try {
			let objOauthToken;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOauthToken = await models.sequelize.oauthTokens.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOauthToken = await models.mongoose.oauthTokens.find({id:util.Char(id)}).select(query.select);
			}
			return objOauthToken;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOauthToken(id) {
		try {
			let objOauthToken;
			if(sql) {
				objOauthToken = await models.sequelize.oauthTokens.findOne({ where: { id: util.Char(id) } });
				if (objOauthToken) {
					await models.sequelize.oauthTokens.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOauthToken = await models.mongoose.oauthTokens.deleteOne({id:util.Char(id)});
			}
			return objOauthToken;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({id: id});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({deleted: deleted});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTokenTs(tokenTs, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { token_ts: tokenTs },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({token_ts: tokenTs});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecret(secret, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { secret: secret },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({secret: secret});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTstate(tstate, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tstate: tstate },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({tstate: tstate});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVerify(verify, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { verify: verify },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({verify: verify});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCallbackUrl(callbackUrl, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { callback_url: callbackUrl },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({callback_url: callbackUrl});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConsumer(consumer, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { consumer: consumer },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({consumer: consumer});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOauthTokenById(id, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { id: id }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { id: id } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({id: id}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByDeleted(deleted, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { deleted: deleted }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { deleted: deleted } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({deleted: deleted}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByTokenTs(tokenTs, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { token_ts: tokenTs }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { token_ts: tokenTs } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({token_ts: tokenTs}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenBySecret(secret, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { secret: secret }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { secret: secret } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({secret: secret}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByTstate(tstate, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { tstate: tstate }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { tstate: tstate } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({tstate: tstate}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByVerify(verify, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { verify: verify }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { verify: verify } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({verify: verify}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByCallbackUrl(callbackUrl, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { callback_url: callbackUrl }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { callback_url: callbackUrl } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({callback_url: callbackUrl}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByConsumer(consumer, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { consumer: consumer }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { consumer: consumer } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({consumer: consumer}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthTokenByAssignedUserId(assignedUserId, updateOauthToken) {
    	try {
    		let objOauthToken;
    		if(sql) {
    			objOauthToken = await models.sequelize.oauthTokens.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOauthToken) {
    				objOauthToken = await models.sequelize.oauthTokens.update(updateOauthToken, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOauthToken = await models.mongoose.oauthTokens.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOauthToken}, {new: true});
    		}
    		return objOauthToken;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OauthTokenService;
//</es-section>
