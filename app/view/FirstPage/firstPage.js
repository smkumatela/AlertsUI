Ext.define('AlertsUI.view.FirstPage.firstPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'firstPageView',

    requires: [
        'AlertsUI.view.FirstPage.firstPageModel',
        'AlertsUI.view.FirstPage.firstPageController',
        'AlertsUI.view.FirstPage.firstPageStore',
        'AlertsUI.view.AddUser.addUser'
    ],

    controller: 'firstpage-firstpage',
    viewModel: {
        type: 'firstpage-firstpage'
    },



    //defaultType: 'textfield',
    items: [{
        flex: 1,
        title: 'Users',
        layout: 'hbox',
        items: [{
                xtype: 'grid',
                store: 'AlertsUI.view.FirstPage.firstPageStore',
                listeners: {
                    rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                    }
                },

                columns: [{
                    text: "User Name",
                    width: 500,
                    dataIndex: 'UserName'
                }, ],
                overflowY: 'auto',
                width: 500
            },
            {
                layout: 'vbox',
                width: 800,
                items: [{
                        xtype: 'form',
                        width: 1700,
                        bodyPadding: 10,
                    },
                    {
                        xtype: 'grid',
                        store: 'AlertsUI.view.FirstPage.firstPageStore',
                        title: 'User Info',
                        listeners: {
                            rowclick: function (grid, record, tr, rowIndex, e, eOpts) {

                            }
                        },

                        columns: [{
                                text: "User ID",
                                width: 220,
                                dataIndex: 'UserID'
                            },
                            {
                                text: "Module Name",
                                width: 300,
                                dataIndex: 'ModuleName'
                            },
                            {
                                text: "is Active",
                                width: 250,
                                dataIndex: 'isActive'
                            }
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
                        }],
                        overflowY: 'auto',
                        width: 800,
                        bodyPadding: 10,
                    },


                    // {
                    //     bodyPadding: 10,
                    //     html: '<a href="#addUserView"> <b> Add User <b/> </a> <i class = "fa fa-user-plus"> </i>',
                    //     style: {

                    //     }
                    // },



                    {
                        bodyPadding: 5,
                        xtype: 'grid',
                        store: 'AlertsUI.view.FirstPage.firstPageStore',
                        title: 'Modules',

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
                                width: 150,
                                dataIndex: 'AlertTypeID'
                            },
                            {
                                text: "is Active",
                                width: 200,
                                dataIndex: 'isActive'
                            }
                        ],
                        buttons: [{
                            text: 'Subscribe Module',
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
                        }],

                        overflowY: 'auto',
                        width: 800
                    },


                    // {
                    //     bodyPadding: 10,
                    //     html: '<a href="#addUserView"> <b> Subscribe Module   <b/> </a> <i class = "fa fa-plus-square"> </i>',
                    //     style: {


                    //     }

                    // },
                    // {
                    //     bodyPadding: 10,
                    //     html: '<a href="#addUserView"> <b> Unsubscribe Module   <b/> </a> <i class = "fa fa-minus-square"> </i>',
                    //     style: {

                    //     }

                    // }

                ],
                buttons: [{
                    text: 'Unsubscribe Module',
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
                }],
            }

        ]
    }]

});