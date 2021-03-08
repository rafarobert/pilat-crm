/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Time: 15:36:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:51 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:51
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const prospectService = require('../services/prospects.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const prospectsCtrl = {};
prospectsCtrl.service = prospectService;


prospectsCtrl.getAllProspects = async (req, res) => {
    try {
        const objProspects = await prospectService.getAllProspects(req.query);
        if (objProspects.length > 0) {
            util.setSuccess(200, 'Prospects retrieved', objProspects);
        } else {
            util.setSuccess(200, 'No prospect found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.getAProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspect = await prospectService.getAProspect(id, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.addProspect = async (req, res) => {
    try {
        const objProspect = await prospectService.addProspect(req.body);
        util.setSuccess(201, 'Prospect Added!', objProspect);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objProspect = await prospectService.updateProspect(id, req.body);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Prospect updated', objProspect);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

prospectsCtrl.deleteProspect = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objProspect = await prospectService.deleteProspect(id);
        if (objProspect) {
            util.setSuccess(200, 'Prospect deleted', objProspect);
        } else {
            util.setError(404, `Prospect with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



prospectsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objProspect = await prospectService.findOneById(id, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objProspect = await prospectService.findOneByDeleted(deleted, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDoNotCall = async (req, res) => {
    try {
        const { doNotCall } = req.params;
        const objProspect = await prospectService.findOneByDoNotCall(doNotCall, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByTrackerKey = async (req, res) => {
    try {
        const { trackerKey } = req.params;
        const objProspect = await prospectService.findOneByTrackerKey(trackerKey, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneBySalutation = async (req, res) => {
    try {
        const { salutation } = req.params;
        const objProspect = await prospectService.findOneBySalutation(salutation, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByFirstName = async (req, res) => {
    try {
        const { firstName } = req.params;
        const objProspect = await prospectService.findOneByFirstName(firstName, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByLastName = async (req, res) => {
    try {
        const { lastName } = req.params;
        const objProspect = await prospectService.findOneByLastName(lastName, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const objProspect = await prospectService.findOneByTitle(title, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoto = async (req, res) => {
    try {
        const { photo } = req.params;
        const objProspect = await prospectService.findOneByPhoto(photo, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDepartment = async (req, res) => {
    try {
        const { department } = req.params;
        const objProspect = await prospectService.findOneByDepartment(department, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoneHome = async (req, res) => {
    try {
        const { phoneHome } = req.params;
        const objProspect = await prospectService.findOneByPhoneHome(phoneHome, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoneMobile = async (req, res) => {
    try {
        const { phoneMobile } = req.params;
        const objProspect = await prospectService.findOneByPhoneMobile(phoneMobile, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoneWork = async (req, res) => {
    try {
        const { phoneWork } = req.params;
        const objProspect = await prospectService.findOneByPhoneWork(phoneWork, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoneOther = async (req, res) => {
    try {
        const { phoneOther } = req.params;
        const objProspect = await prospectService.findOneByPhoneOther(phoneOther, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPhoneFax = async (req, res) => {
    try {
        const { phoneFax } = req.params;
        const objProspect = await prospectService.findOneByPhoneFax(phoneFax, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByLawfulBasisSource = async (req, res) => {
    try {
        const { lawfulBasisSource } = req.params;
        const objProspect = await prospectService.findOneByLawfulBasisSource(lawfulBasisSource, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPrimaryAddressStreet = async (req, res) => {
    try {
        const { primaryAddressStreet } = req.params;
        const objProspect = await prospectService.findOneByPrimaryAddressStreet(primaryAddressStreet, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPrimaryAddressCity = async (req, res) => {
    try {
        const { primaryAddressCity } = req.params;
        const objProspect = await prospectService.findOneByPrimaryAddressCity(primaryAddressCity, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPrimaryAddressState = async (req, res) => {
    try {
        const { primaryAddressState } = req.params;
        const objProspect = await prospectService.findOneByPrimaryAddressState(primaryAddressState, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPrimaryAddressPostalcode = async (req, res) => {
    try {
        const { primaryAddressPostalcode } = req.params;
        const objProspect = await prospectService.findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByPrimaryAddressCountry = async (req, res) => {
    try {
        const { primaryAddressCountry } = req.params;
        const objProspect = await prospectService.findOneByPrimaryAddressCountry(primaryAddressCountry, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAltAddressStreet = async (req, res) => {
    try {
        const { altAddressStreet } = req.params;
        const objProspect = await prospectService.findOneByAltAddressStreet(altAddressStreet, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAltAddressCity = async (req, res) => {
    try {
        const { altAddressCity } = req.params;
        const objProspect = await prospectService.findOneByAltAddressCity(altAddressCity, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAltAddressState = async (req, res) => {
    try {
        const { altAddressState } = req.params;
        const objProspect = await prospectService.findOneByAltAddressState(altAddressState, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAltAddressPostalcode = async (req, res) => {
    try {
        const { altAddressPostalcode } = req.params;
        const objProspect = await prospectService.findOneByAltAddressPostalcode(altAddressPostalcode, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAltAddressCountry = async (req, res) => {
    try {
        const { altAddressCountry } = req.params;
        const objProspect = await prospectService.findOneByAltAddressCountry(altAddressCountry, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAssistant = async (req, res) => {
    try {
        const { assistant } = req.params;
        const objProspect = await prospectService.findOneByAssistant(assistant, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAssistantPhone = async (req, res) => {
    try {
        const { assistantPhone } = req.params;
        const objProspect = await prospectService.findOneByAssistantPhone(assistantPhone, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAccountName = async (req, res) => {
    try {
        const { accountName } = req.params;
        const objProspect = await prospectService.findOneByAccountName(accountName, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objProspect = await prospectService.findOneByDescription(description, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByLawfulBasis = async (req, res) => {
    try {
        const { lawfulBasis } = req.params;
        const objProspect = await prospectService.findOneByLawfulBasis(lawfulBasis, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objProspect = await prospectService.findOneByDateEntered(dateEntered, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objProspect = await prospectService.findOneByDateModified(dateModified, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByDateReviewed = async (req, res) => {
    try {
        const { dateReviewed } = req.params;
        const objProspect = await prospectService.findOneByDateReviewed(dateReviewed, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByBirthdate = async (req, res) => {
    try {
        const { birthdate } = req.params;
        const objProspect = await prospectService.findOneByBirthdate(birthdate, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objProspect = await prospectService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objProspect = await prospectService.findOneByCreatedBy(createdBy, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objProspect = await prospectService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByLeadId = async (req, res) => {
    try {
        const { leadId } = req.params;
        const objProspect = await prospectService.findOneByLeadId(leadId, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

prospectsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objProspect = await prospectService.findOneByCampaignId(campaignId, req.query);
        if (!objProspect) {
            util.setError(404, `Cannot find prospect with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found prospect', objProspect);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



prospectsCtrl.updateProspectById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectById(id, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDeleted(deleted, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDoNotCall = async (req, res) => {
     const { doNotCall } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDoNotCall(doNotCall, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByTrackerKey = async (req, res) => {
     const { trackerKey } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByTrackerKey(trackerKey, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectBySalutation = async (req, res) => {
     const { salutation } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectBySalutation(salutation, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByFirstName = async (req, res) => {
     const { firstName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByFirstName(firstName, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByLastName = async (req, res) => {
     const { lastName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByLastName(lastName, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByTitle = async (req, res) => {
     const { title } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByTitle(title, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoto = async (req, res) => {
     const { photo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoto(photo, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDepartment = async (req, res) => {
     const { department } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDepartment(department, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoneHome = async (req, res) => {
     const { phoneHome } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoneHome(phoneHome, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoneMobile = async (req, res) => {
     const { phoneMobile } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoneMobile(phoneMobile, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoneWork = async (req, res) => {
     const { phoneWork } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoneWork(phoneWork, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoneOther = async (req, res) => {
     const { phoneOther } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoneOther(phoneOther, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPhoneFax = async (req, res) => {
     const { phoneFax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPhoneFax(phoneFax, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByLawfulBasisSource = async (req, res) => {
     const { lawfulBasisSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByLawfulBasisSource(lawfulBasisSource, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPrimaryAddressStreet = async (req, res) => {
     const { primaryAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPrimaryAddressStreet(primaryAddressStreet, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPrimaryAddressCity = async (req, res) => {
     const { primaryAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPrimaryAddressCity(primaryAddressCity, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPrimaryAddressState = async (req, res) => {
     const { primaryAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPrimaryAddressState(primaryAddressState, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPrimaryAddressPostalcode = async (req, res) => {
     const { primaryAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPrimaryAddressPostalcode(primaryAddressPostalcode, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByPrimaryAddressCountry = async (req, res) => {
     const { primaryAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByPrimaryAddressCountry(primaryAddressCountry, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAltAddressStreet = async (req, res) => {
     const { altAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAltAddressStreet(altAddressStreet, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAltAddressCity = async (req, res) => {
     const { altAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAltAddressCity(altAddressCity, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAltAddressState = async (req, res) => {
     const { altAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAltAddressState(altAddressState, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAltAddressPostalcode = async (req, res) => {
     const { altAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAltAddressPostalcode(altAddressPostalcode, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAltAddressCountry = async (req, res) => {
     const { altAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAltAddressCountry(altAddressCountry, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAssistant = async (req, res) => {
     const { assistant } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAssistant(assistant, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAssistantPhone = async (req, res) => {
     const { assistantPhone } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAssistantPhone(assistantPhone, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAccountName = async (req, res) => {
     const { accountName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAccountName(accountName, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDescription(description, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByLawfulBasis = async (req, res) => {
     const { lawfulBasis } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByLawfulBasis(lawfulBasis, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDateEntered(dateEntered, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDateModified(dateModified, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByDateReviewed = async (req, res) => {
     const { dateReviewed } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByDateReviewed(dateReviewed, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByBirthdate = async (req, res) => {
     const { birthdate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByBirthdate(birthdate, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByModifiedUserId(modifiedUserId, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByCreatedBy(createdBy, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByAssignedUserId(assignedUserId, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByLeadId = async (req, res) => {
     const { leadId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByLeadId(leadId, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

prospectsCtrl.updateProspectByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objProspect = await prospectService.updateProspectByCampaignId(campaignId, req.body);
            if (!objProspect) {
                util.setError(404, `Cannot find prospect with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Prospect updated', objProspect);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = prospectsCtrl;
//</es-section>
