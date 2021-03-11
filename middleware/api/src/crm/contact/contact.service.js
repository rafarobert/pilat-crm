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
class ContactService {

	static async getAllContacts(query) {
		try {
			if(sql) {
				let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
				let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
				return await models.sequelize.contacts.findAndCountAll({
					attributes:query.select ? query.select.split(',') : null,
					where: where && !where.where ? where : null,
					limit: query.limit ? parseInt(query.limit) : null,
					offset: offset ? parseInt(offset) : 0,
					order: query.order ? JSON.parse(query.order) : [['id','DESC']],
					include: [
						{
							model:models.sequelize.contactsCstm, as: 'contactContactsCstm',
							where: where ? where.where ? where.where.contactContactsCstm ? where.where.contactContactsCstm : null : null : null,

						},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async getAContact(id, query) {
		try {
			if(sql) {
				return await models.sequelize.contacts.findOne({
					attributes:query.select ? query.select.split(',') : null,
					where:{id:id},
					include: [
						{model:models.sequelize.contactsCstm, as: 'contactContactsCstm'},
						{model:models.sequelize.contactsAudit, as: 'contactContactsAudit'},
						{model:models.sequelize.sugarfeed, as: 'contactSugarfeed'},
						{model:models.sequelize.aodIndexevent, as: 'contactAodIndexevent'},
						{model:models.sequelize.tracker, as: 'contactTracker'},
					]
				});
			}
		} catch (error) {
			throw error;
		}
	}

	static async addContact(newContact) {
		try {
			let objContact;

			if(sql) {

				if (newContact) {
					newContact.id = models.sequelize.objectId().toString();
					newContact.date_entered = new Date();
					newContact.date_modified = new Date();
					newContact.date_reviewed = new Date();
					let respContact = await models.sequelize.contacts.create(newContact);
					objContact = respContact.dataValues;

					if (newContact.contactContactsCstm) {
						newContact.contactContactsCstm.id_c = newContact.id;
						let respContactsCstm = await models.sequelize.contactsCstm.create(newContact.contactContactsCstm);
						objContact.contactContactsCstm = respContactsCstm.dataValues;
					}

					if (newContact.contactContactsAudit) {
						newContact.contactContactsAudit.id = models.sequelize.objectId().toString();
						newContact.contactContactsAudit.parent_id = newContact.id;
						newContact.contactContactsAudit.date_created = new Date();
						let respContactsAudit = await models.sequelize.contactsAudit.create(newContact.contactContactsAudit);
						objContact.contactContactsAudit = respContactsAudit.dataValues;
					}

					if (newContact.contactSugarfeed) {
						newContact.contactSugarfeed.id = models.sequelize.objectId().toString();
						newContact.contactSugarfeed.related_id = newContact.id;
						newContact.contactSugarfeed.date_entered = new Date();
						newContact.contactSugarfeed.date_modified = new Date();
						let respSugarfeed = await models.sequelize.sugarfeed.create(newContact.contactSugarfeed);
						objContact.contactSugarfeed = respSugarfeed.dataValues;
					}

					if (newContact.contactAodIndexevent) {
						newContact.contactAodIndexevent.id = models.sequelize.objectId().toString();
						newContact.contactAodIndexevent.record_id = newContact.id;
						newContact.contactAodIndexevent.date_entered = new Date();
						newContact.contactAodIndexevent.date_modified = new Date();
						let respAodIndexevent = await models.sequelize.aodIndexevent.create(newContact.contactAodIndexevent);
						objContact.contactAodIndexevent = respAodIndexevent.dataValues;
					}

					if (newContact.contactTracker) {
						let max = await models.sequelize.tracker.max('id');
						newContact.contactTracker.id = newContact.contactTracker.id ? newContact.contactTracker.id : max+1;
						newContact.contactTracker.monitor_id = models.sequelize.objectId().toString();
						newContact.contactTracker.item_id = newContact.id;
						newContact.contactTracker.date_modified = new Date();
						let respTracker = await models.sequelize.tracker.create(newContact.contactTracker);
						objContact.contactTracker = respTracker.dataValues;
					}
				}
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

				if (updateContact) {
					if (updateContact.id) {
						updateContact.date_modified = new Date();
						await models.sequelize.contacts.update(updateContact, {where:{id:id}});
						let respContact = await models.sequelize.contacts.findOne({where: { id: id }});
						objContact = respContact.dataValues;
					} else {
						let oldContact = await models.sequelize.contacts.findOne({where: { id: id }});
						if (oldContact && oldContact.dataValues) {
							oldContact = oldContact.dataValues;
							updateContact.date_modified = new Date();
							await models.sequelize.contacts.update(updateContact, {where:{id:oldContact.id}});
							let respContact = await models.sequelize.contacts.findOne({where: { id: oldContact.id }});
							objContact = respContact.dataValues;
						} else {
							let newContact = updateContact;
							newContact.id = models.sequelize.objectId().toString();
							newContact.date_entered = new Date();
							newContact.date_modified = new Date();
							newContact.date_reviewed = new Date();
							let respContact = await models.sequelize.contacts.create(newContact);
							objContact = respContact.dataValues;
						}
					}


					if (updateContact.contactContactsCstm) {
						if (updateContact.contactContactsCstm.id_c) {
							await models.sequelize.contactsCstm.update(updateContact.contactContactsCstm, {where:{id_c:updateContact.contactContactsCstm.id_c}});
							let respContactsCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: updateContact.contactContactsCstm.id_c }});
							objContact.contactContactsCstm = respContactsCstm.dataValues;
						} else {
							let oldContactContactsCstm = await models.sequelize.contactsCstm.findOne({where:{id_c:id}});
							if (oldContactContactsCstm && oldContactContactsCstm.dataValues) {
								oldContactContactsCstm = oldContactContactsCstm.dataValues;
								await models.sequelize.contactsCstm.update(updateContact.contactContactsCstm, {where:{id_c:oldContactContactsCstm.id_c}});
								let respContactsCstm = await models.sequelize.contactsCstm.findOne({where: { id_c: oldContactContactsCstm.id_c }});
								objContact.contactContactsCstm = respContactsCstm.dataValues;
							} else {
								let newContact = updateContact;
								newContact.contactContactsCstm.id_c = id;
								let respContactsCstm = await models.sequelize.contactsCstm.create(newContact.contactContactsCstm);
								objContact.contactContactsCstm = respContactsCstm.dataValues;
							}
						}
					}

					if (updateContact.contactSugarfeed) {
						if (updateContact.contactSugarfeed.id) {
							updateContact.contactSugarfeed.date_modified = new Date();
							await models.sequelize.sugarfeed.update(updateContact.contactSugarfeed, {where:{id:updateContact.contactSugarfeed.id}});
							let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: updateContact.contactSugarfeed.id }});
							objContact.contactSugarfeed = respSugarfeed.dataValues;
						} else {
							let oldContactSugarfeed = await models.sequelize.sugarfeed.findOne({where:{related_id:id}});
							if (oldContactSugarfeed && oldContactSugarfeed.dataValues) {
								oldContactSugarfeed = oldContactSugarfeed.dataValues;
								updateContact.contactSugarfeed.date_modified = new Date();
								await models.sequelize.sugarfeed.update(updateContact.contactSugarfeed, {where:{id:oldContactSugarfeed.id}});
								let respSugarfeed = await models.sequelize.sugarfeed.findOne({where: { id: oldContactSugarfeed.id }});
								objContact.contactSugarfeed = respSugarfeed.dataValues;
							} else {
								let newContact = updateContact;
								newContact.contactSugarfeed.id = models.sequelize.objectId().toString();
								newContact.contactSugarfeed.related_id = newContact.id;
								newContact.contactSugarfeed.date_entered = new Date();
								newContact.contactSugarfeed.date_modified = new Date();
								let respSugarfeed = await models.sequelize.sugarfeed.create(newContact.contactSugarfeed);
								objContact.contactSugarfeed = respSugarfeed.dataValues;
							}
						}
					}

					if (updateContact.contactAodIndexevent) {
						if (updateContact.contactAodIndexevent.id) {
							updateContact.contactAodIndexevent.date_modified = new Date();
							await models.sequelize.aodIndexevent.update(updateContact.contactAodIndexevent, {where:{id:updateContact.contactAodIndexevent.id}});
							let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: updateContact.contactAodIndexevent.id }});
							objContact.contactAodIndexevent = respAodIndexevent.dataValues;
						} else {
							let oldContactAodIndexevent = await models.sequelize.aodIndexevent.findOne({where:{record_id:id}});
							if (oldContactAodIndexevent && oldContactAodIndexevent.dataValues) {
								oldContactAodIndexevent = oldContactAodIndexevent.dataValues;
								updateContact.contactAodIndexevent.date_modified = new Date();
								await models.sequelize.aodIndexevent.update(updateContact.contactAodIndexevent, {where:{id:oldContactAodIndexevent.id}});
								let respAodIndexevent = await models.sequelize.aodIndexevent.findOne({where: { id: oldContactAodIndexevent.id }});
								objContact.contactAodIndexevent = respAodIndexevent.dataValues;
							} else {
								let newContact = updateContact;
								newContact.contactAodIndexevent.id = models.sequelize.objectId().toString();
								newContact.contactAodIndexevent.record_id = newContact.id;
								newContact.contactAodIndexevent.date_entered = new Date();
								newContact.contactAodIndexevent.date_modified = new Date();
								let respAodIndexevent = await models.sequelize.aodIndexevent.create(newContact.contactAodIndexevent);
								objContact.contactAodIndexevent = respAodIndexevent.dataValues;
							}
						}
					}

					if (updateContact.contactTracker) {
						if (updateContact.contactTracker.id) {
							updateContact.contactTracker.date_modified = new Date();
							await models.sequelize.tracker.update(updateContact.contactTracker, {where:{id:updateContact.contactTracker.id}});
							let respTracker = await models.sequelize.tracker.findOne({where: { id: updateContact.contactTracker.id }});
							objContact.contactTracker = respTracker.dataValues;
						} else {
							let oldContactTracker = await models.sequelize.tracker.findOne({where:{item_id:id}});
							if (oldContactTracker && oldContactTracker.dataValues) {
								oldContactTracker = oldContactTracker.dataValues;
								updateContact.contactTracker.date_modified = new Date();
								await models.sequelize.tracker.update(updateContact.contactTracker, {where:{id:oldContactTracker.id}});
								let respTracker = await models.sequelize.tracker.findOne({where: { id: oldContactTracker.id }});
								objContact.contactTracker = respTracker.dataValues;
							} else {
								let newContact = updateContact;
								let max = await models.sequelize.tracker.max('id');
								newContact.contactTracker.id = newContact.contactTracker.id ? newContact.contactTracker.id : max+1;
								newContact.contactTracker.monitor_id = models.sequelize.objectId().toString();
								newContact.contactTracker.item_id = newContact.id;
								newContact.contactTracker.date_modified = new Date();
								let respTracker = await models.sequelize.tracker.create(newContact.contactTracker);
								objContact.contactTracker = respTracker.dataValues;
							}
						}
					}

					if (updateContact.contactContactsAudit) {
						if (updateContact.contactContactsAudit.id) {
							await models.sequelize.contactsAudit.update(updateContact.contactContactsAudit, {where:{id:updateContact.contactContactsAudit.id}});
							let respContactsAudit = await models.sequelize.contactsAudit.findOne({where: { id: updateContact.contactContactsAudit.id }});
							objContact.contactContactsAudit = respContactsAudit.dataValues;
						} else {
							let oldContactContactsAudit = await models.sequelize.contactsAudit.findOne({where:{parent_id:id}});
							if (oldContactContactsAudit && oldContactContactsAudit.dataValues) {
								oldContactContactsAudit = oldContactContactsAudit.dataValues;
								await models.sequelize.contactsAudit.update(updateContact.contactContactsAudit, {where:{id:oldContactContactsAudit.id}});
								let respContactsAudit = await models.sequelize.contactsAudit.findOne({where: { id: oldContactContactsAudit.id }});
								objContact.contactContactsAudit = respContactsAudit.dataValues;
							} else {
								let newContact = updateContact;
								newContact.contactContactsAudit.id = models.sequelize.objectId().toString();
								newContact.contactContactsAudit.parent_id = newContact.id;
								newContact.contactContactsAudit.date_created = new Date();
								let respContactsAudit = await models.sequelize.contactsAudit.create(newContact.contactContactsAudit);
								objContact.contactContactsAudit = respContactsAudit.dataValues;
							}
						}
					}
				}
			} else {
				objContact = new models.mongoose.contacts(updateContact);
				await objContact.save();
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

				let contacts = await models.sequelize.contacts.findOne({ where: { id: util.Char(id) } });
				if (contacts) await models.sequelize.contacts.destroy({where: { id: util.Char(id) }});

				let contactContactsCstm = await models.sequelize.contactsCstm.findOne({ where: { id_c: util.Char(id) } });
				if (contactContactsCstm) await models.sequelize.contactsCstm.destroy({where: { id_c: util.Char(id) }});

				let contactContactsAudit = await models.sequelize.contactsAudit.findOne({ where: { parent_id: util.Char(id) } });
				if (contactContactsAudit) await models.sequelize.contactsAudit.destroy({where: { parent_id: util.Char(id) }});

				let contactSugarfeed = await models.sequelize.sugarfeed.findOne({ where: { related_id: util.Char(id) } });
				if (contactSugarfeed) await models.sequelize.sugarfeed.destroy({where: { related_id: util.Char(id) }});

				let contactAodIndexevent = await models.sequelize.aodIndexevent.findOne({ where: { record_id: util.Char(id) } });
				if (contactAodIndexevent) await models.sequelize.aodIndexevent.destroy({where: { record_id: util.Char(id) }});

				let contactTracker = await models.sequelize.tracker.findOne({ where: { item_id: util.Char(id) } });
				if (contactTracker) await models.sequelize.tracker.destroy({where: { item_id: util.Char(id) }});

				objContact = contacts;
				objContact.contactContactsCstm = contactContactsCstm;
				objContact.contactContactsAudit = contactContactsAudit;
				objContact.contactSugarfeed = contactSugarfeed;
				objContact.contactAodIndexevent = contactAodIndexevent;
				objContact.contactTracker = contactTracker;

			} else {
				objContact = await models.mongoose.contacts.deleteOne({id:util.Char(id)});
			}
			return objContact;
		} catch (error) {
			throw error;
		}
	}


}

//<es-section>
module.exports = ContactService;
//</es-section>
