/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:45 GMT-0400 (Bolivia Time)
 * Time: 18:37:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:45 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const leadsCstmCtrl = require("../controllers/leads_cstm.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/leads-cstm/findOneByIdC/:idC`, (req, res) => leadsCstmCtrl.findOneByIdC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByActividadLlamarC/:actividadLlamarC`, (req, res) => leadsCstmCtrl.findOneByActividadLlamarC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByTieneWhatsappC/:tieneWhatsappC`, (req, res) => leadsCstmCtrl.findOneByTieneWhatsappC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByCorreoPrincipalC/:correoPrincipalC`, (req, res) => leadsCstmCtrl.findOneByCorreoPrincipalC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByCorreoAlternativoC/:correoAlternativoC`, (req, res) => leadsCstmCtrl.findOneByCorreoAlternativoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByJjwgMapsLngC/:jjwgMapsLngC`, (req, res) => leadsCstmCtrl.findOneByJjwgMapsLngC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByJjwgMapsLatC/:jjwgMapsLatC`, (req, res) => leadsCstmCtrl.findOneByJjwgMapsLatC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneBySuperficieC/:superficieC`, (req, res) => leadsCstmCtrl.findOneBySuperficieC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByJjwgMapsGeocodeStatusC/:jjwgMapsGeocodeStatusC`, (req, res) => leadsCstmCtrl.findOneByJjwgMapsGeocodeStatusC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByJjwgMapsAddressC/:jjwgMapsAddressC`, (req, res) => leadsCstmCtrl.findOneByJjwgMapsAddressC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByExtensionDocumentoC/:extensionDocumentoC`, (req, res) => leadsCstmCtrl.findOneByExtensionDocumentoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByGeneroC/:generoC`, (req, res) => leadsCstmCtrl.findOneByGeneroC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByEtapasC/:etapasC`, (req, res) => leadsCstmCtrl.findOneByEtapasC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByNumeroDocumentoC/:numeroDocumentoC`, (req, res) => leadsCstmCtrl.findOneByNumeroDocumentoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneBySecEmailC/:secEmailC`, (req, res) => leadsCstmCtrl.findOneBySecEmailC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByNombreEmpresaC/:nombreEmpresaC`, (req, res) => leadsCstmCtrl.findOneByNombreEmpresaC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByNombreContactoC/:nombreContactoC`, (req, res) => leadsCstmCtrl.findOneByNombreContactoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByNitEmpresaC/:nitEmpresaC`, (req, res) => leadsCstmCtrl.findOneByNitEmpresaC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByEmailEmpresaC/:emailEmpresaC`, (req, res) => leadsCstmCtrl.findOneByEmailEmpresaC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByPhoneMobil2C/:phoneMobil2C`, (req, res) => leadsCstmCtrl.findOneByPhoneMobil2C(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByPhoneMobil3C/:phoneMobil3C`, (req, res) => leadsCstmCtrl.findOneByPhoneMobil3C(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByAsesorNegocioC/:asesorNegocioC`, (req, res) => leadsCstmCtrl.findOneByAsesorNegocioC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByTipoLeadC/:tipoLeadC`, (req, res) => leadsCstmCtrl.findOneByTipoLeadC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByRubroC/:rubroC`, (req, res) => leadsCstmCtrl.findOneByRubroC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByTipoClienteC/:tipoClienteC`, (req, res) => leadsCstmCtrl.findOneByTipoClienteC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneBySexoC/:sexoC`, (req, res) => leadsCstmCtrl.findOneBySexoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByCiudadC/:ciudadC`, (req, res) => leadsCstmCtrl.findOneByCiudadC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByDepartamentoC/:departamentoC`, (req, res) => leadsCstmCtrl.findOneByDepartamentoC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByPaisC/:paisC`, (req, res) => leadsCstmCtrl.findOneByPaisC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByDireccionC/:direccionC`, (req, res) => leadsCstmCtrl.findOneByDireccionC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByActividadC/:actividadC`, (req, res) => leadsCstmCtrl.findOneByActividadC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByActividadLlamarFechaC/:actividadLlamarFechaC`, (req, res) => leadsCstmCtrl.findOneByActividadLlamarFechaC(req, res));

router.get(`/api-${sys}/leads-cstm/findOneByFechaValidexC/:fechaValidexC`, (req, res) => leadsCstmCtrl.findOneByFechaValidexC(req, res));



router.post(`/api-${sys}/leads-cstm/updateLeadCstmByIdC`, (req, res) => leadsCstmCtrl.updateLeadCstmByIdC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByActividadLlamarC`, (req, res) => leadsCstmCtrl.updateLeadCstmByActividadLlamarC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByTieneWhatsappC`, (req, res) => leadsCstmCtrl.updateLeadCstmByTieneWhatsappC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByCorreoPrincipalC`, (req, res) => leadsCstmCtrl.updateLeadCstmByCorreoPrincipalC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByCorreoAlternativoC`, (req, res) => leadsCstmCtrl.updateLeadCstmByCorreoAlternativoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByJjwgMapsLngC`, (req, res) => leadsCstmCtrl.updateLeadCstmByJjwgMapsLngC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByJjwgMapsLatC`, (req, res) => leadsCstmCtrl.updateLeadCstmByJjwgMapsLatC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmBySuperficieC`, (req, res) => leadsCstmCtrl.updateLeadCstmBySuperficieC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByJjwgMapsGeocodeStatusC`, (req, res) => leadsCstmCtrl.updateLeadCstmByJjwgMapsGeocodeStatusC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByJjwgMapsAddressC`, (req, res) => leadsCstmCtrl.updateLeadCstmByJjwgMapsAddressC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByExtensionDocumentoC`, (req, res) => leadsCstmCtrl.updateLeadCstmByExtensionDocumentoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByGeneroC`, (req, res) => leadsCstmCtrl.updateLeadCstmByGeneroC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByEtapasC`, (req, res) => leadsCstmCtrl.updateLeadCstmByEtapasC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByNumeroDocumentoC`, (req, res) => leadsCstmCtrl.updateLeadCstmByNumeroDocumentoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmBySecEmailC`, (req, res) => leadsCstmCtrl.updateLeadCstmBySecEmailC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByNombreEmpresaC`, (req, res) => leadsCstmCtrl.updateLeadCstmByNombreEmpresaC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByNombreContactoC`, (req, res) => leadsCstmCtrl.updateLeadCstmByNombreContactoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByNitEmpresaC`, (req, res) => leadsCstmCtrl.updateLeadCstmByNitEmpresaC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByEmailEmpresaC`, (req, res) => leadsCstmCtrl.updateLeadCstmByEmailEmpresaC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByPhoneMobil2C`, (req, res) => leadsCstmCtrl.updateLeadCstmByPhoneMobil2C(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByPhoneMobil3C`, (req, res) => leadsCstmCtrl.updateLeadCstmByPhoneMobil3C(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByAsesorNegocioC`, (req, res) => leadsCstmCtrl.updateLeadCstmByAsesorNegocioC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByTipoLeadC`, (req, res) => leadsCstmCtrl.updateLeadCstmByTipoLeadC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByRubroC`, (req, res) => leadsCstmCtrl.updateLeadCstmByRubroC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByTipoClienteC`, (req, res) => leadsCstmCtrl.updateLeadCstmByTipoClienteC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmBySexoC`, (req, res) => leadsCstmCtrl.updateLeadCstmBySexoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByCiudadC`, (req, res) => leadsCstmCtrl.updateLeadCstmByCiudadC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByDepartamentoC`, (req, res) => leadsCstmCtrl.updateLeadCstmByDepartamentoC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByPaisC`, (req, res) => leadsCstmCtrl.updateLeadCstmByPaisC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByDireccionC`, (req, res) => leadsCstmCtrl.updateLeadCstmByDireccionC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByActividadC`, (req, res) => leadsCstmCtrl.updateLeadCstmByActividadC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByActividadLlamarFechaC`, (req, res) => leadsCstmCtrl.updateLeadCstmByActividadLlamarFechaC(req, res));

router.post(`/api-${sys}/leads-cstm/updateLeadCstmByFechaValidexC`, (req, res) => leadsCstmCtrl.updateLeadCstmByFechaValidexC(req, res));





router.get(`/api-${sys}/leads-cstm/`, (req, res) => leadsCstmCtrl.getAllLeadsCstm(req, res));
router.post(`/api-${sys}/leads-cstm/`, (req, res) => leadsCstmCtrl.addLeadCstm(req, res));
router.get(`/api-${sys}/leads-cstm/:idC`, (req, res) => leadsCstmCtrl.getALeadCstm(req, res));
router.put(`/api-${sys}/leads-cstm/:idC`, (req, res) => leadsCstmCtrl.updateLeadCstm(req, res));
router.delete(`/api-${sys}/leads-cstm/:idC`, (req, res) => leadsCstmCtrl.deleteLeadCstm(req, res));

//</es-section>
module.exports = router;
