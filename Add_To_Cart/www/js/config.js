/**
 * Created by Smart Ali on 21-Jun-16.
 */

angular.module('starter', ['ionic'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "./components/home/home.html",
        controller: "homeController as home"
      })

      .state('checkout', {
          url: "/checkout",
          templateUrl: "./components/checkout/checkout.html",
          controller: "checkoutController as checkout"
        })

    $urlRouterProvider.otherwise('home');

  })
