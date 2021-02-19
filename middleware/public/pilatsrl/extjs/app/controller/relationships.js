/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Time: 2:43:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:55
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.relationships', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'relationships.List',
		'relationships.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'relationships'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'relationshipsList',
			selector: 'relationshipsList'
		},
		{
			ref: 'relationshipsAdd',
			selector: 'relationshipsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'relationshipsList > toolbar > button#add': {
				click: me.onRelationshipsAddClick
			},
			'relationshipsList':{
				removeRow: me.removeRow
			},
			'relationshipsAdd > form > button#save': {
				click: me.onRelationshipsAddSaveClick
			},
			'relationshipsAdd > form > button#cancel': {
				click: me.onRelationshipsAddCancelClick
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
	onRelationshipsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getRelationshipsAdd().destroy();
		//</es-section>
	},
	onRelationshipsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getRelationshipsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getRelationshipsList().getStore().add(rec);

			me.getRelationshipsAdd().destroy();
		}
		//</es-section>
	},
	onRelationshipsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('relationshipsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.relationships());
		//</es-section>
	}
});
