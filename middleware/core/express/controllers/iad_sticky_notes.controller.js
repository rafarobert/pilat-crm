/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:28 GMT-0400 (Bolivia Time)
 * Time: 18:37:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:28 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:28
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const iadStickyNoteService = require('../services/iad_sticky_notes.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const iadStickyNotesCtrl = {};
iadStickyNotesCtrl.service = iadStickyNoteService;


iadStickyNotesCtrl.getAllIadStickyNotes = async (req, res) => {
    try {
        const objIadStickyNotes = await iadStickyNoteService.getAllIadStickyNotes(req.query);
        if (objIadStickyNotes.length > 0) {
            util.setSuccess(200, 'IadStickyNotes retrieved', objIadStickyNotes);
        } else {
            util.setSuccess(200, 'No iadStickyNote found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.getAIadStickyNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objIadStickyNote = await iadStickyNoteService.getAIadStickyNote(id, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.addIadStickyNote = async (req, res) => {
    try {
        const objIadStickyNote = await iadStickyNoteService.addIadStickyNote(req.body);
        util.setSuccess(201, 'IadStickyNote Added!', objIadStickyNote);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.updateIadStickyNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objIadStickyNote = await iadStickyNoteService.updateIadStickyNote(id, req.body);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
        } else {
            util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

iadStickyNotesCtrl.deleteIadStickyNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objIadStickyNote = await iadStickyNoteService.deleteIadStickyNote(id);
        if (objIadStickyNote) {
            util.setSuccess(200, 'IadStickyNote deleted', objIadStickyNote);
        } else {
            util.setError(404, `IadStickyNote with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



iadStickyNotesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneById(id, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByDeleted(deleted, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByDocumentName = async (req, res) => {
    try {
        const { documentName } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByDocumentName(documentName, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByFilename = async (req, res) => {
    try {
        const { filename } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByFilename(filename, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByFileExt = async (req, res) => {
    try {
        const { fileExt } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByFileExt(fileExt, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByFileMimeType = async (req, res) => {
    try {
        const { fileMimeType } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByFileMimeType(fileMimeType, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByCategoryId(categoryId, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneBySubcategoryId = async (req, res) => {
    try {
        const { subcategoryId } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneBySubcategoryId(subcategoryId, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByStatusId = async (req, res) => {
    try {
        const { statusId } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByStatusId(statusId, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByDescription(description, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByDateEntered(dateEntered, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByDateModified(dateModified, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByActiveDate = async (req, res) => {
    try {
        const { activeDate } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByActiveDate(activeDate, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByExpDate = async (req, res) => {
    try {
        const { expDate } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByExpDate(expDate, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByCreatedBy(createdBy, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

iadStickyNotesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objIadStickyNote = await iadStickyNoteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objIadStickyNote) {
            util.setError(404, `Cannot find iadStickyNote with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found iadStickyNote', objIadStickyNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



iadStickyNotesCtrl.updateIadStickyNoteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteById(id, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByDeleted(deleted, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByDocumentName = async (req, res) => {
     const { documentName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByDocumentName(documentName, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByFilename = async (req, res) => {
     const { filename } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByFilename(filename, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByFileExt = async (req, res) => {
     const { fileExt } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByFileExt(fileExt, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByFileMimeType = async (req, res) => {
     const { fileMimeType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByFileMimeType(fileMimeType, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByCategoryId = async (req, res) => {
     const { categoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByCategoryId(categoryId, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteBySubcategoryId = async (req, res) => {
     const { subcategoryId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteBySubcategoryId(subcategoryId, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByStatusId = async (req, res) => {
     const { statusId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByStatusId(statusId, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByDescription(description, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByDateEntered(dateEntered, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByDateModified(dateModified, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByActiveDate = async (req, res) => {
     const { activeDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByActiveDate(activeDate, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByExpDate = async (req, res) => {
     const { expDate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByExpDate(expDate, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByModifiedUserId(modifiedUserId, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByCreatedBy(createdBy, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

iadStickyNotesCtrl.updateIadStickyNoteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objIadStickyNote = await iadStickyNoteService.updateIadStickyNoteByAssignedUserId(assignedUserId, req.body);
            if (!objIadStickyNote) {
                util.setError(404, `Cannot find iadStickyNote with the id: ${id}`);
            } else {
                util.setSuccess(200, 'IadStickyNote updated', objIadStickyNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = iadStickyNotesCtrl;
//</es-section>
