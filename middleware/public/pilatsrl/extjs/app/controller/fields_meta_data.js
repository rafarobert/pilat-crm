/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Time: 2:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:41
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fieldsMetaData', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fields-meta-data.List',
		'fields-meta-data.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fields_meta_data'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fieldsMetaDataList',
			selector: 'fieldsMetaDataList'
		},
		{
			ref: 'fieldsMetaDataAdd',
			selector: 'fieldsMetaDataAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fieldsMetaDataList > toolbar > button#add': {
				click: me.onFieldsMetaDataAddClick
			},
			'fieldsMetaDataList':{
				removeRow: me.removeRow
			},
			'fieldsMetaDataAdd > form > button#save': {
				click: me.onFieldsMetaDataAddSaveClick
			},
			'fieldsMetaDataAdd > form > button#cancel': {
				click: me.onFieldsMetaDataAddCancelClick
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
	onFieldsMetaDataAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFieldsMetaDataAdd().destroy();
		//</es-section>
	},
	onFieldsMetaDataAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFieldsMetaDataAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFieldsMetaDataList().getStore().add(rec);

			me.getFieldsMetaDataAdd().destroy();
		}
		//</es-section>
	},
	onFieldsMetaDataAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fieldsMetaDataAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fieldsMetaData());
		//</es-section>
	}
});
