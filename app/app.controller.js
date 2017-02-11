app.controller('MainController', MainController);
app.controller('MenuController', MenuController);
app.controller('FormController', FormController);

function MainController() {
    var vm = this;
    vm.fullPageOptions = {
      sectionsColor: ['white', 'white', 'white', 'rgba(0,0,0,0.9)'],
            anchors: ['home', 'about', 'menu', 'contact'],
            menu: '#nav',
            navigation: false,
            navigationPosition: 'right',
            scrollingSpeed: 500,
            autoScrolling: false
    };
}

function MenuController() {
    var vm = this;
    vm.date = new Date();
    vm.menu = {
             starters:[
                 {
                 name: "Buttered sunchoke soup",
                 desc: "crushed hazelnuts"
                 },
                 {
                 name: "Blood orange + burrata salad",
                 desc: "sherry vinaigrette"
                 }
             ],

            shares: [
                {
                name: "French roast chicken",
                desc: "creamy morel sauce"
                }
            ],

            surrenders:[
                {
                name: "Vanilla affogato",
                desc: "chocolate ganache + biscotti"
                }
            ]
        };
}

function FormController($http) {
    var vm = this;
    vm.formData = {};
    
    vm.processForm = function() {
        $http({
            method: 'POST',
            url: '/php/mail.php',
            data: $.param(vm.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        
        .success(function (data) {    
            
            console.log(data);
            
            if (!data.success) {
                //binding errors to data.
                vm.error_first_name = data.errors.first_name;
                vm.error_last_name = data.errors.last_name;
                vm.error_email = data.errors.email;
                vm.error_message = data.errors.message;
                
                console.log(data.errors.first_name);
                console.log(data.errors.last_name);
                console.log(data.errors.email);
                console.log(data.errors.message);
            } 
            else {
                // if successful, bind success message to message
                console.log("We got it");
                console.log(vm.formData);
                
                vm.formData.first_name = "";
                vm.formData.last_name = "";
                vm.formData.email = "";
                vm.formData.message = data.message;
            }
        });

    };
    
    //send grid API
//    vm.sendGrid = function() {
//        return {
//            $send: function(api_user, api_key, to, toname, subject, text, from) {
//                var method = 'GET';
//                var url = "https://api.sendgrid.com/api/mail.send.json?";
//                $http({
//                    method: method,
//                    url: url + "api_user=" + api_user +
//                        "&api_key=" + api_key +
//                        "&to=" + to +
//                        "&subject=" + subject +
//                        "&text=" + text +
//                        "&from=" + from
//                }).
//                success(function(data, status) {}).
//                error(function(data, status) {});
//            }
//        };
//    };
//    
//    var mailgunUrl = "YOUR_DOMAIN_HERE";
//    var mailgunApiKey = window.btoa("api:key-YOUR_API_KEY_HERE")
//    var fullEmailName = vm.formData.first_name + " " + vm.formData.last_name;
//  
//    vm.mailGunSend = function() {
//        $http({
//              method: "POST",
//              url: "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
//              headers: {
//                "Content-Type": "application/x-www-form-urlencoded",
//                "Authorization": "Basic " + mailgunApiKey
//              },
//              data: "from=" + vm.formData.email + "&to=" + "tyler@angert.com" + "&subject=" + this.fullEmailName + "is hungry!" + "&text=" + vm.formData.message;
//            }).then(function(success) {
//              console.log("SUCCESS " + JSON.stringify(success));
//            }, function(error) {
//              console.log("ERROR " + JSON.stringify(error));
//            });
//      };
    
}