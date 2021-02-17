/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Time: 2:25:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esViews', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-views.List',
		'es-views.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esViews'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esViewsList',
			selector: 'esViewsList'
		},
		{
			ref: 'esViewsAdd',
			selector: 'esViewsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esViewsList > toolbar > button#add': {
				click: me.onEsViewsAddClick
			},
			'esViewsList':{
				removeRow: me.removeRow
			},
			'esViewsAdd > form > button#save': {
				click: me.onEsViewsAddSaveClick
			},
			'esViewsAdd > form > button#cancel': {
				click: me.onEsViewsAddCancelClick
			}
			//</es-section>
		});
	},
	removeRow: function(grid, rowIndex, colIndex){
		//<es-section>
		Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
			if (button === 'yes') {
				grid.getStore().removeAt(rowIndex);
			}
		});
		//</es-section>
	},
	onEsViewsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsViewsAdd().destroy();
		//</es-section>
	},
	onEsViewsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsViewsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsViewsList().getStore().add(rec);

			me.getEsViewsAdd().destroy();
		}
		//</es-section>
	},
	onEsViewsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esViewsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esViews());
		//</es-section>
	}
});
