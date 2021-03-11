/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:41 GMT-0400 (Bolivia Time)
 * Time: 14:57:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:41 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:41
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const models = require('../../express');
const savedSearchService = require('../services/saved_search.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const savedSearchCtrl = {};
savedSearchCtrl.service = savedSearchService;


savedSearchCtrl.getAllSavedSearch = async (req, res) => {
    try {
        const { length } = req.body;
        const { start } = req.body;
        const [column, dir] = util.getOrderByColumnDirection(models.sequelize.savedSearch.rawAttributes,req.body);
        req.query.limit = length ? length : req.query.limit;
        req.query.offset = start ? start : req.query.offset;
        req.query.order = column && dir ? [[column,dir]] : req.query.order;

        const objSavedSearch = await savedSearchService.getAllSavedSearch(req.query);
        if (objSavedSearch && objSavedSearch.rows && objSavedSearch.count) {
            util.setSuccess(200, 'SavedSearch retrieved', objSavedSearch.rows, objSavedSearch.count, req.query.limit, req.query.offset);
        } else {
            util.setSuccess(200, 'No savedSearch found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.getASavedSearch = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSavedSearch = await savedSearchService.getASavedSearch(id, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.addSavedSearch = async (req, res) => {
    try {
        const objSavedSearch = await savedSearchService.addSavedSearch(req.body);
        util.setSuccess(201, 'SavedSearch Added!', objSavedSearch);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.updateSavedSearch = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objSavedSearch = await savedSearchService.updateSavedSearch(id, req.body);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the id: ${id}`);
        } else {
            util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

savedSearchCtrl.deleteSavedSearch = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objSavedSearch = await savedSearchService.deleteSavedSearch(id);
        if (objSavedSearch) {
            util.setSuccess(200, 'SavedSearch deleted', objSavedSearch);
        } else {
            util.setError(404, `SavedSearch with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



savedSearchCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objSavedSearch = await savedSearchService.findOneById(id, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objSavedSearch = await savedSearchService.findOneByDeleted(deleted, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objSavedSearch = await savedSearchService.findOneByName(name, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneBySearchModule = async (req, res) => {
    try {
        const { searchModule } = req.params;
        const objSavedSearch = await savedSearchService.findOneBySearchModule(searchModule, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByContents = async (req, res) => {
    try {
        const { contents } = req.params;
        const objSavedSearch = await savedSearchService.findOneByContents(contents, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objSavedSearch = await savedSearchService.findOneByDescription(description, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objSavedSearch = await savedSearchService.findOneByDateEntered(dateEntered, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objSavedSearch = await savedSearchService.findOneByDateModified(dateModified, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

savedSearchCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objSavedSearch = await savedSearchService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objSavedSearch) {
            util.setError(404, `Cannot find savedSearch with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found savedSearch', objSavedSearch);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



savedSearchCtrl.updateSavedSearchById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchById(id, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByDeleted(deleted, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByName(name, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchBySearchModule = async (req, res) => {
     const { searchModule } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchBySearchModule(searchModule, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByContents = async (req, res) => {
     const { contents } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByContents(contents, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByDescription(description, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByDateEntered(dateEntered, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByDateModified(dateModified, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

savedSearchCtrl.updateSavedSearchByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objSavedSearch = await savedSearchService.updateSavedSearchByAssignedUserId(assignedUserId, req.body);
            if (!objSavedSearch) {
                util.setError(404, `Cannot find savedSearch with the id: ${id}`);
            } else {
                util.setSuccess(200, 'SavedSearch updated', objSavedSearch);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = savedSearchCtrl;
//</es-section>
