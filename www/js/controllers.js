angular.module('starter.controllers',[])
.controller('LoginCtrl',function($scope,LoginService,$ionicPopup,$state){
  $scope.data = {};
  $scope.login = function(){
    LoginService.loginUser($scope.data.username,$scope.data.password)
    .success(function(data){
      $scope.data.username = '',
      $scope.data.password = '',
      $state.go('home');
    })
    .error(function(data){
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });

    });


    console.log("Login User:"+ $scope.data.username + "-Pw:"+ $scope.data.password);
  }
})
