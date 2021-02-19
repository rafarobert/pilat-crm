/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Time: 2:42:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:35 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:35
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.emailCache', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'email-cache.List',
		'email-cache.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'email_cache'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'emailCacheList',
			selector: 'emailCacheList'
		},
		{
			ref: 'emailCacheAdd',
			selector: 'emailCacheAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'emailCacheList > toolbar > button#add': {
				click: me.onEmailCacheAddClick
			},
			'emailCacheList':{
				removeRow: me.removeRow
			},
			'emailCacheAdd > form > button#save': {
				click: me.onEmailCacheAddSaveClick
			},
			'emailCacheAdd > form > button#cancel': {
				click: me.onEmailCacheAddCancelClick
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
	onEmailCacheAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getEmailCacheAdd().destroy();
		//</es-section>
	},
	onEmailCacheAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getEmailCacheAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getEmailCacheList().getStore().add(rec);

			me.getEmailCacheAdd().destroy();
		}
		//</es-section>
	},
	onEmailCacheAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('emailCacheAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.emailCache());
		//</es-section>
	}
});
