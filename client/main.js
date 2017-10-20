
    angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    var self = this;
	let percentage = {
		percentage.audits = 0;
		percentage.novator = 0;
	 	percentage.odos = 0;
	};
	let points = {
		points.audits = 0;
	 	points.novator = 0;
		point.odos = 0;
	};
	 
	 
		self.determinateValue = 0; 
		self.points = 30;
		self.place = 0;
	// this function updates rating scale
	function update(){
		self.determinateValue = percentage.audits + percentage.novator + percentage.odos; 
		
		self.place = 4;
	};
    update();

    $scope.auditors = [{name:"Shulyatskiy", amount:0}, {name:"Yazykovskij",amount:0},{name:"Melnikov",amount:0},{name:"Starokon",amount:0},{name:"Olijnyk",amount:0},{name:"Karmanovska",amount:0},{name:"Taran",amount:0}];
	$scope.novator = {knsAmount: {amount:0}, suisAmount: {amount:0}};
	$scope.odos= {amount:0};

    $scope.shul = 10;  
    $scope.increment = function(arg){
	  let pass = 111;
	  if (prompt("password")==111){
	  	console.log(arg + " before");
      	arg.amount++;
		//Chechking if max of audits amount being reached
		const maxAudits = 48;
		if (percentage.audits<maxAudits)
			{ percentage.audits++;
			update() }
			else update();
    	}
	  	else alert("wrong password!");
	};
	  // function controls pointsamount of audits
      function auditsPoints(arg){
	  	if (arg<28) self.poi
	  };
	
  }]);