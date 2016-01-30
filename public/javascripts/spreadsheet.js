var app = angular.module('spreadsheet', []);

app.controller('mainController', function($scope) {
	$scope.rows = [];

	$scope.addRow = function() {
		var newRow = [];
		if($scope.rows.length > 0) {
			newRow.length = $scope.rows[0].length;
		}
		$scope.rows.push(newRow);
		if($scope.rows[0].length == 0) {
			$scope.rows[0].push('');
		} 
	}

	$scope.addColumn = function() {
		var newColumn = [];
		if($scope.rows.length == 0) {
			$scope.addRow();
		} else {
			newColumn.length = $scope.rows[0].length;
			for(var i=0; i<$scope.rows.length; i++) {
				$scope.rows[i].push(newColumn[i]);
			}
		}
		console.log($scope.rows[0].length);
	}

	$scope.deleteRow = function() {
		if($scope.rows.length > 0) {
			$scope.rows.pop();
		}
	}

	$scope.deleteColumn = function() {
		for(var i=0; i<$scope.rows.length; i++) {
			$scope.rows[i].pop();
		}
	}
})