/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Thu Mar 11 2021 14:11:10 GMT-0400 (Bolivia Time)
 * Time: 14:11:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Thu Mar 11 2021 14:11:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:11:10
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.surveyquestionoptions-surveyquestionresponses.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.surveyquestionoptionsSurveyquestionresponsesAdd',
	id: 'surveyquestionoptions-surveyquestionresponses-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add SurveyquestionoptionSurveyquestionresponse',
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
					id:'surveyquestionoptions-surveyquestionresponses-form',
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
							fieldLabel: 'surveyq72c7options_ida',
							name: 'surveyq72c7options_ida',
						},
						
						{
							fieldLabel: 'surveyq10d4sponses_idb',
							name: 'surveyq10d4sponses_idb',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
