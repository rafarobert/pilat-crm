/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Time: 14:57:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:07 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:7
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

class JjwgMapJjwgAreaCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMapsJjwgAreasC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMapsJjwgAreasC.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMapsJjwgAreasC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMapsJjwgAreasC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMapsJjwgAreasC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMapsJjwgAreasC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMapJjwgAreaC(newJjwgMapJjwgAreaC) {
		try {
			let objJjwgMapJjwgAreaC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMapsJjwgAreasC.primaryKeys.id.type.toString())) {
			    newJjwgMapJjwgAreaC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.create(newJjwgMapJjwgAreaC);
			} else {
				objJjwgMapJjwgAreaC = new models.mongoose.jjwgMapsJjwgAreasC(newJjwgMapJjwgAreaC);
				await objJjwgMapJjwgAreaC.save();
			}
			return objJjwgMapJjwgAreaC;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMapJjwgAreaC(id, updateJjwgMapJjwgAreaC) {
		try {
			let objJjwgMapJjwgAreaC;
			if(sql) {
				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { id: util.String(id) }});
				if (objJjwgMapJjwgAreaC) {
					await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { id: util.String(id) } });
					objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateJjwgMapJjwgAreaC._id;
				objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({id:id}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
			}
			return objJjwgMapJjwgAreaC;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMapJjwgAreaC(id, query) {
		try {
			let objJjwgMapJjwgAreaC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.find({id:util.String(id)}).select(query.select);
			}
			return objJjwgMapJjwgAreaC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMapJjwgAreaC(id) {
		try {
			let objJjwgMapJjwgAreaC;
			if(sql) {
				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({ where: { id: util.String(id) } });
				if (objJjwgMapJjwgAreaC) {
					await models.sequelize.jjwgMapsJjwgAreasC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.deleteOne({id:util.String(id)});
			}
			return objJjwgMapJjwgAreaC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOne({id: id});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOne({deleted: deleted});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda, query = {}) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_5304wg_maps_ida: jjwgMaps5304wgMapsIda },
    			});
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOne({jjwg_maps_5304wg_maps_ida: jjwgMaps5304wgMapsIda});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb, query = {}) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_41f2g_areas_idb: jjwgMaps41f2gAreasIdb },
    			});
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOne({jjwg_maps_41f2g_areas_idb: jjwgMaps41f2gAreasIdb});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOne({date_modified: dateModified});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMapJjwgAreaCById(id, updateJjwgMapJjwgAreaC) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { id: id }});
    			if (objJjwgMapJjwgAreaC) {
    				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { id: id } });
    			}
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({id: id}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgAreaCByDeleted(deleted, updateJjwgMapJjwgAreaC) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { deleted: deleted }});
    			if (objJjwgMapJjwgAreaC) {
    				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgAreaCByJjwgMaps5304wgMapsIda(jjwgMaps5304wgMapsIda, updateJjwgMapJjwgAreaC) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { jjwg_maps_5304wg_maps_ida: jjwgMaps5304wgMapsIda }});
    			if (objJjwgMapJjwgAreaC) {
    				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { jjwg_maps_5304wg_maps_ida: jjwgMaps5304wgMapsIda } });
    			}
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({jjwg_maps_5304wg_maps_ida: jjwgMaps5304wgMapsIda}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgAreaCByJjwgMaps41f2gAreasIdb(jjwgMaps41f2gAreasIdb, updateJjwgMapJjwgAreaC) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { jjwg_maps_41f2g_areas_idb: jjwgMaps41f2gAreasIdb }});
    			if (objJjwgMapJjwgAreaC) {
    				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { jjwg_maps_41f2g_areas_idb: jjwgMaps41f2gAreasIdb } });
    			}
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({jjwg_maps_41f2g_areas_idb: jjwgMaps41f2gAreasIdb}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgAreaCByDateModified(dateModified, updateJjwgMapJjwgAreaC) {
    	try {
    		let objJjwgMapJjwgAreaC;
    		if(sql) {
    			objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.findOne({where: { date_modified: dateModified }});
    			if (objJjwgMapJjwgAreaC) {
    				objJjwgMapJjwgAreaC = await models.sequelize.jjwgMapsJjwgAreasC.update(updateJjwgMapJjwgAreaC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgMapJjwgAreaC = await models.mongoose.jjwgMapsJjwgAreasC.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgMapJjwgAreaC}, {new: true});
    		}
    		return objJjwgMapJjwgAreaC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMapJjwgAreaCService;
//</es-section>
