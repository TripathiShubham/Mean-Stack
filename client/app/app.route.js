'use strict';

angular.module('JSEnd')
//=========================================================================
//Configuring CitrixApp
//=========================================================================
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {

		$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
		});

	/**
	 * Routes definition for navigation
	 */
		$stateProvider

		/**
		 * Login Route
		 */
			.state('/dashboard', {
				url : '/dashboard',
				templateUrl: '/client/app/components/dashboard/dashboard.view.html',
				controller : 'DashboardController',
				controllerAs : 'DashCtrl',
				authenticate: false,
				data : {}
			});

			$urlRouterProvider.otherwise('/dashboard');
}])

/**
 * Run function of angularJS
 */
.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

  });
}]);
