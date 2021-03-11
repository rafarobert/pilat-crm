/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Time: 14:57:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:52 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:52
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

class UpgradeHistoryService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllUpgradeHistory(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.upgradeHistory.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.upgradeHistory.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllUpgradeHistory(select = []) {
		try {
			if(sql) {
				return await models.sequelize.upgradeHistory.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.upgradeHistory.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addUpgradeHistory(newUpgradeHistory) {
		try {
			let objUpgradeHistory;
			if(util.PrimaryKeyTypeIsString(models.sequelize.upgradeHistory.primaryKeys.id.type.toString())) {
			    newUpgradeHistory.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objUpgradeHistory = await models.sequelize.upgradeHistory.create(newUpgradeHistory);
			} else {
				objUpgradeHistory = new models.mongoose.upgradeHistory(newUpgradeHistory);
				await objUpgradeHistory.save();
			}
			return objUpgradeHistory;
		} catch (error) {
			throw error;
		}
	}

	static async updateUpgradeHistory(id, updateUpgradeHistory) {
		try {
			let objUpgradeHistory;
			if(sql) {
				objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { id: util.Char(id) }});
				if (objUpgradeHistory) {
					await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { id: util.Char(id) } });
					objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateUpgradeHistory._id;
				objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({id:id}, {$set: updateUpgradeHistory}, {new: true});
			}
			return objUpgradeHistory;
		} catch (error) {
			throw error;
		}
	}

	static async getAUpgradeHistory(id, query) {
		try {
			let objUpgradeHistory;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objUpgradeHistory = await models.mongoose.upgradeHistory.find({id:util.Char(id)}).select(query.select);
			}
			return objUpgradeHistory;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUpgradeHistory(id) {
		try {
			let objUpgradeHistory;
			if(sql) {
				objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({ where: { id: util.Char(id) } });
				if (objUpgradeHistory) {
					await models.sequelize.upgradeHistory.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objUpgradeHistory = await models.mongoose.upgradeHistory.deleteOne({id:util.Char(id)});
			}
			return objUpgradeHistory;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({id: id});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEnabled(enabled, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { enabled: enabled },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({enabled: enabled});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFilename(filename, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { filename: filename },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({filename: filename});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMd5sum(md5sum, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { md5sum: md5sum },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({md5sum: md5sum});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByType(type, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { type: type },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({type: type});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({status: status});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVersion(version, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { version: version },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({version: version});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({name: name});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIdName(idName, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_name: idName },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({id_name: idName});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({description: description});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByManifest(manifest, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { manifest: manifest },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({manifest: manifest});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOne({date_entered: dateEntered});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateUpgradeHistoryById(id, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { id: id }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { id: id } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({id: id}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByEnabled(enabled, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { enabled: enabled }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { enabled: enabled } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({enabled: enabled}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByFilename(filename, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { filename: filename }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { filename: filename } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({filename: filename}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByMd5sum(md5sum, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { md5sum: md5sum }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { md5sum: md5sum } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({md5sum: md5sum}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByType(type, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { type: type }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { type: type } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({type: type}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByStatus(status, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { status: status }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { status: status } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({status: status}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByVersion(version, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { version: version }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { version: version } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({version: version}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByName(name, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { name: name }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { name: name } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({name: name}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByIdName(idName, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { id_name: idName }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { id_name: idName } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({id_name: idName}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByDescription(description, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { description: description }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { description: description } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({description: description}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByManifest(manifest, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { manifest: manifest }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { manifest: manifest } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({manifest: manifest}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateUpgradeHistoryByDateEntered(dateEntered, updateUpgradeHistory) {
    	try {
    		let objUpgradeHistory;
    		if(sql) {
    			objUpgradeHistory = await models.sequelize.upgradeHistory.findOne({where: { date_entered: dateEntered }});
    			if (objUpgradeHistory) {
    				objUpgradeHistory = await models.sequelize.upgradeHistory.update(updateUpgradeHistory, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objUpgradeHistory = await models.mongoose.upgradeHistory.findOneAndUpdate({date_entered: dateEntered}, {$set: updateUpgradeHistory}, {new: true});
    		}
    		return objUpgradeHistory;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = UpgradeHistoryService;
//</es-section>
