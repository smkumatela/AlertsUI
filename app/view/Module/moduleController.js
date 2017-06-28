Ext.define('AlertsUI.view.Module.moduleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.module-module',
    model: 'AlertsUI.view.Module.moduleModel',

    // init: function(){
    //     this.control({
    //         'moduleView>form>button': {
    //             click: this.application.getController('moduleController').addModuleClick
    //         }
    //     });
    // },

    // addModuleClick: function(button, e, eOpts) {
        
    //     if (button.getText() == 'Add Module'){
    //         new Ext.Window({
    //             title: 'Add Module pop-up',
    //             items: [{
    //                 xtype: 'addModuleDetail'
    //             }],
    //             modal: true,
    //             width: 500,
    //             closeAction: 'destroy'
    //         }).show();
    //     }
    // }
    
});
