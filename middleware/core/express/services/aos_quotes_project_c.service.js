/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Time: 14:56:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:23
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

class AoQuoteProjectCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotesProjectC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotesProjectC.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotesProjectC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotesProjectC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotesProjectC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotesProjectC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuoteProjectC(newAoQuoteProjectC) {
		try {
			let objAoQuoteProjectC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotesProjectC.primaryKeys.id.type.toString())) {
			    newAoQuoteProjectC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.create(newAoQuoteProjectC);
			} else {
				objAoQuoteProjectC = new models.mongoose.aosQuotesProjectC(newAoQuoteProjectC);
				await objAoQuoteProjectC.save();
			}
			return objAoQuoteProjectC;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuoteProjectC(id, updateAoQuoteProjectC) {
		try {
			let objAoQuoteProjectC;
			if(sql) {
				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { id: util.String(id) }});
				if (objAoQuoteProjectC) {
					await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { id: util.String(id) } });
					objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAoQuoteProjectC._id;
				objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({id:id}, {$set: updateAoQuoteProjectC}, {new: true});
			}
			return objAoQuoteProjectC;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuoteProjectC(id, query) {
		try {
			let objAoQuoteProjectC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.find({id:util.String(id)}).select(query.select);
			}
			return objAoQuoteProjectC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuoteProjectC(id) {
		try {
			let objAoQuoteProjectC;
			if(sql) {
				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({ where: { id: util.String(id) } });
				if (objAoQuoteProjectC) {
					await models.sequelize.aosQuotesProjectC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.deleteOne({id:util.String(id)});
			}
			return objAoQuoteProjectC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOne({id: id});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOne({deleted: deleted});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda, query = {}) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotes1112_quotes_ida: aosQuotes1112QuotesIda },
    			});
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOne({aos_quotes1112_quotes_ida: aosQuotes1112QuotesIda});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotes7207projectIdb(aosQuotes7207projectIdb, query = {}) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotes7207project_idb: aosQuotes7207projectIdb },
    			});
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOne({aos_quotes7207project_idb: aosQuotes7207projectIdb});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOne({date_modified: dateModified});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteProjectCById(id, updateAoQuoteProjectC) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { id: id }});
    			if (objAoQuoteProjectC) {
    				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { id: id } });
    			}
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({id: id}, {$set: updateAoQuoteProjectC}, {new: true});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteProjectCByDeleted(deleted, updateAoQuoteProjectC) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { deleted: deleted }});
    			if (objAoQuoteProjectC) {
    				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({deleted: deleted}, {$set: updateAoQuoteProjectC}, {new: true});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteProjectCByAosQuotes1112QuotesIda(aosQuotes1112QuotesIda, updateAoQuoteProjectC) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { aos_quotes1112_quotes_ida: aosQuotes1112QuotesIda }});
    			if (objAoQuoteProjectC) {
    				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { aos_quotes1112_quotes_ida: aosQuotes1112QuotesIda } });
    			}
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({aos_quotes1112_quotes_ida: aosQuotes1112QuotesIda}, {$set: updateAoQuoteProjectC}, {new: true});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteProjectCByAosQuotes7207projectIdb(aosQuotes7207projectIdb, updateAoQuoteProjectC) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { aos_quotes7207project_idb: aosQuotes7207projectIdb }});
    			if (objAoQuoteProjectC) {
    				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { aos_quotes7207project_idb: aosQuotes7207projectIdb } });
    			}
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({aos_quotes7207project_idb: aosQuotes7207projectIdb}, {$set: updateAoQuoteProjectC}, {new: true});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteProjectCByDateModified(dateModified, updateAoQuoteProjectC) {
    	try {
    		let objAoQuoteProjectC;
    		if(sql) {
    			objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.findOne({where: { date_modified: dateModified }});
    			if (objAoQuoteProjectC) {
    				objAoQuoteProjectC = await models.sequelize.aosQuotesProjectC.update(updateAoQuoteProjectC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoQuoteProjectC = await models.mongoose.aosQuotesProjectC.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoQuoteProjectC}, {new: true});
    		}
    		return objAoQuoteProjectC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteProjectCService;
//</es-section>
