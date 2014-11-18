// 更多页面的控制器

angular.module('starter.morepageCtr', [])
// 更多页面的控制器
.controller('moreCtrl', function($scope, moreService, loginstact) {


})
// 我的订单页面的控制器
.controller('myorder', ['moreService','$scope',
	function(moreService,$scope) {
		console.log('0000');

	}
])
// 物流查询页面的控制器
.controller('checkLogisticsCtrl', ['$http',
	function() {
		console.log('0000');

	}
])
// 物流细节页面的控制器
.controller('logisticsDetailCtrl', ['$http',
	function() {
		console.log('0000');

	}
])
// 我的账户页面的控制器
.controller('myaccoutCtrl',
	function(moreService,$scope) {
			moreService.getinfo().then(function(data) {
		$scope.moreiofo = data;
	});

	}
)
