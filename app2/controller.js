angular.module('insultApp').controller('insultCtrl', function(insultService, $scope) {

 $scope.getInsult = function() {
   $scope.insult = insultService.getInsult();
 };

});
