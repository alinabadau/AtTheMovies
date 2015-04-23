(function () {
    var app = angular.module("atTheMovies", ["ngRoute"]);
    var config = function ($routeProvider) {
        $routeProvider
        .when("/list",
        { templateUrl: "/Client/Views/list.html" })
        .when("/details/:id",
        { templateUrl: "/Client/Views/details.html" })
        .otherwise(
        { redirectTo: "/list" });
    };
    config.$inject = ["$routeProvider"];

    app.config(config);
    app.constant("movieApiUrl", "/api/movies/");
}());