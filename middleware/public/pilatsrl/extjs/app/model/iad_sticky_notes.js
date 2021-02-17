/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Time: 2:42:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:50
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.iadStickyNotes', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/iad-sticky-notes/',
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
		
		{ name: 'document_name', type: 'text', defaultValue: null },
		
		{ name: 'filename', type: 'text', defaultValue: null },
		
		{ name: 'file_ext', type: 'text', defaultValue: null },
		
		{ name: 'file_mime_type', type: 'text', defaultValue: null },
		
		{ name: 'category_id', type: 'text', defaultValue: null },
		
		{ name: 'subcategory_id', type: 'text', defaultValue: null },
		
		{ name: 'status_id', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'active_date', type: 'date', defaultValue: null },
		
		{ name: 'exp_date', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
