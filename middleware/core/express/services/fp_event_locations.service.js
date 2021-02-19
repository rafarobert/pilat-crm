/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:23 GMT-0400 (Bolivia Time)
 * Time: 18:37:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:23 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:23
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

class FpEventLocationService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllFpEventLocations(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.fpEventLocations.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.fpEventLocations.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllFpEventLocations(select = []) {
		try {
			if(sql) {
				return await models.sequelize.fpEventLocations.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.fpEventLocations.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addFpEventLocation(newFpEventLocation) {
		try {
			let objFpEventLocation;
			if(util.PrimaryKeyTypeIsString(models.sequelize.fpEventLocations.primaryKeys.id.type.toString())) {
			    newFpEventLocation.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objFpEventLocation = await models.sequelize.fpEventLocations.create(newFpEventLocation);
			} else {
				objFpEventLocation = new models.mongoose.fpEventLocations(newFpEventLocation);
				await objFpEventLocation.save();
			}
			return objFpEventLocation;
		} catch (error) {
			throw error;
		}
	}

	static async updateFpEventLocation(id, updateFpEventLocation) {
		try {
			let objFpEventLocation;
			if(sql) {
				objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { id: util.Char(id) }});
				if (objFpEventLocation) {
					await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { id: util.Char(id) } });
					objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateFpEventLocation._id;
				objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({id:id}, {$set: updateFpEventLocation}, {new: true});
			}
			return objFpEventLocation;
		} catch (error) {
			throw error;
		}
	}

	static async getAFpEventLocation(id, query) {
		try {
			let objFpEventLocation;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objFpEventLocation = await models.mongoose.fpEventLocations.find({id:util.Char(id)}).select(query.select);
			}
			return objFpEventLocation;
		} catch (error) {
			throw error;
		}
	}

	static async deleteFpEventLocation(id) {
		try {
			let objFpEventLocation;
			if(sql) {
				objFpEventLocation = await models.sequelize.fpEventLocations.findOne({ where: { id: util.Char(id) } });
				if (objFpEventLocation) {
					await models.sequelize.fpEventLocations.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objFpEventLocation = await models.mongoose.fpEventLocations.deleteOne({id:util.Char(id)});
			}
			return objFpEventLocation;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({id: id});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({deleted: deleted});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({name: name});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddress(address, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address: address },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({address: address});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressCity(addressCity, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_city: addressCity },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({address_city: addressCity});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressCountry(addressCountry, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_country: addressCountry },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({address_country: addressCountry});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressPostalcode(addressPostalcode, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_postalcode: addressPostalcode },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({address_postalcode: addressPostalcode});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAddressState(addressState, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { address_state: addressState },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({address_state: addressState});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCapacity(capacity, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { capacity: capacity },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({capacity: capacity});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({description: description});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({date_entered: dateEntered});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({date_modified: dateModified});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({modified_user_id: modifiedUserId});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({created_by: createdBy});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOne({assigned_user_id: assignedUserId});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateFpEventLocationById(id, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { id: id }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { id: id } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({id: id}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByDeleted(deleted, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { deleted: deleted }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { deleted: deleted } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({deleted: deleted}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByName(name, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { name: name }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { name: name } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({name: name}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAddress(address, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { address: address }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { address: address } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({address: address}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAddressCity(addressCity, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { address_city: addressCity }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { address_city: addressCity } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({address_city: addressCity}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAddressCountry(addressCountry, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { address_country: addressCountry }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { address_country: addressCountry } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({address_country: addressCountry}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAddressPostalcode(addressPostalcode, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { address_postalcode: addressPostalcode }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { address_postalcode: addressPostalcode } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({address_postalcode: addressPostalcode}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAddressState(addressState, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { address_state: addressState }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { address_state: addressState } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({address_state: addressState}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByCapacity(capacity, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { capacity: capacity }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { capacity: capacity } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({capacity: capacity}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByDescription(description, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { description: description }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { description: description } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({description: description}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByDateEntered(dateEntered, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { date_entered: dateEntered }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({date_entered: dateEntered}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByDateModified(dateModified, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { date_modified: dateModified }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({date_modified: dateModified}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByModifiedUserId(modifiedUserId, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByCreatedBy(createdBy, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { created_by: createdBy }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { created_by: createdBy } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({created_by: createdBy}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateFpEventLocationByAssignedUserId(assignedUserId, updateFpEventLocation) {
    	try {
    		let objFpEventLocation;
    		if(sql) {
    			objFpEventLocation = await models.sequelize.fpEventLocations.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objFpEventLocation) {
    				objFpEventLocation = await models.sequelize.fpEventLocations.update(updateFpEventLocation, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objFpEventLocation = await models.mongoose.fpEventLocations.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateFpEventLocation}, {new: true});
    		}
    		return objFpEventLocation;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = FpEventLocationService;
//</es-section>
