/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Time: 2:41:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:5
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.amTasktemplatesAmProjecttemplatesC', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/am-tasktemplates-am-projecttemplates-c/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'text', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'am_tasktemplates_am_projecttemplatesam_projecttemplates_ida', type: 'text', defaultValue: null },
		
		{ name: 'am_tasktemplates_am_projecttemplatesam_tasktemplates_idb', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
