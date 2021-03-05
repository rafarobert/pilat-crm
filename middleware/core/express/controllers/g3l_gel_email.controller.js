/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const g3lGelEmailService = require('../services/g3l_gel_email.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const g3lGelEmailCtrl = {};
g3lGelEmailCtrl.service = g3lGelEmailService;


g3lGelEmailCtrl.getAllG3lGelEmail = async (req, res) => {
    try {
        const objG3lGelEmail = await g3lGelEmailService.getAllG3lGelEmail(req.query);
        if (objG3lGelEmail.length > 0) {
            util.setSuccess(200, 'G3lGelEmail retrieved', objG3lGelEmail);
        } else {
            util.setSuccess(200, 'No g3lGelEmail found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.getAG3lGelEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelEmail = await g3lGelEmailService.getAG3lGelEmail(id, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.addG3lGelEmail = async (req, res) => {
    try {
        const objG3lGelEmail = await g3lGelEmailService.addG3lGelEmail(req.body);
        util.setSuccess(201, 'G3lGelEmail Added!', objG3lGelEmail);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.updateG3lGelEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmail(id, req.body);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
        } else {
            util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

g3lGelEmailCtrl.deleteG3lGelEmail = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objG3lGelEmail = await g3lGelEmailService.deleteG3lGelEmail(id);
        if (objG3lGelEmail) {
            util.setSuccess(200, 'G3lGelEmail deleted', objG3lGelEmail);
        } else {
            util.setError(404, `G3lGelEmail with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



g3lGelEmailCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneById(id, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByDeleted(deleted, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByName(name, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByParentType(parentType, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByEstadoEnvio = async (req, res) => {
    try {
        const { estadoEnvio } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByEstadoEnvio(estadoEnvio, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByCorreoElectronico = async (req, res) => {
    try {
        const { correoElectronico } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByCorreoElectronico(correoElectronico, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByDescription(description, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByMensaje = async (req, res) => {
    try {
        const { mensaje } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByMensaje(mensaje, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByDateEntered(dateEntered, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByDateModified(dateModified, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByFechaEnvio = async (req, res) => {
    try {
        const { fechaEnvio } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByFechaEnvio(fechaEnvio, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByCreatedBy(createdBy, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

g3lGelEmailCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objG3lGelEmail = await g3lGelEmailService.findOneByParentId(parentId, req.query);
        if (!objG3lGelEmail) {
            util.setError(404, `Cannot find g3lGelEmail with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found g3lGelEmail', objG3lGelEmail);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



g3lGelEmailCtrl.updateG3lGelEmailById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailById(id, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByDeleted(deleted, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByName(name, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByParentType(parentType, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByEstadoEnvio = async (req, res) => {
     const { estadoEnvio } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByEstadoEnvio(estadoEnvio, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByCorreoElectronico = async (req, res) => {
     const { correoElectronico } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByCorreoElectronico(correoElectronico, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByDescription(description, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByMensaje = async (req, res) => {
     const { mensaje } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByMensaje(mensaje, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByDateEntered(dateEntered, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByDateModified(dateModified, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByFechaEnvio = async (req, res) => {
     const { fechaEnvio } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByFechaEnvio(fechaEnvio, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByModifiedUserId(modifiedUserId, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByCreatedBy(createdBy, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByAssignedUserId(assignedUserId, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

g3lGelEmailCtrl.updateG3lGelEmailByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objG3lGelEmail = await g3lGelEmailService.updateG3lGelEmailByParentId(parentId, req.body);
            if (!objG3lGelEmail) {
                util.setError(404, `Cannot find g3lGelEmail with the id: ${id}`);
            } else {
                util.setSuccess(200, 'G3lGelEmail updated', objG3lGelEmail);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = g3lGelEmailCtrl;
//</es-section>
