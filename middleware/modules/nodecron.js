const nodeCron = require('node-cron');
const models = require('../core/express');
const leadService = require('../api/src/crm/lead/lead.service');
const callService = require('../api/src/crm/call/call.service');
const nodeMailer = require("./nodemailer");
const fechas = require('fechas');
const moment = require('moment');
const crmService = require('../api/src/crm/services/crm.service');

class NodeCron {

	static async initLeadsNotificationCalls(expression, callback = null) {
		try {
			let resp = "";

			let respPilatCrons = await models.sequelize.pilatCrons.findAll({where:{cro_status:true}});

			if (respPilatCrons && respPilatCrons.length) {
				for (let i = 0 ; i < respPilatCrons.length ; i++) {
					let pilatCron = respPilatCrons[i];
					let expression = pilatCron.cro_expression;
					if (expression) {
						nodeCron.schedule(expression, async function() {
							try {
								let today = new Date();
								let respPilatCronVerified = await models.sequelize.pilatCrons.findOne({where:{id:pilatCron.id, cro_status:true}});
								if (respPilatCronVerified) {
									console.log("---------------------------------");
									console.log("Iniciando Cron: "+pilatCron.cro_description);
									if (respPilatCronVerified && respPilatCronVerified.dataValues) {
										let respLeads = await models.sequelize.leads.findAll({
											include:[
												{
													model:models.sequelize.callsLeads, as:'leadCallsLeads',
													include:{
														model:models.sequelize.calls, as:'callLeadCalls',
														where: { date_start:models.sequelize.DATE(new Date(today.getFullYear(),today.getMonth(),today.getDate())) }
													}
												}
											]
										});
										if (respLeads && respLeads.length) {
											let respLeadsWithCall = respLeads.filter(param => param.leadCallsLeads != undefined);
											console.log("Leads Obtenidos, total: "+respLeadsWithCall.length);
											if (respLeadsWithCall && respLeadsWithCall.length) {
												for (let j = 0 ; j < respLeadsWithCall.length ; j++) {
													let respLeadWithCall = respLeadsWithCall[j];
													if (respLeadWithCall && respLeadWithCall.dataValues) {
														let leadWithCall = respLeadWithCall.dataValues;
														let callDateStart = leadWithCall.leadCallsLeads.callLeadCalls.date_start;
														// let callDateStartStr = crmService.minTwoDigits(callDateStart.getDate())+'/'+crmService.minTwoDigits((callDateStart.getMonth()+1))+'/'+callDateStart.getFullYear();
														// let callDateStartPlusFiveMinutesStr = fechas.add(dateStr,parseInt(parametros[index].valor));
														let callDateStartRestFiveMinutes = moment(callDateStart).add(-5, 'm').toDate();
														let expression = `${callDateStartRestFiveMinutes.getSeconds()} ${callDateStartRestFiveMinutes.getMinutes()-5} ${callDateStartRestFiveMinutes.getHours()} ${callDateStartRestFiveMinutes.getDate()} ${callDateStartRestFiveMinutes.getMonth()+1} ${callDateStartRestFiveMinutes.getDay()}`;
														nodeCron.schedule(expression, async () => {
															try {
																if (leadWithCall) {
																	if (leadWithCall.leadEmailAddrBeanRel && leadWithCall.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses) {
																		let emailLead = leadWithCall.leadEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address;
																		if (pilatCron.cro_mai_id) {
																			let respCredential = await models.sequelize.pilatMails.findOne({where:{id:pilatCron.cro_mai_id}});
																			if (respCredential && respCredential.dataValues) {
																				let credential = respCredential.dataValues;
																				credential.mai_text = await crmService.setContent(credential.mai_text, null, leadWithCall);
																				credential.mai_html = await crmService.setContent(credential.mai_html, null, leadWithCall);
																				credential.mai_subject = await crmService.setContent(credential.mai_subject, null, leadWithCall);
																				let mailOptions = {
																					from: '"' + credential.mai_user_account + '" <' + credential.mai_user_account + '>', // sender address
																					html: credential.mai_html,
																					to: emailLead,
																					cc: credential.mai_cc,
																					bcc: credential.mai_bcc,
																					subject: credential.mai_subject,
																					text: credential.mai_text
																				};
																				nodeMailer.sendMail(mailOptions,credential)
																			}
																		}
																	}
																}
															}	catch (e) {
																console.log(e)
															}
														});
													}
												}
											}
										}
									}
								}
							} catch (e) {
								console.log(e)
							}
						});
					}
				}
			}
			return resp;
		} catch (e) {
			console.log(e)
		}
	}



}

module.exports = NodeCron;
