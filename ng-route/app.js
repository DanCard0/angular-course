angular.module("CustomDirective", ["ngRoute"])

  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "reposController",
        templateUrl: "templates/home.html"
      })
      .when("/repo/:name", {
        controller: "repoController",
        templateUrl: "templates/repo.html"
      })
      .otherwise("/");
  });