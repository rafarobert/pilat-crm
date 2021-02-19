/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Time: 2:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:41
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.fieldsMetaData', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/fields-meta-data/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'text', defaultValue: null },
		
		{ name: 'required', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'audited', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'massupdate', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'reportable', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'len', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'vname', type: 'text', defaultValue: null },
		
		{ name: 'comments', type: 'text', defaultValue: null },
		
		{ name: 'help', type: 'text', defaultValue: null },
		
		{ name: 'custom_module', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'default_value', type: 'text', defaultValue: null },
		
		{ name: 'importable', type: 'text', defaultValue: null },
		
		{ name: 'ext1', type: 'text', defaultValue: null },
		
		{ name: 'ext2', type: 'text', defaultValue: null },
		
		{ name: 'ext3', type: 'text', defaultValue: null },
		
		{ name: 'ext4', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
