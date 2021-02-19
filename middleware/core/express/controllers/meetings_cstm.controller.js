/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:52 GMT-0400 (Bolivia Time)
 * Time: 18:37:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:52 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:52
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const meetingCstmService = require('../services/meetings_cstm.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const meetingsCstmCtrl = {};
meetingsCstmCtrl.service = meetingCstmService;


meetingsCstmCtrl.getAllMeetingsCstm = async (req, res) => {
    try {
        const objMeetingsCstm = await meetingCstmService.getAllMeetingsCstm(req.query);
        if (objMeetingsCstm.length > 0) {
            util.setSuccess(200, 'MeetingsCstm retrieved', objMeetingsCstm);
        } else {
            util.setSuccess(200, 'No meetingCstm found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.getAMeetingCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objMeetingCstm = await meetingCstmService.getAMeetingCstm(idC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the id ${idC}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.addMeetingCstm = async (req, res) => {
    try {
        const objMeetingCstm = await meetingCstmService.addMeetingCstm(req.body);
        util.setSuccess(201, 'MeetingCstm Added!', objMeetingCstm);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.updateMeetingCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objMeetingCstm = await meetingCstmService.updateMeetingCstm(idC, req.body);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
        } else {
            util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

meetingsCstmCtrl.deleteMeetingCstm = async (req, res) => {
    try {
        const { idC } = req.params;
        if (!util.isChar(idC)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objMeetingCstm = await meetingCstmService.deleteMeetingCstm(idC);
        if (objMeetingCstm) {
            util.setSuccess(200, 'MeetingCstm deleted', objMeetingCstm);
        } else {
            util.setError(404, `MeetingCstm with the id ${idC} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



meetingsCstmCtrl.findOneByIdC = async (req, res) => {
    try {
        const { idC } = req.params;
        const objMeetingCstm = await meetingCstmService.findOneByIdC(idC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.findOneByJjwgMapsLngC = async (req, res) => {
    try {
        const { jjwgMapsLngC } = req.params;
        const objMeetingCstm = await meetingCstmService.findOneByJjwgMapsLngC(jjwgMapsLngC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.findOneByJjwgMapsLatC = async (req, res) => {
    try {
        const { jjwgMapsLatC } = req.params;
        const objMeetingCstm = await meetingCstmService.findOneByJjwgMapsLatC(jjwgMapsLatC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.findOneByJjwgMapsGeocodeStatusC = async (req, res) => {
    try {
        const { jjwgMapsGeocodeStatusC } = req.params;
        const objMeetingCstm = await meetingCstmService.findOneByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

meetingsCstmCtrl.findOneByJjwgMapsAddressC = async (req, res) => {
    try {
        const { jjwgMapsAddressC } = req.params;
        const objMeetingCstm = await meetingCstmService.findOneByJjwgMapsAddressC(jjwgMapsAddressC, req.query);
        if (!objMeetingCstm) {
            util.setError(404, `Cannot find meetingCstm with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found meetingCstm', objMeetingCstm);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



meetingsCstmCtrl.updateMeetingCstmByIdC = async (req, res) => {
     const { idC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeetingCstm = await meetingCstmService.updateMeetingCstmByIdC(idC, req.body);
            if (!objMeetingCstm) {
                util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCstmCtrl.updateMeetingCstmByJjwgMapsLngC = async (req, res) => {
     const { jjwgMapsLngC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeetingCstm = await meetingCstmService.updateMeetingCstmByJjwgMapsLngC(jjwgMapsLngC, req.body);
            if (!objMeetingCstm) {
                util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCstmCtrl.updateMeetingCstmByJjwgMapsLatC = async (req, res) => {
     const { jjwgMapsLatC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeetingCstm = await meetingCstmService.updateMeetingCstmByJjwgMapsLatC(jjwgMapsLatC, req.body);
            if (!objMeetingCstm) {
                util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCstmCtrl.updateMeetingCstmByJjwgMapsGeocodeStatusC = async (req, res) => {
     const { jjwgMapsGeocodeStatusC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeetingCstm = await meetingCstmService.updateMeetingCstmByJjwgMapsGeocodeStatusC(jjwgMapsGeocodeStatusC, req.body);
            if (!objMeetingCstm) {
                util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

meetingsCstmCtrl.updateMeetingCstmByJjwgMapsAddressC = async (req, res) => {
     const { jjwgMapsAddressC } = req.params;
        try {
            if (!util.isChar(idC)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objMeetingCstm = await meetingCstmService.updateMeetingCstmByJjwgMapsAddressC(jjwgMapsAddressC, req.body);
            if (!objMeetingCstm) {
                util.setError(404, `Cannot find meetingCstm with the id: ${idC}`);
            } else {
                util.setSuccess(200, 'MeetingCstm updated', objMeetingCstm);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = meetingsCstmCtrl;
//</es-section>
