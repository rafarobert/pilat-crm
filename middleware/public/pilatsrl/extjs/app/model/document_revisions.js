/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Time: 2:42:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:26
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.documentRevisions', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/document-revisions/',
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
		
		{ name: 'change_log', type: 'text', defaultValue: null },
		
		{ name: 'document_id', type: 'text', defaultValue: null },
		
		{ name: 'doc_id', type: 'text', defaultValue: null },
		
		{ name: 'doc_type', type: 'text', defaultValue: null },
		
		{ name: 'doc_url', type: 'text', defaultValue: null },
		
		{ name: 'filename', type: 'text', defaultValue: null },
		
		{ name: 'file_ext', type: 'text', defaultValue: null },
		
		{ name: 'file_mime_type', type: 'text', defaultValue: null },
		
		{ name: 'revision', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
