/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:13 GMT-0400 (Bolivia Time)
 * Time: 14:57:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:13 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:13
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

class LeadCstmService {

    //<es-section>

    //</es-section>

	//<es-section>
	
	static async getAllLeadsCstm(query) {
		try {
		    let offset = query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null;
			if(sql) {
			    let offset = Object.keys(query).length ? query.offset ? query.offset : query.start ? query.start : query.limit ? 0 : null : null;
            	let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;

				return await models.sequelize.leadsCstm.findAndCountAll({
				    attributes:query.select ? query.select.split(',') : null,
				    where: where && !where.where ? where : null,
                    limit: query.limit ? parseInt(query.limit) : null,
                    offset: offset ? parseInt(offset) : 0,
                    order: query.order ? Array.isArray(query.order) ? query.order : JSON.parse(query.order) : [['id','ASC']],
                });
			} else {
				return await models.mongoose.leadsCstm.find().select(query.select).limit(parseInt(query.limit)).skip(parseInt(offset));
			}
		} catch (error) {
			throw error;
		}
	}

	static async getSelectAllLeadsCstm(select = []) {
		try {
			if(sql) {
				return await models.sequelize.leadsCstm.findAll({
				    attributes: select ? select : null
				});
			} else {
				return await models.mongoose.leadsCstm.find().select(select.join(' '));
			}
		} catch (error) {
			throw error;
		}
	}

	static async addLeadCstm(newLeadCstm) {
		try {
			let objLeadCstm;
			if(util.PrimaryKeyTypeIsString(models.sequelize.leadsCstm.primaryKeys.id_c.type.toString())) {
			    newLeadCstm.id_c = models.sequelize.objectId().toString();
		    }
			
			
			
			if(sql) {
				objLeadCstm = await models.sequelize.leadsCstm.create(newLeadCstm);
			} else {
				objLeadCstm = new models.mongoose.leadsCstm(newLeadCstm);
				await objLeadCstm.save();
			}
			return objLeadCstm;
		} catch (error) {
			throw error;
		}
	}

	static async updateLeadCstm(id_c, updateLeadCstm) {
		try {
			let objLeadCstm;
			if(sql) {
				objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: util.Char(id_c) }});
				if (objLeadCstm) {
					await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { id_c: util.Char(id_c) } });
					objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: util.Char(id_c) }});
				}
			} else {
				delete updateLeadCstm._id;
				objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({id_c:id_c}, {$set: updateLeadCstm}, {new: true});
			}
			return objLeadCstm;
		} catch (error) {
			throw error;
		}
	}

	static async getALeadCstm(id_c, query) {
		try {
			let objLeadCstm;
			if(sql) {
			        let where = Object.keys(query).length ? query.where ? JSON.parse(query.where) : null : null;
					objLeadCstm = await models.sequelize.leadsCstm.findOne({
					    where: where && !where.where ? where : { id_c: util.Char(id_c) },
					    attributes:query.select ? query.select.split(',') : null,
                    });
			} else {
					objLeadCstm = await models.mongoose.leadsCstm.find({id_c:util.Char(id_c)}).select(query.select);
			}
			return objLeadCstm;
		} catch (error) {
			throw error;
		}
	}

	static async deleteLeadCstm(id_c) {
		try {
			let objLeadCstm;
			if(sql) {
				objLeadCstm = await models.sequelize.leadsCstm.findOne({ where: { id_c: util.Char(id_c) } });
				if (objLeadCstm) {
					await models.sequelize.leadsCstm.destroy({where: { id_c: util.Char(id_c) }});
				}
			} else {
				objLeadCstm = await models.mongoose.leadsCstm.deleteOne({id_c:util.Char(id_c)});
			}
			return objLeadCstm;
		} catch (error) {
			throw error;
		}
	}
	
	
	static async findOneByIdC(idC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { id_c: idC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({id_c: idC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActividadLlamarC(actividadLlamarC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actividad_llamar_c: actividadLlamarC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({actividad_llamar_c: actividadLlamarC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTieneWhatsappC(tieneWhatsappC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tiene_whatsapp_c: tieneWhatsappC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({tiene_whatsapp_c: tieneWhatsappC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCorreoPrincipalC(correoPrincipalC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { correo_principal_c: correoPrincipalC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({correo_principal_c: correoPrincipalC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCorreoAlternativoC(correoAlternativoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { correo_alternativo_c: correoAlternativoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({correo_alternativo_c: correoAlternativoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByComercialDiasCierre(comercialDiasCierre, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { comercial_dias_cierre: comercialDiasCierre },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({comercial_dias_cierre: comercialDiasCierre});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLngC(jjwgMapsLngC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lng_c: jjwgMapsLngC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({jjwg_maps_lng_c: jjwgMapsLngC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsLatC(jjwgMapsLatC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_lat_c: jjwgMapsLatC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({jjwg_maps_lat_c: jjwgMapsLatC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySuperficieC(superficieC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { superficie_c: superficieC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({superficie_c: superficieC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByJjwgMapsAddressC(jjwgMapsAddressC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { jjwg_maps_address_c: jjwgMapsAddressC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({jjwg_maps_address_c: jjwgMapsAddressC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByExtensionDocumentoC(extensionDocumentoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { extension_documento_c: extensionDocumentoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({extension_documento_c: extensionDocumentoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByGeneroC(generoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { genero_c: generoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({genero_c: generoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEtapasC(etapasC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { etapas_c: etapasC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({etapas_c: etapasC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNumeroDocumentoC(numeroDocumentoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { numero_documento_c: numeroDocumentoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({numero_documento_c: numeroDocumentoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySecEmailC(secEmailC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sec_email_c: secEmailC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({sec_email_c: secEmailC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNombreEmpresaC(nombreEmpresaC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nombre_empresa_c: nombreEmpresaC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({nombre_empresa_c: nombreEmpresaC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNombreContactoC(nombreContactoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nombre_contacto_c: nombreContactoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({nombre_contacto_c: nombreContactoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNitEmpresaC(nitEmpresaC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nit_empresa_c: nitEmpresaC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({nit_empresa_c: nitEmpresaC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByEmailEmpresaC(emailEmpresaC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { email_empresa_c: emailEmpresaC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({email_empresa_c: emailEmpresaC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobil2C(phoneMobil2C, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobil_2_c: phoneMobil2C },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({phone_mobil_2_c: phoneMobil2C});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPhoneMobil3C(phoneMobil3C, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { phone_mobil_3_c: phoneMobil3C },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({phone_mobil_3_c: phoneMobil3C});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByAsesorNegocioC(asesorNegocioC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { asesor_negocio_c: asesorNegocioC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({asesor_negocio_c: asesorNegocioC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTipoLeadC(tipoLeadC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tipo_lead_c: tipoLeadC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({tipo_lead_c: tipoLeadC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByRubroC(rubroC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { rubro_c: rubroC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({rubro_c: rubroC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByTipoClienteC(tipoClienteC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { tipo_cliente_c: tipoClienteC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({tipo_cliente_c: tipoClienteC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneBySexoC(sexoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { sexo_c: sexoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({sexo_c: sexoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByCiudadC(ciudadC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { ciudad_c: ciudadC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({ciudad_c: ciudadC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDepartamentoC(departamentoC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { departamento_c: departamentoC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({departamento_c: departamentoC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByPaisC(paisC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { pais_c: paisC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({pais_c: paisC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDireccionC(direccionC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { direccion_c: direccionC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({direccion_c: direccionC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByNuevoRubroC(nuevoRubroC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { nuevo_rubro_c: nuevoRubroC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({nuevo_rubro_c: nuevoRubroC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByDireccionEmpresaC(direccionEmpresaC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { direccion_empresa_c: direccionEmpresaC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({direccion_empresa_c: direccionEmpresaC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActividadC(actividadC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actividad_c: actividadC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({actividad_c: actividadC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByActividadLlamarFechaC(actividadLlamarFechaC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { actividad_llamar_fecha_c: actividadLlamarFechaC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({actividad_llamar_fecha_c: actividadLlamarFechaC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async findOneByFechaValidexC(fechaValidexC, query = {}) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({
    				attributes:query.select ? query.select.split(',') : null,
    			    where: { fecha_validex_c: fechaValidexC },
    			});
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOne({fecha_validex_c: fechaValidexC});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	static async updateLeadCstmByIdC(idC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { id_c: idC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { id_c: idC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({id_c: idC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByActividadLlamarC(actividadLlamarC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { actividad_llamar_c: actividadLlamarC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { actividad_llamar_c: actividadLlamarC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({actividad_llamar_c: actividadLlamarC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByTieneWhatsappC(tieneWhatsappC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { tiene_whatsapp_c: tieneWhatsappC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { tiene_whatsapp_c: tieneWhatsappC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({tiene_whatsapp_c: tieneWhatsappC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByCorreoPrincipalC(correoPrincipalC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { correo_principal_c: correoPrincipalC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { correo_principal_c: correoPrincipalC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({correo_principal_c: correoPrincipalC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByCorreoAlternativoC(correoAlternativoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { correo_alternativo_c: correoAlternativoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { correo_alternativo_c: correoAlternativoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({correo_alternativo_c: correoAlternativoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByComercialDiasCierre(comercialDiasCierre, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { comercial_dias_cierre: comercialDiasCierre }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { comercial_dias_cierre: comercialDiasCierre } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({comercial_dias_cierre: comercialDiasCierre}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByJjwgMapsLngC(jjwgMapsLngC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { jjwg_maps_lng_c: jjwgMapsLngC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { jjwg_maps_lng_c: jjwgMapsLngC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({jjwg_maps_lng_c: jjwgMapsLngC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByJjwgMapsLatC(jjwgMapsLatC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { jjwg_maps_lat_c: jjwgMapsLatC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { jjwg_maps_lat_c: jjwgMapsLatC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({jjwg_maps_lat_c: jjwgMapsLatC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmBySuperficieC(superficieC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { superficie_c: superficieC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { superficie_c: superficieC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({superficie_c: superficieC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({jjwg_maps_geocode_status_c: jjwgMapsGeocodeStatusC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByJjwgMapsAddressC(jjwgMapsAddressC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { jjwg_maps_address_c: jjwgMapsAddressC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { jjwg_maps_address_c: jjwgMapsAddressC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({jjwg_maps_address_c: jjwgMapsAddressC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByExtensionDocumentoC(extensionDocumentoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { extension_documento_c: extensionDocumentoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { extension_documento_c: extensionDocumentoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({extension_documento_c: extensionDocumentoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByGeneroC(generoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { genero_c: generoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { genero_c: generoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({genero_c: generoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByEtapasC(etapasC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { etapas_c: etapasC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { etapas_c: etapasC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({etapas_c: etapasC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByNumeroDocumentoC(numeroDocumentoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { numero_documento_c: numeroDocumentoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { numero_documento_c: numeroDocumentoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({numero_documento_c: numeroDocumentoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmBySecEmailC(secEmailC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { sec_email_c: secEmailC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { sec_email_c: secEmailC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({sec_email_c: secEmailC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByNombreEmpresaC(nombreEmpresaC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { nombre_empresa_c: nombreEmpresaC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { nombre_empresa_c: nombreEmpresaC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({nombre_empresa_c: nombreEmpresaC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByNombreContactoC(nombreContactoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { nombre_contacto_c: nombreContactoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { nombre_contacto_c: nombreContactoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({nombre_contacto_c: nombreContactoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByNitEmpresaC(nitEmpresaC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { nit_empresa_c: nitEmpresaC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { nit_empresa_c: nitEmpresaC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({nit_empresa_c: nitEmpresaC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByEmailEmpresaC(emailEmpresaC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { email_empresa_c: emailEmpresaC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { email_empresa_c: emailEmpresaC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({email_empresa_c: emailEmpresaC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByPhoneMobil2C(phoneMobil2C, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { phone_mobil_2_c: phoneMobil2C }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { phone_mobil_2_c: phoneMobil2C } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({phone_mobil_2_c: phoneMobil2C}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByPhoneMobil3C(phoneMobil3C, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { phone_mobil_3_c: phoneMobil3C }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { phone_mobil_3_c: phoneMobil3C } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({phone_mobil_3_c: phoneMobil3C}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByAsesorNegocioC(asesorNegocioC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { asesor_negocio_c: asesorNegocioC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { asesor_negocio_c: asesorNegocioC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({asesor_negocio_c: asesorNegocioC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByTipoLeadC(tipoLeadC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { tipo_lead_c: tipoLeadC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { tipo_lead_c: tipoLeadC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({tipo_lead_c: tipoLeadC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByRubroC(rubroC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { rubro_c: rubroC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { rubro_c: rubroC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({rubro_c: rubroC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByTipoClienteC(tipoClienteC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { tipo_cliente_c: tipoClienteC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { tipo_cliente_c: tipoClienteC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({tipo_cliente_c: tipoClienteC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmBySexoC(sexoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { sexo_c: sexoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { sexo_c: sexoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({sexo_c: sexoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByCiudadC(ciudadC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { ciudad_c: ciudadC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { ciudad_c: ciudadC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({ciudad_c: ciudadC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByDepartamentoC(departamentoC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { departamento_c: departamentoC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { departamento_c: departamentoC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({departamento_c: departamentoC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByPaisC(paisC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { pais_c: paisC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { pais_c: paisC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({pais_c: paisC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByDireccionC(direccionC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { direccion_c: direccionC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { direccion_c: direccionC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({direccion_c: direccionC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByNuevoRubroC(nuevoRubroC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { nuevo_rubro_c: nuevoRubroC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { nuevo_rubro_c: nuevoRubroC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({nuevo_rubro_c: nuevoRubroC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByDireccionEmpresaC(direccionEmpresaC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { direccion_empresa_c: direccionEmpresaC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { direccion_empresa_c: direccionEmpresaC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({direccion_empresa_c: direccionEmpresaC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByActividadC(actividadC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { actividad_c: actividadC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { actividad_c: actividadC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({actividad_c: actividadC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByActividadLlamarFechaC(actividadLlamarFechaC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { actividad_llamar_fecha_c: actividadLlamarFechaC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { actividad_llamar_fecha_c: actividadLlamarFechaC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({actividad_llamar_fecha_c: actividadLlamarFechaC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	static async updateLeadCstmByFechaValidexC(fechaValidexC, updateLeadCstm) {
    	try {
    		let objLeadCstm;
    		if(sql) {
    			objLeadCstm = await models.sequelize.leadsCstm.findOne({where: { fecha_validex_c: fechaValidexC }});
    			if (objLeadCstm) {
    				objLeadCstm = await models.sequelize.leadsCstm.update(updateLeadCstm, { where: { fecha_validex_c: fechaValidexC } });
    			}
    		} else {
    			objLeadCstm = await models.mongoose.leadsCstm.findOneAndUpdate({fecha_validex_c: fechaValidexC}, {$set: updateLeadCstm}, {new: true});
    		}
    		return objLeadCstm;
    	} catch (error) {
    		throw error;
    	}
    }
	
	
	
	
	//</es-section>
}

//<es-section>
module.exports = LeadCstmService;
//</es-section>
