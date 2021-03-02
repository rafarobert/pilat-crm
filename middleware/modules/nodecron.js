const nodemailer = require("node-cron");
const models = require('../core/express');
const leadService = require('../api/src/crm/lead/lead.service');
const nodeMailer = require("./nodemailer");
const crmService = require('../api/src/crm/services/crm.service');

class NodeCron {

	static async initLeadsNotificationCalls(expression, callback = null) {
		try {
			let resp = "";

			let respPilatCron = await models.sequelize.pilatCrons.findAll({where:{cro_status:true}});

			if (respPilatCron && pilatCron.length) {
				for (let i = 0 ; i < pilatCron.length ; i++) {
					let pilatCron = pilatCron[i];
					let expression = pilatCron.cro_expression;
					if (expression) {
						cron.schedule(expression, async function() {
							console.log("---------------------------------");
							console.log("Iniciando Cron: "+pilatCron.cro_description);
							let verifiedPilatCron = await models.sequelize.pilatCrons.findOne({where:{id:pilatCron.id, cro_status:true}});
							let respLeads = await leadService.getALead(verifiedPilatCron.cro_lead_id);
							if (respLeads && respLeads.dataValues) {
								let objLead = respLeads.dataValues;
								if (pilatCron.cro_mai_id) {

									let respCredential = await models.sequelize.pilatMails.findOne({where:{id:pilatCron.cro_mai_id}});
									let credential = respCredential.dataValues;
									credential.mai_text = await crmService.setContent(credential.mai_text, null, objLead);
									credential.mai_html = await crmService.setContent(credential.mai_html, null, objLead);
									credential.mai_subject = await crmService.setContent(credential.mai_subject, null, objLead);

									let mailOptions = {
										from: '"' + credential.mai_user_account + '" <' + credential.mai_user_account + '>', // sender address
										html: credential.mai_html,
										to: objeLead.leadLeadsCstm.sec_email_c,
										cc: credential.mai_cc,
										bcc: credential.mai_bcc,
										subject: credential.mai_subject,
										text: credential.mai_text
									};

									nodeMailer.sendMail(mailOptions,credential)
								}
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
