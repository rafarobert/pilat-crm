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

// let parActionCreate = '';
// const parActionUpdate = '';
//
// const parModuleLeads = '';
// const parModuleOpportunities = '';
// const parModuleCalls = '';
// const parModuleEmails = '';
// const parModuleAoSQuotes = '';
// const parModuleContacts = '';
// const parModuleAccounts = '';
//
// const parDescriptionLeadsCreated = '';
// const parDescriptionOpportunitiesCreated = '';
// const parDescriptionCallsCreated = '';
// const parDescriptionEmailsCreated = '';
// const parDescriptionAoSQuotesCreated = '';
// const parDescriptionContactsCreated = '';
// const parDescriptionAccountsCreated = '';
//
// const parDescriptionLeadsUpdated = '';
// const parDescriptionOpportunitiesUpdated = '';
// const parDescriptionCallsUpdated = '';
// const parDescriptionEmailsUpdated = '';
// const parDescriptionAoSQuotesUpdated = '';
// const parDescriptionContactsUpdated = '';
// const parDescriptionAccountsUpdated = '';

class CrmService {

	static async setParams(pilatDictionaries = []) {
		if (!pilatDictionaries.length) {
			pilatDictionaries = [
				'6047dd7d65effb63aa946767',
				'6047dda665effb63aa946768',
				'6047ddfe65effb63aa946769',
				'6047e3bc65effb63aa94676b',
				'60088baf3682cc5720f557b4',
				'6048f227c7cf6507f63bfaae'
			]
		}
		let params = await models.sequelize.pilatParams.findAll({where:{par_dictionary_id:pilatDictionaries}});
		if (params && params.length) {
			for (let i = 0 ; i < params.length ; i++) {
				let param = params[i];
				switch (param.id) {

					case 114: this.parCreate = param.dataValues; break;
					case 115: this.parUpdate = param.dataValues; break;

					case 27: this.parLeads = param.dataValues; break;
					case 31: this.parOpportunities = param.dataValues; break;
					case 30: this.parCalls = param.dataValues; break;
					case 33: this.parEmails = param.dataValues; break;
					case 32: this.parAOS_Quotes = param.dataValues; break;
					case 28: this.parContacts = param.dataValues; break;
					case 29: this.parAccounts = param.dataValues; break;

					case 123: this.parDescriptionLeadsCreated = param.dataValues; break;
					case 124: this.parDescriptionOpportunitiesCreated = param.dataValues; break;
					case 125: this.parDescriptionCallsCreated = param.dataValues; break;
					case 126: this.parDescriptionEmailsCreated = param.dataValues; break;
					case 127: this.parDescriptionAoSQuotesCreated = param.dataValues; break;
					case 128: this.parDescriptionContactsCreated = param.dataValues; break;
					case 129: this.parDescriptionAccountsCreated = param.dataValues; break;
					case 130: this.parDescriptionLeadsUpdated = param.dataValues; break;
					case 131: this.parDescriptionOpportunitiesUpdated = param.dataValues; break;
					case 132: this.parDescriptionCallsUpdated = param.dataValues; break;
					case 133: this.parDescriptionEmailsUpdated = param.dataValues; break;
					case 134: this.parDescriptionAoSQuotesUpdated = param.dataValues; break;
					case 135: this.parDescriptionContactsUpdated = param.dataValues; break;
					case 136: this.parDescriptionAccountsUpdated = param.dataValues; break;

					case 116: this.parRelationCallsLeads = param.dataValues; break;
					case 117: this.parRelationMeetingsLeads = param.dataValues; break;
					case 118: this.parRelationCallsContacts = param.dataValues; break;
					case 119: this.parRelationCallsUsers = param.dataValues; break;
					case 120: this.parRelationAccountsContacts = param.dataValues; break;
					case 121: this.parRelationAccountsOpportunities = param.dataValues; break;
					case 122: this.parRelationContactsUsers = param.dataValues; break;
					case 137: this.parRelationEmailAddrBeanRel = param.dataValues; break;
					case 138: this.parRelationOpportunitiesContacts = param.dataValues; break;
					case 141: this.parRelationMeetingsContacts = param.dataValues; break;

					case 142: this.parDescriptionRelateCallsLeads = param.dataValues; break;
					case 143: this.parDescriptionRelateMeetingsLeads = param.dataValues; break;
					case 144: this.parDescriptionRelateCallsContacts = param.dataValues; break;
					case 145: this.parDescriptionRelateCallsUsers = param.dataValues; break;
					case 146: this.parDescriptionRelateAccountsContacts = param.dataValues; break;
					case 147: this.parDescriptionRelateAccountsOpportunities = param.dataValues; break;
					case 148: this.parDescriptionRelateContactsUsers = param.dataValues; break;
					case 149: this.parDescriptionRelateEmailAddrBeanRel = param.dataValues; break;
					case 150: this.parDescriptionRelateOpportunitiesContacts = param.dataValues; break;
					case 151: this.parDescriptionRelateMeetingsContacts = param.dataValues; break;

				}
			}
		}

		return [
			this.parCreate,
			this.parUpdate,
			this.parLeads,
			this.parOpportunities,
			this.parCalls,
			this.parEmails,
			this.parAOS_Quotes,
			this.parContacts,
			this.parAccounts,
			this.parDescriptionLeadsCreated,
			this.parDescriptionOpportunitiesCreated,
			this.parDescriptionCallsCreated,
			this.parDescriptionEmailsCreated,
			this.parDescriptionAoSQuotesCreated,
			this.parDescriptionContactsCreated,
			this.parDescriptionAccountsCreated,
			this.parDescriptionLeadsUpdated,
			this.parDescriptionOpportunitiesUpdated,
			this.parDescriptionCallsUpdated,
			this.parDescriptionEmailsUpdated,
			this.parDescriptionAoSQuotesUpdated,
			this.parDescriptionContactsUpdated,
			this.parDescriptionAccountsUpdated,

			this.parRelationCallsLeads,
			this.parRelationMeetingsLeads,
			this.parRelationCallsContacts,
			this.parRelationCallsUsers,
			this.parRelationAccountsContacts,
			this.parRelationAccountsOpportunities,
			this.parRelationContactsUsers,
			this.parRelationEmailAddrBeanRel,
			this.parRelationOpportunitiesContacts,
			this.parRelationMeetingsContacts,

			this.parDescriptionRelateCallsLeads,
			this.parDescriptionRelateMeetingsLeads,
			this.parDescriptionRelateCallsContacts,
			this.parDescriptionRelateCallsUsers,
			this.parDescriptionRelateAccountsContacts,
			this.parDescriptionRelateAccountsOpportunities,
			this.parDescriptionRelateContactsUsers,
			this.parDescriptionRelateEmailAddrBeanRel,
			this.parDescriptionRelateOpportunitiesContacts,
			this.parDescriptionRelateMeetingsContacts
		]
	}

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

	static async setPilatLog(action,module,relate,sourceId,moduleId,userId) {
		let [
			parCreate,
			parUpdate,
			parLeads,
			parOpportunities,
			parCalls,
			parEmails,
			parAOS_Quotes,
			parContacts,
			parAccounts,
			parDescriptionLeadsCreated,
			parDescriptionOpportunitiesCreated,
			parDescriptionCallsCreated,
			parDescriptionEmailsCreated,
			parDescriptionAoSQuotesCreated,
			parDescriptionContactsCreated,
			parDescriptionAccountsCreated,
			parDescriptionLeadsUpdated,
			parDescriptionOpportunitiesUpdated,
			parDescriptionCallsUpdated,
			parDescriptionEmailsUpdated,
			parDescriptionAoSQuotesUpdated,
			parDescriptionContactsUpdated,
			parDescriptionAccountsUpdated,

			parRelationCallsLeads,
			parRelationMeetingsLeads,
			parRelationCallsContacts,
			parRelationCallsUsers,
			parRelationAccountsContacts,
			parRelationAccountsOpportunities,
			parRelationContactsUsers,
			parRelationEmailAddrBeanRel,
			parRelationOpportunitiesContacts,
			parRelationMeetingsContacts,

			parDescriptionRelateCallsLeads,
			parDescriptionRelateMeetingsLeads,
			parDescriptionRelateCallsContacts,
			parDescriptionRelateCallsUsers,
			parDescriptionRelateAccountsContacts,
			parDescriptionRelateAccountsOpportunities,
			parDescriptionRelateContactsUsers,
			parDescriptionRelateEmailAddrBeanRel,
			parDescriptionRelateOpportunitiesContacts,
			parDescriptionRelateMeetingsContacts

		] = await this.setParams();

		let setDescription;
		let maxPilatLogId = await models.sequelize.pilatLogs.max('id');
		let nextId = maxPilatLogId ? maxPilatLogId+1 : 1;
		let pilatLog, respPilatLog, oldPilatLog, respOldPilatLog;
		let respUser = await models.sequelize.users.findOne({where:{id:userId}});
		let user = respUser && respUser.dataValues ? respUser.dataValues : null;
		let descriptionFrom, descriptionTo, relation;
		let parAction, parModule;

		switch (action) {
			case parCreate.par_cod.toLowerCase():
				parAction = parCreate;
				switch (module.toLowerCase()) {
					case parLeads.par_cod.toLowerCase():
						parModule = parLeads;
						setDescription = parDescriptionLeadsCreated.par_description;
						break;
					case parOpportunities.par_cod.toLowerCase():
						parModule = parOpportunities;
						setDescription = parDescriptionOpportunitiesCreated.par_description;
						break;
					case parAOS_Quotes.par_cod.toLowerCase():
						parModule = parAOS_Quotes;
						setDescription = parDescriptionAoSQuotesCreated.par_description;
						break;
					case parContacts.par_cod.toLowerCase():
						parModule = parContacts;
						setDescription = parDescriptionContactsCreated.par_description;
						break;
					case parAccounts.par_cod.toLowerCase():
						parModule = parAccounts;
						setDescription = parDescriptionAccountsCreated.par_description;
						break;
					case parCalls.par_cod.toLowerCase():
						parModule = parCalls;
						setDescription = parDescriptionCallsCreated.par_description;
						break;
					case parEmails.par_cod.toLowerCase():
						parModule = parEmails;
						setDescription = parDescriptionEmailsCreated.par_description;
						break;
				}
				break;
			case parUpdate.par_cod.toLowerCase():
				parAction = parCreate;
				switch (module.toLowerCase()) {
					case parLeads.par_cod.toLowerCase():
						parModule = parLeads;
						setDescription = parDescriptionLeadsUpdated.par_description;
						break;
					case parOpportunities.par_cod.toLowerCase():
						parModule = parOpportunities;
						setDescription = parDescriptionOpportunitiesUpdated.par_description;
						break;
					case parAOS_Quotes.par_cod.toLowerCase():
						parModule = parAOS_Quotes;
						setDescription = parDescriptionAoSQuotesUpdated.par_description;
						break;
					case parContacts.par_cod.toLowerCase():
						parModule = parContacts;
						setDescription = parDescriptionContactsUpdated.par_description;
						break;
					case parAccounts.par_cod.toLowerCase():
						parModule = parAccounts;
						setDescription = parDescriptionAccountsUpdated.par_description;
						break;
					case parCalls.par_cod.toLowerCase():
						parModule = parCalls;
						setDescription = parDescriptionCallsUpdated.par_description;
						break;
					case parEmails.par_cod.toLowerCase():
						parModule = parEmails;
						setDescription = parDescriptionEmailsUpdated.par_description;
						break;
				}
				break;
		}

		let descriptionRelated = '', description = '';

		if (relate && Object.keys(relate).length) {
			relation = relate.description;
			descriptionFrom = relate.from ? relate.from : 'Sin Especificar';
			descriptionTo = relate.to ? relate.to : 'Sin especificar';
			if (relation) {
				switch (relation) {
					case parRelationCallsLeads.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateCallsLeads.par_description.replaceAll('@descriptionCalls',descriptionFrom).replaceAll('@descriptionLeads',descriptionTo); break;
					case parRelationMeetingsLeads.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateMeetingsLeads.par_description.replaceAll('@descriptionMeetings',descriptionFrom).replaceAll('@descriptionLeads',descriptionTo); break;
					case parRelationCallsContacts.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateCallsContacts.par_description.replaceAll('@descriptionCalls',descriptionFrom).replaceAll('@descriptionContacts',descriptionTo); break;
					case parRelationCallsUsers.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateCallsUsers.par_description.replaceAll('@descriptionCalls',descriptionFrom).replaceAll('@descriptionUsers',descriptionTo); break;
					case parRelationAccountsContacts.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateAccountsContacts.par_description.replaceAll('@descriptionAccounts',descriptionFrom).replaceAll('@descriptionContacts',descriptionTo); break;
					case parRelationAccountsOpportunities.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateAccountsOpportunities.par_description.replaceAll('@descriptionAccounts',descriptionFrom).replaceAll('@descriptionOpportunities',descriptionTo); break;
					case parRelationContactsUsers.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateContactsUsers.par_description.replaceAll('@descriptionContacts',descriptionFrom).replaceAll('@descriptionUsers',descriptionTo); break;
					case parRelationEmailAddrBeanRel.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateEmailAddrBeanRel.par_description.replaceAll('@descriptionEmails',descriptionFrom).replaceAll('@descriptionModule',descriptionTo); break;
					case parRelationOpportunitiesContacts.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateOpportunitiesContacts.par_description.replaceAll('@descriptionOpportunities',descriptionFrom).replaceAll('@descriptionContacts',descriptionTo); break;
					case parRelationMeetingsContacts.par_cod.toLowerCase(): descriptionRelated = parDescriptionRelateMeetingsContacts.par_description.replaceAll('@descriptionMeetings',descriptionFrom).replaceAll('@descriptionContacts',descriptionTo); break;
				}
			} else {
				description = typeof relate == 'string' ? relate : '';
			}
		} else {
			description = typeof relate == 'string' ? relate : '';
		}

		if (descriptionRelated) {
			description = description ? description+', '+descriptionRelated : descriptionRelated;
		} else if (setDescription) {
			description = description ? setDescription+', '+description : setDescription;
		}

		respOldPilatLog = await models.sequelize.pilatLogs.findOne({where:{source_id:sourceId}});
		if (respOldPilatLog && respOldPilatLog.dataValues) {
			oldPilatLog = respOldPilatLog && respOldPilatLog.dataValues ? respOldPilatLog.dataValues : null;
			oldPilatLog.action = parAction.par_description;
			oldPilatLog.module = parModule.par_description;
			oldPilatLog.description = user.user_name+': '+description;
			oldPilatLog.user = user.user_name;
			oldPilatLog.module_id = moduleId;
			oldPilatLog.updatedBy = userId;
			oldPilatLog.updatedAt = new Date();
			respPilatLog = await models.sequelize.pilatLogs.update(oldPilatLog,{where:{source_id:sourceId}});
			pilatLog = respPilatLog && respPilatLog.dataValues ? respPilatLog.dataValues : null;
		} else {
			let newPilatLog = {
				_id:models.sequelize.objectId().toString(),
				id: nextId,
				action:parAction.par_description,
				description: description,
				module:parModule.par_description,
				user:user.user_name,
				source_id:sourceId,
				module_id:moduleId,
				createdBy:userId,
				updatedBy:userId,
				createdAt: new Date(),
				updatedAt: new Date()
			};
			respPilatLog = await models.sequelize.pilatLogs.create(newPilatLog);
			pilatLog = respPilatLog && respPilatLog.dataValues ? respPilatLog.dataValues : null;
		}
		return pilatLog;
	}
}

//<es-section>
module.exports = CrmService;
//</es-section>
