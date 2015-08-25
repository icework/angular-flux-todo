var angular = require('angular')
require('angular-route');

var app = angular.module('angular-flux-todo', ['ngRoute']);

require('./controller');
//require('./directive');

app.config(function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'view/todo.html',
    controller: 'TodoCtrl'
  })
  .otherwise({
    redirectTo: '/todo',
  });
});
