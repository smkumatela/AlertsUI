Ext.define('AlertsUI.view.AddUser.addUser', {
    extend: 'Ext.panel.Panel',
    xtype: 'addUserView',
    alias: 'widget.addUser',

    requires: [
        'AlertsUI.view.AddUser.addUserController',
        'AlertsUI.view.AddUser.addUserModel'

    ],

    controller: 'adduser-adduser',
    viewModel: {
        type: 'adduser-adduser'
    },

    items: [{
            fieldLabel: 'Module Info',
            xtype: 'textfield',
            width: 400
        },
        {
            fieldLabel: 'Alert Module ID',
            xtype: 'textfield',
            width: 400
        },
        {
            fieldLabel: 'User ID',
            xtype: 'textfield',
            width: 400
        },
        {
            fieldLabel: 'Alert Type ID',
            xtype: 'textfield',
            width: 400
        },
        {
            fieldLabel: 'User Name',
            xtype: 'textfield',
            width: 400
        },
        {
            buttonAlign: 'right',
            buttons: [{
                xtype: 'button',
                formBind: true,
                itemId: 'btnLogin',
                text: 'Add',
                this: 'close'
            }]
        }
    ],

    bodyPadding: 10,
});