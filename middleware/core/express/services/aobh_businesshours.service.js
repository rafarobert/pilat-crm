/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Time: 4:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:53
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

class AobhBusinesshourService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllAobhBusinesshours(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.aobhBusinesshours.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.aobhBusinesshours.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllAobhBusinesshours(select = []) {
		try {
			if(sql) {
				return await models.sequelize.aobhBusinesshours.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.aobhBusinesshours.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addAobhBusinesshour(newAobhBusinesshour) {
		try {
			let objAobhBusinesshour;
			if(util.PrimaryKeyTypeIsString(models.sequelize.aobhBusinesshours.primaryKeys.id.type.toString())) {
			    newAobhBusinesshour.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.create(newAobhBusinesshour);
			} else {
				objAobhBusinesshour = new models.mongoose.aobhBusinesshours(newAobhBusinesshour);
				await objAobhBusinesshour.save();
			}
			return objAobhBusinesshour;
		} catch (error) {
			throw error;
		}
	}

	static async updateAobhBusinesshour(id, updateAobhBusinesshour) {
		try {
			let objAobhBusinesshour;
			if(sql) {
				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { id: util.Char(id) }});
				if (objAobhBusinesshour) {
					await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { id: util.Char(id) } });
					objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateAobhBusinesshour._id;
				objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({id:id}, {$set: updateAobhBusinesshour}, {new: true});
			}
			return objAobhBusinesshour;
		} catch (error) {
			throw error;
		}
	}

	static async getAAobhBusinesshour(id, query) {
		try {
			let objAobhBusinesshour;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objAobhBusinesshour = await models.mongoose.aobhBusinesshours.find({id:util.Char(id)}).select(query.select);
			}
			return objAobhBusinesshour;
		} catch (error) {
			throw error;
		}
	}

	static async deleteAobhBusinesshour(id) {
		try {
			let objAobhBusinesshour;
			if(sql) {
				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({ where: { id: util.Char(id) } });
				if (objAobhBusinesshour) {
					await models.sequelize.aobhBusinesshours.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objAobhBusinesshour = await models.mongoose.aobhBusinesshours.deleteOne({id:util.Char(id)});
			}
			return objAobhBusinesshour;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({id: id});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({deleted: deleted});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpen(open, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { open: open },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({open: open});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpenStatus(openStatus, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { open_status: openStatus },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({open_status: openStatus});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({name: name});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpeningHours(openingHours, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opening_hours: openingHours },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({opening_hours: openingHours});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByClosingHours(closingHours, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { closing_hours: closingHours },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({closing_hours: closingHours});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDay(day, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { day: day },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({day: day});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({description: description});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({date_entered: dateEntered});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({date_modified: dateModified});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({modified_user_id: modifiedUserId});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOne({created_by: createdBy});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateAobhBusinesshourById(id, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { id: id }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { id: id } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({id: id}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByDeleted(deleted, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { deleted: deleted }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { deleted: deleted } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({deleted: deleted}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByOpen(open, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { open: open }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { open: open } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({open: open}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByOpenStatus(openStatus, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { open_status: openStatus }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { open_status: openStatus } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({open_status: openStatus}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByName(name, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { name: name }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { name: name } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({name: name}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByOpeningHours(openingHours, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { opening_hours: openingHours }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { opening_hours: openingHours } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({opening_hours: openingHours}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByClosingHours(closingHours, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { closing_hours: closingHours }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { closing_hours: closingHours } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({closing_hours: closingHours}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByDay(day, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { day: day }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { day: day } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({day: day}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByDescription(description, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { description: description }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { description: description } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({description: description}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByDateEntered(dateEntered, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { date_entered: dateEntered }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({date_entered: dateEntered}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByDateModified(dateModified, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { date_modified: dateModified }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({date_modified: dateModified}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByModifiedUserId(modifiedUserId, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateAobhBusinesshourByCreatedBy(createdBy, updateAobhBusinesshour) {
    	try {
    		let objAobhBusinesshour;
    		if(sql) {
    			objAobhBusinesshour = await models.sequelize.aobhBusinesshours.findOne({where: { created_by: createdBy }});
    			if (objAobhBusinesshour) {
    				objAobhBusinesshour = await models.sequelize.aobhBusinesshours.update(updateAobhBusinesshour, { where: { created_by: createdBy } });
    			}
    		} else {
    			objAobhBusinesshour = await models.mongoose.aobhBusinesshours.findOneAndUpdate({created_by: createdBy}, {$set: updateAobhBusinesshour}, {new: true});
    		}
    		return objAobhBusinesshour;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = AobhBusinesshourService;
//</es-section>
