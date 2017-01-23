app.controller('MenuController', MenuController);
          
MenuController.$inject = ['$scope'];

    function MenuController($scope) {

        var _this = this;

        _this.mainOptions = {
          sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
                anchors: ['section1', 'section2', 'section3', 'section4'],
                menu: '#nav'
        };
        
        $scope.date = new Date();
        
        $scope.menu =
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

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
    