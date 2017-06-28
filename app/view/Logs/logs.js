Ext.define('AlertsUI.view.Logs.logs', {
    extend: 'Ext.panel.Panel',
    xtype: 'logsView',

    requires: [
        'AlertsUI.view.Logs.logsModel',
        'AlertsUI.view.Logs.logsController',
        'AlertsUI.view.Logs.logsStore'
    ],

    controller: 'logs-logs',
    viewModel: {
        type: 'logs-logs'
    },

    // html: 'Hello, World!!'

    items: [{
            xtype: 'form',
            title: 'Alerts Logs',
            width: 1700,
            bodyPadding: 5,
        },

        {
            xtype: 'grid',
            store: 'AlertsUI.view.Logs.logsStore',
            listeners: {
                rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                }
            },

            columns: [{
                    text: "Alert Module User ID",
                    width: 200,
                    dataIndex: 'AlertModuleUserID'
                },
                {
                    text: "Alert Module ID",
                    width: 150,
                    dataIndex: 'AlertModuleID'
                },
                {
                    text: "User ID",
                    width: 150,
                    dataIndex: 'UserID'
                },
                {
                    text: "Alert Type ID",
                    width: 150,
                    dataIndex: "AlertTypeID"
                },
                {
                    text: "is Active",
                    width: 150,
                    dataIndex: 'isActive'
                }

            ],
            overflowY: 'auto',
            width: 800
        }

    ]
});