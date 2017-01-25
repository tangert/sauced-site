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
                console.log(data);
            }
            
            else {
                vm.message = data.message;
            }
        });

    };

//    vm.processForm = function() {
//        $.ajax({  
//            type: "POST",  
//            url: "../php/mail.php",  
//            data: vm.formData,  
//            success: function() {  
//                console.log('yes!');
//            }  
//        });
//    };

}