/**
 * Created by Smart Ali on 13-Jun-16.
 */

angular.module('starter')

  .controller("homeController",function($cordovaLocalNotification)
  {

    console.log("Controller Call");
    var _self = this;


    _self.addNotification = function()
    {
      var now             = new Date().getTime(),
        _5_sec_from_now = new Date(now + 15*1000);

      cordova.plugins.notification.local.schedule({
        title:'Innovaters TECH',
        text: "Delayed Notification",
        at: _5_sec_from_now,
        led: "FF0000",

      });

    };

  });
