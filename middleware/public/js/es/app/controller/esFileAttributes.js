/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Time: 2:25:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Nov 12 2020 02:25:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:25:34
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.esFileAttributes', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'es-file-attributes.List',
		'es-file-attributes.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'esFileAttributes'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'esFileAttributesList',
			selector: 'esFileAttributesList'
		},
		{
			ref: 'esFileAttributesAdd',
			selector: 'esFileAttributesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'esFileAttributesList > toolbar > button#add': {
				click: me.onEsFileAttributesAddClick
			},
			'esFileAttributesList':{
				removeRow: me.removeRow
			},
			'esFileAttributesAdd > form > button#save': {
				click: me.onEsFileAttributesAddSaveClick
			},
			'esFileAttributesAdd > form > button#cancel': {
				click: me.onEsFileAttributesAddCancelClick
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
	onEsFileAttributesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEsFileAttributesAdd().destroy();
		//</es-section>
	},
	onEsFileAttributesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEsFileAttributesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEsFileAttributesList().getStore().add(rec);

			me.getEsFileAttributesAdd().destroy();
		}
		//</es-section>
	},
	onEsFileAttributesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('esFileAttributesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.esFileAttributes());
		//</es-section>
	}
});
