/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Time: 2:41:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:15
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aokKnowledgebase', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aok-knowledgebase/',
		//</es-section>
		reader: {
			type: 'json',
			root: 'data'
		}
	},

	fields: [
		//<es-section>
		
		{ name: 'id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'deleted', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'status', type: 'text', defaultValue: null },
		
		{ name: 'revision', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'additional_info', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'user_id_c', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'user_id1_c', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
