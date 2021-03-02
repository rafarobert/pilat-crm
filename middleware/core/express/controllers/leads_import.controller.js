/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:07 GMT-0400 (Bolivia Time)
 * Time: 14:1:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:07 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const leadImportService = require('../services/leads_import.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const leadsImportCtrl = {};
leadsImportCtrl.service = leadImportService;




leadsImportCtrl.findOneByProspeccion = async (req, res) => {
    try {
        const { prospeccion } = req.params;
        const objLeadImport = await leadImportService.findOneByProspeccion(prospeccion, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByOficial = async (req, res) => {
    try {
        const { oficial } = req.params;
        const objLeadImport = await leadImportService.findOneByOficial(oficial, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByMes = async (req, res) => {
    try {
        const { mes } = req.params;
        const objLeadImport = await leadImportService.findOneByMes(mes, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByCliente = async (req, res) => {
    try {
        const { cliente } = req.params;
        const objLeadImport = await leadImportService.findOneByCliente(cliente, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByLugarorubrodetrabajo = async (req, res) => {
    try {
        const { lugarorubrodetrabajo } = req.params;
        const objLeadImport = await leadImportService.findOneByLugarorubrodetrabajo(lugarorubrodetrabajo, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByTeléfono = async (req, res) => {
    try {
        const { teléfono } = req.params;
        const objLeadImport = await leadImportService.findOneByTeléfono(teléfono, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsImportCtrl.findOneByFecha = async (req, res) => {
    try {
        const { fecha } = req.params;
        const objLeadImport = await leadImportService.findOneByFecha(fecha, req.query);
        if (!objLeadImport) {
            util.setError(404, `Cannot find leadImport with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found leadImport', objLeadImport);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}









//</es-section>

//<es-section>
module.exports = leadsImportCtrl;
//</es-section>
