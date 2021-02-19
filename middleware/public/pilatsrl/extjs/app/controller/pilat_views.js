/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Time: 23:45:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:31
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatViews', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-views.List',
		'pilat-views.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_views'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatViewsList',
			selector: 'pilatViewsList'
		},
		{
			ref: 'pilatViewsAdd',
			selector: 'pilatViewsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatViewsList > toolbar > button#add': {
				click: me.onPilatViewsAddClick
			},
			'pilatViewsList':{
				removeRow: me.removeRow
			},
			'pilatViewsAdd > form > button#save': {
				click: me.onPilatViewsAddSaveClick
			},
			'pilatViewsAdd > form > button#cancel': {
				click: me.onPilatViewsAddCancelClick
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
	onPilatViewsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatViewsAdd().destroy();
		//</es-section>
	},
	onPilatViewsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatViewsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatViewsList().getStore().add(rec);

			me.getPilatViewsAdd().destroy();
		}
		//</es-section>
	},
	onPilatViewsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatViewsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatViews());
		//</es-section>
	}
});
