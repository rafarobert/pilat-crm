/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Time: 15:36:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:43 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:43
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

class PilatModuleService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatModules(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatModules.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatModules.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatModules(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatModules.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatModules.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatModule(newPilatModule) {
		try {
			let objPilatModule;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatModules.primaryKeys._id.type.toString())) {
			    newPilatModule._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatModule.id) {
              let max = await models.sequelize.pilatModules.max('id');
              newPilatModule.id = newPilatModule.id ? newPilatModule.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatModule = await models.sequelize.pilatModules.create(newPilatModule);
			} else {
				objPilatModule = new models.mongoose.pilatModules(newPilatModule);
				await objPilatModule.save();
			}
			return objPilatModule;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatModule(_id, updatePilatModule) {
		try {
			let objPilatModule;
			if(sql) {
				objPilatModule = await models.sequelize.pilatModules.findOne({where: { _id: util.String(_id) }});
				if (objPilatModule) {
					await models.sequelize.pilatModules.update(updatePilatModule, { where: { _id: util.String(_id) } });
					objPilatModule = await models.sequelize.pilatModules.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatModule._id;
				objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({_id:_id}, {$set: updatePilatModule}, {new: true});
			}
			return objPilatModule;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatModule(_id, query) {
		try {
			let objPilatModule;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatModule = await models.sequelize.pilatModules.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatModule = await models.mongoose.pilatModules.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatModule;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatModule(_id) {
		try {
			let objPilatModule;
			if(sql) {
				objPilatModule = await models.sequelize.pilatModules.findOne({ where: { _id: util.String(_id) } });
				if (objPilatModule) {
					await models.sequelize.pilatModules.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatModule = await models.mongoose.pilatModules.deleteOne({_id:util.String(_id)});
			}
			return objPilatModule;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({_id: Id});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({id: id});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModCode(modCode, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_code: modCode },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_code: modCode});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModDescription(modDescription, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_description: modDescription },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_description: modDescription});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModAbbr(modAbbr, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_abbr: modAbbr },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_abbr: modAbbr});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModIcon(modIcon, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_icon: modIcon },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_icon: modIcon});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModGroup(modGroup, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_group: modGroup },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_group: modGroup});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModParStatusId(modParStatusId, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_par_status_id: modParStatusId },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_par_status_id: modParStatusId});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({createdBy: createdby});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({updatedBy: updatedby});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModParentId(modParentId, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mod_parent_id: modParentId },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({mod_parent_id: modParentId});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({dueAt: dueat});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({createdAt: createdat});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOne({updatedAt: updatedat});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatModuleByUid(Id, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { _id: Id }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { _id: Id } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({_id: Id}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleById(id, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { id: id }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { id: id } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({id: id}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModCode(modCode, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_code: modCode }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_code: modCode } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_code: modCode}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModDescription(modDescription, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_description: modDescription }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_description: modDescription } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_description: modDescription}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModAbbr(modAbbr, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_abbr: modAbbr }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_abbr: modAbbr } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_abbr: modAbbr}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModIcon(modIcon, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_icon: modIcon }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_icon: modIcon } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_icon: modIcon}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModGroup(modGroup, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_group: modGroup }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_group: modGroup } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_group: modGroup}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModParStatusId(modParStatusId, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_par_status_id: modParStatusId }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_par_status_id: modParStatusId } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_par_status_id: modParStatusId}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByCreatedby(createdby, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { createdBy: createdby }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByUpdatedby(updatedby, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { updatedBy: updatedby }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByModParentId(modParentId, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { mod_parent_id: modParentId }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { mod_parent_id: modParentId } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({mod_parent_id: modParentId}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByDueat(dueat, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { dueAt: dueat }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByCreatedat(createdat, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { createdAt: createdat }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatModuleByUpdatedat(updatedat, updatePilatModule) {
    	try {
    		let objPilatModule;
    		if(sql) {
    			objPilatModule = await models.sequelize.pilatModules.findOne({where: { updatedAt: updatedat }});
    			if (objPilatModule) {
    				objPilatModule = await models.sequelize.pilatModules.update(updatePilatModule, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatModule = await models.mongoose.pilatModules.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatModule}, {new: true});
    		}
    		return objPilatModule;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async findPilatParamsModParStatusWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_mod_par_status%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_mod_par_status.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	static async findPilatModulesModParentWithModCode(select = ['_id', 'mod_code'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatModules.findAll({
                    attributes: select,
                    where: { mod_group: {[Op.like]: '%grp_mod_parent%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatModules.find({mod_group: {$regex : ".*grp_mod_parent.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	
	static async filterPilatModulesByModParStatus(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsModParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatModule, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatModule;
    	} catch (error) {
            throw error;
    	}
    }
	
	static async filterPilatModulesByModParent(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsModParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatModule, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatModule = await models.sequelize.pilatModules.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatModule = await models.mongoose.pilatModules.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatModule;
    	} catch (error) {
            throw error;
    	}
    }
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatModuleService;
//</es-section>
