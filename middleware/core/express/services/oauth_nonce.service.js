/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:36 GMT-0400 (Bolivia Time)
 * Time: 15:36:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:36 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:36
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

class OauthNonceService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOauthNonce(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.oauthNonce.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['nonce','ASC']],
                });
			} else {
				return await models.mongoose.oauthNonce.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOauthNonce(select = []) {
		try {
			if(sql) {
				return await models.sequelize.oauthNonce.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.oauthNonce.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOauthNonce(newOauthNonce) {
		try {
			let objOauthNonce;
			if(util.PrimaryKeyTypeIsString(models.sequelize.oauthNonce.primaryKeys.nonce.type.toString())) {
			    newOauthNonce.nonce = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOauthNonce = await models.sequelize.oauthNonce.create(newOauthNonce);
			} else {
				objOauthNonce = new models.mongoose.oauthNonce(newOauthNonce);
				await objOauthNonce.save();
			}
			return objOauthNonce;
		} catch (error) {
			throw error;
		}
	}

	static async updateOauthNonce(nonce, updateOauthNonce) {
		try {
			let objOauthNonce;
			if(sql) {
				objOauthNonce = await models.sequelize.oauthNonce.findOne({where: { nonce: util.String(nonce) }});
				if (objOauthNonce) {
					await models.sequelize.oauthNonce.update(updateOauthNonce, { where: { nonce: util.String(nonce) } });
					objOauthNonce = await models.sequelize.oauthNonce.findOne({where: { nonce: util.String(nonce) }});
				}
			} else {
				delete updateOauthNonce._id;
				objOauthNonce = await models.mongoose.oauthNonce.findOneAndUpdate({nonce:nonce}, {$set: updateOauthNonce}, {new: true});
			}
			return objOauthNonce;
		} catch (error) {
			throw error;
		}
	}

	static async getAOauthNonce(nonce, query) {
		try {
			let objOauthNonce;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOauthNonce = await models.sequelize.oauthNonce.findOne({
					    where: where && !where.where ? where : { nonce: util.String(nonce) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOauthNonce = await models.mongoose.oauthNonce.find({nonce:util.String(nonce)}).select(query.select);
			}
			return objOauthNonce;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOauthNonce(nonce) {
		try {
			let objOauthNonce;
			if(sql) {
				objOauthNonce = await models.sequelize.oauthNonce.findOne({ where: { nonce: util.String(nonce) } });
				if (objOauthNonce) {
					await models.sequelize.oauthNonce.destroy({where: { nonce: util.String(nonce) }});
				}
			} else {
				objOauthNonce = await models.mongoose.oauthNonce.deleteOne({nonce:util.String(nonce)});
			}
			return objOauthNonce;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByConskey(conskey, query = {}) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { conskey: conskey },
    			});
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOne({conskey: conskey});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNonce(nonce, query = {}) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nonce: nonce },
    			});
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOne({nonce: nonce});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNonceTs(nonceTs, query = {}) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nonce_ts: nonceTs },
    			});
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOne({nonce_ts: nonceTs});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOauthNonceByConskey(conskey, updateOauthNonce) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({where: { conskey: conskey }});
    			if (objOauthNonce) {
    				objOauthNonce = await models.sequelize.oauthNonce.update(updateOauthNonce, { where: { conskey: conskey } });
    			}
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOneAndUpdate({conskey: conskey}, {$set: updateOauthNonce}, {new: true});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthNonceByNonce(nonce, updateOauthNonce) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({where: { nonce: nonce }});
    			if (objOauthNonce) {
    				objOauthNonce = await models.sequelize.oauthNonce.update(updateOauthNonce, { where: { nonce: nonce } });
    			}
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOneAndUpdate({nonce: nonce}, {$set: updateOauthNonce}, {new: true});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauthNonceByNonceTs(nonceTs, updateOauthNonce) {
    	try {
    		let objOauthNonce;
    		if(sql) {
    			objOauthNonce = await models.sequelize.oauthNonce.findOne({where: { nonce_ts: nonceTs }});
    			if (objOauthNonce) {
    				objOauthNonce = await models.sequelize.oauthNonce.update(updateOauthNonce, { where: { nonce_ts: nonceTs } });
    			}
    		} else {
    			objOauthNonce = await models.mongoose.oauthNonce.findOneAndUpdate({nonce_ts: nonceTs}, {$set: updateOauthNonce}, {new: true});
    		}
    		return objOauthNonce;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = OauthNonceService;
//</es-section>
