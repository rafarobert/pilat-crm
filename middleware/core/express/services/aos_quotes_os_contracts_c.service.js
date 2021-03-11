/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:22 GMT-0400 (Bolivia Time)
 * Time: 14:56:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:22
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

class AoQuoteOContractCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAosQuotesOsContractsC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aosQuotesOsContractsC.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aosQuotesOsContractsC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAosQuotesOsContractsC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aosQuotesOsContractsC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aosQuotesOsContractsC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAoQuoteOContractC(newAoQuoteOContractC) {
		try {
			let objAoQuoteOContractC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aosQuotesOsContractsC.primaryKeys.id.type.toString())) {
			    newAoQuoteOContractC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.create(newAoQuoteOContractC);
			} else {
				objAoQuoteOContractC = new models.mongoose.aosQuotesOsContractsC(newAoQuoteOContractC);
				await objAoQuoteOContractC.save();
			}
			return objAoQuoteOContractC;
		} catch (error) {
			throw error;
		}
	}

	static async updateAoQuoteOContractC(id, updateAoQuoteOContractC) {
		try {
			let objAoQuoteOContractC;
			if(sql) {
				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { id: util.String(id) }});
				if (objAoQuoteOContractC) {
					await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { id: util.String(id) } });
					objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateAoQuoteOContractC._id;
				objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({id:id}, {$set: updateAoQuoteOContractC}, {new: true});
			}
			return objAoQuoteOContractC;
		} catch (error) {
			throw error;
		}
	}

	static async getAAoQuoteOContractC(id, query) {
		try {
			let objAoQuoteOContractC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.find({id:util.String(id)}).select(query.select);
			}
			return objAoQuoteOContractC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAoQuoteOContractC(id) {
		try {
			let objAoQuoteOContractC;
			if(sql) {
				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({ where: { id: util.String(id) } });
				if (objAoQuoteOContractC) {
					await models.sequelize.aosQuotesOsContractsC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.deleteOne({id:util.String(id)});
			}
			return objAoQuoteOContractC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOne({id: id});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOne({deleted: deleted});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda, query = {}) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotese81e_quotes_ida: aosQuotese81eQuotesIda },
    			});
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOne({aos_quotese81e_quotes_ida: aosQuotese81eQuotesIda});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb, query = {}) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { aos_quotes4dc0ntracts_idb: aosQuotes4dc0ntractsIdb },
    			});
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOne({aos_quotes4dc0ntracts_idb: aosQuotes4dc0ntractsIdb});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOne({date_modified: dateModified});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAoQuoteOContractCById(id, updateAoQuoteOContractC) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { id: id }});
    			if (objAoQuoteOContractC) {
    				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { id: id } });
    			}
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({id: id}, {$set: updateAoQuoteOContractC}, {new: true});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteOContractCByDeleted(deleted, updateAoQuoteOContractC) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { deleted: deleted }});
    			if (objAoQuoteOContractC) {
    				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { deleted: deleted } });
    			}
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({deleted: deleted}, {$set: updateAoQuoteOContractC}, {new: true});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteOContractCByAosQuotese81eQuotesIda(aosQuotese81eQuotesIda, updateAoQuoteOContractC) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { aos_quotese81e_quotes_ida: aosQuotese81eQuotesIda }});
    			if (objAoQuoteOContractC) {
    				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { aos_quotese81e_quotes_ida: aosQuotese81eQuotesIda } });
    			}
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({aos_quotese81e_quotes_ida: aosQuotese81eQuotesIda}, {$set: updateAoQuoteOContractC}, {new: true});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteOContractCByAosQuotes4dc0ntractsIdb(aosQuotes4dc0ntractsIdb, updateAoQuoteOContractC) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { aos_quotes4dc0ntracts_idb: aosQuotes4dc0ntractsIdb }});
    			if (objAoQuoteOContractC) {
    				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { aos_quotes4dc0ntracts_idb: aosQuotes4dc0ntractsIdb } });
    			}
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({aos_quotes4dc0ntracts_idb: aosQuotes4dc0ntractsIdb}, {$set: updateAoQuoteOContractC}, {new: true});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAoQuoteOContractCByDateModified(dateModified, updateAoQuoteOContractC) {
    	try {
    		let objAoQuoteOContractC;
    		if(sql) {
    			objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.findOne({where: { date_modified: dateModified }});
    			if (objAoQuoteOContractC) {
    				objAoQuoteOContractC = await models.sequelize.aosQuotesOsContractsC.update(updateAoQuoteOContractC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAoQuoteOContractC = await models.mongoose.aosQuotesOsContractsC.findOneAndUpdate({date_modified: dateModified}, {$set: updateAoQuoteOContractC}, {new: true});
    		}
    		return objAoQuoteOContractC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AoQuoteOContractCService;
//</es-section>
