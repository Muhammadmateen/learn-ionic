// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("myCtrl",function($cordovaLocalNotification,$scope,$cordovaOauth)
{

  console.log("Controller Call");

  var _self = this;
  _self.facebookLogin = function() {
    console.log("Function Call");
    $cordovaOauth.facebook('257129274665208', ["email"]).then(function(result) {
      console.log("Result : ",result);
      console.log("Access Token : ",result.access_token);
      scheduleDelayedNotification();
    }, function(error) {
      console.log("Error : ",error);
    });
  };

   var scheduleDelayedNotification = function () {
     var now             = new Date().getTime(),
       _5_sec_from_now = new Date(now + 5*1000);

     cordova.plugins.notification.local.schedule({
       title:'Innovaters TECH',
       text: "Delayed Notification",
       at: _5_sec_from_now,
       led: "FF0000",

     });

   };



  /*Profile Api*/
  /*https://graph.facebook.com/v2.6/me*/

})
