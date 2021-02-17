Ext.define('es.view.Filter', {
    extend: 'Ext.form.Panel',

    xtype: 'filter-form',
    title: 'Filter',

    border: false,
    padding: 10,

    initComponent: function () {
        var me = this;

        this.items = [
            {
                xtype: 'textfield',
                name: 'dic_code',
                fieldLabel: 'Code',
                labelWidth: 50
            },
            {
                xtype: 'button',
                name: 'filter',
                text: 'getCode',
                handler: function()
                {
                    me.fireEvent('getCode', me);
                }
            }
        ]

        //parent
        this.callParent(arguments);
    }
});
