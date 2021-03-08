/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:52 GMT-0400 (Bolivia Time)
 * Time: 15:36:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:52 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:52
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

class ProspectService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllProspects(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.prospects.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.prospects.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllProspects(select = []) {
		try {
			if(sql) {
				return await models.sequelize.prospects.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.prospects.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addProspect(newProspect) {
		try {
			let objProspect;
			if(util.PrimaryKeyTypeIsString(models.sequelize.prospects.primaryKeys.id.type.toString())) {
			    newProspect.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objProspect = await models.sequelize.prospects.create(newProspect);
			} else {
				objProspect = new models.mongoose.prospects(newProspect);
				await objProspect.save();
			}
			return objProspect;
		} catch (error) {
			throw error;
		}
	}

	static async updateProspect(id, updateProspect) {
		try {
			let objProspect;
			if(sql) {
				objProspect = await models.sequelize.prospects.findOne({where: { id: util.Char(id) }});
				if (objProspect) {
					await models.sequelize.prospects.update(updateProspect, { where: { id: util.Char(id) } });
					objProspect = await models.sequelize.prospects.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateProspect._id;
				objProspect = await models.mongoose.prospects.findOneAndUpdate({id:id}, {$set: updateProspect}, {new: true});
			}
			return objProspect;
		} catch (error) {
			throw error;
		}
	}

	static async getAProspect(id, query) {
		try {
			let objProspect;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objProspect = await models.sequelize.prospects.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objProspect = await models.mongoose.prospects.find({id:util.Char(id)}).select(query.select);
			}
			return objProspect;
		} catch (error) {
			throw error;
		}
	}

	static async deleteProspect(id) {
		try {
			let objProspect;
			if(sql) {
				objProspect = await models.sequelize.prospects.findOne({ where: { id: util.Char(id) } });
				if (objProspect) {
					await models.sequelize.prospects.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objProspect = await models.mongoose.prospects.deleteOne({id:util.Char(id)});
			}
			return objProspect;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({id: id});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({deleted: deleted});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDoNotCall(doNotCall, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { do_not_call: doNotCall },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({do_not_call: doNotCall});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTrackerKey(trackerKey, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tracker_key: trackerKey },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({tracker_key: trackerKey});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySalutation(salutation, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { salutation: salutation },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({salutation: salutation});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFirstName(firstName, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { first_name: firstName },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({first_name: firstName});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastName(lastName, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_name: lastName },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({last_name: lastName});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTitle(title, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { title: title },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({title: title});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoto(photo, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { photo: photo },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({photo: photo});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDepartment(department, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { department: department },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({department: department});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneHome(phoneHome, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_home: phoneHome },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({phone_home: phoneHome});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobile(phoneMobile, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobile: phoneMobile },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({phone_mobile: phoneMobile});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneWork(phoneWork, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_work: phoneWork },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({phone_work: phoneWork});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneOther(phoneOther, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_other: phoneOther },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({phone_other: phoneOther});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneFax(phoneFax, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_fax: phoneFax },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({phone_fax: phoneFax});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasisSource(lawfulBasisSource, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis_source: lawfulBasisSource },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({lawful_basis_source: lawfulBasisSource});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressStreet(primaryAddressStreet, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_street: primaryAddressStreet },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({primary_address_street: primaryAddressStreet});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCity(primaryAddressCity, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_city: primaryAddressCity },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({primary_address_city: primaryAddressCity});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressState(primaryAddressState, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_state: primaryAddressState },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({primary_address_state: primaryAddressState});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_postalcode: primaryAddressPostalcode },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({primary_address_postalcode: primaryAddressPostalcode});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCountry(primaryAddressCountry, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_country: primaryAddressCountry },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({primary_address_country: primaryAddressCountry});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressStreet(altAddressStreet, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_street: altAddressStreet },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({alt_address_street: altAddressStreet});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCity(altAddressCity, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_city: altAddressCity },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({alt_address_city: altAddressCity});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressState(altAddressState, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_state: altAddressState },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({alt_address_state: altAddressState});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressPostalcode(altAddressPostalcode, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_postalcode: altAddressPostalcode },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({alt_address_postalcode: altAddressPostalcode});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCountry(altAddressCountry, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_country: altAddressCountry },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({alt_address_country: altAddressCountry});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistant(assistant, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant: assistant },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({assistant: assistant});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistantPhone(assistantPhone, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant_phone: assistantPhone },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({assistant_phone: assistantPhone});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountName(accountName, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_name: accountName },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({account_name: accountName});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({description: description});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasis(lawfulBasis, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis: lawfulBasis },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({lawful_basis: lawfulBasis});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({date_entered: dateEntered});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({date_modified: dateModified});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateReviewed(dateReviewed, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_reviewed: dateReviewed },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({date_reviewed: dateReviewed});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBirthdate(birthdate, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { birthdate: birthdate },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({birthdate: birthdate});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({modified_user_id: modifiedUserId});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({created_by: createdBy});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({assigned_user_id: assignedUserId});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadId(leadId, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_id: leadId },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({lead_id: leadId});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objProspect = await models.mongoose.prospects.findOne({campaign_id: campaignId});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateProspectById(id, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { id: id }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { id: id } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({id: id}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDeleted(deleted, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { deleted: deleted }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { deleted: deleted } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({deleted: deleted}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDoNotCall(doNotCall, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { do_not_call: doNotCall }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { do_not_call: doNotCall } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({do_not_call: doNotCall}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByTrackerKey(trackerKey, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { tracker_key: trackerKey }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { tracker_key: trackerKey } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({tracker_key: trackerKey}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectBySalutation(salutation, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { salutation: salutation }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { salutation: salutation } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({salutation: salutation}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByFirstName(firstName, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { first_name: firstName }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { first_name: firstName } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({first_name: firstName}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByLastName(lastName, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { last_name: lastName }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { last_name: lastName } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({last_name: lastName}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByTitle(title, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { title: title }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { title: title } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({title: title}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoto(photo, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { photo: photo }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { photo: photo } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({photo: photo}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDepartment(department, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { department: department }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { department: department } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({department: department}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoneHome(phoneHome, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { phone_home: phoneHome }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { phone_home: phoneHome } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({phone_home: phoneHome}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoneMobile(phoneMobile, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { phone_mobile: phoneMobile }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { phone_mobile: phoneMobile } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({phone_mobile: phoneMobile}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoneWork(phoneWork, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { phone_work: phoneWork }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { phone_work: phoneWork } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({phone_work: phoneWork}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoneOther(phoneOther, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { phone_other: phoneOther }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { phone_other: phoneOther } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({phone_other: phoneOther}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPhoneFax(phoneFax, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { phone_fax: phoneFax }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { phone_fax: phoneFax } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({phone_fax: phoneFax}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByLawfulBasisSource(lawfulBasisSource, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { lawful_basis_source: lawfulBasisSource }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { lawful_basis_source: lawfulBasisSource } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({lawful_basis_source: lawfulBasisSource}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPrimaryAddressStreet(primaryAddressStreet, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { primary_address_street: primaryAddressStreet }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { primary_address_street: primaryAddressStreet } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({primary_address_street: primaryAddressStreet}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPrimaryAddressCity(primaryAddressCity, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { primary_address_city: primaryAddressCity }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { primary_address_city: primaryAddressCity } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({primary_address_city: primaryAddressCity}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPrimaryAddressState(primaryAddressState, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { primary_address_state: primaryAddressState }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { primary_address_state: primaryAddressState } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({primary_address_state: primaryAddressState}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPrimaryAddressPostalcode(primaryAddressPostalcode, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { primary_address_postalcode: primaryAddressPostalcode }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { primary_address_postalcode: primaryAddressPostalcode } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({primary_address_postalcode: primaryAddressPostalcode}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByPrimaryAddressCountry(primaryAddressCountry, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { primary_address_country: primaryAddressCountry }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { primary_address_country: primaryAddressCountry } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({primary_address_country: primaryAddressCountry}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAltAddressStreet(altAddressStreet, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { alt_address_street: altAddressStreet }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { alt_address_street: altAddressStreet } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({alt_address_street: altAddressStreet}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAltAddressCity(altAddressCity, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { alt_address_city: altAddressCity }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { alt_address_city: altAddressCity } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({alt_address_city: altAddressCity}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAltAddressState(altAddressState, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { alt_address_state: altAddressState }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { alt_address_state: altAddressState } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({alt_address_state: altAddressState}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAltAddressPostalcode(altAddressPostalcode, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { alt_address_postalcode: altAddressPostalcode }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { alt_address_postalcode: altAddressPostalcode } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({alt_address_postalcode: altAddressPostalcode}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAltAddressCountry(altAddressCountry, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { alt_address_country: altAddressCountry }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { alt_address_country: altAddressCountry } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({alt_address_country: altAddressCountry}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAssistant(assistant, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { assistant: assistant }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { assistant: assistant } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({assistant: assistant}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAssistantPhone(assistantPhone, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { assistant_phone: assistantPhone }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { assistant_phone: assistantPhone } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({assistant_phone: assistantPhone}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAccountName(accountName, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { account_name: accountName }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { account_name: accountName } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({account_name: accountName}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDescription(description, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { description: description }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { description: description } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({description: description}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByLawfulBasis(lawfulBasis, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { lawful_basis: lawfulBasis }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { lawful_basis: lawfulBasis } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({lawful_basis: lawfulBasis}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDateEntered(dateEntered, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { date_entered: dateEntered }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({date_entered: dateEntered}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDateModified(dateModified, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { date_modified: dateModified }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({date_modified: dateModified}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByDateReviewed(dateReviewed, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { date_reviewed: dateReviewed }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { date_reviewed: dateReviewed } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({date_reviewed: dateReviewed}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByBirthdate(birthdate, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { birthdate: birthdate }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { birthdate: birthdate } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({birthdate: birthdate}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByModifiedUserId(modifiedUserId, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByCreatedBy(createdBy, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { created_by: createdBy }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { created_by: createdBy } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({created_by: createdBy}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByAssignedUserId(assignedUserId, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByLeadId(leadId, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { lead_id: leadId }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { lead_id: leadId } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({lead_id: leadId}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateProspectByCampaignId(campaignId, updateProspect) {
    	try {
    		let objProspect;
    		if(sql) {
    			objProspect = await models.sequelize.prospects.findOne({where: { campaign_id: campaignId }});
    			if (objProspect) {
    				objProspect = await models.sequelize.prospects.update(updateProspect, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objProspect = await models.mongoose.prospects.findOneAndUpdate({campaign_id: campaignId}, {$set: updateProspect}, {new: true});
    		}
    		return objProspect;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ProspectService;
//</es-section>
