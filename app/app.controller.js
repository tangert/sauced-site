app.controller('MainController', MainController);

    function MainController() {
        var vm = this
        
        vm.mainOptions = {
          sectionsColor: ['white', 'white', 'white', 'white'],
                anchors: ['section1', 'section2', 'section3', 'section4'],
                menu: '#nav',
                navigation: true,
                navigationPosition: 'right',
                scrollingSpeed: 1000
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