/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Dec 19 2020 19:45:25 GMT-0400 (Bolivia Time)
 * Time: 19:45:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Dec 19 2020 19:45:25 GMT-0400 (Bolivia Time)
 * Last time updated: 19:45:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import initCoreRoutes from '../core/express/routes/routes';
import app from "../index";

const initApiRoutes = function (app) {

// Routes API
// app.use("/", require("./app/src/bpmn/bpmn.routes"));

	initCoreRoutes(app);

	app.use("/", require("./src/auth/auth.routes"));

	app.use("/", require("./src/sequelize/sequelize.routes"));

	app.use("/", require("./src/install/install.routes"));

	app.use("/", require("./src/crm/lead/lead.routes"));

	app.use("/", require("./src/crm/opportunity/opportunity.routes"));

	app.use("/", require("./src/crm/user/user.routes"));

	app.use("/", require("./src/crm/contact/contact.routes"));

	app.use("/", require("./src/crm/aos-quote/aos-quote.routes"));

	app.use("/", require("./src/crm/account/account.routes"));

	app.use("/", require("./src/crm/call/call.routes"));

}

export default initApiRoutes;
