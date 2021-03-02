import fs from "fs";

/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

require('../../../../utils/Prototipes');
const helpers = require('../../../../utils/helpers');
const models = require('../../../relations');
import configJson from '../../../../config/config';
const sql = configJson.sql;
const Util = require('../../../../utils/Utils');
const util = new Util();
const htmlPdf = require('../../../../modules/html-pdf');
const nodeMailer = require("../../../../modules/nodemailer");
const {loggerEmail, loggerPdf} = require("../../../../modules/winston");

const path = require('path');
const { Op } = require("sequelize");

class OpportunityService {

	static async getAllOpportunities(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.opportunities.findAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.opportunitiesCstm, as:'opportunityOpportunitiesCstm',
							where: where ? where.where ? where.where.opportunityOpportunitiesCstm ? where.where.opportunityOpportunitiesCstm : null : null : null,
						},
						{model:models.sequelize.opportunitiesContacts, as:'opportunityOpportunitiesContacts',
							include:{
								model:models.sequelize.contacts, as:'opportunityContactContacts',
								include:[
									{model:models.sequelize.emails, as:'contactEmails'},
									{model:models.sequelize.contactsCstm, as:'contactContactsCstm'},
									{model:models.sequelize.emailAddrBeanRel, as:'contactEmailAddrBeanRel',
										include:{
											model:models.sequelize.emailAddresses, as:'emailAddrBeanRelEmailAddresses'
										}
									}
								]
							}
						},
						{model:models.sequelize.accountsOpportunities, as:'opportunityAccountsOpportunities',
							include:{
								model:models.sequelize.accounts, as:'accountOpportunityAccounts',
								include:{
									model:models.sequelize.accountsCstm, as:'accountAccountsCstm'
								}
							}
						},
						{model:models.sequelize.aosQuotes, as:'opportunityAosQuotes',
							include:{
								model:models.sequelize.aosQuotesCstm, as:'aoQuoteAosQuotesCstm'
							}
						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getAOpportunity(id, query) {
		try {
			if(sql) {
				return await models.sequelize.opportunities.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.opportunitiesCstm, as:'opportunityOpportunitiesCstm'},
						{model:models.sequelize.opportunitiesContacts, as:'opportunityOpportunitiesContacts',
							include:{
								model:models.sequelize.contacts, as:'opportunityContactContacts',
								include:[
									{model:models.sequelize.emails, as:'contactEmails'},
									{model:models.sequelize.contactsCstm, as:'contactContactsCstm'},
									{model:models.sequelize.emailAddrBeanRel, as:'contactEmailAddrBeanRel',
										include:{
											model:models.sequelize.emailAddresses, as:'emailAddrBeanRelEmailAddresses'
										}
									}
								]
							}
						},
						{model:models.sequelize.accountsOpportunities, as:'opportunityAccountsOpportunities',
							include:{
								model:models.sequelize.accounts, as:'accountOpportunityAccounts',
								include:{
									model:models.sequelize.accountsCstm, as:'accountAccountsCstm'
								}
							}
						},
						{model:models.sequelize.aosQuotes, as:'opportunityAosQuotes',
							include:{
								model:models.sequelize.aosQuotesCstm, as:'aoQuoteAosQuotesCstm'
							}
						},
						{model:models.sequelize.opportunitiesAudit, as:'opportunityOpportunitiesAudit'},
						{model:models.sequelize.sugarfeed, as:'opportunitySugarfeed'},
						{model:models.sequelize.aodIndexevent, as:'opportunityAodIndexevent'},
						{model:models.sequelize.tracker, as:'opportunityTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	// static async updateOpportunity(id, updateOpportunity) {
	// 	try {
	// 		let objOpportunity;
	// 		if(sql) {
	// 			objOpportunity = await models.sequelize.opportunities.findOne({where: { id: util.Char(id) }});
	// 			objOpportunity.opportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: util.Char(id) }});
	// 			if (objOpportunity) {
	// 				await models.sequelize.opportunities.update(updateOpportunity, { where: { id: util.Char(id) } });
	// 				objOpportunity = await models.sequelize.opportunities.findOne({where: { id: util.Char(id) }});
	// 				await models.sequelize.opportunitiesCstm.update(updateOpportunity.opportunityCstm, { where: { id_c: util.Char(id) } });
	// 				objOpportunity.opportunityCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: util.Char(id) }});
	// 			}
	// 		} else {
	// 			delete updateOpportunity._id;
	// 			objOpportunity = await models.mongoose.opportunities.findOneAndUpdate({id:id}, {$set: updateOpportunity}, {new: true});
	// 		}
	// 		return objOpportunity;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }


	static async addOpportunity(newOpportunity) {		try {

			let objOpportunity, respContacts;

			if(sql) {

				if (newOpportunity) {
					let respOpportunity, respOpportunitiesCstm;
					if (newOpportunity.id) {
						newOpportunity.date_modified = new Date();
						await models.sequelize.opportunities.update(newOpportunity, {where:{id:newOpportunity.id}});
						respOpportunity = await models.sequelize.opportunities.findOne({where: { id: newOpportunity.id }});
					} else {
						newOpportunity.id = models.sequelize.objectId().toString();
						newOpportunity.date_entered = new Date();
						newOpportunity.date_modified = new Date();
						newOpportunity.date_closed = new Date();
						respOpportunity = await models.sequelize.opportunities.create(newOpportunity);
					}
					if (newOpportunity.opportunityOpportunitiesCstm) {
						if (newOpportunity.opportunityOpportunitiesCstm.id_c){
							await models.sequelize.opportunitiesCstm.update(newOpportunity.opportunityOpportunitiesCstm, {where:{id_c:newOpportunity.opportunityOpportunitiesCstm.id_c}});
							respOpportunitiesCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: newOpportunity.opportunityOpportunitiesCstm.id_c }});
						} else {
							newOpportunity.opportunityOpportunitiesCstm.id_c = newOpportunity.id;
							respOpportunitiesCstm = await models.sequelize.opportunitiesCstm.create(newOpportunity.opportunityOpportunitiesCstm);
						}
					}
					objOpportunity = respOpportunity.dataValues;
					objOpportunity.opportunityOpportunitiesCstm = respOpportunitiesCstm.dataValues;

					// BEGIN CONTACTS

					let respContactsCstm, respOpportunitiesContacts;
					if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts) {
						if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id) {
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_modified = new Date();
							await models.sequelize.contacts.update(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts, {where:{id:newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id}});
							respContacts = await models.sequelize.contacts.findOne({where: { id: newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id }});
						} else {
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_entered = new Date();
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_modified = new Date();
							respContacts = await models.sequelize.contacts.create(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts);
						}

						if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm) {
							if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c) {
								await models.sequelize.contactsCstm.update(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm, {where:{id_c:newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c}});
								respContactsCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c }});
							} else {
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c = respContacts.dataValues.id;
								respContactsCstm = await models.sequelize.contactsCstm.create(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm);
							}
						}

						if (newOpportunity.opportunityOpportunitiesContacts) {
							if (newOpportunity.opportunityOpportunitiesContacts.opportunity_id) {
								newOpportunity.opportunityOpportunitiesContacts.date_modified = new Date();
								newOpportunity.opportunityOpportunitiesContacts.opportunity_id = respOpportunity.dataValues.id;
								newOpportunity.opportunityOpportunitiesContacts.contact_id = respContacts.dataValues.id;
								await models.sequelize.opportunitiesContacts.update(newOpportunity.opportunityOpportunitiesContacts, {where:{opportunity_id:newOpportunity.opportunityOpportunitiesContacts.opportunity_id}});
								respOpportunitiesContacts = await models.sequelize.opportunitiesContacts.findOne({where: { opportunity_id: newOpportunity.opportunityOpportunitiesContacts.opportunity_id }});
							} else {
								newOpportunity.opportunityOpportunitiesContacts.id = models.sequelize.objectId().toString();
								newOpportunity.opportunityOpportunitiesContacts.opportunity_id = respOpportunity.dataValues.id;
								newOpportunity.opportunityOpportunitiesContacts.contact_id = respContacts.dataValues.id;
								newOpportunity.opportunityOpportunitiesContacts.date_modified = new Date();
								respOpportunitiesContacts = await models.sequelize.opportunitiesContacts.create(newOpportunity.opportunityOpportunitiesContacts);
							}
						}
						objOpportunity.opportunityOpportunitiesContacts = respOpportunitiesContacts.dataValues;
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts = respContacts.dataValues;
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm = respContactsCstm.dataValues;
					}

					// END CONTACTS
					//
					// BEGIN EMAIL ADDRESSES

					let respEmailAddresses, respEmailAddrBeanRel;
					if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses) {
						if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id) {
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
							await models.sequelize.emailAddresses.update(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses, {where:{id:newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id}});
							respEmailAddresses = await models.sequelize.emailAddresses.findOne({where: { id: newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id }});
						} else {
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_entered = new Date();
							newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
							respEmailAddresses = await models.sequelize.emailAddresses.create(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses);
						}

						if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
							if (newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id) {
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_modified = new Date();
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id = respContacts.id;
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.email_address_id = respEmailAddresses.id;
								await models.sequelize.emailAddrBeanRel.update(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel, {where:{bean_id:newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id}});
								respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { bean_id: newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id}});
							} else {
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.id = models.sequelize.objectId().toString();
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id = respContacts.id;
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.email_address_id = respEmailAddresses.id;
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_modified = new Date();
								newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_created = new Date();
								respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.create(newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel);
							}
						}
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel = respEmailAddrBeanRel.dataValues;
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = respEmailAddresses.dataValues;
					}

					// END EMAIL ADDRESSES
					//
					// BEGIN ACCOUNTS

					let respAccounts, respAccountsCstm, respAccountsOpportunities;
					if (newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts) {
						if (newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id) {
							newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_modified = new Date();
							await models.sequelize.accounts.update(newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts, {where:{id:newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id}});
							respAccounts = await models.sequelize.accounts.findOne({where: { id: newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id }});
						} else {
							newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_entered = new Date();
							newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_modified = new Date();
							respAccounts = await models.sequelize.accounts.create(newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts);
						}

						if (newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm) {
							if (newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c) {
								await models.sequelize.accountsCstm.update(newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm, {where:{id_c:newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c}});
								respAccountsCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: newOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c }});
							} else {
								newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c = respAccounts.dataValues.id;
								respAccountsCstm = await models.sequelize.accountsCstm.create(newOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm);
							}
						}

						if (newOpportunity.opportunityAccountsOpportunities) {
							if (newOpportunity.opportunityAccountsOpportunities.opportunity_id) {
								newOpportunity.opportunityAccountsOpportunities.date_modified = new Date();
								newOpportunity.opportunityAccountsOpportunities.opportunity_id = respOpportunity.dataValues.id;
								newOpportunity.opportunityAccountsOpportunities.account_id = respAccounts.dataValues.id;
								await models.sequelize.accountsOpportunities.update(newOpportunity.opportunityAccountsOpportunities, {where:{opportunity_id:newOpportunity.opportunityAccountsOpportunities.opportunity_id}});
								respAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({where: { opportunity_id: newOpportunity.opportunityAccountsOpportunities.opportunity_id }});
							} else {
								newOpportunity.opportunityAccountsOpportunities.id = models.sequelize.objectId().toString();
								newOpportunity.opportunityAccountsOpportunities.opportunity_id = respOpportunity.dataValues.id;
								newOpportunity.opportunityAccountsOpportunities.account_id = respAccounts.dataValues.id;
								newOpportunity.opportunityAccountsOpportunities.date_modified = new Date();
								respAccountsOpportunities = await models.sequelize.accountsOpportunities.create(newOpportunity.opportunityAccountsOpportunities);
							}
						}
						objOpportunity.opportunityAccountsOpportunities = respAccountsOpportunities.dataValues;
						objOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts = respAccounts.dataValues;
						objOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm = respAccountsCstm.dataValues;
					}

					// END ACCOUNTS
					//
					// BEGIN AOS QUOTES

					let nextNumber = await models.sequelize.aosQuotes.max('number');
					let respAosQuotes, respAosQuotesCstm;
					if (newOpportunity.opportunityAosQuotes) {
						if (newOpportunity.opportunityAosQuotes.id) {
							newOpportunity.opportunityAosQuotes.date_modified = new Date();
							newOpportunity.opportunityAosQuotes.opportunity_id = respOpportunity.dataValues.id;
							newOpportunity.opportunityAosQuotes.number = newOpportunity.opportunityAosQuotes.number ? newOpportunity.opportunityAosQuotes.number : nextNumber+1;
							await models.sequelize.aosQuotes.update(newOpportunity.opportunityAosQuotes, {where:{id:newOpportunity.opportunityAosQuotes.id}});
							respAosQuotes = await models.sequelize.aosQuotes.findOne({where: { id: newOpportunity.opportunityAosQuotes.id }});
						} else {
							newOpportunity.opportunityAosQuotes.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityAosQuotes.opportunity_id = respOpportunity.dataValues.id;
							newOpportunity.opportunityAosQuotes.date_entered = new Date();
							newOpportunity.opportunityAosQuotes.date_modified = new Date();
							newOpportunity.opportunityAosQuotes.number = newOpportunity.opportunityAosQuotes.number ? newOpportunity.opportunityAosQuotes.number : nextNumber+1;
							respAosQuotes = await models.sequelize.aosQuotes.create(newOpportunity.opportunityAosQuotes);
						}

						if (newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm) {
							if (newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c) {
								await models.sequelize.aosQuotesCstm.update(newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm, {where:{id_c:newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c}});
								respAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c }});
							} else {
								newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c = respAosQuotes.dataValues.id;
								respAosQuotesCstm = await models.sequelize.aosQuotesCstm.create(newOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm);
							}
						}
						objOpportunity.opportunityAosQuotes = respAosQuotes.dataValues;
						objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm = respAosQuotesCstm.dataValues;
					}

					// END AOS QUOTES

					if (newOpportunity.opportunityOpportunitiesAudit) {
						if (newOpportunity.opportunityOpportunitiesAudit.parent_id) {
							await models.sequelize.opportunitiesAudit.update(newOpportunity.opportunityOpportunitiesAudit,{where:{parent_id:newOpportunity.opportunityOpportunitiesAudit.parent_id}});
							let respOpportunitiesAudit = await models.sequelize.opportunitiesAudit.findOne({where: { parent_id: newOpportunity.opportunityOpportunitiesAudit.parent_id }});
							objOpportunity.opportunityOpportunitiesAudit = respOpportunitiesAudit.dataValues;
						} else {
							newOpportunity.opportunityOpportunitiesAudit.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityOpportunitiesAudit.parent_id = newOpportunity.id;
							newOpportunity.opportunityOpportunitiesAudit.date_created = new Date();
							let respOpportunitiesAudit = await models.sequelize.opportunitiesAudit.create(newOpportunity.opportunityOpportunitiesAudit);
							objOpportunity.opportunityOpportunitiesAudit = respOpportunitiesAudit.dataValues;
						}
					}

					if (newOpportunity.opportunitySugarfeed) {
						if (newOpportunity.opportunitySugarfeed.related_id) {
							newOpportunity.opportunitySugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(newOpportunity.opportunitySugarfeed, {where:{related_id:newOpportunity.opportunitySugarfeed.related_id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: newOpportunity.opportunitySugarfeed.related_id }});
							objOpportunity.opportunitySugarfeed = respSugarfeed.dataValues;
						} else {
							newOpportunity.opportunitySugarfeed.id = models.sequelize.objectId().toString();
							newOpportunity.opportunitySugarfeed.related_id = newOpportunity.id;
							newOpportunity.opportunitySugarfeed.date_entered = new Date();
							newOpportunity.opportunitySugarfeed.date_modified = new Date();
							let respSugarfeed = await models.sequelize.sugarfeed.create(newOpportunity.opportunitySugarfeed);
							objOpportunity.opportunitySugarfeed = respSugarfeed.dataValues;
						}
					}

					if (newOpportunity.opportunityAodIndexevent) {
						if (newOpportunity.opportunityAodIndexevent.record_id) {
							newOpportunity.opportunityAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(newOpportunity.opportunityAodIndexevent, {where:{record_id:newOpportunity.opportunityAodIndexevent.record_id}});
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: newOpportunity.opportunityAodIndexevent.record_id }});
							objOpportunity.opportunityAodIndexevent = respAodIndexevent.dataValues;
						} else {
							newOpportunity.opportunityAodIndexevent.id = models.sequelize.objectId().toString();
							newOpportunity.opportunityAodIndexevent.record_id = newOpportunity.id;
							newOpportunity.opportunityAodIndexevent.date_entered = new Date();
							newOpportunity.opportunityAodIndexevent.date_modified = new Date();
							let respAodIndexevent = await models.sequelize.aodIndexevent.create(newOpportunity.opportunityAodIndexevent);
							objOpportunity.opportunityAodIndexevent = respAodIndexevent.dataValues;
						}
					}

					if (newOpportunity.opportunityTracker) {
						if (newOpportunity.opportunityTracker.item_id) {
							newOpportunity.opportunityTracker.date_modified = new Date();
							await models.sequelize.tracker.update(newOpportunity.opportunityTracker, {where:{item_id:newOpportunity.opportunityTracker.item_id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { item_id: newOpportunity.opportunityTracker.item_id }});
							objOpportunity.opportunityTracker = respTracker.dataValues;
						} else {
							let max = await models.sequelize.tracker.max('id');
							newOpportunity.opportunityTracker.id = newOpportunity.opportunityTracker.id ? newOpportunity.opportunityTracker.id : max+1;
							newOpportunity.opportunityTracker.monitor_id = models.sequelize.objectId().toString();
							newOpportunity.opportunityTracker.item_id = newOpportunity.id;
							newOpportunity.opportunityTracker.date_modified = new Date();
							let respTracker = await models.sequelize.tracker.create(newOpportunity.opportunityTracker);
							objOpportunity.opportunityTracker = respTracker.dataValues;
						}
					}
				}
				await this.setEmailOpportunity(objOpportunity, respContacts);
			} else {
				objOpportunity = new models.mongoose.opportunities(newOpportunity);
				await objOpportunity.save();
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async updateOpportunity(id ,updateOpportunity, userLoggedIn) {
		try {
			let objOpportunity;

			if(sql) {
				let respOpportunity, respContacts, respOpportunitiesCstm;
				if (updateOpportunity) {
					if (updateOpportunity.id) {
						updateOpportunity.date_modified = new Date();
						await models.sequelize.opportunities.update(updateOpportunity, {where:{id:id}});
						respOpportunity = await models.sequelize.opportunities.findOne({where: { id: id }});
					} else {
						let oldOpportunity = await models.sequelize.opportunities.findOne({where:{id:id}});
						if (oldOpportunity && oldOpportunity.dataValues) {
							oldOpportunity = oldOpportunity.dataValues;
							updateOpportunity.date_modified = new Date();
							await models.sequelize.opportunities.update(updateOpportunity, {where:{id:oldOpportunity.id}});
							respOpportunity = await models.sequelize.opportunities.findOne({where: { id: oldOpportunity.id }});
						} else {
							updateOpportunity.id = models.sequelize.objectId().toString();
							updateOpportunity.date_entered = new Date();
							updateOpportunity.date_modified = new Date();
							updateOpportunity.date_closed = new Date();
							respOpportunity = await models.sequelize.opportunities.create(updateOpportunity);
						}
					}
					if (updateOpportunity.opportunityOpportunitiesCstm) {
						if (updateOpportunity.opportunityOpportunitiesCstm.id_c){
							await models.sequelize.opportunitiesCstm.update(updateOpportunity.opportunityOpportunitiesCstm, {where:{id_c:updateOpportunity.opportunityOpportunitiesCstm.id_c}});
							respOpportunitiesCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: updateOpportunity.opportunityOpportunitiesCstm.id_c}});
						} else {
							let oldOpportunityOpportunitiesCstm = await models.sequelize.opportunitiesCstm.findOne({where:{id_c:id}});
							if (oldOpportunityOpportunitiesCstm && oldOpportunityOpportunitiesCstm.dataValues) {
								oldOpportunityOpportunitiesCstm = oldOpportunityOpportunitiesCstm.dataValues;
								await models.sequelize.opportunitiesCstm.update(updateOpportunity.opportunityOpportunitiesCstm, {where:{id_c:oldOpportunityOpportunitiesCstm.id_c}});
								respOpportunitiesCstm = await models.sequelize.opportunitiesCstm.findOne({where: { id_c: oldOpportunityOpportunitiesCstm.id_c}});
							} else {
								updateOpportunity.opportunityOpportunitiesCstm.id_c = respOpportunity.dataValues.id;
								respOpportunitiesCstm = await models.sequelize.opportunitiesCstm.create(updateOpportunity.opportunityOpportunitiesCstm);
							}
						}
					}
					objOpportunity = respOpportunity.dataValues;
					objOpportunity.opportunityOpportunitiesCstm = respOpportunitiesCstm.dataValues;

					// Begin Contacts

					let respContactsCstm;
					if (updateOpportunity.opportunityOpportunitiesContacts) {
						if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts) {
							if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id) {
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_modified = new Date();
								await models.sequelize.contacts.update(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts, {where:{id:updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id}});
								respContacts = await models.sequelize.contacts.findOne({where: { id: updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id }});
							} else {
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_entered = new Date();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_reviewed = new Date();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.date_modified = new Date();
								respContacts = await models.sequelize.contacts.create(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts);
							}

							if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm) {
								if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c) {
									await models.sequelize.contactsCstm.update(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm, {where:{id_c:updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c}});
									respContactsCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c }});
								} else {
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm.id_c = respContacts.dataValues.id;
									respContactsCstm = await models.sequelize.contactsCstm.create(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm);
								}
							}

							let respOpportunitiesContacts;
							if (updateOpportunity.opportunityOpportunitiesContacts) {
								if (updateOpportunity.opportunityOpportunitiesContacts.id) {
									updateOpportunity.opportunityOpportunitiesContacts.date_modified = new Date();
									updateOpportunity.opportunityOpportunitiesContacts.opportunity_id = respOpportunity.dataValues.id;
									updateOpportunity.opportunityOpportunitiesContacts.contact_id = respContacts.dataValues.id;
									await models.sequelize.opportunitiesContacts.update(updateOpportunity.opportunityOpportunitiesContacts, {where:{opportunity_id:id}});
									respOpportunitiesContacts = await models.sequelize.opportunitiesContacts.findOne({where: { opportunity_id: id }});
								} else {
									let oldOpportunityOpportunitiesContacts = await models.sequelize.opportunitiesContacts.findOne({where:{opportunity_id:id}});
									if (oldOpportunityOpportunitiesContacts && oldOpportunityOpportunitiesContacts.dataValues) {
										oldOpportunityOpportunitiesContacts = oldOpportunityOpportunitiesContacts.dataValues;
										updateOpportunity.opportunityOpportunitiesContacts.date_modified = new Date();
										updateOpportunity.opportunityOpportunitiesContacts.opportunity_id = respOpportunity.dataValues.id;
										updateOpportunity.opportunityOpportunitiesContacts.contact_id = respContacts.dataValues.id;
										await models.sequelize.opportunitiesContacts.update(updateOpportunity.opportunityOpportunitiesContacts, {where:{id:oldOpportunityOpportunitiesContacts.id}});
										respOpportunitiesContacts = await models.sequelize.opportunitiesContacts.findOne({where: { id: oldOpportunityOpportunitiesContacts.id }});
									} else {
										updateOpportunity.opportunityOpportunitiesContacts.id = models.sequelize.objectId().toString();
										updateOpportunity.opportunityOpportunitiesContacts.opportunity_id = respOpportunity.dataValues.id;
										updateOpportunity.opportunityOpportunitiesContacts.contact_id = respContacts.dataValues.id;
										updateOpportunity.opportunityOpportunitiesContacts.date_modified = new Date();
										respOpportunitiesContacts = await models.sequelize.opportunitiesContacts.create(updateOpportunity.opportunityOpportunitiesContacts);
									}
								}
							}
							objOpportunity.opportunityOpportunitiesContacts = respOpportunitiesContacts.dataValues;
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts = respContacts.dataValues;
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactContactsCstm = respContactsCstm.dataValues;
						}

						// End Contacts
						//
						// Begin Email Addresses

						let respEmailAddresses, respEmailAddrBeanRel;
						if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses) {
							if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id) {
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
								await models.sequelize.emailAddresses.update(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses, {where:{id:updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id}});
								respEmailAddresses = await models.sequelize.emailAddresses.findOne({where: { id: updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id }});
							} else {
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_entered = new Date();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_reviewed = new Date();
								updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
								respEmailAddresses = await models.sequelize.emailAddresses.create(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses);
							}

							if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
								if (updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id) {
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_modified = new Date();
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id = respContacts.dataValues.id;
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.email_address_id = respEmailAddresses.dataValues.id;
									await models.sequelize.emailAddrBeanRel.update(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel, {where: {bean_id: updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id}});
									respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: {bean_id: updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id}});
								} else {
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.id = models.sequelize.objectId().toString();
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.bean_id = respContacts.dataValues.id;
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.email_address_id = respEmailAddresses.dataValues.id;
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_created = new Date();
									updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.date_modified = new Date();
									respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.create(updateOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel);
								}
								objOpportunity.opportunityOpportunitiesContacts.contactEmailAddrBeanRel = respEmailAddrBeanRel.dataValues;
								objOpportunity.opportunityOpportunitiesContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = respEmailAddresses.dataValues;
							}
						}
					}

					// End Email Addresses
					//
					// Begin Accounts

					let respAccounts, respAccountsCstm, respAccountsOpportunities;
					if (updateOpportunity.opportunityAccountsOpportunities) {

						if (updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts) {
							if (updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id) {
								updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_modified = new Date();
								await models.sequelize.accounts.update(updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts, {where:{id:updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id}});
								respAccounts = await models.sequelize.accounts.findOne({where: { id: updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id }});
							} else {
								updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_entered = new Date();
								updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_reviewed = new Date();
								updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.date_modified = new Date();
								respAccounts = await models.sequelize.accounts.create(updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts);
							}

							if (updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm) {
								if (updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c) {
									await models.sequelize.accountsCstm.update(updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm, {where:{id_c:updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c}});
									respAccountsCstm = await models.sequelize.accountsCstm.findOne({where: { id_c: updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c }});
								} else {
									updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm.id_c = respAccounts.dataValues.id;
									respAccountsCstm = await models.sequelize.accountsCstm.create(updateOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm);
								}
							}

							if (updateOpportunity.opportunityAccountsOpportunities) {
								if (updateOpportunity.opportunityAccountsOpportunities.opportunity_id) {
									updateOpportunity.opportunityAccountsOpportunities.date_modified = new Date();
									updateOpportunity.opportunityAccountsOpportunities.opportunity_id = respOpportunity.dataValues.id;
									updateOpportunity.opportunityAccountsOpportunities.account_id = respAccounts.dataValues.id;
									await models.sequelize.accountsOpportunities.update(updateOpportunity.opportunityAccountsOpportunities, {where: {opportunity_id: updateOpportunity.opportunityAccountsOpportunities.opportunity_id}});
									respAccountsOpportunities = await models.sequelize.accountsOpportunities.findOne({where: {opportunity_id: updateOpportunity.opportunityAccountsOpportunities.opportunity_id}});
								} else {
									updateOpportunity.opportunityAccountsOpportunities.id = models.sequelize.objectId().toString();
									updateOpportunity.opportunityAccountsOpportunities.date_modified = new Date();
									updateOpportunity.opportunityAccountsOpportunities.opportunity_id = respOpportunity.dataValues.id;
									updateOpportunity.opportunityAccountsOpportunities.account_id = respAccounts.dataValues.id;
									respAccountsOpportunities = await models.sequelize.accountsOpportunities.create(updateOpportunity.opportunityAccountsOpportunities);
								}
								objOpportunity.opportunityAccountsOpportunities = respAccountsOpportunities.dataValues;
								objOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts = respAccounts.dataValues;
								objOpportunity.opportunityAccountsOpportunities.accountOpportunityAccounts.accountAccountsCstm = respAccountsCstm.dataValues;
							}
						}
					}

					// End Accounts
					//
					// Begin Aos Quotes

					let nextNumber = await models.sequelize.aosQuotes.max('number');
					let respAosQuotes, respAosQuotesCstm;
					if (updateOpportunity.opportunityAosQuotes) {
						if (updateOpportunity.opportunityAosQuotes.id) {
							updateOpportunity.opportunityAosQuotes.date_modified = new Date();
							updateOpportunity.opportunityAosQuotes.opportunity_id = respOpportunity.dataValues.id;
							updateOpportunity.opportunityAosQuotes.billing_account_id = respAccounts.dataValues.id;
							updateOpportunity.opportunityAosQuotes.billing_contact_id = respContacts.dataValues.id;
							updateOpportunity.opportunityAosQuotes.number = updateOpportunity.opportunityAosQuotes.number ? updateOpportunity.opportunityAosQuotes.number : nextNumber+1;
							await models.sequelize.aosQuotes.update(updateOpportunity.opportunityAosQuotes, {where:{id:updateOpportunity.opportunityAosQuotes.id}});
							respAosQuotes = await models.sequelize.aosQuotes.findOne({where: { id: updateOpportunity.opportunityAosQuotes.id }});
						} else {
							updateOpportunity.opportunityAosQuotes.id = models.sequelize.objectId().toString();
							updateOpportunity.opportunityAosQuotes.date_entered = new Date();
							updateOpportunity.opportunityAosQuotes.date_reviewed = new Date();
							updateOpportunity.opportunityAosQuotes.date_modified = new Date();
							updateOpportunity.opportunityAosQuotes.opportunity_id = respOpportunity.dataValues.id;
							updateOpportunity.opportunityAosQuotes.billing_account_id = respAccounts.dataValues.id;
							updateOpportunity.opportunityAosQuotes.billing_contact_id = respContacts.dataValues.id;
							updateOpportunity.opportunityAosQuotes.number = updateOpportunity.opportunityAosQuotes.number ? updateOpportunity.opportunityAosQuotes.number : nextNumber+1;
							respAosQuotes = await models.sequelize.aosQuotes.create(updateOpportunity.opportunityAosQuotes);
						}

						if (updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm) {
							if (updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c) {
								await models.sequelize.aosQuotesCstm.update(updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm, {where:{id_c:updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c}});
								respAosQuotesCstm = await models.sequelize.aosQuotesCstm.findOne({where: { id_c: updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c }});
							} else {
								updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.id_c = respAosQuotes.dataValues.id;
								respAosQuotesCstm = await models.sequelize.aosQuotesCstm.create(updateOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm);
							}
						}
						objOpportunity.opportunityAosQuotes = respAosQuotes.dataValues;
						objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm= respAosQuotesCstm.dataValues;
					}

					// End Aos Quotes

					if (updateOpportunity.opportunityOpportunitiesAudit) {
						if (updateOpportunity.opportunityOpportunitiesAudit.id) {
							await models.sequelize.opportunitiesAudit.update(updateOpportunity.opportunityOpportunitiesAudit,{where:{parent_id:id}});
							let respOpportunitiesAudit = await models.sequelize.opportunitiesAudit.findOne({where: { parent_id: id }});
							objOpportunity.opportunityOpportunitiesAudit = respOpportunitiesAudit.dataValues;
						} else {
							let oldOpportunityOpportunitiesAudit = await models.sequelize.opportunitiesAudit.findOne({where:{parent_id:id}});
							if (oldOpportunityOpportunitiesAudit && oldOpportunityOpportunitiesAudit.dataValues) {
								oldOpportunityOpportunitiesAudit = oldOpportunityOpportunitiesAudit.dataValues;
								await models.sequelize.opportunitiesAudit.update(updateOpportunity.opportunityOpportunitiesAudit,{where:{id:oldOpportunityOpportunitiesAudit.id}});
								let respOpportunitiesAudit = await models.sequelize.opportunitiesAudit.findOne({where: { id: oldOpportunityOpportunitiesAudit.id }});
								objOpportunity.opportunityOpportunitiesAudit = respOpportunitiesAudit.dataValues;
							} else {
								updateOpportunity.opportunityOpportunitiesAudit.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityOpportunitiesAudit.parent_id = respOpportunity.dataValues.id;
								updateOpportunity.opportunityOpportunitiesAudit.date_created = new Date();
								let respOpportunitiesAudit = await models.sequelize.opportunitiesAudit.create(updateOpportunity.opportunityOpportunitiesAudit);
								objOpportunity.opportunityOpportunitiesAudit = respOpportunitiesAudit.dataValues;
							}
						}
					}

					if (updateOpportunity.opportunitySugarfeed) {
						if (updateOpportunity.opportunitySugarfeed.id) {
							updateOpportunity.opportunitySugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateOpportunity.opportunitySugarfeed, {where:{related_id:id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
							objOpportunity.opportunitySugarfeed = respSugarfeed.dataValues;
						} else {
							let oldOpportunitySugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldOpportunitySugarfeed && oldOpportunitySugarfeed.dataValues) {
								oldOpportunitySugarfeed = oldOpportunitySugarfeed.dataValues;
								updateOpportunity.opportunitySugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateOpportunity.opportunitySugarfeed, {where:{id:oldOpportunitySugarfeed.id}});
								let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldOpportunitySugarfeed.id }});
								objOpportunity.opportunitySugarfeed = respSugarfeed.dataValues;
							} else {
								updateOpportunity.opportunitySugarfeed.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunitySugarfeed.related_id = respOpportunity.dataValues.id;
								updateOpportunity.opportunitySugarfeed.date_entered = new Date();
								updateOpportunity.opportunitySugarfeed.date_modified = new Date();
								let respSugarfeed = await models.sequelize.sugarfeed.create(updateOpportunity.opportunitySugarfeed);
								objOpportunity.opportunitySugarfeed = respSugarfeed.dataValues;
							}
						}
					}

					if (updateOpportunity.opportunityAodIndexevent) {
						if (updateOpportunity.opportunityAodIndexevent.id) {
							updateOpportunity.opportunityAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateOpportunity.opportunityAodIndexevent, {where:{record_id:id}});
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
							objOpportunity.opportunityAodIndexevent = respAodIndexevent.dataValues;
						} else {
							let oldOpportunityAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
							if (oldOpportunityAodIndexevent && oldOpportunityAodIndexevent.dataValues) {
								oldOpportunityAodIndexevent = oldOpportunityAodIndexevent.dataValues;
								updateOpportunity.opportunityAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateOpportunity.opportunityAodIndexevent, {where:{id:oldOpportunityAodIndexevent.id}});
								let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldOpportunityAodIndexevent.id }});
								objOpportunity.opportunityAodIndexevent = respAodIndexevent.dataValues;
							} else {
								updateOpportunity.opportunityAodIndexevent.id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityAodIndexevent.record_id = respOpportunity.dataValues.id;
								updateOpportunity.opportunityAodIndexevent.date_entered = new Date();
								updateOpportunity.opportunityAodIndexevent.date_modified = new Date();
								let respAodIndexevent = await models.sequelize.aodIndexevent.create(updateOpportunity.opportunityAodIndexevent);
								objOpportunity.opportunityAodIndexevent = respAodIndexevent.dataValues;
							}
						}
					}

					if (updateOpportunity.opportunityTracker) {
						if (updateOpportunity.opportunityTracker.id) {
							updateOpportunity.opportunityTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateOpportunity.opportunityTracker, {where:{item_id:id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
							objOpportunity.opportunityTracker = respTracker.dataValues;
						} else {
							let oldOpportunityTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
							if (oldOpportunityTracker && oldOpportunityTracker.dataValues) {
								oldOpportunityTracker = oldOpportunityTracker.dataValues;
								updateOpportunity.opportunityTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateOpportunity.opportunityTracker, {where:{id:oldOpportunityTracker.id}});
								let respTracker = await models.sequelize.tracker.findOne({where: { id: oldOpportunityTracker.id }});
								objOpportunity.opportunityTracker = respTracker.dataValues;
							} else {
								let max = await models.sequelize.tracker.max('id');
								updateOpportunity.opportunityTracker.id = max+1;
								updateOpportunity.opportunityTracker.monitor_id = models.sequelize.objectId().toString();
								updateOpportunity.opportunityTracker.item_id = respOpportunity.dataValues.id;
								updateOpportunity.opportunityTracker.date_modified = new Date();
								let respTracker = await models.sequelize.tracker.create(updateOpportunity.opportunityTracker);
								objOpportunity.opportunityTracker = respTracker.dataValues;
							}
						}
					}
				}

				await this.setEmailOpportunity(objOpportunity.id, respContacts);

			} else {
				objOpportunity = new models.mongoose.opportunities(updateOpportunity);
				await objOpportunity.save();
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}

	static async setEmailOpportunity(idOpportunity, respContacts) {
		try {
			let respOpportunity = await this.getAOpportunity(idOpportunity,{});
			let objOpportunity = respOpportunity.dataValues;
			if (objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
				if (!objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails) {
					await OpportunityService.createAndSendPdf(objOpportunity, async (err,file,info) => {
						if (err) {
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.invalid_email = 1;
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.confirm_opt_in_fail_date = new Date();
						} else {
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.invalid_email = 0;
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.confirm_opt_in_date = new Date();
							objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.confirm_opt_in_sent_date = new Date();
						}
						let id = objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id;
						let respEmailAddresses = await models.sequelize.emailAddresses.update(objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses, {where:{id:id}});

						let respContactEmails, respOldContactEmails = await models.sequelize.emails.findOne({where:{parent_id:objOpportunity.opportunityOpportunitiesContacts.contact_id}});
						if (respOldContactEmails) {
							let updateContactEmail = respOldContactEmails.dataValues;
							updateContactEmail.date_modified = new Date();
							updateContactEmail.modified_user_id = respContacts.dataValues.assigned_user_id;
							let respEmails = await models.sequelize.emails.update(updateContactEmail,{where:{parent_id:objOpportunity.opportunityOpportunitiesContacts.contact_id}});
							respContactEmails = await models.sequelize.emails.findOne({where:{parent_id:objOpportunity.opportunityOpportunitiesContacts.contact_id}});
						} else {
							let max = await models.sequelize.emails.max('uid');
							let newContactEmail = {
								id:models.sequelize.objectId().toString(),
								name:respContacts.dataValues.first_name+' '+respContacts.dataValues.last_name,
								date_entered:new Date(),
								date_modified:new Date(),
								modified_user_id:respContacts.dataValues.id,
								created_by:respContacts.dataValues.id,
								assigned_user_id:respContacts.dataValues.id,
								date_sent_received:new Date(),
								message_id:'',
								type:'out',
								status:'sent',
								// flagged:'',
								// reply_to_status:'',
								//intent:'pick',
								// mailbox_id:'',
								//parent_type:'Contacts',
								parent_id:respContacts.dataValues.id,
								uid:max+1,
								// category_id:''
							};
							respContactEmails = await models.sequelize.emails.create(newContactEmail);
						}
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails = respContactEmails.dataValues;
						objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = respEmailAddresses.dataValues;
					});
				}
			}
		} catch (e) {
			console.log(e);
		}
	}
	static async createAndSendPdf(objOpportunity, callback = null) {
		let date = new Date();
		await this.createPdf(objOpportunity, (err, res, file) => {
			if (res) {
				loggerPdf.info('Archivo pdf creado: ' + date.toString(), {file:res});
				this.sendMail(objOpportunity,file, (err, info) => {
					if (err) {
						loggerEmail.info('Error al enviar el correo: ' + date.toString(), {error:err, info:info});
					} {
						loggerEmail.info('Correo enviado: ' + date.toString(), {file:file, info:info});

						if (typeof callback == 'function') {
							callback(err, file, info);
						}
					}
				})
			} else {
				loggerPdf.info('Hubo un error al crear el archivo pdf: ' + date.toString(), {error:err, respuesta:res});
			}
		})
	}

	static async setContent(content, objOpportunity) {
		if (content) {
			content = content.replaceAll('@numTerrenos','1');
			content = content.replaceAll('@superficie',parseInt(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_superficie_c+""));
			content = content.replaceAll('@unidadIndustrial',objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.unidad_industrial_c);
			content = content.replaceAll('@manzano',objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.manzano_c);
			content = content.replaceAll('@lote',objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.ubicacion_c);
			content = content.replaceAll('@frente',objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.frente_metros_c);
			content = content.replaceAll('@fondo',objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.fondo_metros_c);
			content = content.replaceAll('@product','terreno pilat');
			content = content.replaceAll('@ucProduct','TERRENO PILAT');
			content = content.replaceAll('@client',objOpportunity.opportunityAosQuotes.name);

			content = content.replaceAll('@precioMetroCuadrado',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
			content = content.replaceAll('@precioTotal',formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
			content = content.replaceAll('@cuotaInicial',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
			content = content.replaceAll('@saldo',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.saldo_c));

			if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c == 'PLAZOS') {
				if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '5') {
					content = content.replaceAll('@precioMetroCuadradoPlazoCinco',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
					content = content.replaceAll('@cuotaInicialPlazoCinco',fomatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
					content = content.replaceAll('@cuotaMensualPlazoCinco',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.cuota_mensual_c));
					content = content.replaceAll('@precioTotalPlazoCinco',formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
				} else if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '10') {
					content = content.replaceAll('@precioMetroCuadradoPlazoDiez',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
					content = content.replaceAll('@cuotaInicialPlazoDiez',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
					content = content.replaceAll('@cuotaMensualPlazoDiez',formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.cuota_mensual_c));
					content = content.replaceAll('@precioTotalPlazoDiez',formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
				}
			}
		}
		return content
	}

	static async createPdf(objOpportunity, callback = null) {
		try {
			let id = objOpportunity.id;
			let localDir = await path.join(__dirname, '../../../../public/pilatsrl/pdfs/quotes/');
			let localDirTemplatesQuotes = await path.join(__dirname, '../../../../public/pilatsrl/templates/quotes/');
			let localTemplatesQuote;
			if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c == 'PLAZOS') {
				if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '5') {
					localTemplatesQuote = 'cotizacion_plazo_cinco.html';
				} else if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '10') {
					localTemplatesQuote = 'cotizacion_plazo_diez.html';
				}
			} else if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c == 'CONTADO') {
				localTemplatesQuote = 'cotizacion_contado.html';
			} else if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c == 'BANCO') {
				localTemplatesQuote = 'cotizacion_banco.html';
			}
			let files = await fs.readdirSync(localDir);
			let file = files.find(param => param == 'quote_'+id+'.pdf');

			let respHtmlPdf, content;
			if (file) {
				await fs.unlinkSync(localDir+file);
				file = null;
			}

			if (!file) {
				content = await fs.readFileSync(localDirTemplatesQuotes+localTemplatesQuote).toString();
				content = await this.setContent(content,objOpportunity);
				respHtmlPdf = await htmlPdf.createPdf(content,localDir+'quote_'+id+'.pdf', callback);
				file = 'quote_'+id+'.pdf';
			}
			return [localDir,file]
		} catch (e) {
			console.log(e)
		}
	}

	static async sendMail(objOpportunity, dirFile, callback = null) {
		let resp;
		let subDirs = dirFile.split('/');
		let file = subDirs[subDirs.length-1];
		if (objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
			if (file && objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address) {
				let respCredential = await models.sequelize.pilatMails.findOne({where:{id:1}});
				let credential = respCredential.dataValues;
				credential.mai_text = await this.setContent(credential.mai_text, objOpportunity);
				credential.mai_html = await this.setContent(credential.mai_html, objOpportunity);
				credential.mai_subject = await this.setContent(credential.mai_subject, objOpportunity);
				if (credential) {
					let mailOptions = {
						from: '"' + credential.mai_user_account + '" <' + credential.mai_user_account + '>', // sender address
						html: credential.mai_html,
						to: objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address,
						cc: credential.mai_cc,
						bcc: credential.mai_bcc,
						attachments: [
							{
								filename: file,
								path: dirFile
							}
						],
						subject: credential.mai_subject,
						text: credential.mai_text
					};

					resp = nodeMailer.sendMail(mailOptions,credential, callback);
				}
			}
		}
		return resp;
	}

	static async deleteOpportunity(id) {
		try {
			let objOpportunity;
			if(sql) {

				let opportunities = await models.sequelize.opportunities.findOne({ where: { id: util.Char(id) } });
				if (opportunities) await models.sequelize.opportunities.destroy({where: { id: util.Char(id) }});

				let opportunityOpportunitiesCstm = await models.sequelize.opportunitiesCstm.findOne({ where: { id_c: util.Char(id) } });
				if (opportunityOpportunitiesCstm) await models.sequelize.opportunitiesCstm.destroy({where: { id_c: util.Char(id) }});

				let opportunityOpportunitiesAudit = await models.sequelize.opportunitiesAudit.findOne({ where: { parent_id: util.Char(id) } });
				if (opportunityOpportunitiesAudit) await models.sequelize.opportunitiesAudit.destroy({where: { parent_id: util.Char(id) }});

				let opportunitiesContacts = await models.sequelize.opportunitiesContacts.findOne({ where: { opportunity_id: util.Char(id) } });
				if (opportunitiesContacts) await models.sequelize.opportunitiesContacts.destroy({where: { opportunity_id: util.Char(id) }});

				let opportunitySugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (opportunitySugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let opportunityAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (opportunityAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let opportunityTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (opportunityTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objOpportunity = opportunities;
				objOpportunity.opportunityOpportunitiesCstm = opportunityOpportunitiesCstm;
				objOpportunity.opportunityOpportunitiesAudit = opportunityOpportunitiesAudit;
				objOpportunity.opportunitiesContacts = opportunitiesContacts;
				objOpportunity.opportunitySugarfeed = opportunitySugarfeed;
				objOpportunity.opportunityAodIndexevent = opportunityAodIndexevent;
				objOpportunity.opportunityTracker = opportunityTracker;

			} else {
				objOpportunity = await models.mongoose.opportunities.deleteOne({id:util.Char(id)});
			}
			return objOpportunity;
		} catch (error) {
			throw error;
		}
	}
}

function formatNumber (num, decimals = 2) {
	let stringFloat = num + "";
	let arraySplitFloat = stringFloat.split(".");
	let decimalsValue = "0";
	if (arraySplitFloat.length > 1) {
		decimalsValue = arraySplitFloat[1].slice(0, decimals);
	}
	let integerValue = arraySplitFloat[0];
	let arrayFullStringValue = [integerValue, decimalsValue];
	let FullStringValue = arrayFullStringValue.join(".");
	let floatFullValue = parseFloat(FullStringValue);
	let formatFloatFullValue = new Intl.NumberFormat("de-DE", { minimumFractionDigits: decimals }).format(floatFullValue);
	return solveFeatureFormatFloatNumberSpanish(formatFloatFullValue);
}

function solveFeatureFormatFloatNumberSpanish(num) {
	let indexComma = num.indexOf(',');
	let indexPoint = num.indexOf('.');
	let aParts = num.split('.');
	let decimal = aParts[aParts.length-1];
	let entero = aParts[0];
	let parts;
	if (indexComma < indexPoint) {
		parts = entero.split(',');
		num = parts.join('.');
		num = num +','+decimal;
	}
	return num;
}

//<es-section>
module.exports = OpportunityService;
//</es-section>
