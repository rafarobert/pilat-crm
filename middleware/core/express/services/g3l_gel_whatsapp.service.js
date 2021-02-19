/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:15 GMT-0400 (Bolivia Time)
 * Time: 4:43:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:15 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:15
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

class G3lGelWhatsappService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllG3lGelWhatsapp(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.g3lGelWhatsapp.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.g3lGelWhatsapp.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllG3lGelWhatsapp(select = []) {
		try {
			if(sql) {
				return await models.sequelize.g3lGelWhatsapp.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.g3lGelWhatsapp.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addG3lGelWhatsapp(newG3lGelWhatsapp) {
		try {
			let objG3lGelWhatsapp;
			if(util.PrimaryKeyTypeIsString(models.sequelize.g3lGelWhatsapp.primaryKeys.id.type.toString())) {
			    newG3lGelWhatsapp.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.create(newG3lGelWhatsapp);
			} else {
				objG3lGelWhatsapp = new models.mongoose.g3lGelWhatsapp(newG3lGelWhatsapp);
				await objG3lGelWhatsapp.save();
			}
			return objG3lGelWhatsapp;
		} catch (error) {
			throw error;
		}
	}

	static async updateG3lGelWhatsapp(id, updateG3lGelWhatsapp) {
		try {
			let objG3lGelWhatsapp;
			if(sql) {
				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { id: util.Char(id) }});
				if (objG3lGelWhatsapp) {
					await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { id: util.Char(id) } });
					objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateG3lGelWhatsapp._id;
				objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({id:id}, {$set: updateG3lGelWhatsapp}, {new: true});
			}
			return objG3lGelWhatsapp;
		} catch (error) {
			throw error;
		}
	}

	static async getAG3lGelWhatsapp(id, query) {
		try {
			let objG3lGelWhatsapp;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.find({id:util.Char(id)}).select(query.select);
			}
			return objG3lGelWhatsapp;
		} catch (error) {
			throw error;
		}
	}

	static async deleteG3lGelWhatsapp(id) {
		try {
			let objG3lGelWhatsapp;
			if(sql) {
				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({ where: { id: util.Char(id) } });
				if (objG3lGelWhatsapp) {
					await models.sequelize.g3lGelWhatsapp.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.deleteOne({id:util.Char(id)});
			}
			return objG3lGelWhatsapp;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({id: id});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({deleted: deleted});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({name: name});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({parent_type: parentType});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumeroEnvio(numeroEnvio, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { numero_envio: numeroEnvio },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({numero_envio: numeroEnvio});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstadoEnvio(estadoEnvio, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estado_envio: estadoEnvio },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({estado_envio: estadoEnvio});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({description: description});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMensaje(mensaje, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mensaje: mensaje },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({mensaje: mensaje});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({date_entered: dateEntered});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({date_modified: dateModified});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFechaEnvio(fechaEnvio, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fecha_envio: fechaEnvio },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({fecha_envio: fechaEnvio});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({modified_user_id: modifiedUserId});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({created_by: createdBy});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({assigned_user_id: assignedUserId});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOne({parent_id: parentId});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateG3lGelWhatsappById(id, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { id: id }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { id: id } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({id: id}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByDeleted(deleted, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { deleted: deleted }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { deleted: deleted } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({deleted: deleted}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByName(name, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { name: name }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { name: name } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({name: name}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByParentType(parentType, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { parent_type: parentType }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { parent_type: parentType } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({parent_type: parentType}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByNumeroEnvio(numeroEnvio, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { numero_envio: numeroEnvio }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { numero_envio: numeroEnvio } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({numero_envio: numeroEnvio}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByEstadoEnvio(estadoEnvio, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { estado_envio: estadoEnvio }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { estado_envio: estadoEnvio } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({estado_envio: estadoEnvio}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByDescription(description, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { description: description }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { description: description } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({description: description}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByMensaje(mensaje, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { mensaje: mensaje }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { mensaje: mensaje } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({mensaje: mensaje}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByDateEntered(dateEntered, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { date_entered: dateEntered }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({date_entered: dateEntered}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByDateModified(dateModified, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { date_modified: dateModified }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({date_modified: dateModified}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByFechaEnvio(fechaEnvio, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { fecha_envio: fechaEnvio }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { fecha_envio: fechaEnvio } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({fecha_envio: fechaEnvio}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByModifiedUserId(modifiedUserId, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByCreatedBy(createdBy, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { created_by: createdBy }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { created_by: createdBy } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({created_by: createdBy}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByAssignedUserId(assignedUserId, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelWhatsappByParentId(parentId, updateG3lGelWhatsapp) {
    	try {
    		let objG3lGelWhatsapp;
    		if(sql) {
    			objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.findOne({where: { parent_id: parentId }});
    			if (objG3lGelWhatsapp) {
    				objG3lGelWhatsapp = await models.sequelize.g3lGelWhatsapp.update(updateG3lGelWhatsapp, { where: { parent_id: parentId } });
    			}
    		} else {
    			objG3lGelWhatsapp = await models.mongoose.g3lGelWhatsapp.findOneAndUpdate({parent_id: parentId}, {$set: updateG3lGelWhatsapp}, {new: true});
    		}
    		return objG3lGelWhatsapp;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = G3lGelWhatsappService;
//</es-section>
