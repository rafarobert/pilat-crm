/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:43 GMT-0400 (Bolivia Time)
 * Time: 0:23:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:43 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:43
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const saiClienteService = require('../services/sai_clientes.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const saiClientesCtrl = {};
saiClientesCtrl.service = saiClienteService;


saiClientesCtrl.getAllSaiClientes = async (req, res) => {
    try {
        const objSaiClientes = await saiClienteService.getAllSaiClientes(req.query);
        if (objSaiClientes.length > 0) {
            util.setSuccess(200, 'SaiClientes retrieved', objSaiClientes);
        } else {
            util.setSuccess(200, 'No saiCliente found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.getASaiCliente = async (req, res) => {
    try {
        const { gbagecage } = req.params;
        if (!util.isBigint(gbagecage)) {
            util.setError(400, 'Please input a valid Bigint value');
            return util.send(res);
        }
        const objSaiCliente = await saiClienteService.getASaiCliente(gbagecage, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the id ${gbagecage}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.addSaiCliente = async (req, res) => {
    try {
        const objSaiCliente = await saiClienteService.addSaiCliente(req.body);
        util.setSuccess(201, 'SaiCliente Added!', objSaiCliente);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.updateSaiCliente = async (req, res) => {
    try {
        const { gbagecage } = req.params;
        if (!util.isBigint(gbagecage)) {
            util.setError(400, 'Please input a valid Bigint value');
            return util.send(res);
        }
        const objSaiCliente = await saiClienteService.updateSaiCliente(gbagecage, req.body);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
        } else {
            util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

saiClientesCtrl.deleteSaiCliente = async (req, res) => {
    try {
        const { gbagecage } = req.params;
        if (!util.isBigint(gbagecage)) {
            util.setError(400, 'Please provide a Bigint value');
            return util.send(res);
        }
        const objSaiCliente = await saiClienteService.deleteSaiCliente(gbagecage);
        if (objSaiCliente) {
            util.setSuccess(200, 'SaiCliente deleted', objSaiCliente);
        } else {
            util.setError(404, `SaiCliente with the id ${gbagecage} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



saiClientesCtrl.findOneByGbagecage = async (req, res) => {
    try {
        const { gbagecage } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagecage(gbagecage, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByIlsupcage = async (req, res) => {
    try {
        const { ilsupcage } = req.params;
        const objSaiCliente = await saiClienteService.findOneByIlsupcage(ilsupcage, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagetper = async (req, res) => {
    try {
        const { gbagetper } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagetper(gbagetper, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagesexo = async (req, res) => {
    try {
        const { gbagesexo } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagesexo(gbagesexo, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagenruc = async (req, res) => {
    try {
        const { gbagenruc } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagenruc(gbagenruc, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagendid = async (req, res) => {
    try {
        const { gbagendid } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagendid(gbagendid, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagecorg = async (req, res) => {
    try {
        const { gbagecorg } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagecorg(gbagecorg, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbageappa = async (req, res) => {
    try {
        const { gbageappa } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbageappa(gbageappa, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbageapma = async (req, res) => {
    try {
        const { gbageapma } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbageapma(gbageapma, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByPrefijo = async (req, res) => {
    try {
        const { prefijo } = req.params;
        const objSaiCliente = await saiClienteService.findOneByPrefijo(prefijo, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbageapca = async (req, res) => {
    try {
        const { gbageapca } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbageapca(gbageapca, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagenoms = async (req, res) => {
    try {
        const { gbagenoms } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagenoms(gbagenoms, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagenomb = async (req, res) => {
    try {
        const { gbagenomb } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagenomb(gbagenomb, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl1 = async (req, res) => {
    try {
        const { gbtlfntl1 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl1(gbtlfntl1, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl2 = async (req, res) => {
    try {
        const { gbtlfntl2 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl2(gbtlfntl2, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl3 = async (req, res) => {
    try {
        const { gbtlfntl3 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl3(gbtlfntl3, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl4 = async (req, res) => {
    try {
        const { gbtlfntl4 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl4(gbtlfntl4, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl5 = async (req, res) => {
    try {
        const { gbtlfntl5 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl5(gbtlfntl5, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbtlfntl6 = async (req, res) => {
    try {
        const { gbtlfntl6 } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbtlfntl6(gbtlfntl6, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbpaidesc = async (req, res) => {
    try {
        const { gbpaidesc } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbpaidesc(gbpaidesc, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbdptdesc = async (req, res) => {
    try {
        const { gbdptdesc } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbdptdesc(gbdptdesc, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbciudesc = async (req, res) => {
    try {
        const { gbciudesc } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbciudesc(gbciudesc, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbdirdire = async (req, res) => {
    try {
        const { gbdirdire } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbdirdire(gbdirdire, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbemamail = async (req, res) => {
    try {
        const { gbemamail } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbemamail(gbemamail, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagefnac = async (req, res) => {
    try {
        const { gbagefnac } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagefnac(gbagefnac, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

saiClientesCtrl.findOneByGbagefreg = async (req, res) => {
    try {
        const { gbagefreg } = req.params;
        const objSaiCliente = await saiClienteService.findOneByGbagefreg(gbagefreg, req.query);
        if (!objSaiCliente) {
            util.setError(404, `Cannot find saiCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found saiCliente', objSaiCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



saiClientesCtrl.updateSaiClienteByGbagecage = async (req, res) => {
     const { gbagecage } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagecage(gbagecage, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByIlsupcage = async (req, res) => {
     const { ilsupcage } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByIlsupcage(ilsupcage, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagetper = async (req, res) => {
     const { gbagetper } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagetper(gbagetper, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagesexo = async (req, res) => {
     const { gbagesexo } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagesexo(gbagesexo, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagenruc = async (req, res) => {
     const { gbagenruc } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagenruc(gbagenruc, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagendid = async (req, res) => {
     const { gbagendid } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagendid(gbagendid, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagecorg = async (req, res) => {
     const { gbagecorg } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagecorg(gbagecorg, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbageappa = async (req, res) => {
     const { gbageappa } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbageappa(gbageappa, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbageapma = async (req, res) => {
     const { gbageapma } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbageapma(gbageapma, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByPrefijo = async (req, res) => {
     const { prefijo } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByPrefijo(prefijo, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbageapca = async (req, res) => {
     const { gbageapca } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbageapca(gbageapca, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagenoms = async (req, res) => {
     const { gbagenoms } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagenoms(gbagenoms, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagenomb = async (req, res) => {
     const { gbagenomb } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagenomb(gbagenomb, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl1 = async (req, res) => {
     const { gbtlfntl1 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl1(gbtlfntl1, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl2 = async (req, res) => {
     const { gbtlfntl2 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl2(gbtlfntl2, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl3 = async (req, res) => {
     const { gbtlfntl3 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl3(gbtlfntl3, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl4 = async (req, res) => {
     const { gbtlfntl4 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl4(gbtlfntl4, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl5 = async (req, res) => {
     const { gbtlfntl5 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl5(gbtlfntl5, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbtlfntl6 = async (req, res) => {
     const { gbtlfntl6 } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbtlfntl6(gbtlfntl6, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbpaidesc = async (req, res) => {
     const { gbpaidesc } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbpaidesc(gbpaidesc, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbdptdesc = async (req, res) => {
     const { gbdptdesc } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbdptdesc(gbdptdesc, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbciudesc = async (req, res) => {
     const { gbciudesc } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbciudesc(gbciudesc, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbdirdire = async (req, res) => {
     const { gbdirdire } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbdirdire(gbdirdire, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbemamail = async (req, res) => {
     const { gbemamail } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbemamail(gbemamail, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagefnac = async (req, res) => {
     const { gbagefnac } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagefnac(gbagefnac, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

saiClientesCtrl.updateSaiClienteByGbagefreg = async (req, res) => {
     const { gbagefreg } = req.params;
        try {
            if (!util.isBigint(gbagecage)) {
                util.setError(400, 'Please input a valid Bigint value');
                return util.send(res);
            }
            const objSaiCliente = await saiClienteService.updateSaiClienteByGbagefreg(gbagefreg, req.body);
            if (!objSaiCliente) {
                util.setError(404, `Cannot find saiCliente with the id: ${gbagecage}`);
            } else {
                util.setSuccess(200, 'SaiCliente updated', objSaiCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = saiClientesCtrl;
//</es-section>
