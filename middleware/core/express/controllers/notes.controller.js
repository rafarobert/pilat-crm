/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Time: 14:1:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:10
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const noteService = require('../services/notes.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const notesCtrl = {};
notesCtrl.service = noteService;


notesCtrl.getAllNotes = async (req, res) => {
    try {
        const objNotes = await noteService.getAllNotes(req.query);
        if (objNotes.length > 0) {
            util.setSuccess(200, 'Notes retrieved', objNotes);
        } else {
            util.setSuccess(200, 'No note found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.getANote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objNote = await noteService.getANote(id, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.addNote = async (req, res) => {
    try {
        const objNote = await noteService.addNote(req.body);
        util.setSuccess(201, 'Note Added!', objNote);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objNote = await noteService.updateNote(id, req.body);
        if (!objNote) {
            util.setError(404, `Cannot find note with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Note updated', objNote);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

notesCtrl.deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objNote = await noteService.deleteNote(id);
        if (objNote) {
            util.setSuccess(200, 'Note deleted', objNote);
        } else {
            util.setError(404, `Note with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



notesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objNote = await noteService.findOneById(id, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByPortalFlag = async (req, res) => {
    try {
        const { portalFlag } = req.params;
        const objNote = await noteService.findOneByPortalFlag(portalFlag, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByEmbedFlag = async (req, res) => {
    try {
        const { embedFlag } = req.params;
        const objNote = await noteService.findOneByEmbedFlag(embedFlag, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objNote = await noteService.findOneByDeleted(deleted, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objNote = await noteService.findOneByName(name, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByFileMimeType = async (req, res) => {
    try {
        const { fileMimeType } = req.params;
        const objNote = await noteService.findOneByFileMimeType(fileMimeType, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByFilename = async (req, res) => {
    try {
        const { filename } = req.params;
        const objNote = await noteService.findOneByFilename(filename, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objNote = await noteService.findOneByParentType(parentType, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objNote = await noteService.findOneByDescription(description, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objNote = await noteService.findOneByDateEntered(dateEntered, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objNote = await noteService.findOneByDateModified(dateModified, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objNote = await noteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objNote = await noteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objNote = await noteService.findOneByCreatedBy(createdBy, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objNote = await noteService.findOneByParentId(parentId, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

notesCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objNote = await noteService.findOneByContactId(contactId, req.query);
        if (!objNote) {
            util.setError(404, `Cannot find note with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found note', objNote);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



notesCtrl.updateNoteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteById(id, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByPortalFlag = async (req, res) => {
     const { portalFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByPortalFlag(portalFlag, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByEmbedFlag = async (req, res) => {
     const { embedFlag } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByEmbedFlag(embedFlag, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByDeleted(deleted, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByName(name, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByFileMimeType = async (req, res) => {
     const { fileMimeType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByFileMimeType(fileMimeType, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByFilename = async (req, res) => {
     const { filename } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByFilename(filename, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByParentType(parentType, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByDescription(description, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByDateEntered(dateEntered, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByDateModified(dateModified, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByAssignedUserId(assignedUserId, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByModifiedUserId(modifiedUserId, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByCreatedBy(createdBy, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByParentId(parentId, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

notesCtrl.updateNoteByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objNote = await noteService.updateNoteByContactId(contactId, req.body);
            if (!objNote) {
                util.setError(404, `Cannot find note with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Note updated', objNote);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = notesCtrl;
//</es-section>
