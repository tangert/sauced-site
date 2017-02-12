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
    var dayOfWeek = 5;//friday
    var date = new Date();
    date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
    
    vm.date = date;
    
    vm.menu = {
             starters:[
                 {
                 name: "Roasted Winter Vegetables",
                 desc: "labneh + lime + harissa"
                 },
                 {
                 name: "Potato and Egg Raviolo",
                 desc: "brown butter + chicken glaze + pecorino romano"
                 }
             ],

            shares: [
                {
                name: "Roasted Duck Breast",
                desc: "spicy cherry sauce + honey aioli"
                }
            ],

            surrenders:[
                {
                name: "Strawberry Semifreddo",
                desc: "New York cheesecake"
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
    
    vm.formSpree = function() {
        $http({
            url: "http://formspree.io/tyler@eatsauced.com",
            data: $.param(vm.formData),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };
    
}