demoApp.factory('simpleFactory', function(){
    var customers = [
    {name:'Sheila Mbadi', city:'Nairobi'}, 
    {name:'Steve Oyaro', city:'Malaba'},
    {name:'Eva Watiri', city:'Muranga'}
        ];

    var factory = {};

    // Function expression - named or anonymous function
    // Not hoisted thus can't be used before it's defined
    factory.getCustomers = function(){
        return customers;
    }

    return factory;

});