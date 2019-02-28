const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('hello', {
    url: '/hello/:name',
    templateUrl: './templates/hello.html',
    controller: function ($scope, $stateParams) {
      $scope.name = $stateParams.name
    }
  });

  $urlRouterProvider.otherwise('/hello/default');

});

