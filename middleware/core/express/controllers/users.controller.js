/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:56 GMT-0400 (Bolivia Time)
 * Time: 0:23:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:56 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:56
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const userService = require('../services/users.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const usersCtrl = {};
usersCtrl.service = userService;


usersCtrl.getAllUsers = async (req, res) => {
    try {
        const objUsers = await userService.getAllUsers(req.query);
        if (objUsers.length > 0) {
            util.setSuccess(200, 'Users retrieved', objUsers);
        } else {
            util.setSuccess(200, 'No user found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.getAUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUser = await userService.getAUser(id, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.addUser = async (req, res) => {
    try {
        const objUser = await userService.addUser(req.body);
        util.setSuccess(201, 'User Added!', objUser);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objUser = await userService.updateUser(id, req.body);
        if (!objUser) {
            util.setError(404, `Cannot find user with the id: ${id}`);
        } else {
            util.setSuccess(200, 'User updated', objUser);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

usersCtrl.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objUser = await userService.deleteUser(id);
        if (objUser) {
            util.setSuccess(200, 'User deleted', objUser);
        } else {
            util.setError(404, `User with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



usersCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objUser = await userService.findOneById(id, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneBySystemGeneratedPassword = async (req, res) => {
    try {
        const { systemGeneratedPassword } = req.params;
        const objUser = await userService.findOneBySystemGeneratedPassword(systemGeneratedPassword, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneBySugarLogin = async (req, res) => {
    try {
        const { sugarLogin } = req.params;
        const objUser = await userService.findOneBySugarLogin(sugarLogin, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByIsAdmin = async (req, res) => {
    try {
        const { isAdmin } = req.params;
        const objUser = await userService.findOneByIsAdmin(isAdmin, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByExternalAuthOnly = async (req, res) => {
    try {
        const { externalAuthOnly } = req.params;
        const objUser = await userService.findOneByExternalAuthOnly(externalAuthOnly, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByReceiveNotifications = async (req, res) => {
    try {
        const { receiveNotifications } = req.params;
        const objUser = await userService.findOneByReceiveNotifications(receiveNotifications, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objUser = await userService.findOneByDeleted(deleted, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPortalOnly = async (req, res) => {
    try {
        const { portalOnly } = req.params;
        const objUser = await userService.findOneByPortalOnly(portalOnly, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByShowOnEmployees = async (req, res) => {
    try {
        const { showOnEmployees } = req.params;
        const objUser = await userService.findOneByShowOnEmployees(showOnEmployees, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByIsGroup = async (req, res) => {
    try {
        const { isGroup } = req.params;
        const objUser = await userService.findOneByIsGroup(isGroup, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByFactorAuth = async (req, res) => {
    try {
        const { factorAuth } = req.params;
        const objUser = await userService.findOneByFactorAuth(factorAuth, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByUserName = async (req, res) => {
    try {
        const { userName } = req.params;
        const objUser = await userService.findOneByUserName(userName, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByUserHash = async (req, res) => {
    try {
        const { userHash } = req.params;
        const objUser = await userService.findOneByUserHash(userHash, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAuthenticateId = async (req, res) => {
    try {
        const { authenticateId } = req.params;
        const objUser = await userService.findOneByAuthenticateId(authenticateId, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByFirstName = async (req, res) => {
    try {
        const { firstName } = req.params;
        const objUser = await userService.findOneByFirstName(firstName, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByLastName = async (req, res) => {
    try {
        const { lastName } = req.params;
        const objUser = await userService.findOneByLastName(lastName, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const objUser = await userService.findOneByTitle(title, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoto = async (req, res) => {
    try {
        const { photo } = req.params;
        const objUser = await userService.findOneByPhoto(photo, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByDepartment = async (req, res) => {
    try {
        const { department } = req.params;
        const objUser = await userService.findOneByDepartment(department, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoneHome = async (req, res) => {
    try {
        const { phoneHome } = req.params;
        const objUser = await userService.findOneByPhoneHome(phoneHome, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoneMobile = async (req, res) => {
    try {
        const { phoneMobile } = req.params;
        const objUser = await userService.findOneByPhoneMobile(phoneMobile, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoneWork = async (req, res) => {
    try {
        const { phoneWork } = req.params;
        const objUser = await userService.findOneByPhoneWork(phoneWork, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoneOther = async (req, res) => {
    try {
        const { phoneOther } = req.params;
        const objUser = await userService.findOneByPhoneOther(phoneOther, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPhoneFax = async (req, res) => {
    try {
        const { phoneFax } = req.params;
        const objUser = await userService.findOneByPhoneFax(phoneFax, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objUser = await userService.findOneByStatus(status, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAddressStreet = async (req, res) => {
    try {
        const { addressStreet } = req.params;
        const objUser = await userService.findOneByAddressStreet(addressStreet, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAddressCity = async (req, res) => {
    try {
        const { addressCity } = req.params;
        const objUser = await userService.findOneByAddressCity(addressCity, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAddressState = async (req, res) => {
    try {
        const { addressState } = req.params;
        const objUser = await userService.findOneByAddressState(addressState, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAddressCountry = async (req, res) => {
    try {
        const { addressCountry } = req.params;
        const objUser = await userService.findOneByAddressCountry(addressCountry, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByAddressPostalcode = async (req, res) => {
    try {
        const { addressPostalcode } = req.params;
        const objUser = await userService.findOneByAddressPostalcode(addressPostalcode, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByEmployeeStatus = async (req, res) => {
    try {
        const { employeeStatus } = req.params;
        const objUser = await userService.findOneByEmployeeStatus(employeeStatus, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByMessengerId = async (req, res) => {
    try {
        const { messengerId } = req.params;
        const objUser = await userService.findOneByMessengerId(messengerId, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByMessengerType = async (req, res) => {
    try {
        const { messengerType } = req.params;
        const objUser = await userService.findOneByMessengerType(messengerType, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByFactorAuthInterface = async (req, res) => {
    try {
        const { factorAuthInterface } = req.params;
        const objUser = await userService.findOneByFactorAuthInterface(factorAuthInterface, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByDescription = async (req, res) => {
    try {
        const { description } = req.params;
        const objUser = await userService.findOneByDescription(description, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByPwdLastChanged = async (req, res) => {
    try {
        const { pwdLastChanged } = req.params;
        const objUser = await userService.findOneByPwdLastChanged(pwdLastChanged, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objUser = await userService.findOneByDateEntered(dateEntered, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objUser = await userService.findOneByDateModified(dateModified, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByModifiedUserId = async (req, res) => {
    try {
        const { modifiedUserId } = req.params;
        const objUser = await userService.findOneByModifiedUserId(modifiedUserId, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByCreatedBy = async (req, res) => {
    try {
        const { createdBy } = req.params;
        const objUser = await userService.findOneByCreatedBy(createdBy, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

usersCtrl.findOneByReportsToId = async (req, res) => {
    try {
        const { reportsToId } = req.params;
        const objUser = await userService.findOneByReportsToId(reportsToId, req.query);
        if (!objUser) {
            util.setError(404, `Cannot find user with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found user', objUser);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



usersCtrl.updateUserById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserById(id, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserBySystemGeneratedPassword = async (req, res) => {
     const { systemGeneratedPassword } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserBySystemGeneratedPassword(systemGeneratedPassword, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserBySugarLogin = async (req, res) => {
     const { sugarLogin } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserBySugarLogin(sugarLogin, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByIsAdmin = async (req, res) => {
     const { isAdmin } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByIsAdmin(isAdmin, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByExternalAuthOnly = async (req, res) => {
     const { externalAuthOnly } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByExternalAuthOnly(externalAuthOnly, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByReceiveNotifications = async (req, res) => {
     const { receiveNotifications } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByReceiveNotifications(receiveNotifications, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByDeleted(deleted, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPortalOnly = async (req, res) => {
     const { portalOnly } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPortalOnly(portalOnly, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByShowOnEmployees = async (req, res) => {
     const { showOnEmployees } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByShowOnEmployees(showOnEmployees, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByIsGroup = async (req, res) => {
     const { isGroup } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByIsGroup(isGroup, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByFactorAuth = async (req, res) => {
     const { factorAuth } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByFactorAuth(factorAuth, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByUserName = async (req, res) => {
     const { userName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByUserName(userName, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByUserHash = async (req, res) => {
     const { userHash } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByUserHash(userHash, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAuthenticateId = async (req, res) => {
     const { authenticateId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAuthenticateId(authenticateId, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByFirstName = async (req, res) => {
     const { firstName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByFirstName(firstName, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByLastName = async (req, res) => {
     const { lastName } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByLastName(lastName, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByTitle = async (req, res) => {
     const { title } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByTitle(title, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoto = async (req, res) => {
     const { photo } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoto(photo, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByDepartment = async (req, res) => {
     const { department } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByDepartment(department, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoneHome = async (req, res) => {
     const { phoneHome } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoneHome(phoneHome, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoneMobile = async (req, res) => {
     const { phoneMobile } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoneMobile(phoneMobile, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoneWork = async (req, res) => {
     const { phoneWork } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoneWork(phoneWork, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoneOther = async (req, res) => {
     const { phoneOther } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoneOther(phoneOther, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPhoneFax = async (req, res) => {
     const { phoneFax } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPhoneFax(phoneFax, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByStatus(status, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAddressStreet = async (req, res) => {
     const { addressStreet } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAddressStreet(addressStreet, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAddressCity = async (req, res) => {
     const { addressCity } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAddressCity(addressCity, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAddressState = async (req, res) => {
     const { addressState } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAddressState(addressState, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAddressCountry = async (req, res) => {
     const { addressCountry } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAddressCountry(addressCountry, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByAddressPostalcode = async (req, res) => {
     const { addressPostalcode } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByAddressPostalcode(addressPostalcode, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByEmployeeStatus = async (req, res) => {
     const { employeeStatus } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByEmployeeStatus(employeeStatus, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByMessengerId = async (req, res) => {
     const { messengerId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByMessengerId(messengerId, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByMessengerType = async (req, res) => {
     const { messengerType } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByMessengerType(messengerType, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByFactorAuthInterface = async (req, res) => {
     const { factorAuthInterface } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByFactorAuthInterface(factorAuthInterface, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByDescription = async (req, res) => {
     const { description } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByDescription(description, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByPwdLastChanged = async (req, res) => {
     const { pwdLastChanged } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByPwdLastChanged(pwdLastChanged, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByDateEntered(dateEntered, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByDateModified(dateModified, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByModifiedUserId = async (req, res) => {
     const { modifiedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByModifiedUserId(modifiedUserId, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByCreatedBy = async (req, res) => {
     const { createdBy } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByCreatedBy(createdBy, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

usersCtrl.updateUserByReportsToId = async (req, res) => {
     const { reportsToId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objUser = await userService.updateUserByReportsToId(reportsToId, req.body);
            if (!objUser) {
                util.setError(404, `Cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'User updated', objUser);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = usersCtrl;
//</es-section>
