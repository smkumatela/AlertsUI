Ext.define('AlertsUI.view.FirstPage.firstPageStore', {
    extend: 'Ext.data.Store',
    alias: 'store.firstPage',
    config: {
        model: Ext.create('AlertsUI.view.FirstPage.firstPageModel'),
    },

    fields: [
        'UserID', 'ModuleName', 'isActive', 'UserName', 'AlertModuleUserID', 'AlertModuleID', 'AlertTypeID'
    ],

    data: {
        items: [{
                UserID: "35210",
                ModuleName: 'PHP Serices',
                isActive: "1",
                UserName: 'User 1',
                AlertModuleUserID: "28272",
                AlertModuleID: "38373",
                AlertTypeID: "48474"
            },
            {
                UserID: "10987",
                ModuleName: 'DELPHI Serices',
                isActive: "1",
                UserName: 'User 2',
                AlertModuleUserID: "27282",
                AlertModuleID: "37383",
                AlertTypeID: "47484"
            },
            {
                UserID: "50403",
                ModuleName: 'SENCHA Serices',
                isActive: "1",
                UserName: 'User 3',
                AlertModuleUserID: "58575",
                AlertModuleID: "68676",
                AlertTypeID: "78777"
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});