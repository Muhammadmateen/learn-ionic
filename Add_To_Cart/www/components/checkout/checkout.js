/**
 * Created by Smart Ali on 21-Jun-16.
 */


angular.module('starter')

  .controller("checkoutController",function(cartDataService)
  {

    var _self = this;

    _self.cartItemList =  cartDataService.cartItems;


    _self.removeItem =  function(index)
    {
      console.log("Index : ",index);
      cartDataService.cartItems.splice(index,1);
      console.log("Services of Cart : ",cartDataService.cartItems)
    };

  });
