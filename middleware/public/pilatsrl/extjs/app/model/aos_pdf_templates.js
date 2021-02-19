/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Time: 2:41:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:38
 *
 * Caution: es-sections will be replaced by script execution
 */

var types = Ext.data.Types; // allow shorthand type access
Ext.define('es.model.aosPdfTemplates', {
	extend: 'Ext.data.Model',

	proxy: {
		type: 'rest',
		//<es-section>
		url : '/api-pilatsrl/aos-pdf-templates/',
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
		
		{ name: 'active', type: 'types.TINYINT', defaultValue: null },
		
		{ name: 'margin_left', type: 'types.INT', defaultValue: null },
		
		{ name: 'margin_right', type: 'types.INT', defaultValue: null },
		
		{ name: 'margin_top', type: 'types.INT', defaultValue: null },
		
		{ name: 'margin_bottom', type: 'types.INT', defaultValue: null },
		
		{ name: 'margin_header', type: 'types.INT', defaultValue: null },
		
		{ name: 'margin_footer', type: 'types.INT', defaultValue: null },
		
		{ name: 'name', type: 'text', defaultValue: null },
		
		{ name: 'type', type: 'text', defaultValue: null },
		
		{ name: 'page_size', type: 'text', defaultValue: null },
		
		{ name: 'orientation', type: 'text', defaultValue: null },
		
		{ name: 'description', type: 'text', defaultValue: null },
		
		{ name: 'pdfheader', type: 'text', defaultValue: null },
		
		{ name: 'pdffooter', type: 'text', defaultValue: null },
		
		{ name: 'date_entered', type: 'date', defaultValue: null },
		
		{ name: 'date_modified', type: 'date', defaultValue: null },
		
		{ name: 'modified_user_id', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'created_by', type: 'types.CHAR', defaultValue: null },
		
		{ name: 'assigned_user_id', type: 'types.CHAR', defaultValue: null },
		
		//</es-section>
	]
});
