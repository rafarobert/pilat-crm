/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Time: 2:25:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esCrons', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-crons.List',
		'es-crons.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esCrons'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esCronsList',
			selector: 'esCronsList'
		},
		{
			ref: 'esCronsAdd',
			selector: 'esCronsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esCronsList > toolbar > button#add': {
				click: me.onEsCronsAddClick
			},
			'esCronsList':{
				removeRow: me.removeRow
			},
			'esCronsAdd > form > button#save': {
				click: me.onEsCronsAddSaveClick
			},
			'esCronsAdd > form > button#cancel': {
				click: me.onEsCronsAddCancelClick
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
	onEsCronsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsCronsAdd().destroy();
		//</es-section>
	},
	onEsCronsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsCronsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsCronsList().getStore().add(rec);

			me.getEsCronsAdd().destroy();
		}
		//</es-section>
	},
	onEsCronsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esCronsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esCrons());
		//</es-section>
	}
});
