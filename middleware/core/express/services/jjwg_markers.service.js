/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:24 GMT-0400 (Bolivia Time)
 * Time: 4:43:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:24 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:24
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

class JjwgMarkerService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllJjwgMarkers(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.jjwgMarkers.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.jjwgMarkers.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllJjwgMarkers(select = []) {
		try {
			if(sql) {
				return await models.sequelize.jjwgMarkers.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.jjwgMarkers.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addJjwgMarker(newJjwgMarker) {
		try {
			let objJjwgMarker;
			if(util.PrimaryKeyTypeIsString(models.sequelize.jjwgMarkers.primaryKeys.id.type.toString())) {
			    newJjwgMarker.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objJjwgMarker = await models.sequelize.jjwgMarkers.create(newJjwgMarker);
			} else {
				objJjwgMarker = new models.mongoose.jjwgMarkers(newJjwgMarker);
				await objJjwgMarker.save();
			}
			return objJjwgMarker;
		} catch (error) {
			throw error;
		}
	}

	static async updateJjwgMarker(id, updateJjwgMarker) {
		try {
			let objJjwgMarker;
			if(sql) {
				objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { id: util.Char(id) }});
				if (objJjwgMarker) {
					await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { id: util.Char(id) } });
					objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateJjwgMarker._id;
				objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({id:id}, {$set: updateJjwgMarker}, {new: true});
			}
			return objJjwgMarker;
		} catch (error) {
			throw error;
		}
	}

	static async getAJjwgMarker(id, query) {
		try {
			let objJjwgMarker;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objJjwgMarker = await models.mongoose.jjwgMarkers.find({id:util.Char(id)}).select(query.select);
			}
			return objJjwgMarker;
		} catch (error) {
			throw error;
		}
	}

	static async deleteJjwgMarker(id) {
		try {
			let objJjwgMarker;
			if(sql) {
				objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({ where: { id: util.Char(id) } });
				if (objJjwgMarker) {
					await models.sequelize.jjwgMarkers.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objJjwgMarker = await models.mongoose.jjwgMarkers.deleteOne({id:util.Char(id)});
			}
			return objJjwgMarker;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({id: id});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({deleted: deleted});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLat(jjwgMapsLat, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat: jjwgMapsLat },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({jjwg_maps_lat: jjwgMapsLat});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLng(jjwgMapsLng, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng: jjwgMapsLng },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({jjwg_maps_lng: jjwgMapsLng});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({name: name});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCity(city, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { city: city },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({city: city});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByState(state, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { state: state },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({state: state});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCountry(country, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { country: country },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({country: country});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMarkerImage(markerImage, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { marker_image: markerImage },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({marker_image: markerImage});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({description: description});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({date_entered: dateEntered});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({date_modified: dateModified});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({modified_user_id: modifiedUserId});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({created_by: createdBy});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOne({assigned_user_id: assignedUserId});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateJjwgMarkerById(id, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { id: id }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { id: id } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({id: id}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByDeleted(deleted, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { deleted: deleted }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { deleted: deleted } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({deleted: deleted}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByJjwgMapsLat(jjwgMapsLat, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { jjwg_maps_lat: jjwgMapsLat }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { jjwg_maps_lat: jjwgMapsLat } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({jjwg_maps_lat: jjwgMapsLat}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByJjwgMapsLng(jjwgMapsLng, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { jjwg_maps_lng: jjwgMapsLng }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { jjwg_maps_lng: jjwgMapsLng } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({jjwg_maps_lng: jjwgMapsLng}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByName(name, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { name: name }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { name: name } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({name: name}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByCity(city, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { city: city }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { city: city } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({city: city}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByState(state, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { state: state }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { state: state } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({state: state}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByCountry(country, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { country: country }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { country: country } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({country: country}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByMarkerImage(markerImage, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { marker_image: markerImage }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { marker_image: markerImage } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({marker_image: markerImage}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByDescription(description, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { description: description }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { description: description } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({description: description}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByDateEntered(dateEntered, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { date_entered: dateEntered }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({date_entered: dateEntered}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByDateModified(dateModified, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { date_modified: dateModified }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({date_modified: dateModified}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByModifiedUserId(modifiedUserId, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByCreatedBy(createdBy, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { created_by: createdBy }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { created_by: createdBy } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({created_by: createdBy}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateJjwgMarkerByAssignedUserId(assignedUserId, updateJjwgMarker) {
    	try {
    		let objJjwgMarker;
    		if(sql) {
    			objJjwgMarker = await models.sequelize.jjwgMarkers.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objJjwgMarker) {
    				objJjwgMarker = await models.sequelize.jjwgMarkers.update(updateJjwgMarker, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objJjwgMarker = await models.mongoose.jjwgMarkers.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateJjwgMarker}, {new: true});
    		}
    		return objJjwgMarker;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = JjwgMarkerService;
//</es-section>
