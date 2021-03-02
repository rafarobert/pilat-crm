/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:50 GMT-0400 (Bolivia Time)
 * Time: 14:0:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:50 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const fieldsMetaDataCtrl = require("../controllers/fields_meta_data.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/fields-meta-data/findOneById/:id`, (req, res) => fieldsMetaDataCtrl.findOneById(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByRequired/:required`, (req, res) => fieldsMetaDataCtrl.findOneByRequired(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByDeleted/:deleted`, (req, res) => fieldsMetaDataCtrl.findOneByDeleted(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByAudited/:audited`, (req, res) => fieldsMetaDataCtrl.findOneByAudited(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByMassupdate/:massupdate`, (req, res) => fieldsMetaDataCtrl.findOneByMassupdate(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByReportable/:reportable`, (req, res) => fieldsMetaDataCtrl.findOneByReportable(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByLen/:len`, (req, res) => fieldsMetaDataCtrl.findOneByLen(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByName/:name`, (req, res) => fieldsMetaDataCtrl.findOneByName(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByVname/:vname`, (req, res) => fieldsMetaDataCtrl.findOneByVname(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByComments/:comments`, (req, res) => fieldsMetaDataCtrl.findOneByComments(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByHelp/:help`, (req, res) => fieldsMetaDataCtrl.findOneByHelp(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByCustomModule/:customModule`, (req, res) => fieldsMetaDataCtrl.findOneByCustomModule(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByType/:type`, (req, res) => fieldsMetaDataCtrl.findOneByType(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByDefaultValue/:defaultValue`, (req, res) => fieldsMetaDataCtrl.findOneByDefaultValue(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByImportable/:importable`, (req, res) => fieldsMetaDataCtrl.findOneByImportable(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByExt1/:ext1`, (req, res) => fieldsMetaDataCtrl.findOneByExt1(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByExt2/:ext2`, (req, res) => fieldsMetaDataCtrl.findOneByExt2(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByExt3/:ext3`, (req, res) => fieldsMetaDataCtrl.findOneByExt3(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByExt4/:ext4`, (req, res) => fieldsMetaDataCtrl.findOneByExt4(req, res));

router.get(`/api-${sys}/fields-meta-data/findOneByDateModified/:dateModified`, (req, res) => fieldsMetaDataCtrl.findOneByDateModified(req, res));



router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataById`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataById(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByRequired`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByRequired(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByDeleted`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByDeleted(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByAudited`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByAudited(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByMassupdate`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByMassupdate(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByReportable`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByReportable(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByLen`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByLen(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByName`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByName(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByVname`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByVname(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByComments`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByComments(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByHelp`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByHelp(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByCustomModule`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByCustomModule(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByType`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByType(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByDefaultValue`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByDefaultValue(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByImportable`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByImportable(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByExt1`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByExt1(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByExt2`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByExt2(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByExt3`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByExt3(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByExt4`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByExt4(req, res));

router.post(`/api-${sys}/fields-meta-data/updateFieldMetaDataByDateModified`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaDataByDateModified(req, res));





router.get(`/api-${sys}/fields-meta-data/`, (req, res) => fieldsMetaDataCtrl.getAllFieldsMetaData(req, res));
router.post(`/api-${sys}/fields-meta-data/`, (req, res) => fieldsMetaDataCtrl.addFieldMetaData(req, res));
router.get(`/api-${sys}/fields-meta-data/:id`, (req, res) => fieldsMetaDataCtrl.getAFieldMetaData(req, res));
router.put(`/api-${sys}/fields-meta-data/:id`, (req, res) => fieldsMetaDataCtrl.updateFieldMetaData(req, res));
router.delete(`/api-${sys}/fields-meta-data/:id`, (req, res) => fieldsMetaDataCtrl.deleteFieldMetaData(req, res));

//</es-section>
module.exports = router;
