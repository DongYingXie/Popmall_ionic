angular.module('starter.homepageCtr', [])

// 商品页面的控制器
.controller('homeCtrl', function($scope, loginstact, $state, $location) {
	// 页面中的 view 的左右滑动
	$scope.swipetoleft = function() {
		var str = $location.path().substring(1);
		var a = str.split("/");
		var resultStr = a[a.length - 1];
		
		if (resultStr == 'recommend') {
			$state.go('tab.home.brand');
			$scope.ifShow = 'tab.home.brand';
		} else if (resultStr == 'brand') {
			$state.go('tab.home.newest');
			$scope.ifShow = 'tab.home.newest';
		} else if (resultStr == 'newest') {
			$state.go('tab.home.panicbuying');
			$scope.ifShow = 'tab.home.panicbuying';
		}
	}
	$scope.swipetoright=function(){
		var str = $location.path().substring(1);
		var a = str.split("/");
		var resultStr = a[a.length - 1];
		if(resultStr=='panicbuying'){
			$state.go('tab.home.newest');
			$scope.ifShow = 'tab.home.newest';
		}else if(resultStr=='newest'){
			$state.go('tab.home.brand');
			$scope.ifShow = 'tab.home.brand';	
		}else if(resultStr=='brand'){
			$state.go('tab.home.recommend');
		$scope.ifShow = 'tab.home.recommend';	
		}
	}
	// end
	$state.go('tab.home.recommend');
	// 绑定子header  de 左右滑动效果函数
	$scope.RToBrandByL = function() {
		$state.go('tab.home.brand');
		$scope.ifShow = 'tab.home.brand';
	}
	$scope.BToNewByL = function() {
		$state.go('tab.home.newest');
		$scope.ifShow = 'tab.home.newest';
	}
	$scope.NToBuyingByL = function() {
		$state.go('tab.home.panicbuying');
		$scope.ifShow = 'tab.home.panicbuying';
	}
	$scope.BToNewByR = function() {
		$state.go('tab.home.newest');
		$scope.ifShow = 'tab.home.newest';
	}
	$scope.NToBrandByR = function() {
		$state.go('tab.home.brand');
		$scope.ifShow = 'tab.home.brand';
	}
	$scope.BToRecomdByR = function() {
		$state.go('tab.home.recommend');
		$scope.ifShow = 'tab.home.recommend';
	}
	// end
	$scope.ifShow = 'tab.home.recommend';
	$scope.gotoview = function(stateName) {
		$scope.ifShow = stateName;
		/* $location.path('/tab/newpost'); */
		$state.go(stateName); /* tried swapping stateName with 'tab.newpost' and func() */
		//alert($location.path().substring(1));

	};

})
// 推荐控制器
.controller('recommendCtrl', ['$http',
	function() {
		console.log('0000');

	}
])
// 最新发布控制器
.controller('newestCtrl', ['getHttp', '$scope',
	function(getHttp, $scope) {
		getHttp.get_data(url_newest).then(function(data) {
			$scope.news = data;
		});
	}
])
// 抢购控制器
.controller('panicCtrl', ['getHttp', '$scope',
	function(getHttp, $scope) {
		getHttp.get_data(url_punicbuy).then(function(data) {
			$scope.panics = data;
		});
	}
])
// 品牌控制器
.controller('brandCtr', ['getHttp', '$scope',
	function(getHttp, $scope) {

		getHttp.get_data(url_brand).then(function(data) {
			$scope.brands = data;
		});
	}
])
	.controller('MyCtrl', function($scope, $ionicNavBarDelegate) {
		$scope.goBack = function() {
			console.log("ddddd");
			$ionicNavBarDelegate.back();
		};

	})
	.factory('getHttp', function($q, $http) {
		return {
			get_data: function(_url) {
				var deferred = $q.defer();
				$http.get(_url).success(function(data) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});
				return deferred.promise;
			}
		}
	})
var url_sortotherchild = 'json/sortchild01.json';
var url_sortchild = 'json/sortdetail';
var url_sortother = 'json/sortother.json';
var url_punicbuy = 'json/punicbuy.json';
var url_recomment = 'json/recomment.json';
var url_newest = 'json/neswt.json';
var url_brand = 'json/brand.json';