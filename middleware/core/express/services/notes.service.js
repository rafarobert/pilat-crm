/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:55 GMT-0400 (Bolivia Time)
 * Time: 18:37:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:55
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

class NoteService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllNotes(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.notes.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.notes.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllNotes(select = []) {
		try {
			if(sql) {
				return await models.sequelize.notes.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.notes.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addNote(newNote) {
		try {
			let objNote;
			if(util.PrimaryKeyTypeIsString(models.sequelize.notes.primaryKeys.id.type.toString())) {
			    newNote.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objNote = await models.sequelize.notes.create(newNote);
			} else {
				objNote = new models.mongoose.notes(newNote);
				await objNote.save();
			}
			return objNote;
		} catch (error) {
			throw error;
		}
	}

	static async updateNote(id, updateNote) {
		try {
			let objNote;
			if(sql) {
				objNote = await models.sequelize.notes.findOne({where: { id: util.Char(id) }});
				if (objNote) {
					await models.sequelize.notes.update(updateNote, { where: { id: util.Char(id) } });
					objNote = await models.sequelize.notes.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateNote._id;
				objNote = await models.mongoose.notes.findOneAndUpdate({id:id}, {$set: updateNote}, {new: true});
			}
			return objNote;
		} catch (error) {
			throw error;
		}
	}

	static async getANote(id, query) {
		try {
			let objNote;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objNote = await models.sequelize.notes.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objNote = await models.mongoose.notes.find({id:util.Char(id)}).select(query.select);
			}
			return objNote;
		} catch (error) {
			throw error;
		}
	}

	static async deleteNote(id) {
		try {
			let objNote;
			if(sql) {
				objNote = await models.sequelize.notes.findOne({ where: { id: util.Char(id) } });
				if (objNote) {
					await models.sequelize.notes.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objNote = await models.mongoose.notes.deleteOne({id:util.Char(id)});
			}
			return objNote;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({id: id});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalFlag(portalFlag, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_flag: portalFlag },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({portal_flag: portalFlag});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmbedFlag(embedFlag, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { embed_flag: embedFlag },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({embed_flag: embedFlag});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({deleted: deleted});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByName(name, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { name: name },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({name: name});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFileMimeType(fileMimeType, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { file_mime_type: fileMimeType },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({file_mime_type: fileMimeType});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFilename(filename, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { filename: filename },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({filename: filename});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentType(parentType, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_type: parentType },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({parent_type: parentType});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({description: description});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({date_entered: dateEntered});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({date_modified: dateModified});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({assigned_user_id: assignedUserId});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({modified_user_id: modifiedUserId});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({created_by: createdBy});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByParentId(parentId, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { parent_id: parentId },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({parent_id: parentId});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objNote = await models.mongoose.notes.findOne({contact_id: contactId});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateNoteById(id, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { id: id }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { id: id } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({id: id}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByPortalFlag(portalFlag, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { portal_flag: portalFlag }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { portal_flag: portalFlag } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({portal_flag: portalFlag}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByEmbedFlag(embedFlag, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { embed_flag: embedFlag }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { embed_flag: embedFlag } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({embed_flag: embedFlag}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByDeleted(deleted, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { deleted: deleted }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { deleted: deleted } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({deleted: deleted}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByName(name, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { name: name }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { name: name } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({name: name}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByFileMimeType(fileMimeType, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { file_mime_type: fileMimeType }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { file_mime_type: fileMimeType } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({file_mime_type: fileMimeType}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByFilename(filename, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { filename: filename }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { filename: filename } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({filename: filename}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByParentType(parentType, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { parent_type: parentType }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { parent_type: parentType } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({parent_type: parentType}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByDescription(description, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { description: description }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { description: description } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({description: description}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByDateEntered(dateEntered, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { date_entered: dateEntered }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({date_entered: dateEntered}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByDateModified(dateModified, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { date_modified: dateModified }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({date_modified: dateModified}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByAssignedUserId(assignedUserId, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByModifiedUserId(modifiedUserId, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByCreatedBy(createdBy, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { created_by: createdBy }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { created_by: createdBy } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({created_by: createdBy}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByParentId(parentId, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { parent_id: parentId }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { parent_id: parentId } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({parent_id: parentId}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateNoteByContactId(contactId, updateNote) {
    	try {
    		let objNote;
    		if(sql) {
    			objNote = await models.sequelize.notes.findOne({where: { contact_id: contactId }});
    			if (objNote) {
    				objNote = await models.sequelize.notes.update(updateNote, { where: { contact_id: contactId } });
    			}
    		} else {
    			objNote = await models.mongoose.notes.findOneAndUpdate({contact_id: contactId}, {$set: updateNote}, {new: true});
    		}
    		return objNote;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = NoteService;
//</es-section>
