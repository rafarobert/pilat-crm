/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:07 GMT-0400 (Bolivia Time)
 * Time: 15:36:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:07 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:7
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const favoriteService = require('../services/favorites.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const favoritesCtrl = {};
favoritesCtrl.service = favoriteService;


favoritesCtrl.getAllFavorites = async (req, res) => {
    try {
        const objFavorites = await favoriteService.getAllFavorites(req.query);
        if (objFavorites.length > 0) {
            util.setSuccess(200, 'Favorites retrieved', objFavorites);
        } else {
            util.setSuccess(200, 'No favorite found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.getAFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFavorite = await favoriteService.getAFavorite(id, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.addFavorite = async (req, res) => {
    try {
        const objFavorite = await favoriteService.addFavorite(req.body);
        util.setSuccess(201, 'Favorite Added!', objFavorite);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.updateFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objFavorite = await favoriteService.updateFavorite(id, req.body);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Favorite updated', objFavorite);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

favoritesCtrl.deleteFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objFavorite = await favoriteService.deleteFavorite(id);
        if (objFavorite) {
            util.setSuccess(200, 'Favorite deleted', objFavorite);
        } else {
            util.setError(404, `Favorite with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



favoritesCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objFavorite = await favoriteService.findOneById(id, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objFavorite = await favoriteService.findOneByDeleted(deleted, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objFavorite = await favoriteService.findOneByName(name, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByParentType = async (req, res) => {
    try {
        const { parentType } = req.params;
        const objFavorite = await favoriteService.findOneByParentType(parentType, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objFavorite = await favoriteService.findOneByDescription(description, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objFavorite = await favoriteService.findOneByDateEntered(dateEntered, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objFavorite = await favoriteService.findOneByDateModified(dateModified, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objFavorite = await favoriteService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objFavorite = await favoriteService.findOneByCreatedBy(createdBy, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objFavorite = await favoriteService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

favoritesCtrl.findOneByParentId = async (req, res) => {
    try {
        const { parentId } = req.params;
        const objFavorite = await favoriteService.findOneByParentId(parentId, req.query);
        if (!objFavorite) {
            util.setError(404, `Cannot find favorite with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found favorite', objFavorite);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



favoritesCtrl.updateFavoriteById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteById(id, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByDeleted(deleted, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByName(name, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByParentType = async (req, res) => {
     const { parentType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByParentType(parentType, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByDescription(description, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByDateEntered(dateEntered, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByDateModified(dateModified, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByModifiedUserId(modifiedUserId, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByCreatedBy(createdBy, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByAssignedUserId(assignedUserId, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

favoritesCtrl.updateFavoriteByParentId = async (req, res) => {
     const { parentId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objFavorite = await favoriteService.updateFavoriteByParentId(parentId, req.body);
            if (!objFavorite) {
                util.setError(404, `Cannot find favorite with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Favorite updated', objFavorite);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = favoritesCtrl;
//</es-section>
