/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:27 GMT-0400 (Bolivia Time)
 * Time: 4:43:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:27 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:27
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

class LeadService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllLeads(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.leads.findAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.leads.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllLeads(select = []) {
		try {
			if(sql) {
				return await models.sequelize.leads.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.leads.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addLead(newLead) {
		try {
			let objLead;
			if(util.PrimaryKeyTypeIsString(models.sequelize.leads.primaryKeys.id.type.toString())) {
			    newLead.id = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objLead = await models.sequelize.leads.create(newLead);
			} else {
				objLead = new models.mongoose.leads(newLead);
				await objLead.save();
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}

	static async updateLead(id, updateLead) {
		try {
			let objLead;
			if(sql) {
				objLead = await models.sequelize.leads.findOne({where: { id: util.Char(id) }});
				if (objLead) {
					await models.sequelize.leads.update(updateLead, { where: { id: util.Char(id) } });
					objLead = await models.sequelize.leads.findOne({where: { id: util.Char(id) }});
				}
			} else {
				delete updateLead._id;
				objLead = await models.mongoose.leads.findOneAndUpdate({id:id}, {$set: updateLead}, {new: true});
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}

	static async getALead(id, query) {
		try {
			let objLead;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objLead = await models.sequelize.leads.findOne({
					    where: where && !where.where ? where : { id: util.Char(id) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objLead = await models.mongoose.leads.find({id:util.Char(id)}).select(query.select);
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}

	static async deleteLead(id) {
		try {
			let objLead;
			if(sql) {
				objLead = await models.sequelize.leads.findOne({ where: { id: util.Char(id) } });
				if (objLead) {
					await models.sequelize.leads.destroy({where: { id: util.Char(id) }});
				}
			} else {
				objLead = await models.mongoose.leads.deleteOne({id:util.Char(id)});
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneById(id, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id: id },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({id: id});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDeleted(deleted, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { deleted: deleted },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({deleted: deleted});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDoNotCall(doNotCall, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { do_not_call: doNotCall },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({do_not_call: doNotCall});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByConverted(converted, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { converted: converted },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({converted: converted});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySalutation(salutation, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { salutation: salutation },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({salutation: salutation});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFirstName(firstName, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { first_name: firstName },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({first_name: firstName});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLastName(lastName, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { last_name: lastName },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({last_name: lastName});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTitle(title, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { title: title },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({title: title});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoto(photo, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { photo: photo },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({photo: photo});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDepartment(department, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { department: department },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({department: department});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneHome(phoneHome, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_home: phoneHome },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({phone_home: phoneHome});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobile(phoneMobile, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobile: phoneMobile },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({phone_mobile: phoneMobile});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneWork(phoneWork, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_work: phoneWork },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({phone_work: phoneWork});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneOther(phoneOther, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_other: phoneOther },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({phone_other: phoneOther});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneFax(phoneFax, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_fax: phoneFax },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({phone_fax: phoneFax});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasisSource(lawfulBasisSource, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis_source: lawfulBasisSource },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({lawful_basis_source: lawfulBasisSource});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressStreet(primaryAddressStreet, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_street: primaryAddressStreet },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({primary_address_street: primaryAddressStreet});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCity(primaryAddressCity, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_city: primaryAddressCity },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({primary_address_city: primaryAddressCity});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressState(primaryAddressState, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_state: primaryAddressState },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({primary_address_state: primaryAddressState});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_postalcode: primaryAddressPostalcode },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({primary_address_postalcode: primaryAddressPostalcode});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPrimaryAddressCountry(primaryAddressCountry, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { primary_address_country: primaryAddressCountry },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({primary_address_country: primaryAddressCountry});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressStreet(altAddressStreet, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_street: altAddressStreet },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({alt_address_street: altAddressStreet});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCity(altAddressCity, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_city: altAddressCity },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({alt_address_city: altAddressCity});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressState(altAddressState, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_state: altAddressState },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({alt_address_state: altAddressState});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressPostalcode(altAddressPostalcode, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_postalcode: altAddressPostalcode },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({alt_address_postalcode: altAddressPostalcode});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAltAddressCountry(altAddressCountry, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { alt_address_country: altAddressCountry },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({alt_address_country: altAddressCountry});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistant(assistant, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant: assistant },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({assistant: assistant});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssistantPhone(assistantPhone, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assistant_phone: assistantPhone },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({assistant_phone: assistantPhone});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReferedBy(referedBy, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { refered_by: referedBy },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({refered_by: referedBy});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadSource(leadSource, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_source: leadSource },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({lead_source: leadSource});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatus(status, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status: status },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({status: status});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountName(accountName, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_name: accountName },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({account_name: accountName});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityName(opportunityName, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_name: opportunityName },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({opportunity_name: opportunityName});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityAmount(opportunityAmount, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_amount: opportunityAmount },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({opportunity_amount: opportunityAmount});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalName(portalName, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_name: portalName },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({portal_name: portalName});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPortalApp(portalApp, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { portal_app: portalApp },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({portal_app: portalApp});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByWebsite(website, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { website: website },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({website: website});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDescription(description, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { description: description },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({description: description});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLawfulBasis(lawfulBasis, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lawful_basis: lawfulBasis },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({lawful_basis: lawfulBasis});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByLeadSourceDescription(leadSourceDescription, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { lead_source_description: leadSourceDescription },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({lead_source_description: leadSourceDescription});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByStatusDescription(statusDescription, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { status_description: statusDescription },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({status_description: statusDescription});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountDescription(accountDescription, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_description: accountDescription },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({account_description: accountDescription});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateEntered(dateEntered, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_entered: dateEntered },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({date_entered: dateEntered});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateModified(dateModified, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_modified: dateModified },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({date_modified: dateModified});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDateReviewed(dateReviewed, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { date_reviewed: dateReviewed },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({date_reviewed: dateReviewed});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByBirthdate(birthdate, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { birthdate: birthdate },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({birthdate: birthdate});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByModifiedUserId(modifiedUserId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { modified_user_id: modifiedUserId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({modified_user_id: modifiedUserId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCreatedBy(createdBy, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { created_by: createdBy },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({created_by: createdBy});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAssignedUserId(assignedUserId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { assigned_user_id: assignedUserId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({assigned_user_id: assignedUserId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByReportsToId(reportsToId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { reports_to_id: reportsToId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({reports_to_id: reportsToId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByContactId(contactId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { contact_id: contactId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({contact_id: contactId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAccountId(accountId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { account_id: accountId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({account_id: accountId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByOpportunityId(opportunityId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { opportunity_id: opportunityId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({opportunity_id: opportunityId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCampaignId(campaignId, query = {}) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { campaign_id: campaignId },
    			});
    		} else {
    			objLead = await models.mongoose.leads.findOne({campaign_id: campaignId});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateLeadById(id, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { id: id }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { id: id } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({id: id}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDeleted(deleted, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { deleted: deleted }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { deleted: deleted } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({deleted: deleted}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDoNotCall(doNotCall, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { do_not_call: doNotCall }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { do_not_call: doNotCall } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({do_not_call: doNotCall}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByConverted(converted, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { converted: converted }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { converted: converted } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({converted: converted}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadBySalutation(salutation, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { salutation: salutation }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { salutation: salutation } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({salutation: salutation}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByFirstName(firstName, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { first_name: firstName }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { first_name: firstName } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({first_name: firstName}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByLastName(lastName, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { last_name: lastName }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { last_name: lastName } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({last_name: lastName}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByTitle(title, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { title: title }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { title: title } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({title: title}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoto(photo, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { photo: photo }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { photo: photo } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({photo: photo}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDepartment(department, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { department: department }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { department: department } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({department: department}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoneHome(phoneHome, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { phone_home: phoneHome }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { phone_home: phoneHome } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({phone_home: phoneHome}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoneMobile(phoneMobile, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { phone_mobile: phoneMobile }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { phone_mobile: phoneMobile } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({phone_mobile: phoneMobile}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoneWork(phoneWork, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { phone_work: phoneWork }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { phone_work: phoneWork } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({phone_work: phoneWork}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoneOther(phoneOther, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { phone_other: phoneOther }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { phone_other: phoneOther } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({phone_other: phoneOther}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPhoneFax(phoneFax, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { phone_fax: phoneFax }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { phone_fax: phoneFax } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({phone_fax: phoneFax}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByLawfulBasisSource(lawfulBasisSource, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { lawful_basis_source: lawfulBasisSource }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { lawful_basis_source: lawfulBasisSource } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({lawful_basis_source: lawfulBasisSource}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPrimaryAddressStreet(primaryAddressStreet, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { primary_address_street: primaryAddressStreet }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { primary_address_street: primaryAddressStreet } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({primary_address_street: primaryAddressStreet}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPrimaryAddressCity(primaryAddressCity, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { primary_address_city: primaryAddressCity }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { primary_address_city: primaryAddressCity } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({primary_address_city: primaryAddressCity}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPrimaryAddressState(primaryAddressState, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { primary_address_state: primaryAddressState }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { primary_address_state: primaryAddressState } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({primary_address_state: primaryAddressState}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPrimaryAddressPostalcode(primaryAddressPostalcode, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { primary_address_postalcode: primaryAddressPostalcode }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { primary_address_postalcode: primaryAddressPostalcode } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({primary_address_postalcode: primaryAddressPostalcode}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPrimaryAddressCountry(primaryAddressCountry, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { primary_address_country: primaryAddressCountry }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { primary_address_country: primaryAddressCountry } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({primary_address_country: primaryAddressCountry}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAltAddressStreet(altAddressStreet, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { alt_address_street: altAddressStreet }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { alt_address_street: altAddressStreet } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({alt_address_street: altAddressStreet}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAltAddressCity(altAddressCity, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { alt_address_city: altAddressCity }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { alt_address_city: altAddressCity } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({alt_address_city: altAddressCity}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAltAddressState(altAddressState, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { alt_address_state: altAddressState }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { alt_address_state: altAddressState } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({alt_address_state: altAddressState}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAltAddressPostalcode(altAddressPostalcode, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { alt_address_postalcode: altAddressPostalcode }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { alt_address_postalcode: altAddressPostalcode } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({alt_address_postalcode: altAddressPostalcode}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAltAddressCountry(altAddressCountry, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { alt_address_country: altAddressCountry }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { alt_address_country: altAddressCountry } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({alt_address_country: altAddressCountry}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAssistant(assistant, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { assistant: assistant }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { assistant: assistant } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({assistant: assistant}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAssistantPhone(assistantPhone, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { assistant_phone: assistantPhone }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { assistant_phone: assistantPhone } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({assistant_phone: assistantPhone}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByReferedBy(referedBy, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { refered_by: referedBy }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { refered_by: referedBy } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({refered_by: referedBy}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByLeadSource(leadSource, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { lead_source: leadSource }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { lead_source: leadSource } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({lead_source: leadSource}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByStatus(status, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { status: status }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { status: status } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({status: status}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAccountName(accountName, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { account_name: accountName }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { account_name: accountName } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({account_name: accountName}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByOpportunityName(opportunityName, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { opportunity_name: opportunityName }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { opportunity_name: opportunityName } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({opportunity_name: opportunityName}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByOpportunityAmount(opportunityAmount, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { opportunity_amount: opportunityAmount }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { opportunity_amount: opportunityAmount } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({opportunity_amount: opportunityAmount}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPortalName(portalName, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { portal_name: portalName }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { portal_name: portalName } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({portal_name: portalName}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByPortalApp(portalApp, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { portal_app: portalApp }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { portal_app: portalApp } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({portal_app: portalApp}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByWebsite(website, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { website: website }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { website: website } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({website: website}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDescription(description, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { description: description }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { description: description } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({description: description}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByLawfulBasis(lawfulBasis, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { lawful_basis: lawfulBasis }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { lawful_basis: lawfulBasis } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({lawful_basis: lawfulBasis}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByLeadSourceDescription(leadSourceDescription, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { lead_source_description: leadSourceDescription }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { lead_source_description: leadSourceDescription } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({lead_source_description: leadSourceDescription}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByStatusDescription(statusDescription, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { status_description: statusDescription }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { status_description: statusDescription } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({status_description: statusDescription}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAccountDescription(accountDescription, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { account_description: accountDescription }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { account_description: accountDescription } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({account_description: accountDescription}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDateEntered(dateEntered, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { date_entered: dateEntered }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { date_entered: dateEntered } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({date_entered: dateEntered}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDateModified(dateModified, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { date_modified: dateModified }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { date_modified: dateModified } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({date_modified: dateModified}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByDateReviewed(dateReviewed, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { date_reviewed: dateReviewed }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { date_reviewed: dateReviewed } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({date_reviewed: dateReviewed}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByBirthdate(birthdate, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { birthdate: birthdate }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { birthdate: birthdate } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({birthdate: birthdate}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByModifiedUserId(modifiedUserId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { modified_user_id: modifiedUserId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { modified_user_id: modifiedUserId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({modified_user_id: modifiedUserId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByCreatedBy(createdBy, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { created_by: createdBy }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { created_by: createdBy } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({created_by: createdBy}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAssignedUserId(assignedUserId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { assigned_user_id: assignedUserId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { assigned_user_id: assignedUserId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({assigned_user_id: assignedUserId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByReportsToId(reportsToId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { reports_to_id: reportsToId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { reports_to_id: reportsToId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({reports_to_id: reportsToId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByContactId(contactId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { contact_id: contactId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { contact_id: contactId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({contact_id: contactId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByAccountId(accountId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { account_id: accountId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { account_id: accountId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({account_id: accountId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByOpportunityId(opportunityId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { opportunity_id: opportunityId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { opportunity_id: opportunityId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({opportunity_id: opportunityId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadByCampaignId(campaignId, updateLead) {
    	try {
    		let objLead;
    		if(sql) {
    			objLead = await models.sequelize.leads.findOne({where: { campaign_id: campaignId }});
    			if (objLead) {
    				objLead = await models.sequelize.leads.update(updateLead, { where: { campaign_id: campaignId } });
    			}
    		} else {
    			objLead = await models.mongoose.leads.findOneAndUpdate({campaign_id: campaignId}, {$set: updateLead}, {new: true});
    		}
    		return objLead;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = LeadService;
//</es-section>
