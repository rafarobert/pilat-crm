/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Time: 2:42:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:56
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.jjwgAreas', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'jjwg-areas.List',
		'jjwg-areas.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'jjwg_areas'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'jjwgAreasList',
			selector: 'jjwgAreasList'
		},
		{
			ref: 'jjwgAreasAdd',
			selector: 'jjwgAreasAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'jjwgAreasList > toolbar > button#add': {
				click: me.onJjwgAreasAddClick
			},
			'jjwgAreasList':{
				removeRow: me.removeRow
			},
			'jjwgAreasAdd > form > button#save': {
				click: me.onJjwgAreasAddSaveClick
			},
			'jjwgAreasAdd > form > button#cancel': {
				click: me.onJjwgAreasAddCancelClick
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
	onJjwgAreasAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getJjwgAreasAdd().destroy();
		//</es-section>
	},
	onJjwgAreasAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getJjwgAreasAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getJjwgAreasList().getStore().add(rec);

			me.getJjwgAreasAdd().destroy();
		}
		//</es-section>
	},
	onJjwgAreasAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('jjwgAreasAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.jjwgAreas());
		//</es-section>
	}
});
