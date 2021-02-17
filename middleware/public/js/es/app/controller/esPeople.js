/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Time: 2:25:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:32 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esPeople', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-people.List',
		'es-people.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esPeople'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esPeopleList',
			selector: 'esPeopleList'
		},
		{
			ref: 'esPeopleAdd',
			selector: 'esPeopleAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esPeopleList > toolbar > button#add': {
				click: me.onEsPeopleAddClick
			},
			'esPeopleList':{
				removeRow: me.removeRow
			},
			'esPeopleAdd > form > button#save': {
				click: me.onEsPeopleAddSaveClick
			},
			'esPeopleAdd > form > button#cancel': {
				click: me.onEsPeopleAddCancelClick
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
	onEsPeopleAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsPeopleAdd().destroy();
		//</es-section>
	},
	onEsPeopleAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsPeopleAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsPeopleList().getStore().add(rec);

			me.getEsPeopleAdd().destroy();
		}
		//</es-section>
	},
	onEsPeopleAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esPeopleAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esPeople());
		//</es-section>
	}
});
