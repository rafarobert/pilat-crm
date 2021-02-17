/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:17 GMT-0400 (Bolivia Time)
 * Time: 4:43:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:17 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:17
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const importMapService = require('../services/import_maps.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const importMapsCtrl = {};
importMapsCtrl.service = importMapService;


importMapsCtrl.getAllImportMaps = async (req, res) => {
    try {
        const objImportMaps = await importMapService.getAllImportMaps(req.query);
        if (objImportMaps.length > 0) {
            util.setSuccess(200, 'ImportMaps retrieved', objImportMaps);
        } else {
            util.setSuccess(200, 'No importMap found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.getAImportMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objImportMap = await importMapService.getAImportMap(id, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.addImportMap = async (req, res) => {
    try {
        const objImportMap = await importMapService.addImportMap(req.body);
        util.setSuccess(201, 'ImportMap Added!', objImportMap);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.updateImportMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objImportMap = await importMapService.updateImportMap(id, req.body);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the id: ${id}`);
        } else {
            util.setSuccess(200, 'ImportMap updated', objImportMap);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

importMapsCtrl.deleteImportMap = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objImportMap = await importMapService.deleteImportMap(id);
        if (objImportMap) {
            util.setSuccess(200, 'ImportMap deleted', objImportMap);
        } else {
            util.setError(404, `ImportMap with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



importMapsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objImportMap = await importMapService.findOneById(id, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByHasHeader = async (req, res) => {
    try {
        const { hasHeader } = req.params;
        const objImportMap = await importMapService.findOneByHasHeader(hasHeader, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objImportMap = await importMapService.findOneByDeleted(deleted, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objImportMap = await importMapService.findOneByName(name, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneBySource = async (req, res) => {
    try {
        const { source } = req.params;
        const objImportMap = await importMapService.findOneBySource(source, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByEnclosure = async (req, res) => {
    try {
        const { enclosure } = req.params;
        const objImportMap = await importMapService.findOneByEnclosure(enclosure, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByDelimiter = async (req, res) => {
    try {
        const { delimiter } = req.params;
        const objImportMap = await importMapService.findOneByDelimiter(delimiter, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByModule = async (req, res) => {
    try {
        const { module } = req.params;
        const objImportMap = await importMapService.findOneByModule(module, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByIsPublished = async (req, res) => {
    try {
        const { isPublished } = req.params;
        const objImportMap = await importMapService.findOneByIsPublished(isPublished, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByContent = async (req, res) => {
    try {
        const { content } = req.params;
        const objImportMap = await importMapService.findOneByContent(content, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByDefaultValues = async (req, res) => {
    try {
        const { defaultValues } = req.params;
        const objImportMap = await importMapService.findOneByDefaultValues(defaultValues, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objImportMap = await importMapService.findOneByDateEntered(dateEntered, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objImportMap = await importMapService.findOneByDateModified(dateModified, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

importMapsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objImportMap = await importMapService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objImportMap) {
            util.setError(404, `Cannot find importMap with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found importMap', objImportMap);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



importMapsCtrl.updateImportMapById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapById(id, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByHasHeader = async (req, res) => {
     const { hasHeader } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByHasHeader(hasHeader, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByDeleted(deleted, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByName(name, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapBySource = async (req, res) => {
     const { source } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapBySource(source, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByEnclosure = async (req, res) => {
     const { enclosure } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByEnclosure(enclosure, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByDelimiter = async (req, res) => {
     const { delimiter } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByDelimiter(delimiter, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByModule = async (req, res) => {
     const { module } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByModule(module, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByIsPublished = async (req, res) => {
     const { isPublished } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByIsPublished(isPublished, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByContent = async (req, res) => {
     const { content } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByContent(content, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByDefaultValues = async (req, res) => {
     const { defaultValues } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByDefaultValues(defaultValues, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByDateEntered(dateEntered, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByDateModified(dateModified, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

importMapsCtrl.updateImportMapByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objImportMap = await importMapService.updateImportMapByAssignedUserId(assignedUserId, req.body);
            if (!objImportMap) {
                util.setError(404, `Cannot find importMap with the id: ${id}`);
            } else {
                util.setSuccess(200, 'ImportMap updated', objImportMap);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = importMapsCtrl;
//</es-section>
