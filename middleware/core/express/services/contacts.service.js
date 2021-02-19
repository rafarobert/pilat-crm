/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:46 GMT-0400 (Bolivia Time)
 * Time: 18:36:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:46 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:46
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

class ContactService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllContacts(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.contacts.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.contacts.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllContacts(select = []) {
		try {
			if(sql) {
				return await models.sequelize.contacts.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.contacts.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContact(newContact) {
		try {
			let objContact;
			if(util.PrimaryKeyTypeIsString(models.sequelize.contacts.primaryKeys.id.type.toString())) {
			    newContact.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objContact = await models.sequelize.contacts.create(newContact);
			} else {
				objContact = new models.mongoose.contacts(newContact);
				await objContact.save();
			}
			return objContact;
		} catch (error) {
			throw error;
		}
	}

	static async updateContact(id, updateContact) {
		try {
			let objContact;
			if(sql) {
				objContact = await models.sequelize.contacts.findOne({where: { id: util.Char(id) }});
				if (objContact) {
					await models.sequelize.contacts.update(updateContact, { where: { id: util.Char(id) } });
					objContact = await models.sequelize.contacts.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateContact._id;
				objContact = await models.mongoose.contacts.findOneAndUpdate({id:id}, {$set: updateContact}, {new: true});
			}
			return objContact;
		} catch (error) {
			throw error;
		}
	}

	static async getAContact(id, query) {
		try {
			let objContact;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objContact = await models.sequelize.contacts.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objContact = await models.mongoose.contacts.find({id:util.Char(id)}).select(query.select);
			}
			return objContact;
		} catch (error) {
			throw error;
		}
	}

	static async deleteContact(id) {
		try {
			let objContact;
			if(sql) {
				objContact = await models.sequelize.contacts.findOne({ where: { id: util.Char(id) } });
				if (objContact) {
					await models.sequelize.contacts.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objContact = await models.mongoose.contacts.deleteOne({id:util.Char(id)});
			}
			return objContact;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({id: id});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({deleted: deleted});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDoNotCall(doNotCall, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { do_not_call: doNotCall },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({do_not_call: doNotCall});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalAccountDisabled(portalAccountDisabled, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_account_disabled: portalAccountDisabled },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({portal_account_disabled: portalAccountDisabled});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySalutation(salutation, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { salutation: salutation },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({salutation: salutation});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFirstName(firstName, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { first_name: firstName },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({first_name: firstName});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastName(lastName, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_name: lastName },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({last_name: lastName});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTitle(title, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { title: title },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({title: title});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoto(photo, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { photo: photo },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({photo: photo});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDepartment(department, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { department: department },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({department: department});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneHome(phoneHome, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_home: phoneHome },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({phone_home: phoneHome});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobile(phoneMobile, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobile: phoneMobile },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({phone_mobile: phoneMobile});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneWork(phoneWork, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_work: phoneWork },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({phone_work: phoneWork});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneOther(phoneOther, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_other: phoneOther },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({phone_other: phoneOther});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneFax(phoneFax, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_fax: phoneFax },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({phone_fax: phoneFax});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasisSource(lawfulBasisSource, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis_source: lawfulBasisSource },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({lawful_basis_source: lawfulBasisSource});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressStreet(primaryAddressStreet, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_street: primaryAddressStreet },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({primary_address_street: primaryAddressStreet});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCity(primaryAddressCity, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_city: primaryAddressCity },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({primary_address_city: primaryAddressCity});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressState(primaryAddressState, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_state: primaryAddressState },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({primary_address_state: primaryAddressState});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_postalcode: primaryAddressPostalcode },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({primary_address_postalcode: primaryAddressPostalcode});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCountry(primaryAddressCountry, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_country: primaryAddressCountry },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({primary_address_country: primaryAddressCountry});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressStreet(altAddressStreet, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_street: altAddressStreet },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({alt_address_street: altAddressStreet});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCity(altAddressCity, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_city: altAddressCity },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({alt_address_city: altAddressCity});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressState(altAddressState, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_state: altAddressState },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({alt_address_state: altAddressState});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressPostalcode(altAddressPostalcode, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_postalcode: altAddressPostalcode },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({alt_address_postalcode: altAddressPostalcode});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCountry(altAddressCountry, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_country: altAddressCountry },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({alt_address_country: altAddressCountry});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistant(assistant, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant: assistant },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({assistant: assistant});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistantPhone(assistantPhone, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant_phone: assistantPhone },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({assistant_phone: assistantPhone});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadSource(leadSource, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_source: leadSource },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({lead_source: leadSource});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJoomlaAccountId(joomlaAccountId, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { joomla_account_id: joomlaAccountId },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({joomla_account_id: joomlaAccountId});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalUserType(portalUserType, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_user_type: portalUserType },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({portal_user_type: portalUserType});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({description: description});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasis(lawfulBasis, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis: lawfulBasis },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({lawful_basis: lawfulBasis});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({date_entered: dateEntered});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({date_modified: dateModified});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateReviewed(dateReviewed, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_reviewed: dateReviewed },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({date_reviewed: dateReviewed});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBirthdate(birthdate, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { birthdate: birthdate },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({birthdate: birthdate});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({modified_user_id: modifiedUserId});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({created_by: createdBy});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({assigned_user_id: assignedUserId});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReportsToId(reportsToId, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reports_to_id: reportsToId },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({reports_to_id: reportsToId});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objContact = await models.mongoose.contacts.findOne({campaign_id: campaignId});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateContactById(id, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { id: id }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { id: id } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({id: id}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDeleted(deleted, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { deleted: deleted }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { deleted: deleted } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({deleted: deleted}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDoNotCall(doNotCall, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { do_not_call: doNotCall }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { do_not_call: doNotCall } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({do_not_call: doNotCall}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPortalAccountDisabled(portalAccountDisabled, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { portal_account_disabled: portalAccountDisabled }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { portal_account_disabled: portalAccountDisabled } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({portal_account_disabled: portalAccountDisabled}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactBySalutation(salutation, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { salutation: salutation }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { salutation: salutation } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({salutation: salutation}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByFirstName(firstName, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { first_name: firstName }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { first_name: firstName } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({first_name: firstName}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByLastName(lastName, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { last_name: lastName }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { last_name: lastName } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({last_name: lastName}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByTitle(title, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { title: title }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { title: title } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({title: title}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoto(photo, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { photo: photo }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { photo: photo } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({photo: photo}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDepartment(department, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { department: department }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { department: department } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({department: department}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoneHome(phoneHome, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { phone_home: phoneHome }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { phone_home: phoneHome } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({phone_home: phoneHome}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoneMobile(phoneMobile, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { phone_mobile: phoneMobile }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { phone_mobile: phoneMobile } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({phone_mobile: phoneMobile}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoneWork(phoneWork, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { phone_work: phoneWork }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { phone_work: phoneWork } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({phone_work: phoneWork}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoneOther(phoneOther, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { phone_other: phoneOther }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { phone_other: phoneOther } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({phone_other: phoneOther}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPhoneFax(phoneFax, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { phone_fax: phoneFax }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { phone_fax: phoneFax } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({phone_fax: phoneFax}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByLawfulBasisSource(lawfulBasisSource, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { lawful_basis_source: lawfulBasisSource }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { lawful_basis_source: lawfulBasisSource } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({lawful_basis_source: lawfulBasisSource}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPrimaryAddressStreet(primaryAddressStreet, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { primary_address_street: primaryAddressStreet }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { primary_address_street: primaryAddressStreet } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({primary_address_street: primaryAddressStreet}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPrimaryAddressCity(primaryAddressCity, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { primary_address_city: primaryAddressCity }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { primary_address_city: primaryAddressCity } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({primary_address_city: primaryAddressCity}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPrimaryAddressState(primaryAddressState, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { primary_address_state: primaryAddressState }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { primary_address_state: primaryAddressState } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({primary_address_state: primaryAddressState}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPrimaryAddressPostalcode(primaryAddressPostalcode, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { primary_address_postalcode: primaryAddressPostalcode }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { primary_address_postalcode: primaryAddressPostalcode } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({primary_address_postalcode: primaryAddressPostalcode}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPrimaryAddressCountry(primaryAddressCountry, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { primary_address_country: primaryAddressCountry }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { primary_address_country: primaryAddressCountry } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({primary_address_country: primaryAddressCountry}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAltAddressStreet(altAddressStreet, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { alt_address_street: altAddressStreet }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { alt_address_street: altAddressStreet } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({alt_address_street: altAddressStreet}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAltAddressCity(altAddressCity, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { alt_address_city: altAddressCity }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { alt_address_city: altAddressCity } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({alt_address_city: altAddressCity}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAltAddressState(altAddressState, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { alt_address_state: altAddressState }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { alt_address_state: altAddressState } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({alt_address_state: altAddressState}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAltAddressPostalcode(altAddressPostalcode, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { alt_address_postalcode: altAddressPostalcode }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { alt_address_postalcode: altAddressPostalcode } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({alt_address_postalcode: altAddressPostalcode}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAltAddressCountry(altAddressCountry, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { alt_address_country: altAddressCountry }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { alt_address_country: altAddressCountry } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({alt_address_country: altAddressCountry}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAssistant(assistant, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { assistant: assistant }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { assistant: assistant } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({assistant: assistant}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAssistantPhone(assistantPhone, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { assistant_phone: assistantPhone }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { assistant_phone: assistantPhone } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({assistant_phone: assistantPhone}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByLeadSource(leadSource, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { lead_source: leadSource }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { lead_source: leadSource } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({lead_source: leadSource}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByJoomlaAccountId(joomlaAccountId, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { joomla_account_id: joomlaAccountId }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { joomla_account_id: joomlaAccountId } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({joomla_account_id: joomlaAccountId}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByPortalUserType(portalUserType, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { portal_user_type: portalUserType }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { portal_user_type: portalUserType } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({portal_user_type: portalUserType}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDescription(description, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { description: description }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { description: description } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({description: description}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByLawfulBasis(lawfulBasis, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { lawful_basis: lawfulBasis }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { lawful_basis: lawfulBasis } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({lawful_basis: lawfulBasis}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDateEntered(dateEntered, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { date_entered: dateEntered }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({date_entered: dateEntered}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDateModified(dateModified, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { date_modified: dateModified }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({date_modified: dateModified}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByDateReviewed(dateReviewed, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { date_reviewed: dateReviewed }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { date_reviewed: dateReviewed } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({date_reviewed: dateReviewed}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByBirthdate(birthdate, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { birthdate: birthdate }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { birthdate: birthdate } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({birthdate: birthdate}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByModifiedUserId(modifiedUserId, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByCreatedBy(createdBy, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { created_by: createdBy }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { created_by: createdBy } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({created_by: createdBy}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByAssignedUserId(assignedUserId, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByReportsToId(reportsToId, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { reports_to_id: reportsToId }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { reports_to_id: reportsToId } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({reports_to_id: reportsToId}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateContactByCampaignId(campaignId, updateContact) {
    	try {
    		let objContact;
    		if(sql) {
    			objContact = await models.sequelize.contacts.findOne({where: { campaign_id: campaignId }});
    			if (objContact) {
    				objContact = await models.sequelize.contacts.update(updateContact, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objContact = await models.mongoose.contacts.findOneAndUpdate({campaign_id: campaignId}, {$set: updateContact}, {new: true});
    		}
    		return objContact;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = ContactService;
//</es-section>
