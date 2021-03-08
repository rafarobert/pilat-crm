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

class CrmService {

	static async setEmailOpportunity(objOpportunity, respContacts) {
		try {
			if (objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
				let hasEmailHistory;
				if (objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmails) {
					hasEmailHistory = true;
				} else {
					hasEmailHistory = false;
				}

				await CrmService.createAndSendPdf(objOpportunity, async (err, file, info) => {
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
							status:err ? '' : 'sent',
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
		} catch (e) {
			console.log(e);
		}
	}
	static async createAndSendPdf(objOpportunity, callback = null) {
		let date = new Date();
		await this.createPdf(objOpportunity, (err, res, file) => {
			if (res) {
				loggerPdf.info('Archivo pdf creado: ' + date.toString(), {file:res});
				this.sendMail(1, objOpportunity,file, (err, info) => {
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

	static async setContent(content, objOpportunity = null, objLead = null) {
		if (content) {
			if (objOpportunity) {
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

				content = content.replaceAll('@precioMetroCuadrado',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
				content = content.replaceAll('@precioTotal',this.formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
				content = content.replaceAll('@cuotaInicial',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
				content = content.replaceAll('@saldo',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.saldo_c));

				if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.tipo_pago_c == 'PLAZOS') {
					if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '5') {
						content = content.replaceAll('@precioMetroCuadradoPlazoCinco',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
						content = content.replaceAll('@cuotaInicialPlazoCinco',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
						content = content.replaceAll('@cuotaMensualPlazoCinco',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.cuota_mensual_c));
						content = content.replaceAll('@precioTotalPlazoCinco',this.formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
					} else if (objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.term_years_c == '10') {
						content = content.replaceAll('@precioMetroCuadradoPlazoDiez',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.precio_mcuadrado_c));
						content = content.replaceAll('@cuotaInicialPlazoDiez',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.lbl_cuotainicial_c));
						content = content.replaceAll('@cuotaMensualPlazoDiez',this.formatNumber(objOpportunity.opportunityAosQuotes.aoQuoteAosQuotesCstm.cuota_mensual_c));
						content = content.replaceAll('@precioTotalPlazoDiez',this.formatNumber(objOpportunity.opportunityAosQuotes.total_amount));
					}
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
			let localTemplatesQuote, files, file;
			if (objOpportunity.opportunityAosQuotes) {
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
				files = await fs.readdirSync(localDir);
				file = files.find(param => param == 'quote_'+id+'.pdf');

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
			}
			return [localDir,file]
		} catch (e) {
			console.log(e)
		}
	}

	static async sendMail(idCredential, objOpportunity, dirFile, callback = null) {
		let resp;
		let subDirs = dirFile.split('/');
		let file = subDirs[subDirs.length-1];
		if (objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel) {
			if (file && objOpportunity.opportunityOpportunitiesContacts.opportunityContactContacts.contactEmailAddrBeanRel.emailAddrBeanRelEmailAddresses.email_address) {
				let respCredential = await models.sequelize.pilatMails.findOne({where:{id:idCredential}});
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

	static formatNumber (num, decimals = 2) {
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
		return this.solveFeatureFormatFloatNumberSpanish(formatFloatFullValue);
	}

	static async solveFeatureFormatFloatNumberSpanish(num) {
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

	static setNumberToSave(amount) {
		if (amount) {
			amount = amount+'';
			if (typeof amount == 'string') {
				let numParts = amount.split(',');
				let integer = numParts[0] ? numParts[0] : '';
				let decimal = numParts[1] ? numParts[1] : '';
				integer = integer ? integer.replaceAll('.','') : integer;
				decimal = decimal ? decimal.replaceAll(',','') : decimal;
				let numToReturn = integer;
				return numToReturn;
			}
		}
		return amount;
	}
	static minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}
}

//<es-section>
module.exports = CrmService;
//</es-section>
