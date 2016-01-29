var app = angular.module('spreadsheet', []);

app.controller('mainController', function($scope) {
	$scope.rows = [];

	$scope.addRow = function() {
		var newRow = [];
		if($scope.rows.length > 0) {
			newRow.length = $scope.rows[0].length;
		}
		$scope.rows.push(newRow);
		console.log($scope.rows.length);
		console.log($scope.rows[0].length);
	}

	$scope.addColumn = function() {
		var newColumn = [];
		newColumn.length = $scope.rows[0].length;
		for(var i=0; i<$scope.rows.length; i++) {
			$scope.rows[i].push(newColumn[i]);
		}
		console.log($scope.rows[0].length);
	}

	$scope.newData = function() {

	}
})