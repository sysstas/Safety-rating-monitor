 /**
     * You must include the dependency on 'ngMaterial' 
     */
   

    angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    var self = this, j= 0, counter = 0;

    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 30;
   

    self.showList = [ ];

    /**
     * Turn off or on the 5 themed loaders
     */
   
  }]);