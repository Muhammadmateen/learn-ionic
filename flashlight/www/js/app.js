// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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

.controller("flashLightController",function($scope,$cordovaFlashlight,$cordovaSpinnerDialog,$cordovaToast)
{


  $scope.check = function()
  {
    window.plugins.flashlight.available(function(isAvailable) {
      if (isAvailable) {

        console.log("Flash Light Available : ",isAvailable);
        // switch on
        window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

        // switch off after 3 seconds
        setTimeout(function() {
          window.plugins.flashlight.switchOff();// success/error callbacks may be passed
          console.log("Flash Light is off after 3000 : ");
        }, 3000);

      } else {
        alert("Flashlight not available on this device");
      }
    });

  };

  $scope.showLoader = function()
  {
    console.log("Show Loader call");
    $cordovaSpinnerDialog.show("title","message",true);
  };


  $scope.hideLoader = function()
  {
    console.log("Hide Loader call");
    $cordovaSpinnerDialog.hide();
  };

  $scope.showToast = function()
  {
    $cordovaToast
      .show('Here is a message', 'long', 'center')
      .then(function(success) {
        // success
      }, function (error) {
        // error
      });
  };






 /* $scope.checkFlahLight = function()
  {
    $cordovaFlashlight.available().then(function(availability) {

      console.log("Flash Light is available : ",availability);
    }, function (unavailable) {
      console.log("Flash Light Unavailable : ",unavailable);
    });
  };




  $scope.onFlashLight = function()
  {
    $cordovaFlashlight.switchOn()
      .then(function (success) {
        console.log("Succes : ",success);
      },
        function (error) {
          console.log("Error : ",error);
        });

  };



  $scope.offFlashLight = function()
  {
    $cordovaFlashlight.switchOff()
      .then(function (success) {
        console.log("Succes : ",success);
      }, function (error) {
        console.log("Error : ",error);
        });
  };


  $scope.toggleFlash = function()
  {
    $cordovaFlashlight.toggle()
      .then(function (success) {
        console.log("Succes : ",success);
      }, function (error) {
        console.log("Error : ",error);
      });
  };*/


});
