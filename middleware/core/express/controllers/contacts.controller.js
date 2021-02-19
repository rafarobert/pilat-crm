/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:45 GMT-0400 (Bolivia Time)
 * Time: 18:36:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:45 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:45
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const contactService = require('../services/contacts.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const contactsCtrl = {};
contactsCtrl.service = contactService;


contactsCtrl.getAllContacts = async (req, res) => {
    try {
        const objContacts = await contactService.getAllContacts(req.query);
        if (objContacts.length > 0) {
            util.setSuccess(200, 'Contacts retrieved', objContacts);
        } else {
            util.setSuccess(200, 'No contact found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.getAContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContact = await contactService.getAContact(id, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.addContact = async (req, res) => {
    try {
        const objContact = await contactService.addContact(req.body);
        util.setSuccess(201, 'Contact Added!', objContact);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objContact = await contactService.updateContact(id, req.body);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the id: ${id}`);
        } else {
            util.setSuccess(200, 'Contact updated', objContact);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

contactsCtrl.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objContact = await contactService.deleteContact(id);
        if (objContact) {
            util.setSuccess(200, 'Contact deleted', objContact);
        } else {
            util.setError(404, `Contact with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



contactsCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objContact = await contactService.findOneById(id, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objContact = await contactService.findOneByDeleted(deleted, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDoNotCall = async (req, res) => {
    try {
        const { doNotCall } = req.params;
        const objContact = await contactService.findOneByDoNotCall(doNotCall, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPortalAccountDisabled = async (req, res) => {
    try {
        const { portalAccountDisabled } = req.params;
        const objContact = await contactService.findOneByPortalAccountDisabled(portalAccountDisabled, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneBySalutation = async (req, res) => {
    try {
        const { salutation } = req.params;
        const objContact = await contactService.findOneBySalutation(salutation, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByFirstName = async (req, res) => {
    try {
        const { firstName } = req.params;
        const objContact = await contactService.findOneByFirstName(firstName, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByLastName = async (req, res) => {
    try {
        const { lastName } = req.params;
        const objContact = await contactService.findOneByLastName(lastName, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const objContact = await contactService.findOneByTitle(title, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoto = async (req, res) => {
    try {
        const { photo } = req.params;
        const objContact = await contactService.findOneByPhoto(photo, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDepartment = async (req, res) => {
    try {
        const { department } = req.params;
        const objContact = await contactService.findOneByDepartment(department, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoneHome = async (req, res) => {
    try {
        const { phoneHome } = req.params;
        const objContact = await contactService.findOneByPhoneHome(phoneHome, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoneMobile = async (req, res) => {
    try {
        const { phoneMobile } = req.params;
        const objContact = await contactService.findOneByPhoneMobile(phoneMobile, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoneWork = async (req, res) => {
    try {
        const { phoneWork } = req.params;
        const objContact = await contactService.findOneByPhoneWork(phoneWork, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoneOther = async (req, res) => {
    try {
        const { phoneOther } = req.params;
        const objContact = await contactService.findOneByPhoneOther(phoneOther, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPhoneFax = async (req, res) => {
    try {
        const { phoneFax } = req.params;
        const objContact = await contactService.findOneByPhoneFax(phoneFax, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByLawfulBasisSource = async (req, res) => {
    try {
        const { lawfulBasisSource } = req.params;
        const objContact = await contactService.findOneByLawfulBasisSource(lawfulBasisSource, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPrimaryAddressStreet = async (req, res) => {
    try {
        const { primaryAddressStreet } = req.params;
        const objContact = await contactService.findOneByPrimaryAddressStreet(primaryAddressStreet, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPrimaryAddressCity = async (req, res) => {
    try {
        const { primaryAddressCity } = req.params;
        const objContact = await contactService.findOneByPrimaryAddressCity(primaryAddressCity, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPrimaryAddressState = async (req, res) => {
    try {
        const { primaryAddressState } = req.params;
        const objContact = await contactService.findOneByPrimaryAddressState(primaryAddressState, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPrimaryAddressPostalcode = async (req, res) => {
    try {
        const { primaryAddressPostalcode } = req.params;
        const objContact = await contactService.findOneByPrimaryAddressPostalcode(primaryAddressPostalcode, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPrimaryAddressCountry = async (req, res) => {
    try {
        const { primaryAddressCountry } = req.params;
        const objContact = await contactService.findOneByPrimaryAddressCountry(primaryAddressCountry, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAltAddressStreet = async (req, res) => {
    try {
        const { altAddressStreet } = req.params;
        const objContact = await contactService.findOneByAltAddressStreet(altAddressStreet, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAltAddressCity = async (req, res) => {
    try {
        const { altAddressCity } = req.params;
        const objContact = await contactService.findOneByAltAddressCity(altAddressCity, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAltAddressState = async (req, res) => {
    try {
        const { altAddressState } = req.params;
        const objContact = await contactService.findOneByAltAddressState(altAddressState, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAltAddressPostalcode = async (req, res) => {
    try {
        const { altAddressPostalcode } = req.params;
        const objContact = await contactService.findOneByAltAddressPostalcode(altAddressPostalcode, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAltAddressCountry = async (req, res) => {
    try {
        const { altAddressCountry } = req.params;
        const objContact = await contactService.findOneByAltAddressCountry(altAddressCountry, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAssistant = async (req, res) => {
    try {
        const { assistant } = req.params;
        const objContact = await contactService.findOneByAssistant(assistant, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAssistantPhone = async (req, res) => {
    try {
        const { assistantPhone } = req.params;
        const objContact = await contactService.findOneByAssistantPhone(assistantPhone, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByLeadSource = async (req, res) => {
    try {
        const { leadSource } = req.params;
        const objContact = await contactService.findOneByLeadSource(leadSource, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByJoomlaAccountId = async (req, res) => {
    try {
        const { joomlaAccountId } = req.params;
        const objContact = await contactService.findOneByJoomlaAccountId(joomlaAccountId, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByPortalUserType = async (req, res) => {
    try {
        const { portalUserType } = req.params;
        const objContact = await contactService.findOneByPortalUserType(portalUserType, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objContact = await contactService.findOneByDescription(description, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByLawfulBasis = async (req, res) => {
    try {
        const { lawfulBasis } = req.params;
        const objContact = await contactService.findOneByLawfulBasis(lawfulBasis, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objContact = await contactService.findOneByDateEntered(dateEntered, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objContact = await contactService.findOneByDateModified(dateModified, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByDateReviewed = async (req, res) => {
    try {
        const { dateReviewed } = req.params;
        const objContact = await contactService.findOneByDateReviewed(dateReviewed, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByBirthdate = async (req, res) => {
    try {
        const { birthdate } = req.params;
        const objContact = await contactService.findOneByBirthdate(birthdate, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objContact = await contactService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objContact = await contactService.findOneByCreatedBy(createdBy, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objContact = await contactService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByReportsToId = async (req, res) => {
    try {
        const { reportsToId } = req.params;
        const objContact = await contactService.findOneByReportsToId(reportsToId, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

contactsCtrl.findOneByCampaignId = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const objContact = await contactService.findOneByCampaignId(campaignId, req.query);
        if (!objContact) {
            util.setError(404, `Cannot find contact with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found contact', objContact);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



contactsCtrl.updateContactById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactById(id, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDeleted(deleted, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDoNotCall = async (req, res) => {
     const { doNotCall } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDoNotCall(doNotCall, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPortalAccountDisabled = async (req, res) => {
     const { portalAccountDisabled } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPortalAccountDisabled(portalAccountDisabled, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactBySalutation = async (req, res) => {
     const { salutation } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactBySalutation(salutation, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByFirstName = async (req, res) => {
     const { firstName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByFirstName(firstName, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByLastName = async (req, res) => {
     const { lastName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByLastName(lastName, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByTitle = async (req, res) => {
     const { title } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByTitle(title, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoto = async (req, res) => {
     const { photo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoto(photo, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDepartment = async (req, res) => {
     const { department } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDepartment(department, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoneHome = async (req, res) => {
     const { phoneHome } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoneHome(phoneHome, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoneMobile = async (req, res) => {
     const { phoneMobile } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoneMobile(phoneMobile, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoneWork = async (req, res) => {
     const { phoneWork } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoneWork(phoneWork, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoneOther = async (req, res) => {
     const { phoneOther } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoneOther(phoneOther, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPhoneFax = async (req, res) => {
     const { phoneFax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPhoneFax(phoneFax, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByLawfulBasisSource = async (req, res) => {
     const { lawfulBasisSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByLawfulBasisSource(lawfulBasisSource, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPrimaryAddressStreet = async (req, res) => {
     const { primaryAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPrimaryAddressStreet(primaryAddressStreet, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPrimaryAddressCity = async (req, res) => {
     const { primaryAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPrimaryAddressCity(primaryAddressCity, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPrimaryAddressState = async (req, res) => {
     const { primaryAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPrimaryAddressState(primaryAddressState, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPrimaryAddressPostalcode = async (req, res) => {
     const { primaryAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPrimaryAddressPostalcode(primaryAddressPostalcode, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPrimaryAddressCountry = async (req, res) => {
     const { primaryAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPrimaryAddressCountry(primaryAddressCountry, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAltAddressStreet = async (req, res) => {
     const { altAddressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAltAddressStreet(altAddressStreet, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAltAddressCity = async (req, res) => {
     const { altAddressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAltAddressCity(altAddressCity, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAltAddressState = async (req, res) => {
     const { altAddressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAltAddressState(altAddressState, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAltAddressPostalcode = async (req, res) => {
     const { altAddressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAltAddressPostalcode(altAddressPostalcode, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAltAddressCountry = async (req, res) => {
     const { altAddressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAltAddressCountry(altAddressCountry, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAssistant = async (req, res) => {
     const { assistant } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAssistant(assistant, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAssistantPhone = async (req, res) => {
     const { assistantPhone } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAssistantPhone(assistantPhone, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByLeadSource = async (req, res) => {
     const { leadSource } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByLeadSource(leadSource, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByJoomlaAccountId = async (req, res) => {
     const { joomlaAccountId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByJoomlaAccountId(joomlaAccountId, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByPortalUserType = async (req, res) => {
     const { portalUserType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByPortalUserType(portalUserType, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDescription(description, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByLawfulBasis = async (req, res) => {
     const { lawfulBasis } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByLawfulBasis(lawfulBasis, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDateEntered(dateEntered, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDateModified(dateModified, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByDateReviewed = async (req, res) => {
     const { dateReviewed } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByDateReviewed(dateReviewed, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByBirthdate = async (req, res) => {
     const { birthdate } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByBirthdate(birthdate, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByModifiedUserId(modifiedUserId, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByCreatedBy(createdBy, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByAssignedUserId(assignedUserId, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByReportsToId = async (req, res) => {
     const { reportsToId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByReportsToId(reportsToId, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

contactsCtrl.updateContactByCampaignId = async (req, res) => {
     const { campaignId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objContact = await contactService.updateContactByCampaignId(campaignId, req.body);
            if (!objContact) {
                util.setError(404, `Cannot find contact with the id: ${id}`);
            } else {
                util.setSuccess(200, 'Contact updated', objContact);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = contactsCtrl;
//</es-section>
