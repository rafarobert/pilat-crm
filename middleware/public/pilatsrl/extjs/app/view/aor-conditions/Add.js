/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:58:48 GMT-0400 (Bolivia Time)
 * Time: 13:58:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:58:48 GMT-0400 (Bolivia Time)
 * Last time updated: 13:58:48
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aor-conditions.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aorConditionsAdd',
	id: 'aor-conditions-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AorCondition',
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
					id:'aor-conditions-form',
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
							fieldLabel: 'condition_order',
							name: 'condition_order',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'logic_op',
							name: 'logic_op',
						},
						
						{
							fieldLabel: 'parenthesis',
							name: 'parenthesis',
						},
						
						{
							fieldLabel: 'field',
							name: 'field',
						},
						
						{
							fieldLabel: 'operator',
							name: 'operator',
						},
						
						{
							fieldLabel: 'value_type',
							name: 'value_type',
						},
						
						{
							fieldLabel: 'value',
							name: 'value',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'module_path',
							name: 'module_path',
						},
						
						
						
						{
							fieldLabel: 'modified_user_id',
							name: 'modified_user_id',
						},
						
						{
							fieldLabel: 'created_by',
							name: 'created_by',
						},
						
						{
							fieldLabel: 'aor_report_id',
							name: 'aor_report_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						{
							fieldLabel: 'parameter',
							name: 'parameter',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_modified',
							name: 'date_modified',
							id:'date_modified',
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
