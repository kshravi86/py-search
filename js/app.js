'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile','ngLoadScript'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/search/binary_search.py.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/sort/bucket_sort.py.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/sort/merge_sort.py.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/sort/insertion_sort.py.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/sort/quick_sort.py.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/sort/selection_sort.py.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/sort/shell_sort.py.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/the_tuple.py.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/sort/timsort.py.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/sort/tree_sort.py.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/sort/radix_sort.py.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/sort/pancake_sort.py.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/28. multi line print.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/24. python lists vs tuples.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/sort/heap_sort.py.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/sort/cyclesort.py.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/sort/topological_sort.py.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/sort/external-sort.py.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/ch1/06-string-compression.py.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/ch1/07-rotate-matrix.py.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/ch1/03-urlify.py.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/ch5/02-binary-to-string.py.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/ch5/06-conversion.py.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/ch5/07-pairwise-swap.py.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/ch6/01-pill-bottles.py.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/ch6/02-basketball.py.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/ch6/03-dominoes.py.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/Towers.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/Watermelon.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/CollectingBeatsisFun.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/logistic_regression1.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/demo.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/naive_bayes.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/partitioning_around_medoids.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/restricted_boltzmann_machine.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/multi_class_lda.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/xgboost.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/linear_regression1.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/linear_discriminant_analysis.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

