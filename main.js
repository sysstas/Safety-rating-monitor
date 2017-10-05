 /**
     * You must include the dependency on 'ngMaterial' 
     */
   

    angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    var self = this;

    self.determinateValue = 30; 

    $scope.auditors = [{name:"Shulyatskiy", amount:0}, {name:"Yazykovskij",amount:0},{name:"Melnikov",amount:0},{name:"Starokon",amount:0},{name:"Olijnyk",amount:0},{name:"Karmanovska",amount:0},{name:"Taran",amount:0}];


    $scope.shul = 10;  
    $scope.increment = function(arg){
      console.log(arg);
      arg++; 
      return;  
    }

  }]);