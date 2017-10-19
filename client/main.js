
    angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    var self = this;
	let percentage = {};
	 percentage.audits = 0;
	 percentage.novator = 0;
	 percentage.odos = 0;
	function update(){
		self.determinateValue = percentage.audits + percentage.novator + percentage.odos; 
	};
    update();

    $scope.auditors = [{name:"Shulyatskiy", amount:0}, {name:"Yazykovskij",amount:0},{name:"Melnikov",amount:0},{name:"Starokon",amount:0},{name:"Olijnyk",amount:0},{name:"Karmanovska",amount:0},{name:"Taran",amount:0}];
	$scope.novator = {knsAmount: {amount:0}, suisAmount: {amount:0}};
	$scope.odos= {amount:0};

    $scope.shul = 10;  
    $scope.increment = function(arg){
      console.log(arg + " before");
      arg.amount++; 
		percentage.audits++;
		update();
    }

  }]);