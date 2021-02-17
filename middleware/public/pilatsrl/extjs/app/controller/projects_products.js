/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Time: 2:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:42
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.projectsProducts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'projects-products.List',
		'projects-products.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'projects_products'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'projectsProductsList',
			selector: 'projectsProductsList'
		},
		{
			ref: 'projectsProductsAdd',
			selector: 'projectsProductsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'projectsProductsList > toolbar > button#add': {
				click: me.onProjectsProductsAddClick
			},
			'projectsProductsList':{
				removeRow: me.removeRow
			},
			'projectsProductsAdd > form > button#save': {
				click: me.onProjectsProductsAddSaveClick
			},
			'projectsProductsAdd > form > button#cancel': {
				click: me.onProjectsProductsAddCancelClick
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
	onProjectsProductsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getProjectsProductsAdd().destroy();
		//</es-section>
	},
	onProjectsProductsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getProjectsProductsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getProjectsProductsList().getStore().add(rec);

			me.getProjectsProductsAdd().destroy();
		}
		//</es-section>
	},
	onProjectsProductsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('projectsProductsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.projectsProducts());
		//</es-section>
	}
});
