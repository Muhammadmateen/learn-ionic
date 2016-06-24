/**
 * Created by Smart Ali on 13-Jun-16.
 */

angular.module('starter')

  .config(function($stateProvider,$urlRouterProvider)
  {
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'components/home/home.html',
        controller:'homeController as home'
      })

    $urlRouterProvider.otherwise('home');
  });
