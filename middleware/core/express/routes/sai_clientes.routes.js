/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:37 GMT-0400 (Bolivia Time)
 * Time: 18:38:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:37 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import configJson from '../../../config/config';
const sys = configJson.system;
const express = require("express");
const router = express.Router();
//const authenticateToken = require("../../../config/token");

//<es-section>
const saiClientesCtrl = require("../controllers/sai_clientes.controller");
//</es-section>
//<es-section>



router.get(`/api-${sys}/sai-clientes/findOneByGbagecage/:gbagecage`, (req, res) => saiClientesCtrl.findOneByGbagecage(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByIlsupcage/:ilsupcage`, (req, res) => saiClientesCtrl.findOneByIlsupcage(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagetper/:gbagetper`, (req, res) => saiClientesCtrl.findOneByGbagetper(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagesexo/:gbagesexo`, (req, res) => saiClientesCtrl.findOneByGbagesexo(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagenruc/:gbagenruc`, (req, res) => saiClientesCtrl.findOneByGbagenruc(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagendid/:gbagendid`, (req, res) => saiClientesCtrl.findOneByGbagendid(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagecorg/:gbagecorg`, (req, res) => saiClientesCtrl.findOneByGbagecorg(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbageappa/:gbageappa`, (req, res) => saiClientesCtrl.findOneByGbageappa(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbageapma/:gbageapma`, (req, res) => saiClientesCtrl.findOneByGbageapma(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByPrefijo/:prefijo`, (req, res) => saiClientesCtrl.findOneByPrefijo(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbageapca/:gbageapca`, (req, res) => saiClientesCtrl.findOneByGbageapca(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagenoms/:gbagenoms`, (req, res) => saiClientesCtrl.findOneByGbagenoms(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagenomb/:gbagenomb`, (req, res) => saiClientesCtrl.findOneByGbagenomb(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl1/:gbtlfntl1`, (req, res) => saiClientesCtrl.findOneByGbtlfntl1(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl2/:gbtlfntl2`, (req, res) => saiClientesCtrl.findOneByGbtlfntl2(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl3/:gbtlfntl3`, (req, res) => saiClientesCtrl.findOneByGbtlfntl3(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl4/:gbtlfntl4`, (req, res) => saiClientesCtrl.findOneByGbtlfntl4(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl5/:gbtlfntl5`, (req, res) => saiClientesCtrl.findOneByGbtlfntl5(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbtlfntl6/:gbtlfntl6`, (req, res) => saiClientesCtrl.findOneByGbtlfntl6(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbpaidesc/:gbpaidesc`, (req, res) => saiClientesCtrl.findOneByGbpaidesc(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbdptdesc/:gbdptdesc`, (req, res) => saiClientesCtrl.findOneByGbdptdesc(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbciudesc/:gbciudesc`, (req, res) => saiClientesCtrl.findOneByGbciudesc(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbdirdire/:gbdirdire`, (req, res) => saiClientesCtrl.findOneByGbdirdire(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbemamail/:gbemamail`, (req, res) => saiClientesCtrl.findOneByGbemamail(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagefnac/:gbagefnac`, (req, res) => saiClientesCtrl.findOneByGbagefnac(req, res));

router.get(`/api-${sys}/sai-clientes/findOneByGbagefreg/:gbagefreg`, (req, res) => saiClientesCtrl.findOneByGbagefreg(req, res));



router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagecage`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagecage(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByIlsupcage`, (req, res) => saiClientesCtrl.updateSaiClienteByIlsupcage(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagetper`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagetper(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagesexo`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagesexo(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagenruc`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagenruc(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagendid`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagendid(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagecorg`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagecorg(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbageappa`, (req, res) => saiClientesCtrl.updateSaiClienteByGbageappa(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbageapma`, (req, res) => saiClientesCtrl.updateSaiClienteByGbageapma(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByPrefijo`, (req, res) => saiClientesCtrl.updateSaiClienteByPrefijo(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbageapca`, (req, res) => saiClientesCtrl.updateSaiClienteByGbageapca(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagenoms`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagenoms(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagenomb`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagenomb(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl1`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl1(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl2`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl2(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl3`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl3(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl4`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl4(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl5`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl5(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbtlfntl6`, (req, res) => saiClientesCtrl.updateSaiClienteByGbtlfntl6(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbpaidesc`, (req, res) => saiClientesCtrl.updateSaiClienteByGbpaidesc(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbdptdesc`, (req, res) => saiClientesCtrl.updateSaiClienteByGbdptdesc(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbciudesc`, (req, res) => saiClientesCtrl.updateSaiClienteByGbciudesc(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbdirdire`, (req, res) => saiClientesCtrl.updateSaiClienteByGbdirdire(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbemamail`, (req, res) => saiClientesCtrl.updateSaiClienteByGbemamail(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagefnac`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagefnac(req, res));

router.post(`/api-${sys}/sai-clientes/updateSaiClienteByGbagefreg`, (req, res) => saiClientesCtrl.updateSaiClienteByGbagefreg(req, res));





router.get(`/api-${sys}/sai-clientes/`, (req, res) => saiClientesCtrl.getAllSaiClientes(req, res));
router.post(`/api-${sys}/sai-clientes/`, (req, res) => saiClientesCtrl.addSaiCliente(req, res));
router.get(`/api-${sys}/sai-clientes/:gbagecage`, (req, res) => saiClientesCtrl.getASaiCliente(req, res));
router.put(`/api-${sys}/sai-clientes/:gbagecage`, (req, res) => saiClientesCtrl.updateSaiCliente(req, res));
router.delete(`/api-${sys}/sai-clientes/:gbagecage`, (req, res) => saiClientesCtrl.deleteSaiCliente(req, res));

//</es-section>
module.exports = router;
