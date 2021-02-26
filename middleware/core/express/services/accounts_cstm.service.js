/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:51 GMT-0400 (Bolivia Time)
 * Time: 0:21:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:51 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:51
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

class AccountCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAccountsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.accountsCstm.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id_c','ASC']],
                });
			} else {
				return await models.mongoose.accountsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAccountsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.accountsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.accountsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAccountCstm(newAccountCstm) {
		try {
			let objAccountCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.accountsCstm.primaryKeys.id_c.type.toString())) {
			    newAccountCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAccountCstm = await models.sequelize.accountsCstm.create(newAccountCstm);
			} else {
				objAccountCstm = new models.mongoose.accountsCstm(newAccountCstm);
				await objAccountCstm.save();
			}
			return objAccountCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateAccountCstm(id_c, updateAccountCstm) {
		try {
			let objAccountCstm;
			if(sql) {
				objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objAccountCstm) {
					await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { id_c: util.Char(id_c) } });
					objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateAccountCstm._id;
				objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateAccountCstm}, {new: true});
			}
			return objAccountCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getAAccountCstm(id_c, query) {
		try {
			let objAccountCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAccountCstm = await models.sequelize.accountsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAccountCstm = await models.mongoose.accountsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objAccountCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAccountCstm(id_c) {
		try {
			let objAccountCstm;
			if(sql) {
				objAccountCstm = await models.sequelize.accountsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objAccountCstm) {
					await models.sequelize.accountsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objAccountCstm = await models.mongoose.accountsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objAccountCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({id_c: idC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumeroDocumentoC(numeroDocumentoC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { numero_documento_c: numeroDocumentoC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({numero_documento_c: numeroDocumentoC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExtensionDocumentoC(extensionDocumentoC, query = {}) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { extension_documento_c: extensionDocumentoC },
    			});
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOne({extension_documento_c: extensionDocumentoC});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAccountCstmByIdC(idC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: idC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({id_c: idC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByJjwgMapsLngC(jjwgMapsLngC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByJjwgMapsLatC(jjwgMapsLatC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByNumeroDocumentoC(numeroDocumentoC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { numero_documento_c: numeroDocumentoC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { numero_documento_c: numeroDocumentoC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({numero_documento_c: numeroDocumentoC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAccountCstmByExtensionDocumentoC(extensionDocumentoC, updateAccountCstm) {
    	try {
    		let objAccountCstm;
    		if(sql) {
    			objAccountCstm = await models.sequelize.accountsCstm.findOne({where: { extension_documento_c: extensionDocumentoC }});
    			if (objAccountCstm) {
    				objAccountCstm = await models.sequelize.accountsCstm.update(updateAccountCstm, { where: { extension_documento_c: extensionDocumentoC } });
    			}
    		} else {
    			objAccountCstm = await models.mongoose.accountsCstm.findOneAndUpdate({extension_documento_c: extensionDocumentoC}, {$set: updateAccountCstm}, {new: true});
    		}
    		return objAccountCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AccountCstmService;
//</es-section>
