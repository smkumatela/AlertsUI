Ext.define('AlertsUI.view.Module.module', {
    extend: 'Ext.panel.Panel',
    xtype: 'moduleView',
    alias: 'widget.moduleView',

    requires: [
        'AlertsUI.view.Module.moduleModel',
        'AlertsUI.view.Module.moduleController',
        'AlertsUI.view.Module.moduleStore'
    ],

    controller: 'module-module',
    viewModel: {
        type: 'module-module'
    },

    items: [{
        flex: 1,
        title: 'Modules',
        layout: 'hbox',
        width: 1700,
        //margins: 10,
        items: [{
                xtype: 'grid',
                store: 'AlertsUI.view.Module.moduleStore',
                listeners: {
                    rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                    }
                },

                columns: [{
                    text: "Module Name",
                    width: 400,
                    dataIndex: 'ModuleName'
                }],
                overflowY: 'auto',
                width: 400
            },
            {
                layout: 'vbox',
                width: 800,
                items: [{
                        xtype: 'form',
                        width: 1700,
                        //bodyPadding: 10,
                    },
                    {
                        fieldLabel: 'Module Info',
                        xtype: 'combo',
                        name: 'firstName',
                        queryMode: 'local',
                        store: ['Alert Log', 'Module Log', 'Service Call Log'],
                        displayField: 'division',
                        autoSelect: true,
                        forceSelection: true,
                        typeAhead: true
                    },
                    {
                        fieldLabel: 'Log Type',
                        xtype: 'combo',
                        name: 'firstName',
                        queryMode: 'local',
                        store: ['Alert Log', 'Module Log', 'Service Call Log'],
                        displayField: 'division',
                        autoSelect: true,
                        forceSelection: true,
                        typeAhead: true
                    },
                    {
                        xtype: 'grid',
                        store: 'AlertsUI.view.Module.moduleStore',
                        title: 'Modules',
                        width: 1700,

                        listeners: {
                            rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                            }
                        },

                        columns: [{
                                text: "Alert Module User ID",
                                width: 150,
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
                                width: 100,
                                dataIndex: 'AlertTypeID'
                            },
                            {
                                text: "is Active",
                                width: 100,
                                dataIndex: 'isActive'
                            },
                            {
                                text: "User Name",
                                width: 150,
                                dataIndex: 'UserName'
                            } //,
                            // {
                            //     text: "is Active",
                            //     width: 150,
                            //     dataIndex: 'isActive'
                            // }
                        ],
                        overflowY: 'auto',
                        width: 900
                    }

                    // {
                    //     bodyPadding: 10,
                    //     html: '<a href="#addUserView"> <b> Add Module   <b/> </a> <i class = "fa fa-plus-square"> </i>',
                    //     style: {
                    //         //color: maroon
                    //     }

                    // }

                ],

                buttons: [{
                    text: 'Add Module',
                    width: 200,
                    handler: function () {
                        var win = new Ext.Window({
                            width: "22%",
                            height: 330,
                            closeAction: 'hide',
                            buttonAlign: 'center',
                            title: 'Add Module',
                            modal: 'true',
                            items: [{
                                xtype: 'addUserView'
                            }],
                            animHide: function () {
                                this.el.disableShadow();
                                this.el.slideOut('t', {
                                    duration: 1,
                                    callback: function () {
                                        this.el.hide();
                                        this.afterHide();
                                    },
                                    scope: this
                                });
                            }
                        });
                        win.show(Ext.getBody());
                    }
                }]
            },
            {
                bodyPadding: 5,
                xtype: 'grid',
                store: 'AlertsUI.view.Module.moduleStore',
                title: 'Users',
                listeners: {
                    rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                    }
                },

                columns: [{
                    text: "User Name",
                    width: 600,
                    dataIndex: 'UserName'
                }, ],
                overflowY: 'auto',
                width: 750


            },

        ],
        bodyPadding: 18,

    }, ],

});