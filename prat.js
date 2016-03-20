var myApp = angular.module('sajalApp',[]);

myApp.controller('test',['$scope',function(a){
    a.name = "";
    a.password= "";
    a.greet = "";
    a.validate = function(){
    	if(a.name == "sajal")
   			a.greet="Welcome back";
    }
    
    //}
}]);

var person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
}

function logit(person){
    console.log(person);
}

var sajal = new person('sajal', 'garg');
logit(sajal);
console.log("hello World");
