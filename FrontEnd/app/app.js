(function(){

    var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

    app.run(function(){
      console.log('myApp is ready!');
    });

    app.controller('LoginController',function(){
      var teste = this;

      teste.ClickMe = ClickMe;

      function ClickMe(){
          alert('TESTEE');
      };

    });

})();
