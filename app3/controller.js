angular.module('parseApp').controller('parseCtrl', function(parseService, $scope) {

  $scope.types = ['7/11s','restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salons', 'time-machines', 'prisons'];

  $scope.addBiz = function() {
    parseService.postBiz($scope.biz).then(function(res) {
      console.log('bizness posted',res);
      $scope.biz = '';
    }, function(err) {
      console.log('something bad happened',err);
    });
  };

  parseService.getBiz().then(function(res) {
    console.log(res.data.results);

    $scope.biznesses = res.data.results;
  });

});
