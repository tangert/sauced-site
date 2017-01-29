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

            share: {
                name: "French roast chicken",
                desc: "creamy morel sauce"
            },

            surrender: {
                name: "Vanilla affogato",
                desc: "chocolate ganache + biscotti"
            }

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
                console.log(data);
                console.log(data.message);
                vm.formData.message = data.message;
            }
        });

    };

}