/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Time: 14:0:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:39
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

class CronRemoveDocumentService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllCronRemoveDocuments(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.cronRemoveDocuments.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.cronRemoveDocuments.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllCronRemoveDocuments(select = []) {
		try {
			if(sql) {
				return await models.sequelize.cronRemoveDocuments.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.cronRemoveDocuments.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addCronRemoveDocument(newCronRemoveDocument) {
		try {
			let objCronRemoveDocument;
			if(util.PrimaryKeyTypeIsString(models.sequelize.cronRemoveDocuments.primaryKeys.id.type.toString())) {
			    newCronRemoveDocument.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.create(newCronRemoveDocument);
			} else {
				objCronRemoveDocument = new models.mongoose.cronRemoveDocuments(newCronRemoveDocument);
				await objCronRemoveDocument.save();
			}
			return objCronRemoveDocument;
		} catch (error) {
			throw error;
		}
	}

	static async updateCronRemoveDocument(id, updateCronRemoveDocument) {
		try {
			let objCronRemoveDocument;
			if(sql) {
				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { id: util.String(id) }});
				if (objCronRemoveDocument) {
					await models.sequelize.cronRemoveDocuments.update(updateCronRemoveDocument, { where: { id: util.String(id) } });
					objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateCronRemoveDocument._id;
				objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOneAndUpdate({id:id}, {$set: updateCronRemoveDocument}, {new: true});
			}
			return objCronRemoveDocument;
		} catch (error) {
			throw error;
		}
	}

	static async getACronRemoveDocument(id, query) {
		try {
			let objCronRemoveDocument;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.find({id:util.String(id)}).select(query.select);
			}
			return objCronRemoveDocument;
		} catch (error) {
			throw error;
		}
	}

	static async deleteCronRemoveDocument(id) {
		try {
			let objCronRemoveDocument;
			if(sql) {
				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({ where: { id: util.String(id) } });
				if (objCronRemoveDocument) {
					await models.sequelize.cronRemoveDocuments.destroy({where: { id: util.String(id) }});
				}
			} else {
				objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.deleteOne({id:util.String(id)});
			}
			return objCronRemoveDocument;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOne({id: id});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBeanId(beanId, query = {}) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { bean_id: beanId },
    			});
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOne({bean_id: beanId});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModule(module, query = {}) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { module: module },
    			});
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOne({module: module});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOne({date_modified: dateModified});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateCronRemoveDocumentById(id, updateCronRemoveDocument) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { id: id }});
    			if (objCronRemoveDocument) {
    				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.update(updateCronRemoveDocument, { where: { id: id } });
    			}
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOneAndUpdate({id: id}, {$set: updateCronRemoveDocument}, {new: true});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCronRemoveDocumentByBeanId(beanId, updateCronRemoveDocument) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { bean_id: beanId }});
    			if (objCronRemoveDocument) {
    				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.update(updateCronRemoveDocument, { where: { bean_id: beanId } });
    			}
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOneAndUpdate({bean_id: beanId}, {$set: updateCronRemoveDocument}, {new: true});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCronRemoveDocumentByModule(module, updateCronRemoveDocument) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { module: module }});
    			if (objCronRemoveDocument) {
    				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.update(updateCronRemoveDocument, { where: { module: module } });
    			}
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOneAndUpdate({module: module}, {$set: updateCronRemoveDocument}, {new: true});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateCronRemoveDocumentByDateModified(dateModified, updateCronRemoveDocument) {
    	try {
    		let objCronRemoveDocument;
    		if(sql) {
    			objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.findOne({where: { date_modified: dateModified }});
    			if (objCronRemoveDocument) {
    				objCronRemoveDocument = await models.sequelize.cronRemoveDocuments.update(updateCronRemoveDocument, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objCronRemoveDocument = await models.mongoose.cronRemoveDocuments.findOneAndUpdate({date_modified: dateModified}, {$set: updateCronRemoveDocument}, {new: true});
    		}
    		return objCronRemoveDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = CronRemoveDocumentService;
//</es-section>
