/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Time: 14:57:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:40 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:40
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

class SaiClienteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllSaiClientes(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.saiClientes.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['gbagecage','ASC']],
                });
			} else {
				return await models.mongoose.saiClientes.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllSaiClientes(select = []) {
		try {
			if(sql) {
				return await models.sequelize.saiClientes.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.saiClientes.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addSaiCliente(newSaiCliente) {
		try {
			let objSaiCliente;
			if(util.PrimaryKeyTypeIsString(models.sequelize.saiClientes.primaryKeys.gbagecage.type.toString())) {
			    newSaiCliente.gbagecage = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objSaiCliente = await models.sequelize.saiClientes.create(newSaiCliente);
			} else {
				objSaiCliente = new models.mongoose.saiClientes(newSaiCliente);
				await objSaiCliente.save();
			}
			return objSaiCliente;
		} catch (error) {
			throw error;
		}
	}

	static async updateSaiCliente(gbagecage, updateSaiCliente) {
		try {
			let objSaiCliente;
			if(sql) {
				objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagecage: util.Bigint(gbagecage) }});
				if (objSaiCliente) {
					await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagecage: util.Bigint(gbagecage) } });
					objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagecage: util.Bigint(gbagecage) }});
				}
			} else {
				delete updateSaiCliente._id;
				objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagecage:gbagecage}, {$set: updateSaiCliente}, {new: true});
			}
			return objSaiCliente;
		} catch (error) {
			throw error;
		}
	}

	static async getASaiCliente(gbagecage, query) {
		try {
			let objSaiCliente;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objSaiCliente = await models.sequelize.saiClientes.findOne({
					    where: where && !where.where ? where : { gbagecage: util.Bigint(gbagecage) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objSaiCliente = await models.mongoose.saiClientes.find({gbagecage:util.Bigint(gbagecage)}).select(query.select);
			}
			return objSaiCliente;
		} catch (error) {
			throw error;
		}
	}

	static async deleteSaiCliente(gbagecage) {
		try {
			let objSaiCliente;
			if(sql) {
				objSaiCliente = await models.sequelize.saiClientes.findOne({ where: { gbagecage: util.Bigint(gbagecage) } });
				if (objSaiCliente) {
					await models.sequelize.saiClientes.destroy({where: { gbagecage: util.Bigint(gbagecage) }});
				}
			} else {
				objSaiCliente = await models.mongoose.saiClientes.deleteOne({gbagecage:util.Bigint(gbagecage)});
			}
			return objSaiCliente;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByGbagecage(gbagecage, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagecage: gbagecage },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagecage: gbagecage});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIlsupcage(ilsupcage, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ilsupcage: ilsupcage },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({ilsupcage: ilsupcage});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagetper(gbagetper, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagetper: gbagetper },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagetper: gbagetper});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagesexo(gbagesexo, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagesexo: gbagesexo },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagesexo: gbagesexo});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagenruc(gbagenruc, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagenruc: gbagenruc },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagenruc: gbagenruc});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagendid(gbagendid, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagendid: gbagendid },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagendid: gbagendid});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagecorg(gbagecorg, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagecorg: gbagecorg },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagecorg: gbagecorg});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbageappa(gbageappa, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbageappa: gbageappa },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbageappa: gbageappa});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbageapma(gbageapma, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbageapma: gbageapma },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbageapma: gbageapma});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrefijo(prefijo, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { prefijo: prefijo },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({prefijo: prefijo});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbageapca(gbageapca, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbageapca: gbageapca },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbageapca: gbageapca});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagenoms(gbagenoms, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagenoms: gbagenoms },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagenoms: gbagenoms});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagenomb(gbagenomb, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagenomb: gbagenomb },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagenomb: gbagenomb});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl1(gbtlfntl1, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl1: gbtlfntl1 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl1: gbtlfntl1});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl2(gbtlfntl2, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl2: gbtlfntl2 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl2: gbtlfntl2});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl3(gbtlfntl3, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl3: gbtlfntl3 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl3: gbtlfntl3});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl4(gbtlfntl4, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl4: gbtlfntl4 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl4: gbtlfntl4});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl5(gbtlfntl5, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl5: gbtlfntl5 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl5: gbtlfntl5});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbtlfntl6(gbtlfntl6, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbtlfntl6: gbtlfntl6 },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbtlfntl6: gbtlfntl6});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbpaidesc(gbpaidesc, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbpaidesc: gbpaidesc },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbpaidesc: gbpaidesc});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbdptdesc(gbdptdesc, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbdptdesc: gbdptdesc },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbdptdesc: gbdptdesc});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbciudesc(gbciudesc, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbciudesc: gbciudesc },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbciudesc: gbciudesc});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbdirdire(gbdirdire, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbdirdire: gbdirdire },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbdirdire: gbdirdire});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbemamail(gbemamail, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbemamail: gbemamail },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbemamail: gbemamail});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagefnac(gbagefnac, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagefnac: gbagefnac },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagefnac: gbagefnac});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGbagefreg(gbagefreg, query = {}) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { gbagefreg: gbagefreg },
    			});
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOne({gbagefreg: gbagefreg});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateSaiClienteByGbagecage(gbagecage, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagecage: gbagecage }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagecage: gbagecage } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagecage: gbagecage}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByIlsupcage(ilsupcage, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { ilsupcage: ilsupcage }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { ilsupcage: ilsupcage } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({ilsupcage: ilsupcage}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagetper(gbagetper, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagetper: gbagetper }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagetper: gbagetper } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagetper: gbagetper}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagesexo(gbagesexo, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagesexo: gbagesexo }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagesexo: gbagesexo } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagesexo: gbagesexo}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagenruc(gbagenruc, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagenruc: gbagenruc }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagenruc: gbagenruc } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagenruc: gbagenruc}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagendid(gbagendid, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagendid: gbagendid }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagendid: gbagendid } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagendid: gbagendid}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagecorg(gbagecorg, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagecorg: gbagecorg }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagecorg: gbagecorg } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagecorg: gbagecorg}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbageappa(gbageappa, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbageappa: gbageappa }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbageappa: gbageappa } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbageappa: gbageappa}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbageapma(gbageapma, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbageapma: gbageapma }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbageapma: gbageapma } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbageapma: gbageapma}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByPrefijo(prefijo, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { prefijo: prefijo }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { prefijo: prefijo } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({prefijo: prefijo}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbageapca(gbageapca, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbageapca: gbageapca }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbageapca: gbageapca } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbageapca: gbageapca}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagenoms(gbagenoms, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagenoms: gbagenoms }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagenoms: gbagenoms } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagenoms: gbagenoms}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagenomb(gbagenomb, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagenomb: gbagenomb }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagenomb: gbagenomb } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagenomb: gbagenomb}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl1(gbtlfntl1, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl1: gbtlfntl1 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl1: gbtlfntl1 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl1: gbtlfntl1}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl2(gbtlfntl2, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl2: gbtlfntl2 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl2: gbtlfntl2 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl2: gbtlfntl2}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl3(gbtlfntl3, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl3: gbtlfntl3 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl3: gbtlfntl3 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl3: gbtlfntl3}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl4(gbtlfntl4, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl4: gbtlfntl4 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl4: gbtlfntl4 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl4: gbtlfntl4}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl5(gbtlfntl5, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl5: gbtlfntl5 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl5: gbtlfntl5 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl5: gbtlfntl5}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbtlfntl6(gbtlfntl6, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbtlfntl6: gbtlfntl6 }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbtlfntl6: gbtlfntl6 } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbtlfntl6: gbtlfntl6}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbpaidesc(gbpaidesc, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbpaidesc: gbpaidesc }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbpaidesc: gbpaidesc } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbpaidesc: gbpaidesc}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbdptdesc(gbdptdesc, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbdptdesc: gbdptdesc }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbdptdesc: gbdptdesc } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbdptdesc: gbdptdesc}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbciudesc(gbciudesc, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbciudesc: gbciudesc }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbciudesc: gbciudesc } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbciudesc: gbciudesc}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbdirdire(gbdirdire, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbdirdire: gbdirdire }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbdirdire: gbdirdire } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbdirdire: gbdirdire}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbemamail(gbemamail, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbemamail: gbemamail }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbemamail: gbemamail } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbemamail: gbemamail}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagefnac(gbagefnac, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagefnac: gbagefnac }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagefnac: gbagefnac } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagefnac: gbagefnac}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateSaiClienteByGbagefreg(gbagefreg, updateSaiCliente) {
    	try {
    		let objSaiCliente;
    		if(sql) {
    			objSaiCliente = await models.sequelize.saiClientes.findOne({where: { gbagefreg: gbagefreg }});
    			if (objSaiCliente) {
    				objSaiCliente = await models.sequelize.saiClientes.update(updateSaiCliente, { where: { gbagefreg: gbagefreg } });
    			}
    		} else {
    			objSaiCliente = await models.mongoose.saiClientes.findOneAndUpdate({gbagefreg: gbagefreg}, {$set: updateSaiCliente}, {new: true});
    		}
    		return objSaiCliente;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = SaiClienteService;
//</es-section>
