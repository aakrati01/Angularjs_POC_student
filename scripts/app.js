(function() {

  "use strict";

  angular
    .module('ngStud', ['ngMaterial','ui.router'])
    .config(function($mdThemingProvider, $stateProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');

      $stateProvider
      .state('students', {
          url:'/students',
          templateUrl:'index.html'
          // controller : 'teacherController'
        })
        .state('teachers', {
          url:'/teachers',
          templateUrl:'teachers-list.html'
          // controller : 'teacherController'
        })
    });
    // .controller(teacherController, function($scope){
    //   $scope.teachers=[
    //     {name: "shalini", subject:"maths"},
    //     {name: "shalini", subject:"science"},
    //     {name: "shalini", subject:"hindi"},
    //     {name: "shalini", subject:"english"}
    //   ]
    // });
})();

