var app = angular.module('showcase', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/views/templates/contact.html',
		controller: 'MainCtrl'
	}).otherwise({
		redirectTo: '/'
	});
})

app.controller('MainCtrl', function($http) {
	console.log('hit')
})