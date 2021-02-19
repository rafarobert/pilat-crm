/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Time: 3:18:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Last time updated: 3:18:54
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.kreports.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.kreportsAdd',
	id: 'kreports-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Kreport',
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
					id:'kreports-form',
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
							fieldLabel: 'category_priority',
							name: 'category_priority',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'report_module',
							name: 'report_module',
						},
						
						{
							fieldLabel: 'report_status',
							name: 'report_status',
						},
						
						{
							fieldLabel: 'listtype',
							name: 'listtype',
						},
						
						{
							fieldLabel: 'selectionlimit',
							name: 'selectionlimit',
						},
						
						
						{
							fieldLabel: 'description',
							name: 'description',
						},
						
						{
							fieldLabel: 'union_modules',
							name: 'union_modules',
						},
						
						{
							fieldLabel: 'reportoptions',
							name: 'reportoptions',
						},
						
						{
							fieldLabel: 'listtypeproperties',
							name: 'listtypeproperties',
						},
						
						{
							fieldLabel: 'presentation_params',
							name: 'presentation_params',
						},
						
						{
							fieldLabel: 'visualization_params',
							name: 'visualization_params',
						},
						
						{
							fieldLabel: 'integration_params',
							name: 'integration_params',
						},
						
						{
							fieldLabel: 'wheregroups',
							name: 'wheregroups',
						},
						
						{
							fieldLabel: 'whereconditions',
							name: 'whereconditions',
						},
						
						{
							fieldLabel: 'listfields',
							name: 'listfields',
						},
						
						{
							fieldLabel: 'unionlistfields',
							name: 'unionlistfields',
						},
						
						{
							fieldLabel: 'advancedoptions',
							name: 'advancedoptions',
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
							fieldLabel: 'assigned_user_id',
							name: 'assigned_user_id',
						},
						
						{
							fieldLabel: 'category_id',
							name: 'category_id',
						},
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
