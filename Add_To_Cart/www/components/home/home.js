/**
 * Created by Smart Ali on 21-Jun-16.
 */

angular.module('starter')

  .controller("homeController",function(cartDataService,$scope,$ionicModal,$state)
  {

    var _self = this;
    _self.selectedQuantity = 1;

    $ionicModal.fromTemplateUrl('./components/modalTemp/modalTemp.html', {
      scope:$scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      _self.modal = modal;
    });


    _self.items = [
      {
        name:'Nike',
        price:1500,
        description:'Nike is best brand'
      },
      {
        name:'Q mobile',
        price:3000,
        description:'Q mobile is best brand'
      },
      {
        name:'Galaxy',
        price:8000,
        description:'Galaxy is best brand'
      }
    ];


    _self.addToCart = function(index)
    {
      _self.selectedQuantity = 1;
      console.log("Items send : ",_self.items[index]);

      _self.modalData = angular.copy(_self.items[index]);

      _self.modal.show();

    };


    _self.addQuantity = function()
    {
      console.log("add quantity Function Call");
      if(_self.selectedQuantity >= 1)
      {
        _self.selectedQuantity++;
      }
    };

    _self.removeQuantity = function()
    {
      console.log("Remove quantity Function Call");
      if(_self.selectedQuantity > 1)
      {
        _self.selectedQuantity--;
      }
    };

    _self.addToBack = function()
    {
      _self.modalData.totalPrice = _self.modalData.price * _self.selectedQuantity;
      _self.modalData.totalItems = _self.selectedQuantity;
      cartDataService.cartItems.push(_self.modalData);
      _self.modal.hide();
      $state.go("checkout");

    };

    cartDataService.cartItems;


  });
