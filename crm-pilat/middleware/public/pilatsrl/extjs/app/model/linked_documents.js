/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Time: 2:43:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:9
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.linkedDocuments', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/linked-documents/',
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
		
		{ name: 'parent_id', type: 'text', defaultValue: null },
		
		{ name: 'parent_type', type: 'text', defaultValue: null },
		
		{ name: 'document_id', type: 'text', defaultValue: null },
		
		{ name: 'document_revision_id', type: 'text', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		//</es-section>
	]
});
