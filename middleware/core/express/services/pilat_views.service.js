/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:45 GMT-0400 (Bolivia Time)
 * Time: 15:36:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:45 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:45
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

class PilatViewService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllPilatViews(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.pilatViews.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','ASC']],
                });
			} else {
				return await models.mongoose.pilatViews.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllPilatViews(select = []) {
		try {
			if(sql) {
				return await models.sequelize.pilatViews.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.pilatViews.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addPilatView(newPilatView) {
		try {
			let objPilatView;
			if(util.PrimaryKeyTypeIsString(models.sequelize.pilatViews.primaryKeys._id.type.toString())) {
			    newPilatView._id = models.sequelize.objectId().toString();
		    }
			
			if(!newPilatView.id) {
              let max = await models.sequelize.pilatViews.max('id');
              newPilatView.id = newPilatView.id ? newPilatView.id : max+1;
			}
			
			
			
			if(sql) {
				objPilatView = await models.sequelize.pilatViews.create(newPilatView);
			} else {
				objPilatView = new models.mongoose.pilatViews(newPilatView);
				await objPilatView.save();
			}
			return objPilatView;
		} catch (error) {
			throw error;
		}
	}

	static async updatePilatView(_id, updatePilatView) {
		try {
			let objPilatView;
			if(sql) {
				objPilatView = await models.sequelize.pilatViews.findOne({where: { _id: util.String(_id) }});
				if (objPilatView) {
					await models.sequelize.pilatViews.update(updatePilatView, { where: { _id: util.String(_id) } });
					objPilatView = await models.sequelize.pilatViews.findOne({where: { _id: util.String(_id) }});
				}
			} else {
				delete updatePilatView._id;
				objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({_id:_id}, {$set: updatePilatView}, {new: true});
			}
			return objPilatView;
		} catch (error) {
			throw error;
		}
	}

	static async getAPilatView(_id, query) {
		try {
			let objPilatView;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objPilatView = await models.sequelize.pilatViews.findOne({
					    where: where && !where.where ? where : { _id: util.String(_id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objPilatView = await models.mongoose.pilatViews.find({_id:util.String(_id)}).select(query.select);
			}
			return objPilatView;
		} catch (error) {
			throw error;
		}
	}

	static async deletePilatView(_id) {
		try {
			let objPilatView;
			if(sql) {
				objPilatView = await models.sequelize.pilatViews.findOne({ where: { _id: util.String(_id) } });
				if (objPilatView) {
					await models.sequelize.pilatViews.destroy({where: { _id: util.String(_id) }});
				}
			} else {
				objPilatView = await models.mongoose.pilatViews.deleteOne({_id:util.String(_id)});
			}
			return objPilatView;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByUid(Id, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { _id: Id },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({_id: Id});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneById(id, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({id: id});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieCode(vieCode, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_code: vieCode },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_code: vieCode});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieDescription(vieDescription, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_description: vieDescription },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_description: vieDescription});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieRoute(vieRoute, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_route: vieRoute },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_route: vieRoute});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieParams(vieParams, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_params: vieParams },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_params: vieParams});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieIcon(vieIcon, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_icon: vieIcon },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_icon: vieIcon});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieGroup(vieGroup, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_group: vieGroup },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_group: vieGroup});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedby(createdby, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdBy: createdby },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({createdBy: createdby});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedby(updatedby, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedBy: updatedby },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({updatedBy: updatedby});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieModuleId(vieModuleId, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_module_id: vieModuleId },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_module_id: vieModuleId});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieReturnId(vieReturnId, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_return_id: vieReturnId },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_return_id: vieReturnId});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByVieParStatusId(vieParStatusId, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { vie_par_status_id: vieParStatusId },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({vie_par_status_id: vieParStatusId});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDueat(dueat, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { dueAt: dueat },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({dueAt: dueat});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedat(createdat, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { createdAt: createdat },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({createdAt: createdat});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByUpdatedat(updatedat, query = {}) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { updatedAt: updatedat },
    			});
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOne({updatedAt: updatedat});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updatePilatViewByUid(Id, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { _id: Id }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { _id: Id } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({_id: Id}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewById(id, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { id: id }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { id: id } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({id: id}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieCode(vieCode, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_code: vieCode }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_code: vieCode } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_code: vieCode}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieDescription(vieDescription, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_description: vieDescription }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_description: vieDescription } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_description: vieDescription}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieRoute(vieRoute, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_route: vieRoute }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_route: vieRoute } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_route: vieRoute}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieParams(vieParams, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_params: vieParams }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_params: vieParams } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_params: vieParams}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieIcon(vieIcon, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_icon: vieIcon }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_icon: vieIcon } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_icon: vieIcon}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieGroup(vieGroup, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_group: vieGroup }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_group: vieGroup } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_group: vieGroup}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByCreatedby(createdby, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { createdBy: createdby }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { createdBy: createdby } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({createdBy: createdby}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByUpdatedby(updatedby, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { updatedBy: updatedby }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { updatedBy: updatedby } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({updatedBy: updatedby}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieModuleId(vieModuleId, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_module_id: vieModuleId }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_module_id: vieModuleId } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_module_id: vieModuleId}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieReturnId(vieReturnId, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_return_id: vieReturnId }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_return_id: vieReturnId } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_return_id: vieReturnId}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByVieParStatusId(vieParStatusId, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { vie_par_status_id: vieParStatusId }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { vie_par_status_id: vieParStatusId } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({vie_par_status_id: vieParStatusId}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByDueat(dueat, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { dueAt: dueat }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { dueAt: dueat } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({dueAt: dueat}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByCreatedat(createdat, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { createdAt: createdat }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { createdAt: createdat } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({createdAt: createdat}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updatePilatViewByUpdatedat(updatedat, updatePilatView) {
    	try {
    		let objPilatView;
    		if(sql) {
    			objPilatView = await models.sequelize.pilatViews.findOne({where: { updatedAt: updatedat }});
    			if (objPilatView) {
    				objPilatView = await models.sequelize.pilatViews.update(updatePilatView, { where: { updatedAt: updatedat } });
    			}
    		} else {
    			objPilatView = await models.mongoose.pilatViews.findOneAndUpdate({updatedAt: updatedat}, {$set: updatePilatView}, {new: true});
    		}
    		return objPilatView;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async findPilatModulesVieModuleWithModCode(select = ['_id', 'mod_code'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatModules.findAll({
                    attributes: select,
                    where: { mod_group: {[Op.like]: '%grp_vie_module%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatModules.find({mod_group: {$regex : ".*grp_vie_module.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	static async findPilatViewsVieReturnWithVieCode(select = ['_id', 'vie_code'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatViews.findAll({
                    attributes: select,
                    where: { vie_group: {[Op.like]: '%grp_vie_return%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatViews.find({vie_group: {$regex : ".*grp_vie_return.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	static async findPilatParamsVieParStatusWithParOrder(select = ['_id', 'par_order'], query = {}) {
    	try {
    		let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? '0' : null;
    		if(sql) {
    		    return await models.sequelize.pilatParams.findAll({
                    attributes: select,
                    where: { par_group: {[Op.like]: '%grp_vie_par_status%'}},
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['_id','DESC']],
    		    });
    		} else {
    			return await models.mongoose.pilatParams.find({par_group: {$regex : ".*grp_vie_par_status.*"}}).select(select.join(' '));
    		}
    	} catch (error) {
            throw error;
    	}
    }
	
	
	static async filterPilatViewsByVieModule(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsVieParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatView, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatView;
    	} catch (error) {
            throw error;
    	}
    }
	
	static async filterPilatViewsByVieReturn(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsVieParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatView, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatView;
    	} catch (error) {
            throw error;
    	}
    }
	
	static async filterPilatViewsByVieParStatus(ids, query = {select:'',level:0}) {
    	try {
    	    let status = await this.findPilatParamsVieParStatusWithParCod(['_id', 'par_abbr']);
        	let objPilatView, project = {}, level, select;
        	level = Object.keys(query) && query.level ? query.level : 0;
        	select = Object.keys(query) && query.select ? query.select.split(',') : [];
        	select.forEach(sel => project[sel] = 1);
        	ids.forEach((id,i) => ids[i] = parseInt(id));
        	if(sql) {
    	        let enabled = status.find(param => param.dataValues.par_abbr == 'enabled');
    	        let idEnabled = enabled.dataValues._id;
        	    if ( level == 1 ) {
                    objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel1Include
                    );
        	    } else if( level == 2 ){
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel2Include
                    );
        	    } else {
        	        objPilatView = await models.sequelize.pilatViews.findAll(
                        arraySqlLevel0Include
                    );
        	    }
    		} else {
    		    let enabled = status.find(param => param._doc.par_abbr == 'enabled');
    		    let idEnabled = enabled._doc._id;
    		    if ( level == 1 ) {
                    objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel1Aggregate
                    );
    		    } else if( level == 2 ) {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel2Aggregate
                    );
    		    } else {
    		        objPilatView = await models.mongoose.pilatViews.aggregate(
                        arrayMongoLevel0Aggregate
                    );
    		    }
    		}
    		return objPilatView;
    	} catch (error) {
            throw error;
    	}
    }
	
	
	//</es-section>
}

//<es-section>
module.exports = PilatViewService;
//</es-section>
