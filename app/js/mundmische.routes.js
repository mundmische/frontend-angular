(function() {
  'use strict';
  angular
      .module('mundmische')
      .config(routes);

  function routes($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'templates/home/index.html',
      controller: 'HomeIndexController',
      controllerAs: 'viewModel'
    })

    // defines catch all -- default
    .otherwise( { redirectTo: '/' });

  };

})();
