/**
 * Created by @ES Express Systems
 * User: #userCreated
 * Date: #dateCreated
 * Time: #timeCreated
 * Last User updated: #userUpdated
 * Last date updated: #dateUpdated
 * Last time updated: #timeUpdated
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.lcObjPLocalTableName', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'local-table-name.List',
		'local-table-name.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'lcObjPLocalTableName'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'lcObjPLocalTableNameList',
			selector: 'lcObjPLocalTableNameList'
		},
		{
			ref: 'lcObjPLocalTableNameAdd',
			selector: 'lcObjPLocalTableNameAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'lcObjPLocalTableNameList > toolbar > button#add': {
				click: me.onUcObjPLocalTableNameAddClick
			},
			'lcObjPLocalTableNameList':{
				removeRow: me.removeRow
			},
			'lcObjPLocalTableNameAdd > form > button#save': {
				click: me.onUcObjPLocalTableNameAddSaveClick
			},
			'lcObjPLocalTableNameAdd > form > button#cancel': {
				click: me.onUcObjPLocalTableNameAddCancelClick
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
	onUcObjPLocalTableNameAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getUcObjPLocalTableNameAdd().destroy();
		//</es-section>
	},
	onUcObjPLocalTableNameAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getUcObjPLocalTableNameAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getUcObjPLocalTableNameList().getStore().add(rec);

			me.getUcObjPLocalTableNameAdd().destroy();
		}
		//</es-section>
	},
	onUcObjPLocalTableNameAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('lcObjPLocalTableNameAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.lcObjPLocalTableName());
		//</es-section>
	}
});
