/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:59 GMT-0400 (Bolivia Time)
 * Time: 0:23:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:59 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:59
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

class UserSignatureService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUsersSignatures(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.usersSignatures.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.usersSignatures.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUsersSignatures(select = []) {
		try {
			if(sql) {
				return await models.sequelize.usersSignatures.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.usersSignatures.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUserSignature(newUserSignature) {
		try {
			let objUserSignature;
			if(util.PrimaryKeyTypeIsString(models.sequelize.usersSignatures.primaryKeys.id.type.toString())) {
			    newUserSignature.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUserSignature = await models.sequelize.usersSignatures.create(newUserSignature);
			} else {
				objUserSignature = new models.mongoose.usersSignatures(newUserSignature);
				await objUserSignature.save();
			}
			return objUserSignature;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserSignature(id, updateUserSignature) {
		try {
			let objUserSignature;
			if(sql) {
				objUserSignature = await models.sequelize.usersSignatures.findOne({where: { id: util.Char(id) }});
				if (objUserSignature) {
					await models.sequelize.usersSignatures.update(updateUserSignature, { where: { id: util.Char(id) } });
					objUserSignature = await models.sequelize.usersSignatures.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUserSignature._id;
				objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({id:id}, {$set: updateUserSignature}, {new: true});
			}
			return objUserSignature;
		} catch (error) {
			throw error;
		}
	}

	static async getAUserSignature(id, query) {
		try {
			let objUserSignature;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUserSignature = await models.sequelize.usersSignatures.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUserSignature = await models.mongoose.usersSignatures.find({id:util.Char(id)}).select(query.select);
			}
			return objUserSignature;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserSignature(id) {
		try {
			let objUserSignature;
			if(sql) {
				objUserSignature = await models.sequelize.usersSignatures.findOne({ where: { id: util.Char(id) } });
				if (objUserSignature) {
					await models.sequelize.usersSignatures.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUserSignature = await models.mongoose.usersSignatures.deleteOne({id:util.Char(id)});
			}
			return objUserSignature;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({id: id});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({deleted: deleted});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUserId(userId, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { user_id: userId },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({user_id: userId});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({name: name});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySignature(signature, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { signature: signature },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({signature: signature});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySignatureHtml(signatureHtml, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { signature_html: signatureHtml },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({signature_html: signatureHtml});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({date_entered: dateEntered});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOne({date_modified: dateModified});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUserSignatureById(id, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { id: id }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { id: id } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({id: id}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureByDeleted(deleted, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { deleted: deleted }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { deleted: deleted } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({deleted: deleted}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureByUserId(userId, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { user_id: userId }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { user_id: userId } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({user_id: userId}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureByName(name, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { name: name }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { name: name } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({name: name}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureBySignature(signature, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { signature: signature }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { signature: signature } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({signature: signature}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureBySignatureHtml(signatureHtml, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { signature_html: signatureHtml }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { signature_html: signatureHtml } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({signature_html: signatureHtml}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureByDateEntered(dateEntered, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { date_entered: dateEntered }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({date_entered: dateEntered}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUserSignatureByDateModified(dateModified, updateUserSignature) {
    	try {
    		let objUserSignature;
    		if(sql) {
    			objUserSignature = await models.sequelize.usersSignatures.findOne({where: { date_modified: dateModified }});
    			if (objUserSignature) {
    				objUserSignature = await models.sequelize.usersSignatures.update(updateUserSignature, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objUserSignature = await models.mongoose.usersSignatures.findOneAndUpdate({date_modified: dateModified}, {$set: updateUserSignature}, {new: true});
    		}
    		return objUserSignature;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UserSignatureService;
//</es-section>
