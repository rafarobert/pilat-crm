/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Time: 18:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:54
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

class DocumentService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllDocuments(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.documents.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.documents.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllDocuments(select = []) {
		try {
			if(sql) {
				return await models.sequelize.documents.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.documents.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addDocument(newDocument) {
		try {
			let objDocument;
			if(util.PrimaryKeyTypeIsString(models.sequelize.documents.primaryKeys.id.type.toString())) {
			    newDocument.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objDocument = await models.sequelize.documents.create(newDocument);
			} else {
				objDocument = new models.mongoose.documents(newDocument);
				await objDocument.save();
			}
			return objDocument;
		} catch (error) {
			throw error;
		}
	}

	static async updateDocument(id, updateDocument) {
		try {
			let objDocument;
			if(sql) {
				objDocument = await models.sequelize.documents.findOne({where: { id: util.Char(id) }});
				if (objDocument) {
					await models.sequelize.documents.update(updateDocument, { where: { id: util.Char(id) } });
					objDocument = await models.sequelize.documents.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateDocument._id;
				objDocument = await models.mongoose.documents.findOneAndUpdate({id:id}, {$set: updateDocument}, {new: true});
			}
			return objDocument;
		} catch (error) {
			throw error;
		}
	}

	static async getADocument(id, query) {
		try {
			let objDocument;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objDocument = await models.sequelize.documents.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objDocument = await models.mongoose.documents.find({id:util.Char(id)}).select(query.select);
			}
			return objDocument;
		} catch (error) {
			throw error;
		}
	}

	static async deleteDocument(id) {
		try {
			let objDocument;
			if(sql) {
				objDocument = await models.sequelize.documents.findOne({ where: { id: util.Char(id) } });
				if (objDocument) {
					await models.sequelize.documents.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objDocument = await models.mongoose.documents.deleteOne({id:util.Char(id)});
			}
			return objDocument;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({id: id});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({deleted: deleted});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByIsTemplate(isTemplate, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { is_template: isTemplate },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({is_template: isTemplate});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentName(documentName, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_name: documentName },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({document_name: documentName});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocId(docId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_id: docId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({doc_id: docId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocType(docType, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_type: docType },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({doc_type: docType});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocUrl(docUrl, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { doc_url: docUrl },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({doc_url: docUrl});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCategoryId(categoryId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { category_id: categoryId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({category_id: categoryId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySubcategoryId(subcategoryId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { subcategory_id: subcategoryId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({subcategory_id: subcategoryId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatusId(statusId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status_id: statusId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({status_id: statusId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDocumentRevisionId(documentRevisionId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { document_revision_id: documentRevisionId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({document_revision_id: documentRevisionId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTemplateType(templateType, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { template_type: templateType },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({template_type: templateType});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({description: description});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({date_entered: dateEntered});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({date_modified: dateModified});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActiveDate(activeDate, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { active_date: activeDate },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({active_date: activeDate});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExpDate(expDate, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { exp_date: expDate },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({exp_date: expDate});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({modified_user_id: modifiedUserId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({created_by: createdBy});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({assigned_user_id: assignedUserId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedDocId(relatedDocId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_doc_id: relatedDocId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({related_doc_id: relatedDocId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRelatedDocRevId(relatedDocRevId, query = {}) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { related_doc_rev_id: relatedDocRevId },
    			});
    		} else {
    			objDocument = await models.mongoose.documents.findOne({related_doc_rev_id: relatedDocRevId});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateDocumentById(id, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { id: id }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { id: id } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({id: id}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDeleted(deleted, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { deleted: deleted }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { deleted: deleted } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({deleted: deleted}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByIsTemplate(isTemplate, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { is_template: isTemplate }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { is_template: isTemplate } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({is_template: isTemplate}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDocumentName(documentName, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { document_name: documentName }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { document_name: documentName } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({document_name: documentName}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDocId(docId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { doc_id: docId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { doc_id: docId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({doc_id: docId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDocType(docType, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { doc_type: docType }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { doc_type: docType } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({doc_type: docType}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDocUrl(docUrl, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { doc_url: docUrl }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { doc_url: docUrl } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({doc_url: docUrl}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByCategoryId(categoryId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { category_id: categoryId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { category_id: categoryId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({category_id: categoryId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentBySubcategoryId(subcategoryId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { subcategory_id: subcategoryId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { subcategory_id: subcategoryId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({subcategory_id: subcategoryId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByStatusId(statusId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { status_id: statusId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { status_id: statusId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({status_id: statusId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDocumentRevisionId(documentRevisionId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { document_revision_id: documentRevisionId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { document_revision_id: documentRevisionId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({document_revision_id: documentRevisionId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByTemplateType(templateType, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { template_type: templateType }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { template_type: templateType } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({template_type: templateType}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDescription(description, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { description: description }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { description: description } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({description: description}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDateEntered(dateEntered, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { date_entered: dateEntered }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({date_entered: dateEntered}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByDateModified(dateModified, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { date_modified: dateModified }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({date_modified: dateModified}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByActiveDate(activeDate, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { active_date: activeDate }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { active_date: activeDate } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({active_date: activeDate}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByExpDate(expDate, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { exp_date: expDate }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { exp_date: expDate } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({exp_date: expDate}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByModifiedUserId(modifiedUserId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByCreatedBy(createdBy, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { created_by: createdBy }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { created_by: createdBy } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({created_by: createdBy}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByAssignedUserId(assignedUserId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByRelatedDocId(relatedDocId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { related_doc_id: relatedDocId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { related_doc_id: relatedDocId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({related_doc_id: relatedDocId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateDocumentByRelatedDocRevId(relatedDocRevId, updateDocument) {
    	try {
    		let objDocument;
    		if(sql) {
    			objDocument = await models.sequelize.documents.findOne({where: { related_doc_rev_id: relatedDocRevId }});
    			if (objDocument) {
    				objDocument = await models.sequelize.documents.update(updateDocument, { where: { related_doc_rev_id: relatedDocRevId } });
    			}
    		} else {
    			objDocument = await models.mongoose.documents.findOneAndUpdate({related_doc_rev_id: relatedDocRevId}, {$set: updateDocument}, {new: true});
    		}
    		return objDocument;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = DocumentService;
//</es-section>
