Ext.define('AlertsUI.view.Module.moduleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.module',
    config: {
        model: Ext.create('AlertsUI.view.Module.moduleModel'),
    },

    fields: [
        'AlertModuleUserID', 'AlertModuleID', 'UserID', 'AlertTypeID', 'isActive', 'UserName', 'ModuleName'
    ],

    data: {
        items: [{
                ModuleName: 'PHP Services',
                AlertModuleUserID: "12345",
                AlertModuleID: '26913',
                UserID: "50100",
                AlertTypeID: "1",
                isActive: "1",
                UserName: 'Alonso'
            },
            {
                ModuleName: 'DELPHI Services',
                AlertModuleUserID: "24681",
                AlertModuleID: '54321',
                UserID: "00105",
                AlertTypeID: "1",
                isActive: "1",
                UserName: 'Brix'
            },
            {
                ModuleName: 'C# Services',
                AlertModuleUserID: "18642",
                AlertModuleID: '12345',
                UserID: "50100",
                AlertTypeID: "1",
                isActive: "1",
                UserName: 'Fredy'
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