/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:08 GMT-0400 (Bolivia Time)
 * Time: 15:36:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:08 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:8
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const folderService = require('../services/folders.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const foldersCtrl = {};
foldersCtrl.service = folderService;


foldersCtrl.getAllFolders = async (req, res) => {
    try {
        const objFolders = await folderService.getAllFolders(req.query);
        if (objFolders.length > 0) {
            util.setSuccess(200, 'Folders retrieved', objFolders);
        } else {
            util.setSuccess(200, 'No folder found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.getAFolder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolder = await folderService.getAFolder(id, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.addFolder = async (req, res) => {
    try {
        const objFolder = await folderService.addFolder(req.body);
        util.setSuccess(201, 'Folder Added!', objFolder);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.updateFolder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolder = await folderService.updateFolder(id, req.body);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Folder updated', objFolder);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

foldersCtrl.deleteFolder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFolder = await folderService.deleteFolder(id);
        if (objFolder) {
            util.setSuccess(200, 'Folder deleted', objFolder);
        } else {
            util.setError(404, `Folder with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



foldersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFolder = await folderService.findOneById(id, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByHasChild = async (req, res) => {
    try {
        const { hasChild } = req.params;
        const objFolder = await folderService.findOneByHasChild(hasChild, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByIsGroup = async (req, res) => {
    try {
        const { isGroup } = req.params;
        const objFolder = await folderService.findOneByIsGroup(isGroup, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByIsDynamic = async (req, res) => {
    try {
        const { isDynamic } = req.params;
        const objFolder = await folderService.findOneByIsDynamic(isDynamic, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFolder = await folderService.findOneByDeleted(deleted, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objFolder = await folderService.findOneByName(name, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByFolderType = async (req, res) => {
    try {
        const { folderType } = req.params;
        const objFolder = await folderService.findOneByFolderType(folderType, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByDynamicQuery = async (req, res) => {
    try {
        const { dynamicQuery } = req.params;
        const objFolder = await folderService.findOneByDynamicQuery(dynamicQuery, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByParentFolder = async (req, res) => {
    try {
        const { parentFolder } = req.params;
        const objFolder = await folderService.findOneByParentFolder(parentFolder, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByAssignToId = async (req, res) => {
    try {
        const { assignToId } = req.params;
        const objFolder = await folderService.findOneByAssignToId(assignToId, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFolder = await folderService.findOneByCreatedBy(createdBy, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersCtrl.findOneByModifiedBy = async (req, res) => {
    try {
        const { modifiedBy } = req.params;
        const objFolder = await folderService.findOneByModifiedBy(modifiedBy, req.query);
        if (!objFolder) {
            util.setError(404, `Cannot find folder with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folder', objFolder);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



foldersCtrl.updateFolderById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderById(id, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByHasChild = async (req, res) => {
     const { hasChild } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByHasChild(hasChild, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByIsGroup = async (req, res) => {
     const { isGroup } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByIsGroup(isGroup, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByIsDynamic = async (req, res) => {
     const { isDynamic } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByIsDynamic(isDynamic, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByDeleted(deleted, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByName(name, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByFolderType = async (req, res) => {
     const { folderType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByFolderType(folderType, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByDynamicQuery = async (req, res) => {
     const { dynamicQuery } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByDynamicQuery(dynamicQuery, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByParentFolder = async (req, res) => {
     const { parentFolder } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByParentFolder(parentFolder, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByAssignToId = async (req, res) => {
     const { assignToId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByAssignToId(assignToId, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByCreatedBy(createdBy, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersCtrl.updateFolderByModifiedBy = async (req, res) => {
     const { modifiedBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolder = await folderService.updateFolderByModifiedBy(modifiedBy, req.body);
            if (!objFolder) {
                util.setError(404, `Cannot find folder with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Folder updated', objFolder);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = foldersCtrl;
//</es-section>
