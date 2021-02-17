/**
 * Created by @ES Express Systems
 * User: #userCreated
 * Date: #dateCreated
 * Time: #timeCreated
 * Last User updated: #userUpdated
 * Last date updated: #dateUpdated
 * Last time updated: #timeUpdated
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.lcObjPLocalTableName', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-esvender/local-table-name/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		//</es-section>
	]
});
