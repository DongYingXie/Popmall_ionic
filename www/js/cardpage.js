angular.module('starter.cardpageCtr', [])
// 我的购物车页面的控制器
.controller('orderCtrl', function($scope, loadOreders, loginstact, HTTPget, cartdata, $rootScope,$location) {
	console.log("oreder");


	$scope.items = [];
	if ($scope.badges.carts == 0) {
		$scope.ifShowtatol = false;
	} else {
		$scope.ifShowtatol = true;
		$scope.items = cartdata.getallcartData();
	}
	// 计算 总得价格
	$scope.tatolPrice = function() {
		var tatolprice = 0;
		for (var i = 0; i < $scope.items.length; i++) {
			tatolprice += $scope.items[i].price * $scope.items[i].numbers;

		}
		return tatolprice;
	}
	// 计算 总数量
	$scope.tatolNumebr = function() {
		var Nom = 0;
		for (var i = 0; i < $scope.items.length; i++) {
			Nom += $scope.items[i].numbers;
		}
		return Nom;
	}
	// 数量的 增加
	$scope.addNum_pro = function(_index) {
		$scope.items[_index].numbers += 1;

	}
	// 数量的 减少
	$scope.reduNum_pro = function(_index) {

		if ($scope.items[_index].numbers == 0) {
			$scope.items[_index].numbers = 1;
		} else {
			$scope.items[_index].numbers -= 1;
		}

	}
	// 删除购物车的某一条数据
	$scope.removecart = function(RmId) {
		$scope.badges.carts = $scope.badges.carts - 1; //购物车的物品减一
		if ($scope.badges.carts == 0) {
			$scope.ifShowtatol = false;
		} else {
			$scope.ifShowtatol = true;
		}
		cartdata.removeCartDate(RmId);
	}
	// 进入结算中心
	$scope.gotocheck = function() {
		$location.path('/tab/pay');

	}
	// 继续购物
	$scope.gotohome = function() {

	}
	// 监听购物车数量的减少
	$scope.$on('removeCartDate', function() {
		console.log('监听购物车数量的减少');
	});
	//监听购物车数量的增加
	$rootScope.$on('AddCartData', function(event) {
		console.log("我监听到了 addCartDate");

	});
	// 下拉更新
	// $scope.doReFresh = function() {
	// 	$scope.items.unshift({
	// 		"id": "3",
	// 		"name": "迷你手机",
	// 		"price": "100",
	// 		"ordid": "001",
	// 		"orddate": "",
	// 		"payed": "未付款",
	// 		"image": "img/15b.jpg"
	// 	});
	// 	$scope.$broadcast('scroll.refreshComplete');
	// 	$scope.$apple()
	// }
})
