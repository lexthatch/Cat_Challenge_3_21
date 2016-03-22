app.controller("CatzController",function($scope, catService){
   $scope.Cat ="Cat";
   $scope.loadCat = function($timeout, 30000){
       catService.loadCat().then(function(data){
           $scope.Cat=data;
       });
   }
    
})