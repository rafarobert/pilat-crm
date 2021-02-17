/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:19 GMT-0400 (Bolivia Time)
 * Time: 4:44:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:19 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:19
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

class TemplatesectionlineService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllTemplatesectionline(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.templatesectionline.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.templatesectionline.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllTemplatesectionline(select = []) {
		try {
			if(sql) {
				return await models.sequelize.templatesectionline.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.templatesectionline.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addTemplatesectionline(newTemplatesectionline) {
		try {
			let objTemplatesectionline;
			if(util.PrimaryKeyTypeIsString(models.sequelize.templatesectionline.primaryKeys.id.type.toString())) {
			    newTemplatesectionline.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objTemplatesectionline = await models.sequelize.templatesectionline.create(newTemplatesectionline);
			} else {
				objTemplatesectionline = new models.mongoose.templatesectionline(newTemplatesectionline);
				await objTemplatesectionline.save();
			}
			return objTemplatesectionline;
		} catch (error) {
			throw error;
		}
	}

	static async updateTemplatesectionline(id, updateTemplatesectionline) {
		try {
			let objTemplatesectionline;
			if(sql) {
				objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { id: util.Char(id) }});
				if (objTemplatesectionline) {
					await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { id: util.Char(id) } });
					objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateTemplatesectionline._id;
				objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({id:id}, {$set: updateTemplatesectionline}, {new: true});
			}
			return objTemplatesectionline;
		} catch (error) {
			throw error;
		}
	}

	static async getATemplatesectionline(id, query) {
		try {
			let objTemplatesectionline;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objTemplatesectionline = await models.mongoose.templatesectionline.find({id:util.Char(id)}).select(query.select);
			}
			return objTemplatesectionline;
		} catch (error) {
			throw error;
		}
	}

	static async deleteTemplatesectionline(id) {
		try {
			let objTemplatesectionline;
			if(sql) {
				objTemplatesectionline = await models.sequelize.templatesectionline.findOne({ where: { id: util.Char(id) } });
				if (objTemplatesectionline) {
					await models.sequelize.templatesectionline.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objTemplatesectionline = await models.mongoose.templatesectionline.deleteOne({id:util.Char(id)});
			}
			return objTemplatesectionline;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({id: id});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({deleted: deleted});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOrd(ord, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ord: ord },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({ord: ord});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({name: name});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByThumbnail(thumbnail, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { thumbnail: thumbnail },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({thumbnail: thumbnail});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGrp(grp, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { grp: grp },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({grp: grp});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({description: description});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({date_entered: dateEntered});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({date_modified: dateModified});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({modified_user_id: modifiedUserId});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOne({created_by: createdBy});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateTemplatesectionlineById(id, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { id: id }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { id: id } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({id: id}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByDeleted(deleted, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { deleted: deleted }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { deleted: deleted } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({deleted: deleted}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByOrd(ord, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { ord: ord }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { ord: ord } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({ord: ord}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByName(name, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { name: name }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { name: name } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({name: name}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByThumbnail(thumbnail, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { thumbnail: thumbnail }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { thumbnail: thumbnail } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({thumbnail: thumbnail}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByGrp(grp, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { grp: grp }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { grp: grp } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({grp: grp}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByDescription(description, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { description: description }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { description: description } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({description: description}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByDateEntered(dateEntered, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { date_entered: dateEntered }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({date_entered: dateEntered}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByDateModified(dateModified, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { date_modified: dateModified }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({date_modified: dateModified}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByModifiedUserId(modifiedUserId, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateTemplatesectionlineByCreatedBy(createdBy, updateTemplatesectionline) {
    	try {
    		let objTemplatesectionline;
    		if(sql) {
    			objTemplatesectionline = await models.sequelize.templatesectionline.findOne({where: { created_by: createdBy }});
    			if (objTemplatesectionline) {
    				objTemplatesectionline = await models.sequelize.templatesectionline.update(updateTemplatesectionline, { where: { created_by: createdBy } });
    			}
    		} else {
    			objTemplatesectionline = await models.mongoose.templatesectionline.findOneAndUpdate({created_by: createdBy}, {$set: updateTemplatesectionline}, {new: true});
    		}
    		return objTemplatesectionline;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = TemplatesectionlineService;
//</es-section>
