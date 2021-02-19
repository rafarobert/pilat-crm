/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:23 GMT-0400 (Bolivia Time)
 * Time: 2:41:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:23 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:23
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.aorCharts', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'aor-charts.List',
		'aor-charts.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'aor_charts'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'aorChartsList',
			selector: 'aorChartsList'
		},
		{
			ref: 'aorChartsAdd',
			selector: 'aorChartsAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'aorChartsList > toolbar > button#add': {
				click: me.onAorChartsAddClick
			},
			'aorChartsList':{
				removeRow: me.removeRow
			},
			'aorChartsAdd > form > button#save': {
				click: me.onAorChartsAddSaveClick
			},
			'aorChartsAdd > form > button#cancel': {
				click: me.onAorChartsAddCancelClick
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
	onAorChartsAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getAorChartsAdd().destroy();
		//</es-section>
	},
	onAorChartsAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getAorChartsAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getAorChartsList().getStore().add(rec);

			me.getAorChartsAdd().destroy();
		}
		//</es-section>
	},
	onAorChartsAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('aorChartsAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.aorCharts());
		//</es-section>
	}
});
