/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:11 GMT-0400 (Bolivia Time)
 * Time: 14:1:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:11 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:11
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

class Oauth2tokenService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllOauth2tokens(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.oauth2tokens.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.oauth2tokens.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllOauth2tokens(select = []) {
		try {
			if(sql) {
				return await models.sequelize.oauth2tokens.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.oauth2tokens.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addOauth2token(newOauth2token) {
		try {
			let objOauth2token;
			if(util.PrimaryKeyTypeIsString(models.sequelize.oauth2tokens.primaryKeys.id.type.toString())) {
			    newOauth2token.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objOauth2token = await models.sequelize.oauth2tokens.create(newOauth2token);
			} else {
				objOauth2token = new models.mongoose.oauth2tokens(newOauth2token);
				await objOauth2token.save();
			}
			return objOauth2token;
		} catch (error) {
			throw error;
		}
	}

	static async updateOauth2token(id, updateOauth2token) {
		try {
			let objOauth2token;
			if(sql) {
				objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { id: util.Char(id) }});
				if (objOauth2token) {
					await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { id: util.Char(id) } });
					objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateOauth2token._id;
				objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({id:id}, {$set: updateOauth2token}, {new: true});
			}
			return objOauth2token;
		} catch (error) {
			throw error;
		}
	}

	static async getAOauth2token(id, query) {
		try {
			let objOauth2token;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objOauth2token = await models.sequelize.oauth2tokens.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objOauth2token = await models.mongoose.oauth2tokens.find({id:util.Char(id)}).select(query.select);
			}
			return objOauth2token;
		} catch (error) {
			throw error;
		}
	}

	static async deleteOauth2token(id) {
		try {
			let objOauth2token;
			if(sql) {
				objOauth2token = await models.sequelize.oauth2tokens.findOne({ where: { id: util.Char(id) } });
				if (objOauth2token) {
					await models.sequelize.oauth2tokens.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objOauth2token = await models.mongoose.oauth2tokens.deleteOne({id:util.Char(id)});
			}
			return objOauth2token;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({id: id});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({deleted: deleted});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTokenIsRevoked(tokenIsRevoked, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { token_is_revoked: tokenIsRevoked },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({token_is_revoked: tokenIsRevoked});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({name: name});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTokenType(tokenType, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { token_type: tokenType },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({token_type: tokenType});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccessToken(accessToken, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { access_token: accessToken },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({access_token: accessToken});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRefreshToken(refreshToken, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { refresh_token: refreshToken },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({refresh_token: refreshToken});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGrantType(grantType, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { grant_type: grantType },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({grant_type: grantType});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByState(state, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { state: state },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({state: state});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({description: description});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({date_entered: dateEntered});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({date_modified: dateModified});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccessTokenExpires(accessTokenExpires, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { access_token_expires: accessTokenExpires },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({access_token_expires: accessTokenExpires});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRefreshTokenExpires(refreshTokenExpires, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { refresh_token_expires: refreshTokenExpires },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({refresh_token_expires: refreshTokenExpires});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({modified_user_id: modifiedUserId});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({created_by: createdBy});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByClient(client, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { client: client },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({client: client});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOne({assigned_user_id: assignedUserId});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateOauth2tokenById(id, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { id: id }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { id: id } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({id: id}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByDeleted(deleted, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { deleted: deleted }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { deleted: deleted } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({deleted: deleted}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByTokenIsRevoked(tokenIsRevoked, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { token_is_revoked: tokenIsRevoked }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { token_is_revoked: tokenIsRevoked } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({token_is_revoked: tokenIsRevoked}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByName(name, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { name: name }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { name: name } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({name: name}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByTokenType(tokenType, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { token_type: tokenType }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { token_type: tokenType } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({token_type: tokenType}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByAccessToken(accessToken, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { access_token: accessToken }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { access_token: accessToken } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({access_token: accessToken}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByRefreshToken(refreshToken, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { refresh_token: refreshToken }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { refresh_token: refreshToken } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({refresh_token: refreshToken}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByGrantType(grantType, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { grant_type: grantType }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { grant_type: grantType } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({grant_type: grantType}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByState(state, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { state: state }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { state: state } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({state: state}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByDescription(description, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { description: description }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { description: description } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({description: description}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByDateEntered(dateEntered, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { date_entered: dateEntered }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({date_entered: dateEntered}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByDateModified(dateModified, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { date_modified: dateModified }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({date_modified: dateModified}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByAccessTokenExpires(accessTokenExpires, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { access_token_expires: accessTokenExpires }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { access_token_expires: accessTokenExpires } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({access_token_expires: accessTokenExpires}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByRefreshTokenExpires(refreshTokenExpires, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { refresh_token_expires: refreshTokenExpires }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { refresh_token_expires: refreshTokenExpires } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({refresh_token_expires: refreshTokenExpires}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByModifiedUserId(modifiedUserId, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByCreatedBy(createdBy, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { created_by: createdBy }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { created_by: createdBy } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({created_by: createdBy}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByClient(client, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { client: client }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { client: client } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({client: client}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateOauth2tokenByAssignedUserId(assignedUserId, updateOauth2token) {
    	try {
    		let objOauth2token;
    		if(sql) {
    			objOauth2token = await models.sequelize.oauth2tokens.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objOauth2token) {
    				objOauth2token = await models.sequelize.oauth2tokens.update(updateOauth2token, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objOauth2token = await models.mongoose.oauth2tokens.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateOauth2token}, {new: true});
    		}
    		return objOauth2token;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = Oauth2tokenService;
//</es-section>
