Ext.define('AlertsUI.view.Logs.logsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.logs',
    config: {
        model: Ext.create('AlertsUI.view.Logs.logsModel'),
    },

    fields: [
        'AlertModuleUserID', 'AlertModuleID', 'UserID', 'AlertTypeID', 'isActive'
    ],

    data: {
        items: [{
                AlertModuleUserID: "12345",
                AlertModuleID: '26913',
                UserID: "50100",
                AlertTypeID: "1",
                isActive: "1"
            },
            {
                AlertModuleUserID: "24681",
                AlertModuleID: '54321',
                UserID: "00105",
                AlertTypeID: "1",
                isActive: "1"
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