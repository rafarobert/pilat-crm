/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:29 GMT-0400 (Bolivia Time)
 * Time: 4:43:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:29 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:29
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const leadCstmService = require('../services/leads_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const leadsCstmCtrl = {};
leadsCstmCtrl.service = leadCstmService;


leadsCstmCtrl.getAllLeadsCstm = async (req, res) => {
    try {
        const objLeadsCstm = await leadCstmService.getAllLeadsCstm(req.query);
        if (objLeadsCstm.length > 0) {
            util.setSuccess(200, 'LeadsCstm retrieved', objLeadsCstm);
        } else {
            util.setSuccess(200, 'No leadCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.getALeadCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLeadCstm = await leadCstmService.getALeadCstm(idC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.addLeadCstm = async (req, res) => {
    try {
        const objLeadCstm = await leadCstmService.addLeadCstm(req.body);
        util.setSuccess(201, 'LeadCstm Added!', objLeadCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.updateLeadCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLeadCstm = await leadCstmService.updateLeadCstm(idC, req.body);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

leadsCstmCtrl.deleteLeadCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objLeadCstm = await leadCstmService.deleteLeadCstm(idC);
        if (objLeadCstm) {
            util.setSuccess(200, 'LeadCstm deleted', objLeadCstm);
        } else {
            util.setError(404, `LeadCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



leadsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByIdC(idC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByActividadLlamarC = async (req, res) => {
    try {
        const { actividadLlamarC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByActividadLlamarC(actividadLlamarC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByTieneWhatsappC = async (req, res) => {
    try {
        const { tieneWhatsappC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByTieneWhatsappC(tieneWhatsappC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByCorreoPrincipalC = async (req, res) => {
    try {
        const { correoPrincipalC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByCorreoPrincipalC(correoPrincipalC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByCorreoAlternativoC = async (req, res) => {
    try {
        const { correoAlternativoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByCorreoAlternativoC(correoAlternativoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneBySuperficieC = async (req, res) => {
    try {
        const { superficieC } = req.params;
        const objLeadCstm = await leadCstmService.findOneBySuperficieC(superficieC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByExtensionDocumentoC = async (req, res) => {
    try {
        const { extensionDocumentoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByExtensionDocumentoC(extensionDocumentoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByGeneroC = async (req, res) => {
    try {
        const { generoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByGeneroC(generoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByEtapasC = async (req, res) => {
    try {
        const { etapasC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByEtapasC(etapasC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByNumeroDocumentoC = async (req, res) => {
    try {
        const { numeroDocumentoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByNumeroDocumentoC(numeroDocumentoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneBySecEmailC = async (req, res) => {
    try {
        const { secEmailC } = req.params;
        const objLeadCstm = await leadCstmService.findOneBySecEmailC(secEmailC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByNombreEmpresaC = async (req, res) => {
    try {
        const { nombreEmpresaC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByNombreEmpresaC(nombreEmpresaC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByNombreContactoC = async (req, res) => {
    try {
        const { nombreContactoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByNombreContactoC(nombreContactoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByNitEmpresaC = async (req, res) => {
    try {
        const { nitEmpresaC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByNitEmpresaC(nitEmpresaC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByEmailEmpresaC = async (req, res) => {
    try {
        const { emailEmpresaC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByEmailEmpresaC(emailEmpresaC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByPhoneMobil2C = async (req, res) => {
    try {
        const { phoneMobil2C } = req.params;
        const objLeadCstm = await leadCstmService.findOneByPhoneMobil2C(phoneMobil2C, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByPhoneMobil3C = async (req, res) => {
    try {
        const { phoneMobil3C } = req.params;
        const objLeadCstm = await leadCstmService.findOneByPhoneMobil3C(phoneMobil3C, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByAsesorNegocioC = async (req, res) => {
    try {
        const { asesorNegocioC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByAsesorNegocioC(asesorNegocioC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByTipoLeadC = async (req, res) => {
    try {
        const { tipoLeadC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByTipoLeadC(tipoLeadC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByRubroC = async (req, res) => {
    try {
        const { rubroC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByRubroC(rubroC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByTipoClienteC = async (req, res) => {
    try {
        const { tipoClienteC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByTipoClienteC(tipoClienteC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneBySexoC = async (req, res) => {
    try {
        const { sexoC } = req.params;
        const objLeadCstm = await leadCstmService.findOneBySexoC(sexoC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByActividadC = async (req, res) => {
    try {
        const { actividadC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByActividadC(actividadC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByActividadLlamarFechaC = async (req, res) => {
    try {
        const { actividadLlamarFechaC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByActividadLlamarFechaC(actividadLlamarFechaC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCstmCtrl.findOneByFechaValidexC = async (req, res) => {
    try {
        const { fechaValidexC } = req.params;
        const objLeadCstm = await leadCstmService.findOneByFechaValidexC(fechaValidexC, req.query);
        if (!objLeadCstm) {
            util.setError(404, `Cannot find leadCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadCstm', objLeadCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



leadsCstmCtrl.updateLeadCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByIdC(idC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByActividadLlamarC = async (req, res) => {
     const { actividadLlamarC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByActividadLlamarC(actividadLlamarC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByTieneWhatsappC = async (req, res) => {
     const { tieneWhatsappC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByTieneWhatsappC(tieneWhatsappC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByCorreoPrincipalC = async (req, res) => {
     const { correoPrincipalC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByCorreoPrincipalC(correoPrincipalC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByCorreoAlternativoC = async (req, res) => {
     const { correoAlternativoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByCorreoAlternativoC(correoAlternativoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmBySuperficieC = async (req, res) => {
     const { superficieC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmBySuperficieC(superficieC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByExtensionDocumentoC = async (req, res) => {
     const { extensionDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByExtensionDocumentoC(extensionDocumentoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByGeneroC = async (req, res) => {
     const { generoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByGeneroC(generoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByEtapasC = async (req, res) => {
     const { etapasC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByEtapasC(etapasC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByNumeroDocumentoC = async (req, res) => {
     const { numeroDocumentoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByNumeroDocumentoC(numeroDocumentoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmBySecEmailC = async (req, res) => {
     const { secEmailC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmBySecEmailC(secEmailC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByNombreEmpresaC = async (req, res) => {
     const { nombreEmpresaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByNombreEmpresaC(nombreEmpresaC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByNombreContactoC = async (req, res) => {
     const { nombreContactoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByNombreContactoC(nombreContactoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByNitEmpresaC = async (req, res) => {
     const { nitEmpresaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByNitEmpresaC(nitEmpresaC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByEmailEmpresaC = async (req, res) => {
     const { emailEmpresaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByEmailEmpresaC(emailEmpresaC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByPhoneMobil2C = async (req, res) => {
     const { phoneMobil2C } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByPhoneMobil2C(phoneMobil2C, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByPhoneMobil3C = async (req, res) => {
     const { phoneMobil3C } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByPhoneMobil3C(phoneMobil3C, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByAsesorNegocioC = async (req, res) => {
     const { asesorNegocioC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByAsesorNegocioC(asesorNegocioC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByTipoLeadC = async (req, res) => {
     const { tipoLeadC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByTipoLeadC(tipoLeadC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByRubroC = async (req, res) => {
     const { rubroC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByRubroC(rubroC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByTipoClienteC = async (req, res) => {
     const { tipoClienteC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByTipoClienteC(tipoClienteC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmBySexoC = async (req, res) => {
     const { sexoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmBySexoC(sexoC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByActividadC = async (req, res) => {
     const { actividadC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByActividadC(actividadC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByActividadLlamarFechaC = async (req, res) => {
     const { actividadLlamarFechaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByActividadLlamarFechaC(actividadLlamarFechaC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCstmCtrl.updateLeadCstmByFechaValidexC = async (req, res) => {
     const { fechaValidexC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLeadCstm = await leadCstmService.updateLeadCstmByFechaValidexC(fechaValidexC, req.body);
            if (!objLeadCstm) {
                util.setError(404, `Cannot find leadCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'LeadCstm updated', objLeadCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = leadsCstmCtrl;
//</es-section>
