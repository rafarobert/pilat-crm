/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:23 GMT-0400 (Bolivia Time)
 * Time: 0:22:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:23 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:23
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

class AoQuoteAoInvoiceCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotesAosInvoicesC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotesAosInvoicesC.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotesAosInvoicesC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotesAosInvoicesC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotesAosInvoicesC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotesAosInvoicesC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuoteAoInvoiceC(newAoQuoteAoInvoiceC) {
		try {
			let objAoQuoteAoInvoiceC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotesAosInvoicesC.primaryKeys.id.type.toString())) {
			    newAoQuoteAoInvoiceC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.create(newAoQuoteAoInvoiceC);
			} else {
				objAoQuoteAoInvoiceC = new models.mongoose.aosQuotesAosInvoicesC(newAoQuoteAoInvoiceC);
				await objAoQuoteAoInvoiceC.save();
			}
			return objAoQuoteAoInvoiceC;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuoteAoInvoiceC(id, updateAoQuoteAoInvoiceC) {
		try {
			let objAoQuoteAoInvoiceC;
			if(sql) {
				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { id: util.String(id) }});
				if (objAoQuoteAoInvoiceC) {
					await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { id: util.String(id) } });
					objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAoQuoteAoInvoiceC._id;
				objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({id:id}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
			}
			return objAoQuoteAoInvoiceC;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuoteAoInvoiceC(id, query) {
		try {
			let objAoQuoteAoInvoiceC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.find({id:util.String(id)}).select(query.select);
			}
			return objAoQuoteAoInvoiceC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuoteAoInvoiceC(id) {
		try {
			let objAoQuoteAoInvoiceC;
			if(sql) {
				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({ where: { id: util.String(id) } });
				if (objAoQuoteAoInvoiceC) {
					await models.sequelize.aosQuotesAosInvoicesC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.deleteOne({id:util.String(id)});
			}
			return objAoQuoteAoInvoiceC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOne({id: id});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOne({deleted: deleted});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda, query = {}) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotes77d9_quotes_ida: aosQuotes77d9QuotesIda },
    			});
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOne({aos_quotes77d9_quotes_ida: aosQuotes77d9QuotesIda});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb, query = {}) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotes6b83nvoices_idb: aosQuotes6b83nvoicesIdb },
    			});
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOne({aos_quotes6b83nvoices_idb: aosQuotes6b83nvoicesIdb});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOne({date_modified: dateModified});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteAoInvoiceCById(id, updateAoQuoteAoInvoiceC) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { id: id }});
    			if (objAoQuoteAoInvoiceC) {
    				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { id: id } });
    			}
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({id: id}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAoInvoiceCByDeleted(deleted, updateAoQuoteAoInvoiceC) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { deleted: deleted }});
    			if (objAoQuoteAoInvoiceC) {
    				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({deleted: deleted}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAoInvoiceCByAosQuotes77d9QuotesIda(aosQuotes77d9QuotesIda, updateAoQuoteAoInvoiceC) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { aos_quotes77d9_quotes_ida: aosQuotes77d9QuotesIda }});
    			if (objAoQuoteAoInvoiceC) {
    				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { aos_quotes77d9_quotes_ida: aosQuotes77d9QuotesIda } });
    			}
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({aos_quotes77d9_quotes_ida: aosQuotes77d9QuotesIda}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAoInvoiceCByAosQuotes6b83nvoicesIdb(aosQuotes6b83nvoicesIdb, updateAoQuoteAoInvoiceC) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { aos_quotes6b83nvoices_idb: aosQuotes6b83nvoicesIdb }});
    			if (objAoQuoteAoInvoiceC) {
    				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { aos_quotes6b83nvoices_idb: aosQuotes6b83nvoicesIdb } });
    			}
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({aos_quotes6b83nvoices_idb: aosQuotes6b83nvoicesIdb}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteAoInvoiceCByDateModified(dateModified, updateAoQuoteAoInvoiceC) {
    	try {
    		let objAoQuoteAoInvoiceC;
    		if(sql) {
    			objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.findOne({where: { date_modified: dateModified }});
    			if (objAoQuoteAoInvoiceC) {
    				objAoQuoteAoInvoiceC = await models.sequelize.aosQuotesAosInvoicesC.update(updateAoQuoteAoInvoiceC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoQuoteAoInvoiceC = await models.mongoose.aosQuotesAosInvoicesC.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoQuoteAoInvoiceC}, {new: true});
    		}
    		return objAoQuoteAoInvoiceC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteAoInvoiceCService;
//</es-section>
