/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Time: 2:43:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:56
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.releases', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'releases.List',
		'releases.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'releases'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'releasesList',
			selector: 'releasesList'
		},
		{
			ref: 'releasesAdd',
			selector: 'releasesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'releasesList > toolbar > button#add': {
				click: me.onReleasesAddClick
			},
			'releasesList':{
				removeRow: me.removeRow
			},
			'releasesAdd > form > button#save': {
				click: me.onReleasesAddSaveClick
			},
			'releasesAdd > form > button#cancel': {
				click: me.onReleasesAddCancelClick
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
	onReleasesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getReleasesAdd().destroy();
		//</es-section>
	},
	onReleasesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getReleasesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getReleasesList().getStore().add(rec);

			me.getReleasesAdd().destroy();
		}
		//</es-section>
	},
	onReleasesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('releasesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.releases());
		//</es-section>
	}
});
