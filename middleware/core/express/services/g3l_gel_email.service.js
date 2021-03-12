/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:59 GMT-0400 (Bolivia Time)
 * Time: 14:56:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:59 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:59
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

class G3lGelEmailService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllG3lGelEmail(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.g3lGelEmail.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.g3lGelEmail.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllG3lGelEmail(select = []) {
		try {
			if(sql) {
				return await models.sequelize.g3lGelEmail.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.g3lGelEmail.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addG3lGelEmail(newG3lGelEmail) {
		try {
			let objG3lGelEmail;
			if(util.PrimaryKeyTypeIsString(models.sequelize.g3lGelEmail.primaryKeys.id.type.toString())) {
			    newG3lGelEmail.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objG3lGelEmail = await models.sequelize.g3lGelEmail.create(newG3lGelEmail);
			} else {
				objG3lGelEmail = new models.mongoose.g3lGelEmail(newG3lGelEmail);
				await objG3lGelEmail.save();
			}
			return objG3lGelEmail;
		} catch (error) {
			throw error;
		}
	}

	static async updateG3lGelEmail(id, updateG3lGelEmail) {
		try {
			let objG3lGelEmail;
			if(sql) {
				objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { id: util.Char(id) }});
				if (objG3lGelEmail) {
					await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { id: util.Char(id) } });
					objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateG3lGelEmail._id;
				objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({id:id}, {$set: updateG3lGelEmail}, {new: true});
			}
			return objG3lGelEmail;
		} catch (error) {
			throw error;
		}
	}

	static async getAG3lGelEmail(id, query) {
		try {
			let objG3lGelEmail;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objG3lGelEmail = await models.mongoose.g3lGelEmail.find({id:util.Char(id)}).select(query.select);
			}
			return objG3lGelEmail;
		} catch (error) {
			throw error;
		}
	}

	static async deleteG3lGelEmail(id) {
		try {
			let objG3lGelEmail;
			if(sql) {
				objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({ where: { id: util.Char(id) } });
				if (objG3lGelEmail) {
					await models.sequelize.g3lGelEmail.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objG3lGelEmail = await models.mongoose.g3lGelEmail.deleteOne({id:util.Char(id)});
			}
			return objG3lGelEmail;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({id: id});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({deleted: deleted});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({name: name});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({parent_type: parentType});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEstadoEnvio(estadoEnvio, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { estado_envio: estadoEnvio },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({estado_envio: estadoEnvio});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCorreoElectronico(correoElectronico, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { correo_electronico: correoElectronico },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({correo_electronico: correoElectronico});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({description: description});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByMensaje(mensaje, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { mensaje: mensaje },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({mensaje: mensaje});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({date_entered: dateEntered});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({date_modified: dateModified});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFechaEnvio(fechaEnvio, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fecha_envio: fechaEnvio },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({fecha_envio: fechaEnvio});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({modified_user_id: modifiedUserId});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({created_by: createdBy});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({assigned_user_id: assignedUserId});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOne({parent_id: parentId});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateG3lGelEmailById(id, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { id: id }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { id: id } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({id: id}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByDeleted(deleted, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { deleted: deleted }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { deleted: deleted } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({deleted: deleted}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByName(name, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { name: name }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { name: name } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({name: name}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByParentType(parentType, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { parent_type: parentType }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { parent_type: parentType } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({parent_type: parentType}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByEstadoEnvio(estadoEnvio, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { estado_envio: estadoEnvio }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { estado_envio: estadoEnvio } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({estado_envio: estadoEnvio}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByCorreoElectronico(correoElectronico, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { correo_electronico: correoElectronico }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { correo_electronico: correoElectronico } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({correo_electronico: correoElectronico}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByDescription(description, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { description: description }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { description: description } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({description: description}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByMensaje(mensaje, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { mensaje: mensaje }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { mensaje: mensaje } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({mensaje: mensaje}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByDateEntered(dateEntered, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { date_entered: dateEntered }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({date_entered: dateEntered}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByDateModified(dateModified, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { date_modified: dateModified }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({date_modified: dateModified}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByFechaEnvio(fechaEnvio, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { fecha_envio: fechaEnvio }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { fecha_envio: fechaEnvio } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({fecha_envio: fechaEnvio}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByModifiedUserId(modifiedUserId, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByCreatedBy(createdBy, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { created_by: createdBy }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { created_by: createdBy } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({created_by: createdBy}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByAssignedUserId(assignedUserId, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateG3lGelEmailByParentId(parentId, updateG3lGelEmail) {
    	try {
    		let objG3lGelEmail;
    		if(sql) {
    			objG3lGelEmail = await models.sequelize.g3lGelEmail.findOne({where: { parent_id: parentId }});
    			if (objG3lGelEmail) {
    				objG3lGelEmail = await models.sequelize.g3lGelEmail.update(updateG3lGelEmail, { where: { parent_id: parentId } });
    			}
    		} else {
    			objG3lGelEmail = await models.mongoose.g3lGelEmail.findOneAndUpdate({parent_id: parentId}, {$set: updateG3lGelEmail}, {new: true});
    		}
    		return objG3lGelEmail;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = G3lGelEmailService;
//</es-section>
