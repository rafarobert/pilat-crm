/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Time: 2:41:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:58
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.bugs', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'bugs.List',
		'bugs.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'bugs'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'bugsList',
			selector: 'bugsList'
		},
		{
			ref: 'bugsAdd',
			selector: 'bugsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'bugsList > toolbar > button#add': {
				click: me.onBugsAddClick
			},
			'bugsList':{
				removeRow: me.removeRow
			},
			'bugsAdd > form > button#save': {
				click: me.onBugsAddSaveClick
			},
			'bugsAdd > form > button#cancel': {
				click: me.onBugsAddCancelClick
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
	onBugsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getBugsAdd().destroy();
		//</es-section>
	},
	onBugsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getBugsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getBugsList().getStore().add(rec);

			me.getBugsAdd().destroy();
		}
		//</es-section>
	},
	onBugsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('bugsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.bugs());
		//</es-section>
	}
});
