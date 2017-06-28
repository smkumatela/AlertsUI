Ext.define('AlertsUI.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',

    requires: [
        'AlertsUI.view.main.Main'
        
    ],
    
    onLoginClick: function() {
        self = this;
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        var name = Ext.getCmp('login_form').getForm().findField('username').getValue();
        var password = Ext.getCmp('login_form').getForm().findField('password').getValue();
        
        localStorage.setItem("username", name);

        var namehash = btoa(name);
        var passhash = btoa(password);

        var encrypted = btoa(namehash + ":" + passhash);
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true


        Ext.Ajax.request({
            method: 'GET',
            url: '/directService.php/?method=Login&loginToken=' + encrypted + '',

            params: {
                id: 1
            },
            success: function (response) {
                var jsonResponse = JSON.parse(response.responseText);

                var responseValue = false;

                if(jsonResponse.LoginResult)
                {
                    responseValue = jsonResponse.LoginResult.IsSuccessful;
                }
                console.log(responseValue);
                if(responseValue)
                {
                    localStorage.setItem("isLogin", true);
                    // Remove Login Window
                    self.getView().destroy();

                    window.location.reload();

                }
                else
                {
                    Ext.Msg.alert("Login Failure", "Please make sure credentials passed are valid.");
                }


            },
            error: function (response) {
                console.log("Loging In: " + String(response.responseText));
            }
        });
    }
    
});
