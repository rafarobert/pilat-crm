/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Time: 2:25:36
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:36 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:36
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esProfileViews', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-profile-views.List',
		'es-profile-views.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esProfileViews'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esProfileViewsList',
			selector: 'esProfileViewsList'
		},
		{
			ref: 'esProfileViewsAdd',
			selector: 'esProfileViewsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esProfileViewsList > toolbar > button#add': {
				click: me.onEsProfileViewsAddClick
			},
			'esProfileViewsList':{
				removeRow: me.removeRow
			},
			'esProfileViewsAdd > form > button#save': {
				click: me.onEsProfileViewsAddSaveClick
			},
			'esProfileViewsAdd > form > button#cancel': {
				click: me.onEsProfileViewsAddCancelClick
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
	onEsProfileViewsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsProfileViewsAdd().destroy();
		//</es-section>
	},
	onEsProfileViewsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsProfileViewsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsProfileViewsList().getStore().add(rec);

			me.getEsProfileViewsAdd().destroy();
		}
		//</es-section>
	},
	onEsProfileViewsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esProfileViewsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esProfileViews());
		//</es-section>
	}
});
