/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:58:49 GMT-0400 (Bolivia Time)
 * Time: 13:58:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:58:49 GMT-0400 (Bolivia Time)
 * Last time updated: 13:58:49
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.aor-fields.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.aorFieldsAdd',
	id: 'aor-fields-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add AorField',
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
					id:'aor-fields-form',
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
							fieldLabel: 'field_order',
							name: 'field_order',
						},
						
						{
							fieldLabel: 'group_display',
							name: 'group_display',
						},
						
						
						{
							fieldLabel: 'name',
							name: 'name',
						},
						
						{
							fieldLabel: 'field',
							name: 'field',
						},
						
						{
							fieldLabel: 'label',
							name: 'label',
						},
						
						{
							fieldLabel: 'field_function',
							name: 'field_function',
						},
						
						{
							fieldLabel: 'sort_by',
							name: 'sort_by',
						},
						
						{
							fieldLabel: 'format',
							name: 'format',
						},
						
						{
							fieldLabel: 'total',
							name: 'total',
						},
						
						{
							fieldLabel: 'sort_order',
							name: 'sort_order',
						},
						
						{
							fieldLabel: 'group_order',
							name: 'group_order',
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
							fieldLabel: 'display',
							name: 'display',
						},
						
						{
							fieldLabel: 'link',
							name: 'link',
						},
						
						{
							fieldLabel: 'group_by',
							name: 'group_by',
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
