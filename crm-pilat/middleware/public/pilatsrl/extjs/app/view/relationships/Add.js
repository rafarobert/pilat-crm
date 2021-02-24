/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Time: 18:38:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:33
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.relationships.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.relationshipsAdd',
	id: 'relationships-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add Relationship',
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
					id:'relationships-form',
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
							fieldLabel: 'relationship_name',
							name: 'relationship_name',
						},
						
						{
							fieldLabel: 'lhs_module',
							name: 'lhs_module',
						},
						
						{
							fieldLabel: 'lhs_table',
							name: 'lhs_table',
						},
						
						{
							fieldLabel: 'lhs_key',
							name: 'lhs_key',
						},
						
						{
							fieldLabel: 'rhs_module',
							name: 'rhs_module',
						},
						
						{
							fieldLabel: 'rhs_table',
							name: 'rhs_table',
						},
						
						{
							fieldLabel: 'rhs_key',
							name: 'rhs_key',
						},
						
						{
							fieldLabel: 'join_table',
							name: 'join_table',
						},
						
						{
							fieldLabel: 'join_key_lhs',
							name: 'join_key_lhs',
						},
						
						{
							fieldLabel: 'join_key_rhs',
							name: 'join_key_rhs',
						},
						
						{
							fieldLabel: 'relationship_type',
							name: 'relationship_type',
						},
						
						{
							fieldLabel: 'relationship_role_column',
							name: 'relationship_role_column',
						},
						
						{
							fieldLabel: 'relationship_role_column_value',
							name: 'relationship_role_column_value',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'reverse',
							name: 'reverse',
						},
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
