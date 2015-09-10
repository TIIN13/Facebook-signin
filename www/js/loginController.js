/**
 * Created by nielshansen on 03/09/15.
 */

/*
This is our module with the controller for handling our login.html page
 */
angular.module('starter.loginController', ['firebase'])

  /*
  The $scope object is used as it is accessible in our login.html
  The $state object is for navigation så when our login() is "activated",
  it will take you to the defined state/page (here it is our tab.todo)
   */
.controller('LoginCtrl', function($scope, $state) {

    $scope.login = function () {
      $state.go('tab.todo')
    }

    $scope.facebookSignIn = function () {


    var ref = new Firebase("https://<YOUR-FIREBASE-URL-GOES-HERE>.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.facebook = {name: authData.facebook.displayName, img: authData.facebook.profileImageURL, email: authData.facebook.email, expires: authData.expires};
      }
    });
    }

})
