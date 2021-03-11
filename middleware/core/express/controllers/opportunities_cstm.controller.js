/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:22 GMT-0400 (Bolivia Time)
 * Time: 14:57:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:22 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:22
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const opportunityCstmService = require('../services/opportunities_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const opportunitiesCstmCtrl = {};
opportunitiesCstmCtrl.service = opportunityCstmService;


opportunitiesCstmCtrl.getAllOpportunitiesCstm = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.opportunitiesCstm.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objOpportunitiesCstm = await opportunityCstmService.getAllOpportunitiesCstm(req.query);
        if (objOpportunitiesCstm && objOpportunitiesCstm.rows && objOpportunitiesCstm.count) {
            util.setSuccess(200, 'OpportunitiesCstm retrieved', objOpportunitiesCstm.rows, objOpportunitiesCstm.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No opportunityCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.getAOpportunityCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunityCstm = await opportunityCstmService.getAOpportunityCstm(idC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.addOpportunityCstm = async (req, res) => {
    try {
        const objOpportunityCstm = await opportunityCstmService.addOpportunityCstm(req.body);
        util.setSuccess(201, 'OpportunityCstm Added!', objOpportunityCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.updateOpportunityCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstm(idC, req.body);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

opportunitiesCstmCtrl.deleteOpportunityCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objOpportunityCstm = await opportunityCstmService.deleteOpportunityCstm(idC);
        if (objOpportunityCstm) {
            util.setSuccess(200, 'OpportunityCstm deleted', objOpportunityCstm);
        } else {
            util.setError(404, `OpportunityCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



opportunitiesCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByIdC(idC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByUnidadIndustrialC = async (req, res) => {
    try {
        const { unidadIndustrialC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByUnidadIndustrialC(unidadIndustrialC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByManzanoC = async (req, res) => {
    try {
        const { manzanoC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByManzanoC(manzanoC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneBySuperficieC = async (req, res) => {
    try {
        const { superficieC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneBySuperficieC(superficieC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByLblTipoPagoC = async (req, res) => {
    try {
        const { lblTipoPagoC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByLblTipoPagoC(lblTipoPagoC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByUbicacionC = async (req, res) => {
    try {
        const { ubicacionC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByUbicacionC(ubicacionC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByTipoVentaC = async (req, res) => {
    try {
        const { tipoVentaC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByTipoVentaC(tipoVentaC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

opportunitiesCstmCtrl.findOneByMonedaC = async (req, res) => {
    try {
        const { monedaC } = req.params;
        const objOpportunityCstm = await opportunityCstmService.findOneByMonedaC(monedaC, req.query);
        if (!objOpportunityCstm) {
            util.setError(404, `Cannot find opportunityCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found opportunityCstm', objOpportunityCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



opportunitiesCstmCtrl.updateOpportunityCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByIdC(idC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByUnidadIndustrialC = async (req, res) => {
     const { unidadIndustrialC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByUnidadIndustrialC(unidadIndustrialC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByManzanoC = async (req, res) => {
     const { manzanoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByManzanoC(manzanoC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmBySuperficieC = async (req, res) => {
     const { superficieC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmBySuperficieC(superficieC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByLblTipoPagoC = async (req, res) => {
     const { lblTipoPagoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByLblTipoPagoC(lblTipoPagoC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByUbicacionC = async (req, res) => {
     const { ubicacionC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByUbicacionC(ubicacionC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByTipoVentaC = async (req, res) => {
     const { tipoVentaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByTipoVentaC(tipoVentaC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

opportunitiesCstmCtrl.updateOpportunityCstmByMonedaC = async (req, res) => {
     const { monedaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objOpportunityCstm = await opportunityCstmService.updateOpportunityCstmByMonedaC(monedaC, req.body);
            if (!objOpportunityCstm) {
                util.setError(404, `Cannot find opportunityCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'OpportunityCstm updated', objOpportunityCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = opportunitiesCstmCtrl;
//</es-section>
