(function(){

    var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

    app.run(function(){
      console.log('myApp is ready!');
    });

    //definindo tema
    app.config(function($mdThemingProvider){

      $mdThemingProvider.definePalette('gomedPalette',{
        '50'  : 'e1f5fe',
        '100' : 'b3e5fc',
        '200' : '81d4fa',
        '300' : '4fc3f7',
        '400' : '29b6f6',
        '500' : '03a9f4',
        '600' : '039be5',
        '700' : '0288d1',
        '800' : '0277bd',
        '900' : '0095DA',
        'A100': '80d8ff',
        'A200': '40c4ff',
        'A400': '00b0ff',
        'A700': '0091ea',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

/*        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', '700', 'A100'],*/
        'contrastLightColors': 'dark'    // could also specify this if default was 'dark'
      });

      $mdThemingProvider
        .theme('default')
        .primaryPalette('gomedPalette',{
          'default': '900', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        });

    });

    //acao click botao login
    app.controller('LoginController',function(){
      var teste = this;

      teste.ClickMe = ClickMe;

      function ClickMe(){
          alert('TESTEE');
      };

    });

})();
