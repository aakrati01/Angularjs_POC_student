(function() {

  "use strict";

  angular
    .module('ngStud')
    .factory('studentFactory', function($http) {

      function getClassifieds() {
        return $http.get('data/classifieds.json');
      }

      return {
        getClassifieds: getClassifieds
      }
      
    });
    
})();