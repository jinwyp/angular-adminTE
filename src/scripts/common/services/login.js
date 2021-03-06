angular.module('services.login', ['services.error'])
.factory('loginService', ['$http', 'errorService', function($http, errorService) {

	return {
		login: function(data) {
			var promise = $http.post('/user/login', data)
			.error(function(data) {
				errorService.report(data); 
			});

			return promise;
		}
	}
}])