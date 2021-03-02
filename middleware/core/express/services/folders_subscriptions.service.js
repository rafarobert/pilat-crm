/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Time: 14:0:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:51
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

class FolderSubscriptionService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFoldersSubscriptions(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.foldersSubscriptions.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.foldersSubscriptions.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFoldersSubscriptions(select = []) {
		try {
			if(sql) {
				return await models.sequelize.foldersSubscriptions.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.foldersSubscriptions.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFolderSubscription(newFolderSubscription) {
		try {
			let objFolderSubscription;
			if(util.PrimaryKeyTypeIsString(models.sequelize.foldersSubscriptions.primaryKeys.id.type.toString())) {
			    newFolderSubscription.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFolderSubscription = await models.sequelize.foldersSubscriptions.create(newFolderSubscription);
			} else {
				objFolderSubscription = new models.mongoose.foldersSubscriptions(newFolderSubscription);
				await objFolderSubscription.save();
			}
			return objFolderSubscription;
		} catch (error) {
			throw error;
		}
	}

	static async updateFolderSubscription(id, updateFolderSubscription) {
		try {
			let objFolderSubscription;
			if(sql) {
				objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({where: { id: util.Char(id) }});
				if (objFolderSubscription) {
					await models.sequelize.foldersSubscriptions.update(updateFolderSubscription, { where: { id: util.Char(id) } });
					objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFolderSubscription._id;
				objFolderSubscription = await models.mongoose.foldersSubscriptions.findOneAndUpdate({id:id}, {$set: updateFolderSubscription}, {new: true});
			}
			return objFolderSubscription;
		} catch (error) {
			throw error;
		}
	}

	static async getAFolderSubscription(id, query) {
		try {
			let objFolderSubscription;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFolderSubscription = await models.mongoose.foldersSubscriptions.find({id:util.Char(id)}).select(query.select);
			}
			return objFolderSubscription;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFolderSubscription(id) {
		try {
			let objFolderSubscription;
			if(sql) {
				objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({ where: { id: util.Char(id) } });
				if (objFolderSubscription) {
					await models.sequelize.foldersSubscriptions.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFolderSubscription = await models.mongoose.foldersSubscriptions.deleteOne({id:util.Char(id)});
			}
			return objFolderSubscription;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOne({id: id});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFolderId(folderId, query = {}) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { folder_id: folderId },
    			});
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOne({folder_id: folderId});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOne({assigned_user_id: assignedUserId});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFolderSubscriptionById(id, updateFolderSubscription) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({where: { id: id }});
    			if (objFolderSubscription) {
    				objFolderSubscription = await models.sequelize.foldersSubscriptions.update(updateFolderSubscription, { where: { id: id } });
    			}
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOneAndUpdate({id: id}, {$set: updateFolderSubscription}, {new: true});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderSubscriptionByFolderId(folderId, updateFolderSubscription) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({where: { folder_id: folderId }});
    			if (objFolderSubscription) {
    				objFolderSubscription = await models.sequelize.foldersSubscriptions.update(updateFolderSubscription, { where: { folder_id: folderId } });
    			}
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOneAndUpdate({folder_id: folderId}, {$set: updateFolderSubscription}, {new: true});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFolderSubscriptionByAssignedUserId(assignedUserId, updateFolderSubscription) {
    	try {
    		let objFolderSubscription;
    		if(sql) {
    			objFolderSubscription = await models.sequelize.foldersSubscriptions.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objFolderSubscription) {
    				objFolderSubscription = await models.sequelize.foldersSubscriptions.update(updateFolderSubscription, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objFolderSubscription = await models.mongoose.foldersSubscriptions.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateFolderSubscription}, {new: true});
    		}
    		return objFolderSubscription;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FolderSubscriptionService;
//</es-section>
