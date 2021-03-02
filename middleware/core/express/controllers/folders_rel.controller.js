/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Time: 14:0:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:51 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const folderRelService = require('../services/folders_rel.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const foldersRelCtrl = {};
foldersRelCtrl.service = folderRelService;


foldersRelCtrl.getAllFoldersRel = async (req, res) => {
    try {
        const objFoldersRel = await folderRelService.getAllFoldersRel(req.query);
        if (objFoldersRel.length > 0) {
            util.setSuccess(200, 'FoldersRel retrieved', objFoldersRel);
        } else {
            util.setSuccess(200, 'No folderRel found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.getAFolderRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolderRel = await folderRelService.getAFolderRel(id, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.addFolderRel = async (req, res) => {
    try {
        const objFolderRel = await folderRelService.addFolderRel(req.body);
        util.setSuccess(201, 'FolderRel Added!', objFolderRel);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.updateFolderRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFolderRel = await folderRelService.updateFolderRel(id, req.body);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the id: ${id}`);
        } else {
            util.setSuccess(200, 'FolderRel updated', objFolderRel);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

foldersRelCtrl.deleteFolderRel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFolderRel = await folderRelService.deleteFolderRel(id);
        if (objFolderRel) {
            util.setSuccess(200, 'FolderRel deleted', objFolderRel);
        } else {
            util.setError(404, `FolderRel with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



foldersRelCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFolderRel = await folderRelService.findOneById(id, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFolderRel = await folderRelService.findOneByDeleted(deleted, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.findOneByPolymorphicModule = async (req, res) => {
    try {
        const { polymorphicModule } = req.params;
        const objFolderRel = await folderRelService.findOneByPolymorphicModule(polymorphicModule, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.findOneByFolderId = async (req, res) => {
    try {
        const { folderId } = req.params;
        const objFolderRel = await folderRelService.findOneByFolderId(folderId, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

foldersRelCtrl.findOneByPolymorphicId = async (req, res) => {
    try {
        const { polymorphicId } = req.params;
        const objFolderRel = await folderRelService.findOneByPolymorphicId(polymorphicId, req.query);
        if (!objFolderRel) {
            util.setError(404, `Cannot find folderRel with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found folderRel', objFolderRel);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



foldersRelCtrl.updateFolderRelById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderRel = await folderRelService.updateFolderRelById(id, req.body);
            if (!objFolderRel) {
                util.setError(404, `Cannot find folderRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderRel updated', objFolderRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersRelCtrl.updateFolderRelByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderRel = await folderRelService.updateFolderRelByDeleted(deleted, req.body);
            if (!objFolderRel) {
                util.setError(404, `Cannot find folderRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderRel updated', objFolderRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersRelCtrl.updateFolderRelByPolymorphicModule = async (req, res) => {
     const { polymorphicModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderRel = await folderRelService.updateFolderRelByPolymorphicModule(polymorphicModule, req.body);
            if (!objFolderRel) {
                util.setError(404, `Cannot find folderRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderRel updated', objFolderRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersRelCtrl.updateFolderRelByFolderId = async (req, res) => {
     const { folderId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderRel = await folderRelService.updateFolderRelByFolderId(folderId, req.body);
            if (!objFolderRel) {
                util.setError(404, `Cannot find folderRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderRel updated', objFolderRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

foldersRelCtrl.updateFolderRelByPolymorphicId = async (req, res) => {
     const { polymorphicId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFolderRel = await folderRelService.updateFolderRelByPolymorphicId(polymorphicId, req.body);
            if (!objFolderRel) {
                util.setError(404, `Cannot find folderRel with the id: ${id}`);
            } else {
                util.setSuccess(200, 'FolderRel updated', objFolderRel);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = foldersRelCtrl;
//</es-section>
