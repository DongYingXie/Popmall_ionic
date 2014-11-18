angular.module('start.sortother',[])
.controller('sortotherCtrl',function($scope,getHttp){
	getHttp.get_data(url_sortother).then(function(data) {
			$scope.sorts = data;
		});

})
.controller('sortotherchilrdCtrl',function($scope,getHttp,$stateParams){
	$scope.urlchilrdId=$stateParams.chilrdID;
	$scope.datas=[];
	getHttp.get_data('json/sortchild01.json').then(function(data) {
		console.log(data);
			$scope.sortschild = data;
			$scope.datas=data;
			$scope.childdatas=data[0].sortchirlds;
			$scope.ifchoose=0;
		});
	$scope.getchilddata=function(_index){
	  $scope.ifchoose=_index;
      $scope.childdatas=$scope.datas[_index].sortchirlds;
	}
	
})
