function InfoController ($scope) {
    $scope.info = {
	name: "Parent",
	childName: "Child"
    };
}

function ChildController ($scope) {
}

function SumController ($scope) {
    $scope.values = [1, 2];
    $scope.newValue = 1;
    $scope.add = function () {
	$scope.values.push(parseInt($scope.newValue));
    };

    $scope.$watch(
	'values',
	function () {
	    $scope.sum = $scope.values.reduce(function (a, b) {
		return a + b;
	    });
	},
	true
    );
}

function EscapeController ($scope, $element) {
    $scope.message = '';
    $element.bind(
	"keyup",
	function (event) {
	    if (event.keyCode === 27) {
		$scope.$apply(function () {
		    $scope.message = '';
		});
	    }
	}
    );
}
