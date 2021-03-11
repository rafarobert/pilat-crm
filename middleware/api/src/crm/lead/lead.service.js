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
const crmService = require('../services/crm.service');

const { Op } = require("sequelize");

class LeadService {

	static async getAllLeads(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.leads.findAndCountAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.leadsCstm, as:'leadLeadsCstm',
							where: where ? where.where ? where.where.leadLeadsCstm ? where.where.leadLeadsCstm : null : null : null,
						},
						{
							model:models.sequelize.callsLeads, as:'leadCallsLeads',
							include:{
								model:models.sequelize.calls, as:'callLeadCalls',
								include:[
									{model:models.sequelize.callsCstm, as:'callCallsCstm'},
									{
										model:models.sequelize.callsUsers, as:'callCallsUsers',
										include: {
											model:models.sequelize.users, as:'callUserUsers'
										}
									},
								]
							}
						},{
							model:models.sequelize.emailAddrBeanRel, as:'leadEmailAddrBeanRel',
							include: {
								model:models.sequelize.emailAddresses, as:'emailAddrBeanRelEmailAddresses'
							}
						}
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getALead(id, query) {
		try {
			if(sql) {
				return await models.sequelize.leads.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.leadsCstm, as:'leadLeadsCstm'},
						{
							model:models.sequelize.callsLeads, as:'leadCallsLeads',
							include:{
								model:models.sequelize.calls, as:'callLeadCalls',
								include:[
									{model:models.sequelize.callsCstm, as:'callCallsCstm'},
									{
										model:models.sequelize.callsUsers, as:'callCallsUsers',
										include: {
											model:models.sequelize.users, as:'callUserUsers'
										}
									},
								]
							}
						},
						{
							model:models.sequelize.emailAddrBeanRel, as:'leadEmailAddrBeanRel',
							include: {
								model:models.sequelize.emailAddresses, as:'emailAddrBeanRelEmailAddresses'
							}
						},
						{model:models.sequelize.sugarfeed, as:'leadSugarfeed'},
						{model:models.sequelize.aodIndexevent, as:'leadAodIndexevent'},
						{model:models.sequelize.tracker, as:'leadTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addLead(newLead,userLoggedId) {
		try {
			let objLead, pilatLog, user, respUsers;
			if (userLoggedId) {
				respUsers = await models.sequelize.users.findOne({where:{id:userLoggedId}})
				user = respUsers && respUsers.dataValues ? respUsers.dataValues : null;
			}
			if(sql) {

				if (newLead) {
					let alreadyLeads;
					let phoneNumber = newLead.phone_mobile ? newLead.phone_mobile.toLowerCase() : newLead.phone_mobile;
					alreadyLeads = await models.sequelize.leads.findAll({where:{phone_mobile: phoneNumber+''}});

					if (alreadyLeads && alreadyLeads.length) {
						objLead = alreadyLeads;
					} else {
						newLead.id = models.sequelize.objectId().toString();
						newLead.date_entered = new Date();
						newLead.date_modified = new Date();
						let respLead = await models.sequelize.leads.create(newLead);
						objLead = respLead.dataValues;
						pilatLog = await crmService.setPilatLog('create', 'leads',objLead.first_name+' '+objLead.last_name, objLead.id, objLead.id, objLead.assigned_user_id);
						if (newLead.leadLeadsCstm) {
							newLead.leadLeadsCstm.id_c = newLead.id;
							let respLeadsCstm = await models.sequelize.leadsCstm.create(newLead.leadLeadsCstm);
							objLead.leadLeadsCstm = respLeadsCstm.dataValues;
						}

						// BEGIN CALLS

						let objCalls, objCallsLeads, objCallsUsers, respCalls, respCallsCstm, respCallsLeads, respCallsUsers;

						if (newLead.leadCallsLeads) {
							if (newLead.leadCallsLeads.callLeadCalls) {
								newLead.leadCallsLeads.callLeadCalls.id = models.sequelize.objectId().toString();
								newLead.leadCallsLeads.callLeadCalls.date_entered = new Date();
								newLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
								respCalls = await models.sequelize.calls.create(newLead.leadCallsLeads.callLeadCalls);
								objCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : null;
								pilatLog = await crmService.setPilatLog('create', 'calls',objCalls.name, objCalls.id, objLead.id, objCalls.assigned_user_id);
								if (newLead.leadCallsLeads.callLeadCalls.callCallsCstm) {
									newLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c = respCalls.dataValues.id;
									respCallsCstm = await models.sequelize.callsCstm.create(newLead.leadCallsLeads.callLeadCalls.callCallsCstm);
								}

								if (newLead.leadCallsLeads) {
									newLead.leadCallsLeads.id = models.sequelize.objectId().toString();
									newLead.leadCallsLeads.lead_id = respLead && respLead.dataValues ? respLead.dataValues.id : null;
									newLead.leadCallsLeads.call_id = respCalls && respLead.dataValues ? respCalls.dataValues.id : null;
									newLead.leadCallsLeads.date_modified = new Date();
									respCallsLeads = await models.sequelize.callsLeads.create(newLead.leadCallsLeads);
									objCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : null;
									pilatLog = await crmService.setPilatLog('create', 'calls', {description:'calls_leads', from: objCalls.name, to:objLead.first_name+' '+objLead.last_name}, objCallsLeads.id, objLead.id, objCalls.assigned_user_id);
								}

								if (newLead.leadCallsLeads.callLeadCalls.callCallsUsers) {
									if (!user && newLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id) {
										respUsers = await models.sequelize.users.findOne({where:{id:newLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id}});
										user = respUsers && respUsers.dataValues ? respUsers.dataValues : null;
									}
									if (user) {
										newLead.leadCallsLeads.callLeadCalls.callCallsUsers.id = models.sequelize.objectId().toString();
										newLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
										newLead.leadCallsLeads.callLeadCalls.callCallsUsers.call_id = respCalls.dataValues.id;
										newLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id = user.id;
										respCallsUsers = await models.sequelize.callsUsers.create(newLead.leadCallsLeads.callLeadCalls.callCallsUsers);
										objCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : null;
										pilatLog = await crmService.setPilatLog('create', 'calls', {description:'calls_users', from: objCalls.name, to:user.user_name}, objCallsUsers.id, objLead.id, objCalls.assigned_user_id);
									}
								}

								objLead.leadCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls.callCallsCstm = respCallsCstm && respCallsCstm.dataValues ? respCallsCstm.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls.callCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : {};
							}
						}

						// END CALLS
						//
						// BEGIN EMAIL_ADDRESSES

						let objEmailAddress, objEmailAddrBeanRel, respEmailAddresses, respEmailAddrBeanRel;

						if (newLead.leadEmailAddrBeanRel) {

							if (newLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses) {
								newLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id = models.sequelize.objectId().toString();
								newLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_created = new Date();
								newLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
								respEmailAddresses = await models.sequelize.emailAddresses.create(newLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses);
								objEmailAddress = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : null;
								pilatLog = await crmService.setPilatLog('create', 'emails',objEmailAddress.email_address, objEmailAddress.id, objLead.id, objLead.assigned_user_id);
							}

							newLead.leadEmailAddrBeanRel.id = models.sequelize.objectId().toString();
							newLead.leadEmailAddrBeanRel.email_address_id = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues.id : null;
							newLead.leadEmailAddrBeanRel.bean_id = respLead && respLead.dataValues ? respLead.dataValues.id : null;
							newLead.leadEmailAddrBeanRel.bean_module = newLead.leadEmailAddrBeanRel.bean_module ? newLead.leadEmailAddrBeanRel.bean_module : 'Leads';
							newLead.leadEmailAddrBeanRel.date_created = new Date();
							newLead.leadEmailAddrBeanRel.date_modified = new Date();
							respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.create(newLead.leadEmailAddrBeanRel);
							objEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : null;
							pilatLog = await crmService.setPilatLog('create', 'emails',{description:'email_addr_bean_rel', from:objEmailAddress.email_address, to:objLead.first_name+' '+objLead.last_name}, objEmailAddress.id, objLead.id, objLead.assigned_user_id);

							objLead.leadEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : {};
							objLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : {};
						}

						// END EMAIL_ADDRESSES

						if (newLead.leadLeadsAudit) {
							newLead.leadLeadsAudit.id = models.sequelize.objectId().toString();
							newLead.leadLeadsAudit.parent_id = newLead.id;
							newLead.leadLeadsAudit.date_created = new Date();
							let respLeadsAudit = await models.sequelize.leadsAudit.create(newLead.leadLeadsAudit);
							objLead.leadLeadsAudit = respLeadsAudit.dataValues;
						}

						if (newLead.leadSugarfeed) {
							newLead.leadSugarfeed.id = models.sequelize.objectId().toString();
							newLead.leadSugarfeed.related_id = newLead.id;
							newLead.leadSugarfeed.date_entered = new Date();
							newLead.leadSugarfeed.date_modified = new Date();
							let respSugarfeed = await models.sequelize.sugarfeed.create(newLead.leadSugarfeed);
							objLead.leadSugarfeed = respSugarfeed.dataValues;
						}

						if (newLead.leadAodIndexevent) {
							newLead.leadAodIndexevent.id = models.sequelize.objectId().toString();
							newLead.leadAodIndexevent.record_id = newLead.id;
							newLead.leadAodIndexevent.date_entered = new Date();
							newLead.leadAodIndexevent.date_modified = new Date();
							let respAodIndexevent = await models.sequelize.aodIndexevent.create(newLead.leadAodIndexevent);
							objLead.leadAodIndexevent = respAodIndexevent.dataValues;
						}

						if (newLead.leadTracker) {
							let max = await models.sequelize.tracker.max('id');
							newLead.leadTracker.id = newLead.leadTracker.id ? newLead.leadTracker.id : max+1;
							newLead.leadTracker.monitor_id = models.sequelize.objectId().toString();
							newLead.leadTracker.item_id = newLead.id;
							newLead.leadTracker.date_modified = new Date();
							let respTracker = await models.sequelize.tracker.create(newLead.leadTracker);
							objLead.leadTracker = respTracker.dataValues;
						}
					}
				}
			} else {
				objLead = new models.mongoose.leads(newLead);
				await objLead.save();
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}

	static async updateLead(id, updateLead, userLoggedIn) {
		try {
			let objLead, pilatLog, user, respUsers;

			if(sql) {

				if (updateLead) {
					let respLeads;
					if (updateLead.id) {
						updateLead.date_modified = new Date();
						await models.sequelize.leads.update(updateLead, {where:{id:id}});
						respLeads = await models.sequelize.leads.findOne({where: { id: id }});
						objLead = respLeads.dataValues;
						pilatLog = await crmService.setPilatLog('update', 'leads',objLead.first_name+' '+objLead.last_name, objLead.id, objLead.id, objLead.assigned_user_id);
					} else {
						let oldLead = await models.sequelize.leads.findOne({where:{id:id}});
						if (oldLead && oldLead.dataValues){
							oldLead = oldLead.dataValues;
							updateLead.date_modified = new Date();
							await models.sequelize.leads.update(updateLead, {where:{id:oldLead.id}});
							respLeads = await models.sequelize.leads.findOne({where: { id: oldLead.id }});
							objLead = respLeads.dataValues;
							pilatLog = await crmService.setPilatLog('update', 'leads', objLead.first_name+' '+objLead.last_name, objLead.id, objLead.id, objLead.assigned_user_id);
						}  else {
							//let newLead = updateLead;
							updateLead.id = models.sequelize.objectId().toString();
							updateLead.date_entered = new Date();
							updateLead.date_modified = new Date();
							let respLead = await models.sequelize.leads.create(updateLead);
							objLead = respLead.dataValues;
							pilatLog = await crmService.setPilatLog('create', 'leads',objLead.first_name+' '+objLead.last_name, objLead.id, objLead.id, objLead.assigned_user_id);
						}
					}

					if (updateLead.leadLeadsCstm) {
						let respLeadsCstm;
						if (updateLead.leadLeadsCstm.id_c) {
							updateLead.leadLeadsCstm.date_modified = new Date();
							await models.sequelize.leadsCstm.update(updateLead.leadLeadsCstm, {where:{id_c:id}});
							respLeadsCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: id }});
							objLead.leadLeadsCstm = respLeadsCstm.dataValues;
						} else {
							let oldLeadLeadsCstm = await models.sequelize.leadsCstm.findOne({where:{id_c:id}});
							if (oldLeadLeadsCstm && oldLeadLeadsCstm.dataValues) {
								oldLeadLeadsCstm = oldLeadLeadsCstm.dataValues;
								await models.sequelize.leadsCstm.update(updateLead.leadLeadsCstm, {where:{id_c:oldLeadLeadsCstm.id_c}});
								respLeadsCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: oldLeadLeadsCstm.id_c }});
								objLead.leadLeadsCstm = respLeadsCstm.dataValues;
							} else {
								//let newLead = updateLead;
								updateLead.leadLeadsCstm.id_c = respLeads.dataValues.id;
								respLeadsCstm = await models.sequelize.leadsCstm.create(updateLead.leadLeadsCstm);
								objLead.leadLeadsCstm = respLeadsCstm.dataValues;
							}
						}
					}

					// BEGIN CALLS

					let respCalls, objCalls;
					if (updateLead.leadCallsLeads && updateLead.leadCallsLeads.callLeadCalls) {
						if (updateLead.leadCallsLeads.callLeadCalls.id) {
							updateLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
							await models.sequelize.calls.update(updateLead.leadCallsLeads.callLeadCalls, {where:{id:updateLead.leadCallsLeads.callLeadCalls.id}});
							respCalls = await models.sequelize.calls.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.id }});
							objCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : null;
							pilatLog = await crmService.setPilatLog('update', 'calls',objCalls.name, objCalls.id, objLead.id, objLead.assigned_user_id);
						} else {
							let oldCallLeadCalls = await models.sequelize.callsLeads.findOne({
								where:{lead_id:id},
								include:{model:models.sequelize.calls, as:'callLeadCalls'}
							});
							if (oldCallLeadCalls && oldCallLeadCalls.dataValues && oldCallLeadCalls.dataValues.callLeadCalls) {
								oldCallLeadCalls = oldCallLeadCalls.dataValues;
								updateLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
								await models.sequelize.calls.update(updateLead.leadCallsLeads.callLeadCalls, {where:{id:oldCallLeadCalls.call_id}});
								respCalls = await models.sequelize.calls.findOne({where: { id: oldCallLeadCalls.call_id }});
								objCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : null;
								pilatLog = await crmService.setPilatLog('update', 'calls',objCalls.name, objCalls.id, objLead.id, objLead.assigned_user_id);
							} else {
								//let newLead = updateLead;
								updateLead.leadCallsLeads.callLeadCalls.id = models.sequelize.objectId().toString();
								updateLead.leadCallsLeads.callLeadCalls.date_entered = new Date();
								updateLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
								respCalls = await models.sequelize.calls.create(updateLead.leadCallsLeads.callLeadCalls);
								objCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : null;
								pilatLog = await crmService.setPilatLog('create', 'calls', objCalls.name, objCalls.id, objLead.id, objLead.assigned_user_id);
							}
						}

						let respCallsCstm;
						if (updateLead.leadCallsLeads.callLeadCalls.callCallsCstm) {
							if (updateLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c) {
								await models.sequelize.callsCstm.update(updateLead.leadCallsLeads.callLeadCalls.callCallsCstm, {where:{id_c:updateLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c}});
								respCallsCstm = await models.sequelize.callsCstm.findOne({where: { id_c: updateLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c }});
							} else {
								let oldCallCallsCstm = await models.sequelize.callsLeads.findOne({
									where:{lead_id:id},
									include:{
										model:models.sequelize.calls, as:'callLeadCalls',
										include:{model:models.sequelize.callsCstm, as:'callCallsCstm'}
									}
								});
								if (oldCallCallsCstm && oldCallCallsCstm.dataValues && oldCallCallsCstm.dataValues.callLeadCalls && oldCallCallsCstm.dataValues.callLeadCalls.callCallsCstm) {
									oldCallCallsCstm = oldCallCallsCstm.dataValues;
									await models.sequelize.callsCstm.update(updateLead.leadCallsLeads.callLeadCalls.callCallsCstm, {where:{id_c:oldCallCallsCstm.call_id}});
									respCallsCstm = await models.sequelize.callsCstm.findOne({where: { id_c: oldCallCallsCstm.call_id }});
								} else {
									//let newLead = updateLead;
									updateLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c = respCalls && respCalls.dataValues ? respCalls.dataValues.id : null;
									respCallsCstm = await models.sequelize.callsCstm.create(updateLead.leadCallsLeads.callLeadCalls.callCallsCstm);
								}
							}
						}

						let respCallsLeads, objCallsUsers, objCallsLeads, respCallsUsers;
						if (updateLead.leadCallsLeads) {
							if (updateLead.leadCallsLeads.id) {
								updateLead.leadCallsLeads.date_modified = new Date();
								await models.sequelize.callsLeads.update(updateLead.leadCallsLeads, {where:{id:updateLead.leadCallsLeads.id}});
								respCallsLeads = await models.sequelize.callsLeads.findOne({where: { id: updateLead.leadCallsLeads.id }});
								objCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : null;
								pilatLog = await crmService.setPilatLog('update', 'calls',{description:'calls_leads', from:objCalls.name, to:objLead.first_name+' '+objLead.last_name}, objCalls.id, objLead.id, objLead.assigned_user_id);
							} else {
								let oldLeadCallsLeads = await models.sequelize.callsLeads.findOne({where:{lead_id:id}});
								if (oldLeadCallsLeads && oldLeadCallsLeads.dataValues) {
									oldLeadCallsLeads = oldLeadCallsLeads.dataValues;
									updateLead.leadCallsLeads.date_modified = new Date();
									await models.sequelize.callsLeads.update(updateLead.leadCallsLeads, {where:{id:oldLeadCallsLeads.id}});
									respCallsLeads = await models.sequelize.callsLeads.findOne({where: { id: updateLead.leadCallsLeads.id }});
									objCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : null;
									pilatLog = await crmService.setPilatLog('update', 'calls',{description:'calls_leads', from:objCalls.name, to:objLead.first_name+' '+objLead.last_name}, objCalls.id, objLead.id, objLead.assigned_user_id);
								} else {
									updateLead.leadCallsLeads.id = models.sequelize.objectId().toString();
									updateLead.leadCallsLeads.lead_id = respLeads && respLeads.dataValues ? respLeads.dataValues.id : null;
									updateLead.leadCallsLeads.call_id = respCalls && respCalls.dataValues ? respCalls.dataValues.id : null;
									updateLead.leadCallsLeads.date_modified = new Date();
									respCallsLeads = await models.sequelize.callsLeads.create(updateLead.leadCallsLeads);
									objCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : null;
									pilatLog = await crmService.setPilatLog('create', 'calls',{description:'calls_leads', from:objCalls.name, to:objLead.first_name+' '+objLead.last_name}, objCalls.id, objLead.id, objLead.assigned_user_id);
								}
							}

							if (updateLead.leadCallsLeads.callLeadCalls.callCallsUsers){
								if (!user && updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id) {
									respUsers = await models.sequelize.users.findOne({where:{id:updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id}});
									user = respUsers && respUsers.dataValues ? respUsers.dataValues : null;
								}
								if (user) {
									if (updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id) {
										updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
										await models.sequelize.callsUsers.update(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers, {where:{id:updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id}});
										respCallsUsers = await models.sequelize.callsUsers.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id }});
										objCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : null;
										pilatLog = await crmService.setPilatLog('update', 'calls',{description:'calls_users', from:objCalls.name, to:user.user_name}, objCallsUsers.id, objLead.id, objLead.assigned_user_id);
									} else {
										let oldLeadCallsUsers = await models.sequelize.callsUsers.findOne({where:{call_id:respCalls.dataValues.id}});
										if (oldLeadCallsUsers && oldLeadCallsUsers.dataValues) {
											oldLeadCallsUsers = oldLeadCallsUsers.dataValues;
											updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
											await models.sequelize.callsUsers.update(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers, {where:{id:oldLeadCallsUsers.id}});
											respCallsUsers = await models.sequelize.callsUsers.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id }});
											objCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : null;
											pilatLog = await crmService.setPilatLog('update', 'calls',{description:'calls_users', from:objCalls.name, to:user.user_name}, objCallsUsers.id, objLead.id, objLead.assigned_user_id);
										} else {
											//let newLead = updateLead;
											updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id = models.sequelize.objectId().toString();
											updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.call_id = respCalls && respCalls.dataValues ? respCalls.dataValues.id : null;
											updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id = userLoggedIn ? userLoggedIn : updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.user_id;
											updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
											respCallsUsers = await models.sequelize.callsUsers.create(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers);
											objCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : null;
											pilatLog = await crmService.setPilatLog('create', 'calls',{description:'calls_users', from:objCalls.name, to:user.user_name}, objCallsUsers.id, objLead.id, objLead.assigned_user_id);
										}
									}
								}
							}
						}

						objLead.leadCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls.callCallsCstm = respCallsCstm && respCallsCstm.dataValues ? respCallsCstm.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls.callCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : {};
					}

					// END CALLS
					//
					// BEGIN EMAIL_ADDRESSES

					let respEmailAddresses, respEmailAddrBeanRel, objEmailAddrBeanRel, objEmailAddress;
					if (updateLead.leadEmailAddrBeanRel) {
						if (updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id) {
							updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
							await models.sequelize.emailAddresses.update(updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses, {where:{id:updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id}});
							respEmailAddresses = await models.sequelize.emailAddresses.findOne({where: { id: updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id }});
							objEmailAddress = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : null;
							pilatLog = await crmService.setPilatLog('update', 'emails', objEmailAddress.email_address, objEmailAddress.id, objLead.id, objLead.assigned_user_id);
						} else {
							let oldEmailAddresses = await models.sequelize.emailAddresses.findOne({
								include:{
									model:models.sequelize.emailAddrBeanRel, as:'emailAddressEmailAddrBeanRel',
									where:{bean_id:id}
								}
							});
							if (oldEmailAddresses && oldEmailAddresses.dataValues) {
								oldEmailAddresses = oldEmailAddresses.dataValues;
								updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
								await models.sequelize.emailAddresses.update(updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses, {where:{id:oldEmailAddresses.id}});
								respEmailAddresses = await models.sequelize.emailAddresses.findOne({where: { id: oldEmailAddresses.id }});
								objEmailAddress = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : null;
								pilatLog = await crmService.setPilatLog('update', 'emails', objEmailAddress.email_address, objEmailAddress.id, objLead.id, objLead.assigned_user_id);
							} else {
								//let newLead = updateLead;
								updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.id = models.sequelize.objectId().toString();
								updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_created = new Date();
								updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.date_modified = new Date();
								respEmailAddresses = await models.sequelize.emailAddresses.create(updateLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses);
								objEmailAddress = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : null;
								pilatLog = await crmService.setPilatLog('create', 'emails', objEmailAddress.email_address, objEmailAddress.id, objLead.id, objLead.assigned_user_id);
							}
						}

						if (updateLead.leadEmailAddrBeanRel.id) {
							updateLead.leadEmailAddrBeanRel.date_modified = new Date();
							updateLead.leadEmailAddrBeanRel.email_address_id = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues.id : null;
							updateLead.leadEmailAddrBeanRel.bean_id = respLeads && respLeads.dataValues ? respLeads.dataValues.id : null;
							updateLead.leadEmailAddrBeanRel.bean_module = updateLead.leadEmailAddrBeanRel.bean_module ? updateLead.leadEmailAddrBeanRel.bean_module : 'Leads';
							await models.sequelize.emailAddrBeanRel.update(updateLead.leadEmailAddrBeanRel, {where:{id:updateLead.leadEmailAddrBeanRel.id}});
							respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { id: updateLead.leadEmailAddrBeanRel.id }});
							objEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : null;
							pilatLog = await crmService.setPilatLog('update', 'emails', {description:'email_addr_bean_rel', from:objEmailAddress.email_address, to:objLead.first_name+' '+objLead.last_name}, objEmailAddrBeanRel.id, objLead.id, objLead.assigned_user_id);
						} else {
							let oldEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where:{bean_id:id}});
							if (oldEmailAddrBeanRel && oldEmailAddrBeanRel.dataValues) {
								oldEmailAddrBeanRel = oldEmailAddrBeanRel.dataValues;
								updateLead.leadEmailAddrBeanRel.date_modified = new Date();
								updateLead.leadEmailAddrBeanRel.email_address_id = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues.id : null;
								updateLead.leadEmailAddrBeanRel.bean_id = respLeads && respLeads.dataValues ? respLeads.dataValues.id : null;
								updateLead.leadEmailAddrBeanRel.bean_module = updateLead.leadEmailAddrBeanRel.bean_module ? updateLead.leadEmailAddrBeanRel.bean_module : 'Leads';
								await models.sequelize.emailAddrBeanRel.update(updateLead.leadEmailAddrBeanRel, {where:{id:oldEmailAddrBeanRel.id}});
								respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.findOne({where: { id:oldEmailAddrBeanRel.id }});
								objEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : null;
								pilatLog = await crmService.setPilatLog('update', 'emails', {description:'email_addr_bean_rel', from:objEmailAddress.email_address, to:objLead.first_name+' '+objLead.last_name}, objEmailAddrBeanRel.id, objLead.id, objLead.assigned_user_id);
							} else {
								//let newLead = updateLead;
								updateLead.leadEmailAddrBeanRel.date_modified = new Date();
								updateLead.leadEmailAddrBeanRel.date_created = new Date();
								updateLead.leadEmailAddrBeanRel.email_address_id = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues.id : null;
								updateLead.leadEmailAddrBeanRel.bean_id = respLeads && respLeads.dataValues ? respLeads.dataValues.id : null;
								updateLead.leadEmailAddrBeanRel.bean_module = updateLead.leadEmailAddrBeanRel.bean_module ? updateLead.leadEmailAddrBeanRel.bean_module : 'Leads';
								updateLead.leadEmailAddrBeanRel.id = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues.id : null;
								respEmailAddrBeanRel = await models.sequelize.emailAddrBeanRel.create(updateLead.leadEmailAddrBeanRel);
								objEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : null;
								pilatLog = await crmService.setPilatLog('create', 'emails', {description:'email_addr_bean_rel', from:objEmailAddress.email_address, to:objLead.first_name+' '+objLead.last_name}, objEmailAddrBeanRel.id, objLead.id, objLead.assigned_user_id);
							}
						}

						objLead.leadEmailAddrBeanRel = respEmailAddrBeanRel && respEmailAddrBeanRel.dataValues ? respEmailAddrBeanRel.dataValues : null;
						objLead.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses = respEmailAddresses && respEmailAddresses.dataValues ? respEmailAddresses.dataValues : null;
					}

					// END EMAIL_ADDRESSES

					if (updateLead.leadAodIndexevent) {
						let respAodindexevent;
						if (updateLead.leadAodIndexevent.id) {
							let aodIndexeventId = updateLead.leadAodIndexevent.id;
							delete updateLead.leadAodIndexevent.id;
							updateLead.leadAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateLead.leadAodIndexevent, {where:{id:aodIndexeventId}});
							respAodindexevent = await models.sequelize.aodIndexevent.findOne({where: { id: aodIndexeventId}});
							objLead.leadAodIndexevent = respAodindexevent.dataValues;
						} else {
							let oldLeadAodIndexevent = await models.sequelize.aodIndexevent.findOne({where:{record_id:id}});
							if (oldLeadAodIndexevent && oldLeadAodIndexevent.dataValues) {
								oldLeadAodIndexevent = oldLeadAodIndexevent.dataValues;
								updateLead.leadAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateLead.leadAodIndexevent, {where:{id:oldLeadAodIndexevent.id}});
								respAodindexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldLeadAodIndexevent.id }});
								objLead.leadAodIndexevent = respAodindexevent.dataValues;
							} else {
								//let newLead = updateLead;
								updateLead.leadAodIndexevent.id = models.sequelize.objectId().toString();
								updateLead.leadAodIndexevent.record_id = respLeads.dataValues.id;
								updateLead.leadAodIndexevent.date_entered = new Date();
								updateLead.leadAodIndexevent.date_modified = new Date();
								respAodindexevent = await models.sequelize.aodIndexevent.create(updateLead.leadAodIndexevent);
								objLead.leadAodIndexevent = respAodindexevent.dataValues;
							}
						}
					}

					if (updateLead.leadTracker) {
						if (updateLead.leadTracker.id) {
							let trackerId = updateLead.leadTracker.id;
							delete updateLead.leadTracker.id;
							updateLead.leadTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateLead.leadTracker, {where:{id:trackerId}});
							let respTracker = await models.sequelize.tracker.findOne({where: { id: trackerId }});
							objLead.leadTracker = respTracker.dataValues;
						} else {
							let oldLeadTracker = await models.sequelize.tracker.findOne({where:{item_id:id}});
							if (oldLeadTracker && oldLeadTracker.dataValues) {
								oldLeadTracker = oldLeadTracker.dataValues;
								updateLead.leadTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateLead.leadTracker, {where:{id:oldLeadTracker.id}});
								let respTracker = await models.sequelize.tracker.findOne({where: { id: oldLeadTracker.id }});
								objLead.leadTracker = respTracker.dataValues;
							} else {
								let newLead = updateLead;
								let max = await models.sequelize.tracker.max('id');
								newLead.leadTracker.id = newLead.leadTracker.id ? newLead.leadTracker.id : max+1;
								newLead.leadTracker.monitor_id = models.sequelize.objectId().toString();
								newLead.leadTracker.item_id = newLead.id;
								newLead.leadTracker.date_modified = new Date();
								let respTracker = await models.sequelize.tracker.create(newLead.leadTracker);
								objLead.leadTracker = respTracker.dataValues;
							}
						}
					}

					if (updateLead.leadSugarfeed) {
						if (updateLead.leadSugarfeed.id) {
							let sugarfeedId = updateLead.leadSugarfeed.id;
							delete updateLead.leadSugarfeed.id;
							updateLead.leadSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateLead.leadSugarfeed, {where:{id:sugarfeedId }});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id:sugarfeedId }});
							objLead.leadSugarfeed = respSugarfeed.dataValues;
						}  else {
							let oldLeadSugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldLeadSugarfeed && oldLeadSugarfeed.dataValues) {
								oldLeadSugarfeed = oldLeadSugarfeed.dataValues;
								updateLead.leadSugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateLead.leadSugarfeed, {where:{id:oldLeadSugarfeed.id}});
								let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldLeadSugarfeed.id }});
								objLead.leadSugarfeed = respSugarfeed.dataValues;
							} else {
								let newLead = updateLead;
								newLead.leadSugarfeed.id = models.sequelize.objectId().toString();
								newLead.leadSugarfeed.related_id = newLead.id;
								newLead.leadSugarfeed.date_entered = new Date();
								newLead.leadSugarfeed.date_modified = new Date();
								let respSugarfeed = await models.sequelize.sugarfeed.create(newLead.leadSugarfeed);
								objLead.leadSugarfeed = respSugarfeed.dataValues;
							}
						}
					}
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

	// static async addLead(newLead) {
	// 	try {
	// 		let objLead;
	// 		newLead.id = models.sequelize.objectId().toString();
	// 		newLead.leadCstm.id_c = newLead.id;
	// 		newLead.leadCstm.etapas_c = '';
	// 		if(sql) {
	// 			objLead = await models.sequelize.leads.create(newLead);
	// 			objLead.leadCstm = await models.sequelize.leadsCstm.create(newLead.leadCstm);
	// 		} else {
	// 			objLead = new models.mongoose.leads(newLead);
	// 			await objLead.save();
	// 		}
	// 		return objLead;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	static async deleteLead(id) {
		try {
			let objLead;
			if(sql) {

				let leads = await models.sequelize.leads.findOne({ where: { id: util.Char(id) } });
				if (leads) await models.sequelize.leads.destroy({where: { id: util.Char(id) }});

				let leadLeadsCstm = await models.sequelize.leadsCstm.findOne({ where: { id_c: util.Char(id) } });
				if (leadLeadsCstm) await models.sequelize.leadsCstm.destroy({where: { id_c: util.Char(id) }});

				let leadPilatLogs = await models.sequelize.pilatLogs.findAll({ where: { module_id: util.Char(id) } });
				if (leadPilatLogs) await models.sequelize.pilatLogs.destroy({where: { module_id: util.Char(id) }});

				let leadLeadsAudit = await models.sequelize.leadsAudit.findOne({ where: { parent_id: util.Char(id) } });
				if (leadLeadsAudit) await models.sequelize.leadsAudit.destroy({where: { parent_id: util.Char(id) }});

				let leadSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (leadSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let leadAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (leadAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let leadTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (leadTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objLead = leads;
				objLead.leadLeadsCstm = leadLeadsCstm;
				objLead.leadLeadsAudit = leadLeadsAudit;
				objLead.leadSugarfeed = leadSugarfeed;
				objLead.leadAodIndexevent = leadAodIndexevent;
				objLead.leadTracker = leadTracker;

			} else {
				objLead = await models.mongoose.leads.deleteOne({id:util.Char(id)});
			}
			return objLead;
		} catch (error) {
			throw error;
		}
	}

}

//<es-section>
module.exports = LeadService;
//</es-section>
