demoApp.controller('SimpleController', SimpleController);
    
        function SimpleController($scope, simpleFactory){
            $scope.people = [];

            init();

            // method to initialize data
            // Define a function - Function Declaration
            // Hoisted so can be used before it is defined
            function init(){
                $scope.people = simpleFactory.getCustomers();
            }

            $scope.addCustomer = function(){
                $scope.people.push({name:$scope.newCust.name, city:$scope.newCust.city});
                };
            }