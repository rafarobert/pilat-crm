/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:26 GMT-0400 (Bolivia Time)
 * Time: 15:36:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:26 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:26
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const leadService = require('../services/leads.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const leadsCtrl = {};
leadsCtrl.service = leadService;


leadsCtrl.getAllLeads = async (req, res) => {
    try {
        const objLeads = await leadService.getAllLeads(req.query);
        if (objLeads.length > 0) {
            util.setSuccess(200, 'Leads retrieved', objLeads);
        } else {
            util.setSuccess(200, 'No lead found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.getALead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLead = await leadService.getALead(id, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.addLead = async (req, res) => {
    try {
        const objLead = await leadService.addLead(req.body);
        util.setSuccess(201, 'Lead Added!', objLead);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.updateLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objLead = await leadService.updateLead(id, req.body);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Lead updated', objLead);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

leadsCtrl.deleteLead = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objLead = await leadService.deleteLead(id);
        if (objLead) {
            util.setSuccess(200, 'Lead deleted', objLead);
        } else {
            util.setError(404, `Lead with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



leadsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objLead = await leadService.findOneById(id, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objLead = await leadService.findOneByDeleted(deleted, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDoNotCall = async (req, res) => {
    try {
        const { doNotCall } = req.params;
        const objLead = await leadService.findOneByDoNotCall(doNotCall, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByConverted = async (req, res) => {
    try {
        const { converted } = req.params;
        const objLead = await leadService.findOneByConverted(converted, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneBySalutation = async (req, res) => {
    try {
        const { salutation } = req.params;
        const objLead = await leadService.findOneBySalutation(salutation, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByFirstName = async (req, res) => {
    try {
        const { firstName } = req.params;
        const objLead = await leadService.findOneByFirstName(firstName, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByLastName = async (req, res) => {
    try {
        const { lastName } = req.params;
        const objLead = await leadService.findOneByLastName(lastName, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const objLead = await leadService.findOneByTitle(title, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoto = async (req, res) => {
    try {
        const { photo } = req.params;
        const objLead = await leadService.findOneByPhoto(photo, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDepartment = async (req, res) => {
    try {
        const { department } = req.params;
        const objLead = await leadService.findOneByDepartment(department, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoneHome = async (req, res) => {
    try {
        const { phoneHome } = req.params;
        const objLead = await leadService.findOneByPhoneHome(phoneHome, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoneMobile = async (req, res) => {
    try {
        const { phoneMobile } = req.params;
        const objLead = await leadService.findOneByPhoneMobile(phoneMobile, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoneWork = async (req, res) => {
    try {
        const { phoneWork } = req.params;
        const objLead = await leadService.findOneByPhoneWork(phoneWork, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoneOther = async (req, res) => {
    try {
        const { phoneOther } = req.params;
        const objLead = await leadService.findOneByPhoneOther(phoneOther, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPhoneFax = async (req, res) => {
    try {
        const { phoneFax } = req.params;
        const objLead = await leadService.findOneByPhoneFax(phoneFax, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByLawfulBasisSource = async (req, res) => {
    try {
        const { lawfulBasisSource } = req.params;
        const objLead = await leadService.findOneByLawfulBasisSource(lawfulBasisSource, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPrimaryAddressStreet = async (req, res) => {
    try {
        const { primaryAddressStreet } = req.params;
        const objLead = await leadService.findOneByPrimaryAddressStreet(primaryAddressStreet, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPrimaryAddressCity = async (req, res) => {
    try {
        const { primaryAddressCity } = req.params;
        const objLead = await leadService.findOneByPrimaryAddressCity(primaryAddressCity, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPrimaryAddressState = async (req, res) => {
    try {
        const { primaryAddressState } = req.params;
        const objLead = await leadService.findOneByPrimaryAddressState(primaryAddressState, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPrimaryAddressPostalcode = async (req, res) => {
    try {
        const { primaryAddressPostalcode } = req.params;
        const objLead = await leadService.findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPrimaryAddressCountry = async (req, res) => {
    try {
        const { primaryAddressCountry } = req.params;
        const objLead = await leadService.findOneByPrimaryAddressCountry(primaryAddressCountry, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAltAddressStreet = async (req, res) => {
    try {
        const { altAddressStreet } = req.params;
        const objLead = await leadService.findOneByAltAddressStreet(altAddressStreet, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAltAddressCity = async (req, res) => {
    try {
        const { altAddressCity } = req.params;
        const objLead = await leadService.findOneByAltAddressCity(altAddressCity, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAltAddressState = async (req, res) => {
    try {
        const { altAddressState } = req.params;
        const objLead = await leadService.findOneByAltAddressState(altAddressState, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAltAddressPostalcode = async (req, res) => {
    try {
        const { altAddressPostalcode } = req.params;
        const objLead = await leadService.findOneByAltAddressPostalcode(altAddressPostalcode, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAltAddressCountry = async (req, res) => {
    try {
        const { altAddressCountry } = req.params;
        const objLead = await leadService.findOneByAltAddressCountry(altAddressCountry, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAssistant = async (req, res) => {
    try {
        const { assistant } = req.params;
        const objLead = await leadService.findOneByAssistant(assistant, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAssistantPhone = async (req, res) => {
    try {
        const { assistantPhone } = req.params;
        const objLead = await leadService.findOneByAssistantPhone(assistantPhone, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByReferedBy = async (req, res) => {
    try {
        const { referedBy } = req.params;
        const objLead = await leadService.findOneByReferedBy(referedBy, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByLeadSource = async (req, res) => {
    try {
        const { leadSource } = req.params;
        const objLead = await leadService.findOneByLeadSource(leadSource, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objLead = await leadService.findOneByStatus(status, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAccountName = async (req, res) => {
    try {
        const { accountName } = req.params;
        const objLead = await leadService.findOneByAccountName(accountName, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByOpportunityName = async (req, res) => {
    try {
        const { opportunityName } = req.params;
        const objLead = await leadService.findOneByOpportunityName(opportunityName, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByOpportunityAmount = async (req, res) => {
    try {
        const { opportunityAmount } = req.params;
        const objLead = await leadService.findOneByOpportunityAmount(opportunityAmount, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPortalName = async (req, res) => {
    try {
        const { portalName } = req.params;
        const objLead = await leadService.findOneByPortalName(portalName, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByPortalApp = async (req, res) => {
    try {
        const { portalApp } = req.params;
        const objLead = await leadService.findOneByPortalApp(portalApp, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByWebsite = async (req, res) => {
    try {
        const { website } = req.params;
        const objLead = await leadService.findOneByWebsite(website, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objLead = await leadService.findOneByDescription(description, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByLawfulBasis = async (req, res) => {
    try {
        const { lawfulBasis } = req.params;
        const objLead = await leadService.findOneByLawfulBasis(lawfulBasis, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByLeadSourceDescription = async (req, res) => {
    try {
        const { leadSourceDescription } = req.params;
        const objLead = await leadService.findOneByLeadSourceDescription(leadSourceDescription, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByStatusDescription = async (req, res) => {
    try {
        const { statusDescription } = req.params;
        const objLead = await leadService.findOneByStatusDescription(statusDescription, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAccountDescription = async (req, res) => {
    try {
        const { accountDescription } = req.params;
        const objLead = await leadService.findOneByAccountDescription(accountDescription, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objLead = await leadService.findOneByDateEntered(dateEntered, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objLead = await leadService.findOneByDateModified(dateModified, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByDateReviewed = async (req, res) => {
    try {
        const { dateReviewed } = req.params;
        const objLead = await leadService.findOneByDateReviewed(dateReviewed, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByBirthdate = async (req, res) => {
    try {
        const { birthdate } = req.params;
        const objLead = await leadService.findOneByBirthdate(birthdate, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objLead = await leadService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objLead = await leadService.findOneByCreatedBy(createdBy, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objLead = await leadService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByReportsToId = async (req, res) => {
    try {
        const { reportsToId } = req.params;
        const objLead = await leadService.findOneByReportsToId(reportsToId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByContactId = async (req, res) => {
    try {
        const { contactId } = req.params;
        const objLead = await leadService.findOneByContactId(contactId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByAccountId = async (req, res) => {
    try {
        const { accountId } = req.params;
        const objLead = await leadService.findOneByAccountId(accountId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByOpportunityId = async (req, res) => {
    try {
        const { opportunityId } = req.params;
        const objLead = await leadService.findOneByOpportunityId(opportunityId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

leadsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objLead = await leadService.findOneByCampaignId(campaignId, req.query);
        if (!objLead) {
            util.setError(404, `Cannot find lead with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found lead', objLead);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



leadsCtrl.updateLeadById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadById(id, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDeleted(deleted, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDoNotCall = async (req, res) => {
     const { doNotCall } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDoNotCall(doNotCall, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByConverted = async (req, res) => {
     const { converted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByConverted(converted, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadBySalutation = async (req, res) => {
     const { salutation } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadBySalutation(salutation, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByFirstName = async (req, res) => {
     const { firstName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByFirstName(firstName, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByLastName = async (req, res) => {
     const { lastName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByLastName(lastName, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByTitle = async (req, res) => {
     const { title } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByTitle(title, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoto = async (req, res) => {
     const { photo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoto(photo, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDepartment = async (req, res) => {
     const { department } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDepartment(department, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoneHome = async (req, res) => {
     const { phoneHome } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoneHome(phoneHome, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoneMobile = async (req, res) => {
     const { phoneMobile } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoneMobile(phoneMobile, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoneWork = async (req, res) => {
     const { phoneWork } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoneWork(phoneWork, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoneOther = async (req, res) => {
     const { phoneOther } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoneOther(phoneOther, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPhoneFax = async (req, res) => {
     const { phoneFax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPhoneFax(phoneFax, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByLawfulBasisSource = async (req, res) => {
     const { lawfulBasisSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByLawfulBasisSource(lawfulBasisSource, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPrimaryAddressStreet = async (req, res) => {
     const { primaryAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPrimaryAddressStreet(primaryAddressStreet, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPrimaryAddressCity = async (req, res) => {
     const { primaryAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPrimaryAddressCity(primaryAddressCity, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPrimaryAddressState = async (req, res) => {
     const { primaryAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPrimaryAddressState(primaryAddressState, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPrimaryAddressPostalcode = async (req, res) => {
     const { primaryAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPrimaryAddressPostalcode(primaryAddressPostalcode, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPrimaryAddressCountry = async (req, res) => {
     const { primaryAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPrimaryAddressCountry(primaryAddressCountry, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAltAddressStreet = async (req, res) => {
     const { altAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAltAddressStreet(altAddressStreet, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAltAddressCity = async (req, res) => {
     const { altAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAltAddressCity(altAddressCity, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAltAddressState = async (req, res) => {
     const { altAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAltAddressState(altAddressState, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAltAddressPostalcode = async (req, res) => {
     const { altAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAltAddressPostalcode(altAddressPostalcode, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAltAddressCountry = async (req, res) => {
     const { altAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAltAddressCountry(altAddressCountry, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAssistant = async (req, res) => {
     const { assistant } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAssistant(assistant, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAssistantPhone = async (req, res) => {
     const { assistantPhone } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAssistantPhone(assistantPhone, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByReferedBy = async (req, res) => {
     const { referedBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByReferedBy(referedBy, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByLeadSource = async (req, res) => {
     const { leadSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByLeadSource(leadSource, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByStatus(status, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAccountName = async (req, res) => {
     const { accountName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAccountName(accountName, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByOpportunityName = async (req, res) => {
     const { opportunityName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByOpportunityName(opportunityName, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByOpportunityAmount = async (req, res) => {
     const { opportunityAmount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByOpportunityAmount(opportunityAmount, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPortalName = async (req, res) => {
     const { portalName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPortalName(portalName, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByPortalApp = async (req, res) => {
     const { portalApp } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByPortalApp(portalApp, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByWebsite = async (req, res) => {
     const { website } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByWebsite(website, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDescription(description, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByLawfulBasis = async (req, res) => {
     const { lawfulBasis } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByLawfulBasis(lawfulBasis, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByLeadSourceDescription = async (req, res) => {
     const { leadSourceDescription } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByLeadSourceDescription(leadSourceDescription, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByStatusDescription = async (req, res) => {
     const { statusDescription } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByStatusDescription(statusDescription, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAccountDescription = async (req, res) => {
     const { accountDescription } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAccountDescription(accountDescription, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDateEntered(dateEntered, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDateModified(dateModified, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByDateReviewed = async (req, res) => {
     const { dateReviewed } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByDateReviewed(dateReviewed, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByBirthdate = async (req, res) => {
     const { birthdate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByBirthdate(birthdate, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByModifiedUserId(modifiedUserId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByCreatedBy(createdBy, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAssignedUserId(assignedUserId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByReportsToId = async (req, res) => {
     const { reportsToId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByReportsToId(reportsToId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByContactId = async (req, res) => {
     const { contactId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByContactId(contactId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByAccountId = async (req, res) => {
     const { accountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByAccountId(accountId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByOpportunityId = async (req, res) => {
     const { opportunityId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByOpportunityId(opportunityId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

leadsCtrl.updateLeadByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objLead = await leadService.updateLeadByCampaignId(campaignId, req.body);
            if (!objLead) {
                util.setError(404, `Cannot find lead with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Lead updated', objLead);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = leadsCtrl;
//</es-section>
