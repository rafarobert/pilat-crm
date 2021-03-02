/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:56 GMT-0400 (Bolivia Time)
 * Time: 14:0:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:56 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const g3lGelWhatsappService = require('../services/g3l_gel_whatsapp.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const g3lGelWhatsappCtrl = {};
g3lGelWhatsappCtrl.service = g3lGelWhatsappService;


g3lGelWhatsappCtrl.getAllG3lGelWhatsapp = async (req, res) => {
    try {
        const objG3lGelWhatsapp = await g3lGelWhatsappService.getAllG3lGelWhatsapp(req.query);
        if (objG3lGelWhatsapp.length > 0) {
            util.setSuccess(200, 'G3lGelWhatsapp retrieved', objG3lGelWhatsapp);
        } else {
            util.setSuccess(200, 'No g3lGelWhatsapp found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.getAG3lGelWhatsapp = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelWhatsapp = await g3lGelWhatsappService.getAG3lGelWhatsapp(id, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.addG3lGelWhatsapp = async (req, res) => {
    try {
        const objG3lGelWhatsapp = await g3lGelWhatsappService.addG3lGelWhatsapp(req.body);
        util.setSuccess(201, 'G3lGelWhatsapp Added!', objG3lGelWhatsapp);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsapp = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsapp(id, req.body);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
        } else {
            util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

g3lGelWhatsappCtrl.deleteG3lGelWhatsapp = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objG3lGelWhatsapp = await g3lGelWhatsappService.deleteG3lGelWhatsapp(id);
        if (objG3lGelWhatsapp) {
            util.setSuccess(200, 'G3lGelWhatsapp deleted', objG3lGelWhatsapp);
        } else {
            util.setError(404, `G3lGelWhatsapp with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



g3lGelWhatsappCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneById(id, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByDeleted(deleted, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByName(name, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByParentType(parentType, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByNumeroEnvio = async (req, res) => {
    try {
        const { numeroEnvio } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByNumeroEnvio(numeroEnvio, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByEstadoEnvio = async (req, res) => {
    try {
        const { estadoEnvio } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByEstadoEnvio(estadoEnvio, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByDescription(description, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByMensaje = async (req, res) => {
    try {
        const { mensaje } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByMensaje(mensaje, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByDateEntered(dateEntered, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByDateModified(dateModified, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByFechaEnvio = async (req, res) => {
    try {
        const { fechaEnvio } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByFechaEnvio(fechaEnvio, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByCreatedBy(createdBy, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelWhatsappCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objG3lGelWhatsapp = await g3lGelWhatsappService.findOneByParentId(parentId, req.query);
        if (!objG3lGelWhatsapp) {
            util.setError(404, `Cannot find g3lGelWhatsapp with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelWhatsapp', objG3lGelWhatsapp);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



g3lGelWhatsappCtrl.updateG3lGelWhatsappById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappById(id, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByDeleted(deleted, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByName(name, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByParentType(parentType, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByNumeroEnvio = async (req, res) => {
     const { numeroEnvio } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByNumeroEnvio(numeroEnvio, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByEstadoEnvio = async (req, res) => {
     const { estadoEnvio } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByEstadoEnvio(estadoEnvio, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByDescription(description, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByMensaje = async (req, res) => {
     const { mensaje } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByMensaje(mensaje, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByDateEntered(dateEntered, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByDateModified(dateModified, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByFechaEnvio = async (req, res) => {
     const { fechaEnvio } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByFechaEnvio(fechaEnvio, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByModifiedUserId(modifiedUserId, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByCreatedBy(createdBy, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByAssignedUserId(assignedUserId, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelWhatsappCtrl.updateG3lGelWhatsappByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelWhatsapp = await g3lGelWhatsappService.updateG3lGelWhatsappByParentId(parentId, req.body);
            if (!objG3lGelWhatsapp) {
                util.setError(404, `Cannot find g3lGelWhatsapp with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelWhatsapp updated', objG3lGelWhatsapp);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = g3lGelWhatsappCtrl;
//</es-section>
