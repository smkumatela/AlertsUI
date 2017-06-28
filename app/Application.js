/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('AlertsUI.Application', {
    extend: 'Ext.app.Application',
    
    name: 'AlertsUI',

    stores: [
        'AlertsUI.view.Logs.logsStore',
        'AlertsUI.view.Module.moduleStore',
        'AlertsUI.view.FirstPage.firstPageStore'
    ],
    models: [
        'AlertsUI.view.Logs.logsModel',
        'AlertsUI.view.Module.moduleModel',
        'AlertsUI.view.FirstPage.firstPageModel',
        'AlertsUI.view.AddUser.addUserModel',
        'AlertsUI.view.AddUser.addUserModel'
    ],
    
    launch: function () {
        var me = this;
        var isLogin;
        isLogin = localStorage.getItem('isLogin');
        var xtypeName = '';
        if(isLogin === '' || isLogin === null || isLogin === 'null'){
            this.setMainView('AlertsUI.view.login.Login');
        }
        else
        {
            this.setMainView('AlertsUI.view.main.Main');
        }        

        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
