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

const { Op } = require("sequelize");

class LeadService {

	static async getAllLeads(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.leads.findAll({
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
						},
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
			let objLead;

			if(sql) {

				if (newLead) {
					let alreadyLeads;

					alreadyLeads = await models.sequelize.leads.findAll({where:{[Op.or]:[{phone_mobile: newLead.phone_mobile+''},{first_name: newLead.first_name+''},{last_name: newLead.last_name+''}]}});

					if (alreadyLeads && alreadyLeads.length) {
						objLead = alreadyLeads;
					} else {
						newLead.id = models.sequelize.objectId().toString();
						newLead.date_entered = new Date();
						newLead.date_modified = new Date();
						let respLead = await models.sequelize.leads.create(newLead);
						objLead = respLead.dataValues;

						if (newLead.leadLeadsCstm) {
							newLead.leadLeadsCstm.id_c = newLead.id;
							let respLeadsCstm = await models.sequelize.leadsCstm.create(newLead.leadLeadsCstm);
							objLead.leadLeadsCstm = respLeadsCstm.dataValues;
						}

						// BEGIN CALLS

						let respCalls, respCallsCstm, respCallsLeads, respCallsUsers;

						if (newLead.leadCallsLeads) {
							if (newLead.leadCallsLeads.callLeadCalls) {

								newLead.leadCallsLeads.callLeadCalls.id = models.sequelize.objectId().toString();
								newLead.leadCallsLeads.callLeadCalls.date_entered = new Date();
								newLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
								respCalls = await models.sequelize.calls.create(newLead.leadCallsLeads.callLeadCalls);

								if (newLead.leadCallsLeads.callLeadCalls.callCallsCstm) {
									newLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c = respCalls.dataValues.id;
									respCallsCstm = await models.sequelize.callsCstm.create(newLead.leadCallsLeads.callLeadCalls.callCallsCstm);
								}

								if (newLead.leadCallsLeads) {
									newLead.leadCallsLeads.id = models.sequelize.objectId().toString();
									newLead.leadCallsLeads.lead_id = newLead.id;
									newLead.leadCallsLeads.call_id = respCalls.dataValues.id;
									newLead.leadCallsLeads.date_modified = new Date();
									respCallsLeads = await models.sequelize.callsLeads.create(newLead.leadCallsLeads);
								}

								if (newLead.leadCallsLeads.callLeadCalls.callCallsUsers) {
									newLead.leadCallsLeads.callLeadCalls.callCallsUsers.id = models.sequelize.objectId().toString();
									newLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
									newLead.leadCallsLeads.callLeadCalls.callCallsUsers.call_id = respCalls.dataValues.id;
									respCallsUsers = await models.sequelize.callsUsers.create(newLead.leadCallsLeads.callLeadCalls.callCallsUsers);
								}

								objLead.leadCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls.callCallsCstm = respCallsCstm && respCallsCstm.dataValues ? respCallsCstm.dataValues : {};
								objLead.leadCallsLeads.callLeadCalls.callCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : {};
							}
						}

						// END CALLS

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

	static async updateLead(id, updateLead) {
		try {
			let objLead;

			if(sql) {

				if (updateLead) {
					if (updateLead.id) {
						updateLead.date_modified = new Date();
						await models.sequelize.leads.update(updateLead, {where:{id:id}});
						let respLeads = await models.sequelize.leads.findOne({where: { id: id }});
						objLead = respLeads.dataValues;
					} else {
						let oldLead = await models.sequelize.leads.findOne({where:{id:id}});
						if (oldLead && oldLead.dataValues){
							oldLead = oldLead.dataValues;
							updateLead.date_modified = new Date();
							await models.sequelize.leads.update(updateLead, {where:{id:oldLead.id}});
							let respLeads = await models.sequelize.leads.findOne({where: { id: oldLead.id }});
							objLead = respLeads.dataValues;
						}  else {
							let newLead = updateLead;
							newLead.id = models.sequelize.objectId().toString();
							newLead.date_entered = new Date();
							newLead.date_modified = new Date();
							let respLead = await models.sequelize.leads.create(newLead);
							objLead = respLead.dataValues;
						}
					}

					if (updateLead.leadLeadsCstm) {
						if (updateLead.leadLeadsCstm.id_c) {
							updateLead.leadLeadsCstm.date_modified = new Date();
							await models.sequelize.leadsCstm.update(updateLead.leadLeadsCstm, {where:{id_c:id}});
							let respLeadsCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: id }});
							objLead.leadLeadsCstm = respLeadsCstm.dataValues;
						} else {
							let oldLeadLeadsCstm = await models.sequelize.leadsCstm.findOne({where:{id_c:id}});
							if (oldLeadLeadsCstm && oldLeadLeadsCstm.dataValues) {
								oldLeadLeadsCstm = oldLeadLeadsCstm.dataValues;
								await models.sequelize.leadsCstm.update(updateLead.leadLeadsCstm, {where:{id_c:oldLeadLeadsCstm.id_c}});
								let respLeadsCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: oldLeadLeadsCstm.id_c }});
								objLead.leadLeadsCstm = respLeadsCstm.dataValues;
							} else {
								let newLead = updateLead;
								newLead.leadLeadsCstm.id_c = newLead.id;
								let respLeadsCstm = await models.sequelize.leadsCstm.create(newLead.leadLeadsCstm);
								objLead.leadLeadsCstm = respLeadsCstm.dataValues;
							}
						}
					}

					// BEGIN CALLS

					let respCalls;
					if (updateLead.leadCallsLeads && updateLead.leadCallsLeads.callLeadCalls) {
						if (updateLead.leadCallsLeads.callLeadCalls.id) {
							updateLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
							await models.sequelize.calls.update(updateLead.leadCallsLeads.callLeadCalls, {where:{id:updateLead.leadCallsLeads.callLeadCalls.id}});
							respCalls = await models.sequelize.calls.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.id }});
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
							} else {
								let newLead = updateLead;
								newLead.leadCallsLeads.callLeadCalls.id = models.sequelize.objectId().toString();
								newLead.leadCallsLeads.callLeadCalls.date_entered = new Date();
								newLead.leadCallsLeads.callLeadCalls.date_modified = new Date();
								respCalls = await models.sequelize.calls.create(newLead.leadCallsLeads.callLeadCalls);
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
									let newLead = updateLead;
									newLead.leadCallsLeads.callLeadCalls.callCallsCstm.id_c = respCalls && respCalls.dataValues ? respCalls.dataValues.id : null;
									respCallsCstm = await models.sequelize.callsCstm.create(newLead.leadCallsLeads.callLeadCalls.callCallsCstm);
								}
							}
						}

						let respCallsLeads, respCallsUsers;
						if (updateLead.leadCallsLeads) {
							if (updateLead.leadCallsLeads.id) {
								updateLead.leadCallsLeads.date_modified = new Date();
								await models.sequelize.callsLeads.update(updateLead.leadCallsLeads, {where:{id:updateLead.leadCallsLeads.id}});
								respCallsLeads = await models.sequelize.callsLeads.findOne({where: { id: updateLead.leadCallsLeads.id }});
							} else {
								let oldLeadCallsLeads = await models.sequelize.callsLeads.findOne({where:{lead_id:id}});
								if (oldLeadCallsLeads && oldLeadCallsLeads.dataValues) {
									oldLeadCallsLeads = oldLeadCallsLeads.dataValues;
									updateLead.leadCallsLeads.date_modified = new Date();
									await models.sequelize.callsLeads.update(updateLead.leadCallsLeads, {where:{id:oldLeadCallsLeads.id}});
									respCallsLeads = await models.sequelize.callsLeads.findOne({where: { id: updateLead.leadCallsLeads.id }});
								} else {
									updateLead.leadCallsLeads.id = models.sequelize.objectId().toString();
									updateLead.leadCallsLeads.lead_id = updateLead.id;
									updateLead.leadCallsLeads.call_id = respCalls && respCalls.dataValues ? respCalls.dataValues.id : null;
									updateLead.leadCallsLeads.date_modified = new Date();
									respCallsLeads = await models.sequelize.callsLeads.create(updateLead.leadCallsLeads);
								}
							}

							if (updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id) {
								updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
								await models.sequelize.callsUsers.update(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers, {where:{id:updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id}});
								respCallsUsers = await models.sequelize.callsUsers.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id }});
							} else {
								let oldLeadCallsUsers = await models.sequelize.callsUsers.findOne({where:{call_id:respCalls.dataValues.id}});
								if (oldLeadCallsUsers && oldLeadCallsUsers.dataValues) {
									oldLeadCallsUsers = oldLeadCallsUsers.dataValues;
									updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
									await models.sequelize.callsUsers.update(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers, {where:{id:oldLeadCallsUsers.id}});
									respCallsUsers = await models.sequelize.callsUsers.findOne({where: { id: updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id }});
								} else {
									//let newLead = updateLead;
									updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.id = models.sequelize.objectId().toString();
									updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.call_id = respCalls.dataValues.id;
									updateLead.leadCallsLeads.callLeadCalls.callCallsUsers.date_modified = new Date();
									respCallsUsers = await models.sequelize.callsUsers.create(updateLead.leadCallsLeads.callLeadCalls.callCallsUsers);
								}
							}
						}

						objLead.leadCallsLeads = respCallsLeads && respCallsLeads.dataValues ? respCallsLeads.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls = respCalls && respCalls.dataValues ? respCalls.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls.callCallsCstm = respCallsCstm && respCallsCstm.dataValues ? respCallsCstm.dataValues : {};
						objLead.leadCallsLeads.callLeadCalls.callCallsUsers = respCallsUsers && respCallsUsers.dataValues ? respCallsUsers.dataValues : {};
					}

					// END CALLS

					if (updateLead.leadAodIndexevent) {
						if (updateLead.leadAodIndexevent.id) {
							updateLead.leadAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateLead.leadAodIndexevent, {where:{record_id:id}});
							let respAodindexevent = await models.sequelize.aodIndexevent.findOne({where: { record_id: id }});
							objLead.leadAodIndexevent = respAodindexevent.dataValues;
						} else {
							let oldLeadAodIndexevent = await models.sequelize.aodIndexevent.findOne({where:{record_id:id}});
							if (oldLeadAodIndexevent && oldLeadAodIndexevent.dataValues) {
								oldLeadAodIndexevent = oldLeadAodIndexevent.dataValues;
								updateLead.leadAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateLead.leadAodIndexevent, {where:{id:oldLeadAodIndexevent.id}});
								let respAodindexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldLeadAodIndexevent.id }});
								objLead.leadAodIndexevent = respAodindexevent.dataValues;
							} else {
								let newLead = updateLead;
								newLead.leadAodIndexevent.id = models.sequelize.objectId().toString();
								newLead.leadAodIndexevent.record_id = newLead.id;
								newLead.leadAodIndexevent.date_entered = new Date();
								newLead.leadAodIndexevent.date_modified = new Date();
								let respAodIndexevent = await models.sequelize.aodIndexevent.create(newLead.leadAodIndexevent);
								objLead.leadAodIndexevent = respAodIndexevent.dataValues;
							}
						}

					}

					if (updateLead.leadTracker) {
						if (updateLead.leadTracker.id) {
							updateLead.leadTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateLead.leadTracker, {where:{item_id:id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { item_id: id }});
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
							updateLead.leadSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateLead.leadSugarfeed, {where:{related_id:id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { related_id: id }});
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
