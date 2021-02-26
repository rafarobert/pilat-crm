/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:34 GMT-0400 (Bolivia Time)
 * Time: 0:23:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:34 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:34
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const projectCstmService = require('../services/project_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const projectCstmCtrl = {};
projectCstmCtrl.service = projectCstmService;


projectCstmCtrl.getAllProjectCstm = async (req, res) => {
    try {
        const objProjectCstm = await projectCstmService.getAllProjectCstm(req.query);
        if (objProjectCstm.length > 0) {
            util.setSuccess(200, 'ProjectCstm retrieved', objProjectCstm);
        } else {
            util.setSuccess(200, 'No projectCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.getAProjectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectCstm = await projectCstmService.getAProjectCstm(idC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.addProjectCstm = async (req, res) => {
    try {
        const objProjectCstm = await projectCstmService.addProjectCstm(req.body);
        util.setSuccess(201, 'ProjectCstm Added!', objProjectCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.updateProjectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProjectCstm = await projectCstmService.updateProjectCstm(idC, req.body);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

projectCstmCtrl.deleteProjectCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProjectCstm = await projectCstmService.deleteProjectCstm(idC);
        if (objProjectCstm) {
            util.setSuccess(200, 'ProjectCstm deleted', objProjectCstm);
        } else {
            util.setError(404, `ProjectCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



projectCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objProjectCstm = await projectCstmService.findOneByIdC(idC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objProjectCstm = await projectCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objProjectCstm = await projectCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objProjectCstm = await projectCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

projectCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objProjectCstm = await projectCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objProjectCstm) {
            util.setError(404, `Cannot find projectCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found projectCstm', objProjectCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



projectCstmCtrl.updateProjectCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectCstm = await projectCstmService.updateProjectCstmByIdC(idC, req.body);
            if (!objProjectCstm) {
                util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCstmCtrl.updateProjectCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectCstm = await projectCstmService.updateProjectCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objProjectCstm) {
                util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCstmCtrl.updateProjectCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectCstm = await projectCstmService.updateProjectCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objProjectCstm) {
                util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCstmCtrl.updateProjectCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectCstm = await projectCstmService.updateProjectCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objProjectCstm) {
                util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

projectCstmCtrl.updateProjectCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProjectCstm = await projectCstmService.updateProjectCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objProjectCstm) {
                util.setError(404, `Cannot find projectCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'ProjectCstm updated', objProjectCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = projectCstmCtrl;
//</es-section>
