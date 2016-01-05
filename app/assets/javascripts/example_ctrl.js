(function(){
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope){

$scope.action_items = ["Action Item 1","Action Item 2","Action Item 3"];

$scope.addActionItem = function(action_item){
  $scope.action_items.push(action_item);
}

// $scope.to_do_1 = "Action Item 1";
// $scope.to_do_2="Action Item 2";
// $scope.to_do_3="Action Item 3";


window.$scope=$scope;
  
  });
})();