/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Time: 3:17:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:37
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.advancedreports-schedule.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.advancedreportsScheduleAdd',
	id: 'advancedreports-schedule-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AdvancedreportSchedule',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'advancedreports-schedule-form',
					bodyPadding: 20,
					title: '',
					defaults: { // defaults are applied to items, not the container
						allowBlank: false,
						allowOnlyWhitespace: false,
						msgTarget: 'side',
						xtype: 'textfield',
						anchor: '100%'
					},
					items: [
						//<es-section>
						
						{
							fieldLabel: 'id',
							name: 'id',
						},
						
						
						
						
						{
							fieldLabel: 'interval',
							name: 'interval',
						},
						
						
						{
							fieldLabel: 'interval_options',
							name: 'interval_options',
						},
						
						{
							fieldLabel: 'time',
							name: 'time',
						},
						
						
						
						{
							fieldLabel: 'formats',
							name: 'formats',
						},
						
						{
							fieldLabel: 'emails',
							name: 'emails',
						},
						
						
						
						
						
						
						{
							fieldLabel: 'nexttime',
							name: 'nexttime',
							id:'nexttime',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						//</es-section>
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'save',
							text: 'Save'
						},
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'cancel',
							text: 'Cancel'
						}
					]
				}
			]
		});

		me.callParent(arguments);
	},
});
