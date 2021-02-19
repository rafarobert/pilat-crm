/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:11 GMT-0400 (Bolivia Time)
 * Time: 18:37:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:11 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:11
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const erpClienteService = require('../services/erp_cliente.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const erpClienteCtrl = {};
erpClienteCtrl.service = erpClienteService;


erpClienteCtrl.getAllErpCliente = async (req, res) => {
    try {
        const objErpCliente = await erpClienteService.getAllErpCliente(req.query);
        if (objErpCliente.length > 0) {
            util.setSuccess(200, 'ErpCliente retrieved', objErpCliente);
        } else {
            util.setSuccess(200, 'No erpCliente found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.getAErpCliente = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objErpCliente = await erpClienteService.getAErpCliente(id, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.addErpCliente = async (req, res) => {
    try {
        const objErpCliente = await erpClienteService.addErpCliente(req.body);
        util.setSuccess(201, 'ErpCliente Added!', objErpCliente);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.updateErpCliente = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objErpCliente = await erpClienteService.updateErpCliente(id, req.body);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ErpCliente updated', objErpCliente);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

erpClienteCtrl.deleteErpCliente = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objErpCliente = await erpClienteService.deleteErpCliente(id);
        if (objErpCliente) {
            util.setSuccess(200, 'ErpCliente deleted', objErpCliente);
        } else {
            util.setError(404, `ErpCliente with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



erpClienteCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objErpCliente = await erpClienteService.findOneById(id, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objErpCliente = await erpClienteService.findOneByDeleted(deleted, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objErpCliente = await erpClienteService.findOneByName(name, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objErpCliente = await erpClienteService.findOneByDescription(description, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objErpCliente = await erpClienteService.findOneByDateEntered(dateEntered, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objErpCliente = await erpClienteService.findOneByDateModified(dateModified, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objErpCliente = await erpClienteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objErpCliente = await erpClienteService.findOneByCreatedBy(createdBy, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

erpClienteCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objErpCliente = await erpClienteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objErpCliente) {
            util.setError(404, `Cannot find erpCliente with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found erpCliente', objErpCliente);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



erpClienteCtrl.updateErpClienteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteById(id, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByDeleted(deleted, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByName(name, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByDescription(description, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByDateEntered(dateEntered, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByDateModified(dateModified, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByModifiedUserId(modifiedUserId, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByCreatedBy(createdBy, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

erpClienteCtrl.updateErpClienteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objErpCliente = await erpClienteService.updateErpClienteByAssignedUserId(assignedUserId, req.body);
            if (!objErpCliente) {
                util.setError(404, `Cannot find erpCliente with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ErpCliente updated', objErpCliente);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = erpClienteCtrl;
//</es-section>
