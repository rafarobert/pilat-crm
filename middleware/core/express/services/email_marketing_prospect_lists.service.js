/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:02 GMT-0400 (Bolivia Time)
 * Time: 4:43:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:02 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:2
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

class EmailMarketingProspectListService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllEmailMarketingProspectLists(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.emailMarketingProspectLists.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.emailMarketingProspectLists.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllEmailMarketingProspectLists(select = []) {
		try {
			if(sql) {
				return await models.sequelize.emailMarketingProspectLists.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.emailMarketingProspectLists.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addEmailMarketingProspectList(newEmailMarketingProspectList) {
		try {
			let objEmailMarketingProspectList;
			if(util.PrimaryKeyTypeIsString(models.sequelize.emailMarketingProspectLists.primaryKeys.id.type.toString())) {
			    newEmailMarketingProspectList.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.create(newEmailMarketingProspectList);
			} else {
				objEmailMarketingProspectList = new models.mongoose.emailMarketingProspectLists(newEmailMarketingProspectList);
				await objEmailMarketingProspectList.save();
			}
			return objEmailMarketingProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async updateEmailMarketingProspectList(id, updateEmailMarketingProspectList) {
		try {
			let objEmailMarketingProspectList;
			if(sql) {
				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { id: util.String(id) }});
				if (objEmailMarketingProspectList) {
					await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { id: util.String(id) } });
					objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateEmailMarketingProspectList._id;
				objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({id:id}, {$set: updateEmailMarketingProspectList}, {new: true});
			}
			return objEmailMarketingProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async getAEmailMarketingProspectList(id, query) {
		try {
			let objEmailMarketingProspectList;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.find({id:util.String(id)}).select(query.select);
			}
			return objEmailMarketingProspectList;
		} catch (error) {
			throw error;
		}
	}

	static async deleteEmailMarketingProspectList(id) {
		try {
			let objEmailMarketingProspectList;
			if(sql) {
				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({ where: { id: util.String(id) } });
				if (objEmailMarketingProspectList) {
					await models.sequelize.emailMarketingProspectLists.destroy({where: { id: util.String(id) }});
				}
			} else {
				objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.deleteOne({id:util.String(id)});
			}
			return objEmailMarketingProspectList;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOne({id: id});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOne({deleted: deleted});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByProspectListId(prospectListId, query = {}) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { prospect_list_id: prospectListId },
    			});
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOne({prospect_list_id: prospectListId});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailMarketingId(emailMarketingId, query = {}) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_marketing_id: emailMarketingId },
    			});
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOne({email_marketing_id: emailMarketingId});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOne({date_modified: dateModified});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateEmailMarketingProspectListById(id, updateEmailMarketingProspectList) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { id: id }});
    			if (objEmailMarketingProspectList) {
    				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { id: id } });
    			}
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({id: id}, {$set: updateEmailMarketingProspectList}, {new: true});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingProspectListByDeleted(deleted, updateEmailMarketingProspectList) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { deleted: deleted }});
    			if (objEmailMarketingProspectList) {
    				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { deleted: deleted } });
    			}
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({deleted: deleted}, {$set: updateEmailMarketingProspectList}, {new: true});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingProspectListByProspectListId(prospectListId, updateEmailMarketingProspectList) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { prospect_list_id: prospectListId }});
    			if (objEmailMarketingProspectList) {
    				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { prospect_list_id: prospectListId } });
    			}
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({prospect_list_id: prospectListId}, {$set: updateEmailMarketingProspectList}, {new: true});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingProspectListByEmailMarketingId(emailMarketingId, updateEmailMarketingProspectList) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { email_marketing_id: emailMarketingId }});
    			if (objEmailMarketingProspectList) {
    				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { email_marketing_id: emailMarketingId } });
    			}
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({email_marketing_id: emailMarketingId}, {$set: updateEmailMarketingProspectList}, {new: true});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateEmailMarketingProspectListByDateModified(dateModified, updateEmailMarketingProspectList) {
    	try {
    		let objEmailMarketingProspectList;
    		if(sql) {
    			objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.findOne({where: { date_modified: dateModified }});
    			if (objEmailMarketingProspectList) {
    				objEmailMarketingProspectList = await models.sequelize.emailMarketingProspectLists.update(updateEmailMarketingProspectList, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objEmailMarketingProspectList = await models.mongoose.emailMarketingProspectLists.findOneAndUpdate({date_modified: dateModified}, {$set: updateEmailMarketingProspectList}, {new: true});
    		}
    		return objEmailMarketingProspectList;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = EmailMarketingProspectListService;
//</es-section>
