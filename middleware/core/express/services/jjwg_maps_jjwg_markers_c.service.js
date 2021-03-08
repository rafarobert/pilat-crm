/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:24 GMT-0400 (Bolivia Time)
 * Time: 15:36:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:24 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:24
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

class JjwgMapJjwgMarkerCService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMapsJjwgMarkersC(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMapsJjwgMarkersC.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMapsJjwgMarkersC.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMapsJjwgMarkersC(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMapsJjwgMarkersC.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMapsJjwgMarkersC.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMapJjwgMarkerC(newJjwgMapJjwgMarkerC) {
		try {
			let objJjwgMapJjwgMarkerC;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMapsJjwgMarkersC.primaryKeys.id.type.toString())) {
			    newJjwgMapJjwgMarkerC.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.create(newJjwgMapJjwgMarkerC);
			} else {
				objJjwgMapJjwgMarkerC = new models.mongoose.jjwgMapsJjwgMarkersC(newJjwgMapJjwgMarkerC);
				await objJjwgMapJjwgMarkerC.save();
			}
			return objJjwgMapJjwgMarkerC;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMapJjwgMarkerC(id, updateJjwgMapJjwgMarkerC) {
		try {
			let objJjwgMapJjwgMarkerC;
			if(sql) {
				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { id: util.String(id) }});
				if (objJjwgMapJjwgMarkerC) {
					await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { id: util.String(id) } });
					objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { id: util.String(id) }});
				}
			} else {
				delete updateJjwgMapJjwgMarkerC._id;
				objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({id:id}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
			}
			return objJjwgMapJjwgMarkerC;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMapJjwgMarkerC(id, query) {
		try {
			let objJjwgMapJjwgMarkerC;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
					    where: where && !where.where ? where : { id: util.String(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.find({id:util.String(id)}).select(query.select);
			}
			return objJjwgMapJjwgMarkerC;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMapJjwgMarkerC(id) {
		try {
			let objJjwgMapJjwgMarkerC;
			if(sql) {
				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({ where: { id: util.String(id) } });
				if (objJjwgMapJjwgMarkerC) {
					await models.sequelize.jjwgMapsJjwgMarkersC.destroy({where: { id: util.String(id) }});
				}
			} else {
				objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.deleteOne({id:util.String(id)});
			}
			return objJjwgMapJjwgMarkerC;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOne({id: id});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOne({deleted: deleted});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda, query = {}) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_b229wg_maps_ida: jjwgMapsB229wgMapsIda },
    			});
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOne({jjwg_maps_b229wg_maps_ida: jjwgMapsB229wgMapsIda});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb, query = {}) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_2e31markers_idb: jjwgMaps2e31markersIdb },
    			});
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOne({jjwg_maps_2e31markers_idb: jjwgMaps2e31markersIdb});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOne({date_modified: dateModified});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMapJjwgMarkerCById(id, updateJjwgMapJjwgMarkerC) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { id: id }});
    			if (objJjwgMapJjwgMarkerC) {
    				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { id: id } });
    			}
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({id: id}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgMarkerCByDeleted(deleted, updateJjwgMapJjwgMarkerC) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { deleted: deleted }});
    			if (objJjwgMapJjwgMarkerC) {
    				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgMarkerCByJjwgMapsB229wgMapsIda(jjwgMapsB229wgMapsIda, updateJjwgMapJjwgMarkerC) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { jjwg_maps_b229wg_maps_ida: jjwgMapsB229wgMapsIda }});
    			if (objJjwgMapJjwgMarkerC) {
    				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { jjwg_maps_b229wg_maps_ida: jjwgMapsB229wgMapsIda } });
    			}
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({jjwg_maps_b229wg_maps_ida: jjwgMapsB229wgMapsIda}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgMarkerCByJjwgMaps2e31markersIdb(jjwgMaps2e31markersIdb, updateJjwgMapJjwgMarkerC) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { jjwg_maps_2e31markers_idb: jjwgMaps2e31markersIdb }});
    			if (objJjwgMapJjwgMarkerC) {
    				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { jjwg_maps_2e31markers_idb: jjwgMaps2e31markersIdb } });
    			}
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({jjwg_maps_2e31markers_idb: jjwgMaps2e31markersIdb}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMapJjwgMarkerCByDateModified(dateModified, updateJjwgMapJjwgMarkerC) {
    	try {
    		let objJjwgMapJjwgMarkerC;
    		if(sql) {
    			objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.findOne({where: { date_modified: dateModified }});
    			if (objJjwgMapJjwgMarkerC) {
    				objJjwgMapJjwgMarkerC = await models.sequelize.jjwgMapsJjwgMarkersC.update(updateJjwgMapJjwgMarkerC, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgMapJjwgMarkerC = await models.mongoose.jjwgMapsJjwgMarkersC.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgMapJjwgMarkerC}, {new: true});
    		}
    		return objJjwgMapJjwgMarkerC;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMapJjwgMarkerCService;
//</es-section>
