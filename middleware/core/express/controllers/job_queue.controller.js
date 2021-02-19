/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:40 GMT-0400 (Bolivia Time)
 * Time: 18:37:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:40 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:40
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section>
const jobQueueService = require('../services/job_queue.service');
//</es-section>
require('../../../utils/Prototipes');
const Util = require('../../../utils/Utils');
const util = new Util();

// Controller for DB Mongoose

//<es-section>

//</es-section>

//<es-section>

const jobQueueCtrl = {};
jobQueueCtrl.service = jobQueueService;


jobQueueCtrl.getAllJobQueue = async (req, res) => {
    try {
        const objJobQueue = await jobQueueService.getAllJobQueue(req.query);
        if (objJobQueue.length > 0) {
            util.setSuccess(200, 'JobQueue retrieved', objJobQueue);
        } else {
            util.setSuccess(200, 'No jobQueue found');
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.getAJobQueue = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJobQueue = await jobQueueService.getAJobQueue(id, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the id ${id}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.addJobQueue = async (req, res) => {
    try {
        const objJobQueue = await jobQueueService.addJobQueue(req.body);
        util.setSuccess(201, 'JobQueue Added!', objJobQueue);
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.updateJobQueue = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please input a valid Char value');
            return util.send(res);
        }
        const objJobQueue = await jobQueueService.updateJobQueue(id, req.body);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the id: ${id}`);
        } else {
            util.setSuccess(200, 'JobQueue updated', objJobQueue);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};

jobQueueCtrl.deleteJobQueue = async (req, res) => {
    try {
        const { id } = req.params;
        if (!util.isChar(id)) {
            util.setError(400, 'Please provide a Char value');
            return util.send(res);
        }
        const objJobQueue = await jobQueueService.deleteJobQueue(id);
        if (objJobQueue) {
            util.setSuccess(200, 'JobQueue deleted', objJobQueue);
        } else {
            util.setError(404, `JobQueue with the id ${id} cannot be found`);
        }
        return util.send(res);
    } catch (e) {
        util.setError(400, e);
        return util.send(res);
    }
};



jobQueueCtrl.findOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const objJobQueue = await jobQueueService.findOneById(id, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByDeleted = async (req, res) => {
    try {
        const { deleted } = req.params;
        const objJobQueue = await jobQueueService.findOneByDeleted(deleted, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByRequeue = async (req, res) => {
    try {
        const { requeue } = req.params;
        const objJobQueue = await jobQueueService.findOneByRequeue(requeue, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByRetryCount = async (req, res) => {
    try {
        const { retryCount } = req.params;
        const objJobQueue = await jobQueueService.findOneByRetryCount(retryCount, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByFailureCount = async (req, res) => {
    try {
        const { failureCount } = req.params;
        const objJobQueue = await jobQueueService.findOneByFailureCount(failureCount, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByJobDelay = async (req, res) => {
    try {
        const { jobDelay } = req.params;
        const objJobQueue = await jobQueueService.findOneByJobDelay(jobDelay, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByPercentComplete = async (req, res) => {
    try {
        const { percentComplete } = req.params;
        const objJobQueue = await jobQueueService.findOneByPercentComplete(percentComplete, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByName = async (req, res) => {
    try {
        const { name } = req.params;
        const objJobQueue = await jobQueueService.findOneByName(name, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const objJobQueue = await jobQueueService.findOneByStatus(status, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByResolution = async (req, res) => {
    try {
        const { resolution } = req.params;
        const objJobQueue = await jobQueueService.findOneByResolution(resolution, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByTarget = async (req, res) => {
    try {
        const { target } = req.params;
        const objJobQueue = await jobQueueService.findOneByTarget(target, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByClient = async (req, res) => {
    try {
        const { client } = req.params;
        const objJobQueue = await jobQueueService.findOneByClient(client, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByMessage = async (req, res) => {
    try {
        const { message } = req.params;
        const objJobQueue = await jobQueueService.findOneByMessage(message, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByData = async (req, res) => {
    try {
        const { data } = req.params;
        const objJobQueue = await jobQueueService.findOneByData(data, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByDateEntered = async (req, res) => {
    try {
        const { dateEntered } = req.params;
        const objJobQueue = await jobQueueService.findOneByDateEntered(dateEntered, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByDateModified = async (req, res) => {
    try {
        const { dateModified } = req.params;
        const objJobQueue = await jobQueueService.findOneByDateModified(dateModified, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByExecuteTime = async (req, res) => {
    try {
        const { executeTime } = req.params;
        const objJobQueue = await jobQueueService.findOneByExecuteTime(executeTime, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneByAssignedUserId = async (req, res) => {
    try {
        const { assignedUserId } = req.params;
        const objJobQueue = await jobQueueService.findOneByAssignedUserId(assignedUserId, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}

jobQueueCtrl.findOneBySchedulerId = async (req, res) => {
    try {
        const { schedulerId } = req.params;
        const objJobQueue = await jobQueueService.findOneBySchedulerId(schedulerId, req.query);
        if (!objJobQueue) {
            util.setError(404, `Cannot find jobQueue with the lcObjLocalCommonFieldName ${lcObjLocalCommonFieldName}`);
        } else {
            util.setSuccess(200, 'Found jobQueue', objJobQueue);
        }
        return util.send(res);
    } catch(e) {
        util.setError(400, e);
        return util.send(res);
    }
}



jobQueueCtrl.updateJobQueueById = async (req, res) => {
     const { id } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueById(id, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByDeleted = async (req, res) => {
     const { deleted } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByDeleted(deleted, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByRequeue = async (req, res) => {
     const { requeue } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByRequeue(requeue, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByRetryCount = async (req, res) => {
     const { retryCount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByRetryCount(retryCount, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByFailureCount = async (req, res) => {
     const { failureCount } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByFailureCount(failureCount, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByJobDelay = async (req, res) => {
     const { jobDelay } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByJobDelay(jobDelay, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByPercentComplete = async (req, res) => {
     const { percentComplete } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByPercentComplete(percentComplete, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByName = async (req, res) => {
     const { name } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByName(name, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByStatus = async (req, res) => {
     const { status } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByStatus(status, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByResolution = async (req, res) => {
     const { resolution } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByResolution(resolution, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByTarget = async (req, res) => {
     const { target } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByTarget(target, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByClient = async (req, res) => {
     const { client } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByClient(client, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByMessage = async (req, res) => {
     const { message } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByMessage(message, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByData = async (req, res) => {
     const { data } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByData(data, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByDateEntered = async (req, res) => {
     const { dateEntered } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByDateEntered(dateEntered, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByDateModified = async (req, res) => {
     const { dateModified } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByDateModified(dateModified, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByExecuteTime = async (req, res) => {
     const { executeTime } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByExecuteTime(executeTime, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueByAssignedUserId = async (req, res) => {
     const { assignedUserId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueByAssignedUserId(assignedUserId, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}

jobQueueCtrl.updateJobQueueBySchedulerId = async (req, res) => {
     const { schedulerId } = req.params;
        try {
            if (!util.isChar(id)) {
                util.setError(400, 'Please input a valid Char value');
                return util.send(res);
            }
            const objJobQueue = await jobQueueService.updateJobQueueBySchedulerId(schedulerId, req.body);
            if (!objJobQueue) {
                util.setError(404, `Cannot find jobQueue with the id: ${id}`);
            } else {
                util.setSuccess(200, 'JobQueue updated', objJobQueue);
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
}







//</es-section>

//<es-section>
module.exports = jobQueueCtrl;
//</es-section>
