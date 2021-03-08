/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:14 GMT-0400 (Bolivia Time)
 * Time: 15:37:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:14 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:14
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

class UserPasswordLinkService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUsersPasswordLink(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.usersPasswordLink.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.usersPasswordLink.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUsersPasswordLink(select = []) {
		try {
			if(sql) {
				return await models.sequelize.usersPasswordLink.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.usersPasswordLink.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUserPasswordLink(newUserPasswordLink) {
		try {
			let objUserPasswordLink;
			if(util.PrimaryKeyTypeIsString(models.sequelize.usersPasswordLink.primaryKeys.id.type.toString())) {
			    newUserPasswordLink.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUserPasswordLink = await models.sequelize.usersPasswordLink.create(newUserPasswordLink);
			} else {
				objUserPasswordLink = new models.mongoose.usersPasswordLink(newUserPasswordLink);
				await objUserPasswordLink.save();
			}
			return objUserPasswordLink;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserPasswordLink(id, updateUserPasswordLink) {
		try {
			let objUserPasswordLink;
			if(sql) {
				objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { id: util.Char(id) }});
				if (objUserPasswordLink) {
					await models.sequelize.usersPasswordLink.update(updateUserPasswordLink, { where: { id: util.Char(id) } });
					objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUserPasswordLink._id;
				objUserPasswordLink = await models.mongoose.usersPasswordLink.findOneAndUpdate({id:id}, {$set: updateUserPasswordLink}, {new: true});
			}
			return objUserPasswordLink;
		} catch (error) {
			throw error;
		}
	}

	static async getAUserPasswordLink(id, query) {
		try {
			let objUserPasswordLink;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUserPasswordLink = await models.mongoose.usersPasswordLink.find({id:util.Char(id)}).select(query.select);
			}
			return objUserPasswordLink;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserPasswordLink(id) {
		try {
			let objUserPasswordLink;
			if(sql) {
				objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({ where: { id: util.Char(id) } });
				if (objUserPasswordLink) {
					await models.sequelize.usersPasswordLink.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUserPasswordLink = await models.mongoose.usersPasswordLink.deleteOne({id:util.Char(id)});
			}
			return objUserPasswordLink;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOne({id: id});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOne({deleted: deleted});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUsername(username, query = {}) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { username: username },
    			});
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOne({username: username});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateGenerated(dateGenerated, query = {}) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_generated: dateGenerated },
    			});
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOne({date_generated: dateGenerated});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserPasswordLinkById(id, updateUserPasswordLink) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { id: id }});
    			if (objUserPasswordLink) {
    				objUserPasswordLink = await models.sequelize.usersPasswordLink.update(updateUserPasswordLink, { where: { id: id } });
    			}
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOneAndUpdate({id: id}, {$set: updateUserPasswordLink}, {new: true});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPasswordLinkByDeleted(deleted, updateUserPasswordLink) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { deleted: deleted }});
    			if (objUserPasswordLink) {
    				objUserPasswordLink = await models.sequelize.usersPasswordLink.update(updateUserPasswordLink, { where: { deleted: deleted } });
    			}
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOneAndUpdate({deleted: deleted}, {$set: updateUserPasswordLink}, {new: true});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPasswordLinkByUsername(username, updateUserPasswordLink) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { username: username }});
    			if (objUserPasswordLink) {
    				objUserPasswordLink = await models.sequelize.usersPasswordLink.update(updateUserPasswordLink, { where: { username: username } });
    			}
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOneAndUpdate({username: username}, {$set: updateUserPasswordLink}, {new: true});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserPasswordLinkByDateGenerated(dateGenerated, updateUserPasswordLink) {
    	try {
    		let objUserPasswordLink;
    		if(sql) {
    			objUserPasswordLink = await models.sequelize.usersPasswordLink.findOne({where: { date_generated: dateGenerated }});
    			if (objUserPasswordLink) {
    				objUserPasswordLink = await models.sequelize.usersPasswordLink.update(updateUserPasswordLink, { where: { date_generated: dateGenerated } });
    			}
    		} else {
    			objUserPasswordLink = await models.mongoose.usersPasswordLink.findOneAndUpdate({date_generated: dateGenerated}, {$set: updateUserPasswordLink}, {new: true});
    		}
    		return objUserPasswordLink;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserPasswordLinkService;
//</es-section>
