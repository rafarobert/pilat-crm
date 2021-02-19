/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:59 GMT-0400 (Bolivia Time)
 * Time: 18:36:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:59 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:59
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

class EapmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEapm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.eapm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.eapm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEapm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.eapm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.eapm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEapm(newEapm) {
		try {
			let objEapm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.eapm.primaryKeys.id.type.toString())) {
			    newEapm.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEapm = await models.sequelize.eapm.create(newEapm);
			} else {
				objEapm = new models.mongoose.eapm(newEapm);
				await objEapm.save();
			}
			return objEapm;
		} catch (error) {
			throw error;
		}
	}

	static async updateEapm(id, updateEapm) {
		try {
			let objEapm;
			if(sql) {
				objEapm = await models.sequelize.eapm.findOne({where: { id: util.Char(id) }});
				if (objEapm) {
					await models.sequelize.eapm.update(updateEapm, { where: { id: util.Char(id) } });
					objEapm = await models.sequelize.eapm.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateEapm._id;
				objEapm = await models.mongoose.eapm.findOneAndUpdate({id:id}, {$set: updateEapm}, {new: true});
			}
			return objEapm;
		} catch (error) {
			throw error;
		}
	}

	static async getAEapm(id, query) {
		try {
			let objEapm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEapm = await models.sequelize.eapm.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEapm = await models.mongoose.eapm.find({id:util.Char(id)}).select(query.select);
			}
			return objEapm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEapm(id) {
		try {
			let objEapm;
			if(sql) {
				objEapm = await models.sequelize.eapm.findOne({ where: { id: util.Char(id) } });
				if (objEapm) {
					await models.sequelize.eapm.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objEapm = await models.mongoose.eapm.deleteOne({id:util.Char(id)});
			}
			return objEapm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({id: id});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({deleted: deleted});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByValidated(validated, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { validated: validated },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({validated: validated});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({name: name});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPassword(password, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { password: password },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({password: password});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUrl(url, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { url: url },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({url: url});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByApplication(application, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { application: application },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({application: application});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConsumerKey(consumerKey, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { consumer_key: consumerKey },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({consumer_key: consumerKey});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConsumerSecret(consumerSecret, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { consumer_secret: consumerSecret },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({consumer_secret: consumerSecret});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOauthToken(oauthToken, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { oauth_token: oauthToken },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({oauth_token: oauthToken});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOauthSecret(oauthSecret, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { oauth_secret: oauthSecret },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({oauth_secret: oauthSecret});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({description: description});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByApiData(apiData, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { api_data: apiData },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({api_data: apiData});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({date_entered: dateEntered});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({date_modified: dateModified});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({modified_user_id: modifiedUserId});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({created_by: createdBy});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objEapm = await models.mongoose.eapm.findOne({assigned_user_id: assignedUserId});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEapmById(id, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { id: id }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { id: id } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({id: id}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByDeleted(deleted, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { deleted: deleted }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { deleted: deleted } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({deleted: deleted}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByValidated(validated, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { validated: validated }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { validated: validated } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({validated: validated}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByName(name, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { name: name }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { name: name } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({name: name}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByPassword(password, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { password: password }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { password: password } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({password: password}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByUrl(url, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { url: url }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { url: url } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({url: url}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByApplication(application, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { application: application }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { application: application } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({application: application}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByConsumerKey(consumerKey, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { consumer_key: consumerKey }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { consumer_key: consumerKey } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({consumer_key: consumerKey}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByConsumerSecret(consumerSecret, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { consumer_secret: consumerSecret }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { consumer_secret: consumerSecret } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({consumer_secret: consumerSecret}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByOauthToken(oauthToken, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { oauth_token: oauthToken }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { oauth_token: oauthToken } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({oauth_token: oauthToken}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByOauthSecret(oauthSecret, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { oauth_secret: oauthSecret }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { oauth_secret: oauthSecret } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({oauth_secret: oauthSecret}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByDescription(description, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { description: description }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { description: description } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({description: description}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByApiData(apiData, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { api_data: apiData }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { api_data: apiData } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({api_data: apiData}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByDateEntered(dateEntered, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { date_entered: dateEntered }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({date_entered: dateEntered}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByDateModified(dateModified, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { date_modified: dateModified }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({date_modified: dateModified}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByModifiedUserId(modifiedUserId, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByCreatedBy(createdBy, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { created_by: createdBy }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { created_by: createdBy } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({created_by: createdBy}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEapmByAssignedUserId(assignedUserId, updateEapm) {
    	try {
    		let objEapm;
    		if(sql) {
    			objEapm = await models.sequelize.eapm.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objEapm) {
    				objEapm = await models.sequelize.eapm.update(updateEapm, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objEapm = await models.mongoose.eapm.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateEapm}, {new: true});
    		}
    		return objEapm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EapmService;
//</es-section>
