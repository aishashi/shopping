var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/product', {
			templateUrl: 'product.html',
			controller: 'ProductController'
		})
		.when('/cart', {
			templateUrl: 'cart.html',
			controller: 'CartController'
		})
		.otherwise({
			redirectTo: 'index.html'
		});
});

mainApp.controller('ProductController', function($scope) {
	  $scope.products = [ {"name":"Table1","image":"table1.jfif", "desc": "Wooden Table", "price" : 500, "quantity":null},
						   {"name":"Table2", "image":"table2.jfif","desc": "Wooden Table", "price" : 450, "quantity":null},
						   {"name":"Table3","image":"table3.jfif","desc": "Wooden Table", "price" : 570, "quantity":null},
						   {"name":"Chair1", "image":"chair1.jfif","desc": "Rotating Chair","price" : 1000, "quantity":null},
						   {"name":"Chair2","image":"chair2.jfif","desc": "Wooden Chair", "price" : 1200, "quantity":null},
						   {"name":"Chair3","image":"chair3.jfif", "desc": "Cushion Chair", "price" : 1400, "quantity":null},
						  ]
				
						});
						
mainApp.controller('CartController',function($scope) {
      $scope.message="My cart";
	});