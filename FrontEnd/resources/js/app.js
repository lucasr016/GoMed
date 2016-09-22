(function(){

    var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

    app.run(function(){
      console.log('myApp is ready!');
    });

})();
