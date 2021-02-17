/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Time: 4:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:53
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const aobhBusinesshourService = require('../services/aobh_businesshours.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const aobhBusinesshoursCtrl = {};
aobhBusinesshoursCtrl.service = aobhBusinesshourService;


aobhBusinesshoursCtrl.getAllAobhBusinesshours = async (req, res) => {
    try {
        const objAobhBusinesshours = await aobhBusinesshourService.getAllAobhBusinesshours(req.query);
        if (objAobhBusinesshours.length > 0) {
            util.setSuccess(200, 'AobhBusinesshours retrieved', objAobhBusinesshours);
        } else {
            util.setSuccess(200, 'No aobhBusinesshour found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.getAAobhBusinesshour = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAobhBusinesshour = await aobhBusinesshourService.getAAobhBusinesshour(id, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.addAobhBusinesshour = async (req, res) => {
    try {
        const objAobhBusinesshour = await aobhBusinesshourService.addAobhBusinesshour(req.body);
        util.setSuccess(201, 'AobhBusinesshour Added!', objAobhBusinesshour);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.updateAobhBusinesshour = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshour(id, req.body);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
        } else {
            util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

aobhBusinesshoursCtrl.deleteAobhBusinesshour = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objAobhBusinesshour = await aobhBusinesshourService.deleteAobhBusinesshour(id);
        if (objAobhBusinesshour) {
            util.setSuccess(200, 'AobhBusinesshour deleted', objAobhBusinesshour);
        } else {
            util.setError(404, `AobhBusinesshour with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



aobhBusinesshoursCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneById(id, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByDeleted(deleted, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByOpen = async (req, res) => {
    try {
        const { open } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByOpen(open, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByOpenStatus = async (req, res) => {
    try {
        const { openStatus } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByOpenStatus(openStatus, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByName(name, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByOpeningHours = async (req, res) => {
    try {
        const { openingHours } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByOpeningHours(openingHours, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByClosingHours = async (req, res) => {
    try {
        const { closingHours } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByClosingHours(closingHours, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByDay = async (req, res) => {
    try {
        const { day } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByDay(day, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByDescription(description, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByDateEntered(dateEntered, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByDateModified(dateModified, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

aobhBusinesshoursCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objAobhBusinesshour = await aobhBusinesshourService.findOneByCreatedBy(createdBy, req.query);
        if (!objAobhBusinesshour) {
            util.setError(404, `Cannot find aobhBusinesshour with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found aobhBusinesshour', objAobhBusinesshour);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



aobhBusinesshoursCtrl.updateAobhBusinesshourById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourById(id, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByDeleted(deleted, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByOpen = async (req, res) => {
     const { open } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByOpen(open, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByOpenStatus = async (req, res) => {
     const { openStatus } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByOpenStatus(openStatus, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByName(name, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByOpeningHours = async (req, res) => {
     const { openingHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByOpeningHours(openingHours, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByClosingHours = async (req, res) => {
     const { closingHours } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByClosingHours(closingHours, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByDay = async (req, res) => {
     const { day } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByDay(day, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByDescription(description, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByDateEntered(dateEntered, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByDateModified(dateModified, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByModifiedUserId(modifiedUserId, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

aobhBusinesshoursCtrl.updateAobhBusinesshourByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objAobhBusinesshour = await aobhBusinesshourService.updateAobhBusinesshourByCreatedBy(createdBy, req.body);
            if (!objAobhBusinesshour) {
                util.setError(404, `Cannot find aobhBusinesshour with the id: ${id}`);
            } else {
                util.setSuccess(200, 'AobhBusinesshour updated', objAobhBusinesshour);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = aobhBusinesshoursCtrl;
//</es-section>
