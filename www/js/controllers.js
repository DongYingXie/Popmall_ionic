angular.module('starter.controllers', [])
// 根控制器
.controller('RootCtrl', function($scope, loginstact, $rootScope, $stateParams, $timeout, $ionicPopover,$ionicModal) {
	$rootScope.stateParams = $stateParams;
	$scope.badges = {
		carts: 0,
		contact: 0
	};
	console.log($scope.badges.home);
	$scope.onTaborderSelected = function() {
		// $scope.iflogin=loginstact.getloginflage()

	};
	$scope.swipe = function(e) {
		alert(e);
	}
    

  $scope.openModal = function() {
  	$ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
     $scope.modal.show();
     $scope.closePopover();
  });
   
  };
  $scope.closeModal = function() {
  $scope.modal.hide();
  };
$scope.openRegister=function(){
	 $scope.closePopover();
	 $ionicModal.fromTemplateUrl('my-modal01.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal01 = modal;
    $scope.modal01.show();
  });
  	
}
$scope.closeRegister=function(){	
 $scope.modal01.hide();	
}
 	$ionicPopover.fromTemplateUrl('popover.html', {
		scope: $scope,
	}).then(function(popover) {
		$scope.popover = popover;
		
	});
	$scope.openPopover = function($event) {

		$scope.popover.show($event);
	};
	$scope.closePopover = function() {
		$scope.popover.hide();
	};
	//Cleanup the popover when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.popover.remove();
	});
	// Execute action on hide popover
	$scope.$on('popover.hidden', function() {
		// Execute action
	});
	// Execute action on remove popover
	$scope.$on('popover.removed', function() {
		// Execute action
	});
})


.controller('CarouselDemoCtrl', function($scope) {

})
// 分类页面的控制器
.controller('sortCtrl', function($scope, sorts, HTTPget) {
	$scope.sorts = sorts.all();
	// search 按钮 处理函数
	$scope.seachPro = function() {
		alert("goto search information for you ");
	}
	// 二维码扫描
	$scope.scanBarcode = function() {
		$cordovaBarcodeScanner.scan().then(function(imageData) {
			alert('it will go to search ' + imageData.text);
			console.log("Barcode Format -> " + imageData.format);
			console.log("Cancelled -> " + imageData.cancelled);
		}, function(error) {
			console.log("An error happened -> " + error);
		});
	};
})
// 分类详情页面的控制器
.controller('sortdetailCtrl', function($scope, $stateParams, sorts, HTTPget) {
	$scope.title = sorts.get($stateParams.sortID);
	HTTPget.get_sortdetail($stateParams.sortID).then(function(data) {
		$scope.items = data;
		console.log(data);
	});
    $scope.choocesort=function(_chose){
		console.log(_chose);
      $scope.ifchooce=_chose;

	}
})
// 产品页面的控制器
.controller('productionCtrl', function($scope, $stateParams, $location, $rootScope, HTTPget, cartdata,$cordovaSocialSharing) {
		$scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://www.baidu.com");
    }
 
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }
	$scope.tipid = $stateParams.productID; //绑定跳转URL
	$scope.items = [];
	$scope.items.numbers = 1;

	$scope.ifclass = 'propgrag';
	$scope.reduNum = function() {
		if ($scope.items.numbers == 1) {
			$scope.items.numbers = 1;
		} else {
			$scope.items.numbers -= 1;
		}

	}
	$scope.addNum = function() {
		$scope.items.numbers += 1;
	}
	HTTPget.get_productdetail($stateParams.productID).then(function(data) {
		console.log('get' + data.name);
		$scope.items = data[0];
	});
	$scope.urlstate = true;
	// 监听路由的变化
	$scope.$on("$stateChangeSuccess", function() {
		var str = $location.path().substring(1);
		var a = str.split("/");
		var resultStr = a[1];
		if (resultStr == 'production' & $scope.urlstate) {
			$location.path('/tab/production/' + $scope.tipid + '/propgrag');
			$scope.urlstate = false;

		}
	});



	$scope.menupred = function(page) {
		$location.path('/tab/production/' + $scope.tipid + '/' + page);
		var str = $location.path().substring(1);
		var a = str.split("/");
		var resultStr = a[(a.length - 1)];

		$scope.ifclass = resultStr;
	}
	// 加入购物车处理函数
	$scope.addcart = function() {
		$scope.badges.carts = $scope.badges.carts + 1; //购物车的物品加一
		var data = $scope.items;
		cartdata.setCartData(data);
	}
	//end 
	$scope.quickbug = function() {

	}
})
.controller('payCtrl',function($scope){
	$scope.radiodate="01"
$scope.devList = [
    { text: "只在工作日送货（双休日、节假日不送）", value: "01" },
    { text: "工作日、双休日、节假日均可送货", value: "02" },
    { text: "只双休日、节假日送货", value: "03" }
  ];
})

// 附近页面的控制器
.controller('nearbyCtrl', function($scope, $cordovaGeolocation, HTTPget, $ionicLoading) {

	$scope.getlocation = function() {
		$ionicLoading.show({
			template: 'Loading...'
		});
		$cordovaGeolocation.getCurrentPosition().then(function(pos) {
			var lat = pos.coords.latitude
			var long = pos.coords.longitude
			console.log('Got pos', pos);
			HTTPget.get_nearby().then(function(data) {
				$scope.nearbyitems = data;
			});
			$ionicLoading.hide();
		}, function(err) {
			$ionicLoading.hide();
		});
	}
})


angular.module('ionicApp', ['ionic'])