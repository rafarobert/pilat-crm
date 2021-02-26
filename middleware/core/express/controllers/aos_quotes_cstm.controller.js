/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:24 GMT-0400 (Bolivia Time)
 * Time: 0:22:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:24 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:24
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aoQuoteCstmService = require('../services/aos_quotes_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aosQuotesCstmCtrl = {};
aosQuotesCstmCtrl.service = aoQuoteCstmService;


aosQuotesCstmCtrl.getAllAosQuotesCstm = async (req, res) => {
    try {
        const objAosQuotesCstm = await aoQuoteCstmService.getAllAosQuotesCstm(req.query);
        if (objAosQuotesCstm.length > 0) {
            util.setSuccess(200, 'AosQuotesCstm retrieved', objAosQuotesCstm);
        } else {
            util.setSuccess(200, 'No aoQuoteCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.getAAoQuoteCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuoteCstm = await aoQuoteCstmService.getAAoQuoteCstm(idC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.addAoQuoteCstm = async (req, res) => {
    try {
        const objAoQuoteCstm = await aoQuoteCstmService.addAoQuoteCstm(req.body);
        util.setSuccess(201, 'AoQuoteCstm Added!', objAoQuoteCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.updateAoQuoteCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstm(idC, req.body);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aosQuotesCstmCtrl.deleteAoQuoteCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAoQuoteCstm = await aoQuoteCstmService.deleteAoQuoteCstm(idC);
        if (objAoQuoteCstm) {
            util.setSuccess(200, 'AoQuoteCstm deleted', objAoQuoteCstm);
        } else {
            util.setError(404, `AoQuoteCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aosQuotesCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByIdC(idC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByUnidadIndustrialC = async (req, res) => {
    try {
        const { unidadIndustrialC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByUnidadIndustrialC(unidadIndustrialC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByManzanoC = async (req, res) => {
    try {
        const { manzanoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByManzanoC(manzanoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByMetroCuadradoC = async (req, res) => {
    try {
        const { metroCuadradoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByMetroCuadradoC(metroCuadradoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByFrenteMetrosC = async (req, res) => {
    try {
        const { frenteMetrosC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByFrenteMetrosC(frenteMetrosC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByFondoMetrosC = async (req, res) => {
    try {
        const { fondoMetrosC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByFondoMetrosC(fondoMetrosC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByLblSuperficieC = async (req, res) => {
    try {
        const { lblSuperficieC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByLblSuperficieC(lblSuperficieC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByLblCuotainicialC = async (req, res) => {
    try {
        const { lblCuotainicialC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByLblCuotainicialC(lblCuotainicialC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneBySaldoCuotaInicalC = async (req, res) => {
    try {
        const { saldoCuotaInicalC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneBySaldoCuotaInicalC(saldoCuotaInicalC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByPrecioMcuadradoC = async (req, res) => {
    try {
        const { precioMcuadradoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByPrecioMcuadradoC(precioMcuadradoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneBySaldoC = async (req, res) => {
    try {
        const { saldoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneBySaldoC(saldoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByCuotaMensualC = async (req, res) => {
    try {
        const { cuotaMensualC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByCuotaMensualC(cuotaMensualC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByUbicacionC = async (req, res) => {
    try {
        const { ubicacionC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByUbicacionC(ubicacionC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByLblTipoventaC = async (req, res) => {
    try {
        const { lblTipoventaC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByLblTipoventaC(lblTipoventaC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByTermYearsC = async (req, res) => {
    try {
        const { termYearsC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByTermYearsC(termYearsC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByTipoPagoC = async (req, res) => {
    try {
        const { tipoPagoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByTipoPagoC(tipoPagoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByLinkTerrenoC = async (req, res) => {
    try {
        const { linkTerrenoC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByLinkTerrenoC(linkTerrenoC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByMonedaC = async (req, res) => {
    try {
        const { monedaC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByMonedaC(monedaC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aosQuotesCstmCtrl.findOneByFechaEnvioProgramadaC = async (req, res) => {
    try {
        const { fechaEnvioProgramadaC } = req.params;
        const objAoQuoteCstm = await aoQuoteCstmService.findOneByFechaEnvioProgramadaC(fechaEnvioProgramadaC, req.query);
        if (!objAoQuoteCstm) {
            util.setError(404, `Cannot find aoQuoteCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aoQuoteCstm', objAoQuoteCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aosQuotesCstmCtrl.updateAoQuoteCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByIdC(idC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByUnidadIndustrialC = async (req, res) => {
     const { unidadIndustrialC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByUnidadIndustrialC(unidadIndustrialC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByManzanoC = async (req, res) => {
     const { manzanoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByManzanoC(manzanoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByMetroCuadradoC = async (req, res) => {
     const { metroCuadradoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByMetroCuadradoC(metroCuadradoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByFrenteMetrosC = async (req, res) => {
     const { frenteMetrosC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByFrenteMetrosC(frenteMetrosC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByFondoMetrosC = async (req, res) => {
     const { fondoMetrosC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByFondoMetrosC(fondoMetrosC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByLblSuperficieC = async (req, res) => {
     const { lblSuperficieC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByLblSuperficieC(lblSuperficieC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByLblCuotainicialC = async (req, res) => {
     const { lblCuotainicialC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByLblCuotainicialC(lblCuotainicialC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmBySaldoCuotaInicalC = async (req, res) => {
     const { saldoCuotaInicalC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmBySaldoCuotaInicalC(saldoCuotaInicalC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByPrecioMcuadradoC = async (req, res) => {
     const { precioMcuadradoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByPrecioMcuadradoC(precioMcuadradoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmBySaldoC = async (req, res) => {
     const { saldoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmBySaldoC(saldoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByCuotaMensualC = async (req, res) => {
     const { cuotaMensualC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByCuotaMensualC(cuotaMensualC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByUbicacionC = async (req, res) => {
     const { ubicacionC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByUbicacionC(ubicacionC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByLblTipoventaC = async (req, res) => {
     const { lblTipoventaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByLblTipoventaC(lblTipoventaC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByTermYearsC = async (req, res) => {
     const { termYearsC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByTermYearsC(termYearsC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByTipoPagoC = async (req, res) => {
     const { tipoPagoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByTipoPagoC(tipoPagoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByLinkTerrenoC = async (req, res) => {
     const { linkTerrenoC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByLinkTerrenoC(linkTerrenoC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByMonedaC = async (req, res) => {
     const { monedaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByMonedaC(monedaC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aosQuotesCstmCtrl.updateAoQuoteCstmByFechaEnvioProgramadaC = async (req, res) => {
     const { fechaEnvioProgramadaC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAoQuoteCstm = await aoQuoteCstmService.updateAoQuoteCstmByFechaEnvioProgramadaC(fechaEnvioProgramadaC, req.body);
            if (!objAoQuoteCstm) {
                util.setError(404, `Cannot find aoQuoteCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'AoQuoteCstm updated', objAoQuoteCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aosQuotesCstmCtrl;
//</es-section>
