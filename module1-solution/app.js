(function(){
angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheck);

LunchCheck.$injector=["$scope"]

function LunchCheck ($scope){
    $scope.list="";
    //$scope.foodList="";
    $scope.checkList=function(){

if($scope.foodList!=undefined && $scope.foodList!=""){
    $scope.list=$scope.foodList.split(",")
    var len=$scope.list.length;
    if (len<=3){
        $scope.message="Enjoy!!"
    }
    else{
        $scope.message="Too much !!"
    }
}
else{
    $scope.message="Please enter data first"
}
}
}

})();