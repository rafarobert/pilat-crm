/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Time: 2:42:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:40
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.favorites', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'favorites.List',
		'favorites.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'favorites'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'favoritesList',
			selector: 'favoritesList'
		},
		{
			ref: 'favoritesAdd',
			selector: 'favoritesAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'favoritesList > toolbar > button#add': {
				click: me.onFavoritesAddClick
			},
			'favoritesList':{
				removeRow: me.removeRow
			},
			'favoritesAdd > form > button#save': {
				click: me.onFavoritesAddSaveClick
			},
			'favoritesAdd > form > button#cancel': {
				click: me.onFavoritesAddCancelClick
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
	onFavoritesAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFavoritesAdd().destroy();
		//</es-section>
	},
	onFavoritesAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFavoritesAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFavoritesList().getStore().add(rec);

			me.getFavoritesAdd().destroy();
		}
		//</es-section>
	},
	onFavoritesAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('favoritesAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.favorites());
		//</es-section>
	}
});
