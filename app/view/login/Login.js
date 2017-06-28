Ext.define('AlertsUI.view.login.Login', {
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    requires: [
        'AlertsUI.view.login.LoginController',
        'AlertsUI.view.login.LoginModel'
    ],

    layout: 'ux.center',

    items: {
        controller: 'login-login',
        id: 'login_form',
        bodyPadding: 10,
        title: 'Login Window',
        closable: false,
        autoshow: true,

        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]

    }
});