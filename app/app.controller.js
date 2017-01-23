app.controller('MainController', MainController);

    function MainController() {
        var vm = this
        
        vm.fullPageOptions = {
          sectionsColor: ['white', 'white', 'white', 'rgba(0,0,0,0.8)'],
                anchors: ['home', 'about', 'menu', 'contact'],
                menu: '#nav',
                navigation: false,
                navigationPosition: 'right',
                scrollingSpeed: 500,
                autoScrolling: false

        };
        
        vm.date = new Date();
        
        vm.menu =
            {
                 starters: [
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