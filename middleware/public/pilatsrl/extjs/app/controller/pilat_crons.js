/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.pilatCrons', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'pilat-crons.List',
		'pilat-crons.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'pilat_crons'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'pilatCronsList',
			selector: 'pilatCronsList'
		},
		{
			ref: 'pilatCronsAdd',
			selector: 'pilatCronsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'pilatCronsList > toolbar > button#add': {
				click: me.onPilatCronsAddClick
			},
			'pilatCronsList':{
				removeRow: me.removeRow
			},
			'pilatCronsAdd > form > button#save': {
				click: me.onPilatCronsAddSaveClick
			},
			'pilatCronsAdd > form > button#cancel': {
				click: me.onPilatCronsAddCancelClick
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
	onPilatCronsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getPilatCronsAdd().destroy();
		//</es-section>
	},
	onPilatCronsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getPilatCronsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getPilatCronsList().getStore().add(rec);

			me.getPilatCronsAdd().destroy();
		}
		//</es-section>
	},
	onPilatCronsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('pilatCronsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.pilatCrons());
		//</es-section>
	}
});
