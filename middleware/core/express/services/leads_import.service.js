/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Time: 0:23:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:17 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:17
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

class LeadImportService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	
	static async findOneByProspeccion(prospeccion, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { PROSPECCION: prospeccion },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({PROSPECCION: prospeccion});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOficial(oficial, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { OFICIAL: oficial },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({OFICIAL: oficial});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMes(mes, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { MES: mes },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({MES: mes});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCliente(cliente, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { CLIENTE: cliente },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({CLIENTE: cliente});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLugarorubrodetrabajo(lugarorubrodetrabajo, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { LUGARORUBRODETRABAJO: lugarorubrodetrabajo },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({LUGARORUBRODETRABAJO: lugarorubrodetrabajo});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTeléfono(teléfono, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { TELÉFONO: teléfono },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({TELÉFONO: teléfono});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFecha(fecha, query = {}) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { FECHA: fecha },
    			});
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOne({FECHA: fecha});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateLeadImportByProspeccion(prospeccion, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { PROSPECCION: prospeccion }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { PROSPECCION: prospeccion } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({PROSPECCION: prospeccion}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByOficial(oficial, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { OFICIAL: oficial }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { OFICIAL: oficial } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({OFICIAL: oficial}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByMes(mes, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { MES: mes }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { MES: mes } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({MES: mes}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByCliente(cliente, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { CLIENTE: cliente }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { CLIENTE: cliente } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({CLIENTE: cliente}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByLugarorubrodetrabajo(lugarorubrodetrabajo, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { LUGARORUBRODETRABAJO: lugarorubrodetrabajo }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { LUGARORUBRODETRABAJO: lugarorubrodetrabajo } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({LUGARORUBRODETRABAJO: lugarorubrodetrabajo}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByTeléfono(teléfono, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { TELÉFONO: teléfono }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { TELÉFONO: teléfono } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({TELÉFONO: teléfono}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadImportByFecha(fecha, updateLeadImport) {
    	try {
    		let objLeadImport;
    		if(sql) {
    			objLeadImport = await models.sequelize.leadsImport.findOne({where: { FECHA: fecha }});
    			if (objLeadImport) {
    				objLeadImport = await models.sequelize.leadsImport.update(updateLeadImport, { where: { FECHA: fecha } });
    			}
    		} else {
    			objLeadImport = await models.mongoose.leadsImport.findOneAndUpdate({FECHA: fecha}, {$set: updateLeadImport}, {new: true});
    		}
    		return objLeadImport;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = LeadImportService;
//</es-section>
