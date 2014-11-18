angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('sorts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var sorts = [{
    sortsID: "01",
    sotrby: [{
      id: "010",
      name: "食品保健",
      img: "img/20111119171024294/coffee.png"
    }, {
      id: "011",
      name: "电影订票",
      img: "img/20111119171024294/gamepad.png"
    }, {
      id: "012",
      name: "餐饮美食",
      img: "img/20111119171024294/meal.png"
    }, {
      id: "013",
      name: "办公、文具",
      img: "img/20111119171024294/pencil.png"
    }]
  }, {
    sortsID: "02",
    sotrby: [{
      id: "024",
      name: "数码、电子",
      img: "img/20111119171024294/camera.png"
    }, {
      id: "025",
      name: "手机配件",
      img: "img/20111119171024294/mobile-phone.png"
    }, {
      id: "026",
      name: "笔记本、台式机",
      img: "img/20111119171024294/monitor.png"
    }, {
      id: "027",
      name: "家电厨具",
      img: "img/20111119171024294/phone.png"
    }]
  }, {
    sortsID: "03",
    sotrby: [{
      id: "034",
      name: "女装男装",
      img: "img/20111119171024294/battery.png"
    }, {
      id: "036",
      name: "母婴用品",
      img: "img/20111119171024294/bell.png"
    }, {
      id: "037",
      name: "箱包",
      img: "img/20111119171024294/briefcase.png"
    }, {
      id: "038",
      name: "美容护肤",
      img: "img/20111119171024294/compass.png"
    }]
  }];
  return {
    all: function() {
      return sorts;
    },
    get: function(sortID) {

      for (var i = 0; i < sorts.length; i++) {
        for (var j = 0; j < sorts[i].sotrby.length; j++) {
          if (sorts[i].sotrby[j].id == sortID) {
            return sorts[i].sotrby[j];
          }
        }
      }
    }
  }
})
// 登录状态的判断
.factory('loginstact', ['$rootScope',
  function($rootScope) {
    var loginvalue = {
      logined: false,
      loginedorder: false,

    };

    return {
      getloginflage: function() {
        return loginvalue.logined;
      },
      getloginshow: function() {
        return loginvalue.loginedorder;
      },
      all: function() {
        return loginvalue;

      },
      setloginflage: function(flg) {
        loginvalue.logined = flg;
        console.log("write" + flg);
        //$rootScope.$broadcast('messageAdded');
      }
    }
  }
])
// 购物车的数据请求
.factory('cartdata', ['$rootScope',
  function($rootScope) {
    var cartData = [];

    return {
      getallcartData: function() {
        return cartData;

      },
      setCartData: function(_data) {
        cartData.unshift(_data);
        console.log("我广播了addcartdata");
        $rootScope.$emit('AddCartData');

      },
      removeCartDate: function(_index) {
        console.log('removeCartDate');
        cartData.splice(_index, 1);
        $rootScope.$broadcast('removeCartDate');
      }
    }
  }
])
  .factory('Recipe', ['$resource',
    function($resource) {
      return $resource('json/order.json/:id', {
        id: '@id'
      });
    }
  ])
  .factory('loadOreders', ['Recipe', '$q',
    function(Recipe, $q) {
      return {
        getbyid: function(ID) {
          var defer = $q.defer();
          Recipe.get({
            id: ID
          }, function(data, headers) {
            defer.resolve(data);
          }, function(data, headers) {
            defer.reject(data);
          });
          return defer.promise
        },
        getall: function() {
          var defer = $q.defer();
          Recipe.query(function(recipes) {
            defer.resolve(recipes)
          }, function() {
            defer.reject();
          });
          return defer.promise;
        }
      }
    }
  ])
  .factory('moreService', function($http, $q) {
    return {
      getinfo: function() {
        var deferred = $q.defer();
        $http.get('json/more.json').success(function(data) {
          console.log('success');
          deferred.resolve(data);
        }).error(function() {
          console.log('error');
          deferred.reject();
        });
        return deferred.promise;
      }
    }
  })
// http请求数据汇总
.factory('HTTPget', function($http, $q, $rootScope) {
  return {
    getlogin: function(tel, pwd) {
      var deferred = $q.defer();
      $http.get('json/login.json').success(function(data) {
        console.log('success');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    },
    // 商品页面的品牌的数据请求
    getbrand: function() {
      var deferred = $q.defer();
      $http.get('json/brand.json').success(function(data) {
        console.log('success');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    },
    // 商品页面的最新发布的数据请求
    get_newest:function(){

    },
    // 附近页面的数据请求
    get_nearby: function() {
      var deferred = $q.defer();
      $http.get('json/nearby.json').success(function(data) {
        console.log('success');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    },
    // 附近细节页面的数据请求
    get_nearbydetail: function(nearyID) {
      var deferred = $q.defer();
      $http.get('json/more.json').success(function(data) {
        console.log('success');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    },
    // 分类页面中search 按钮 的数据请求
    get_searchBtn: function(_Comment) {

    },
    // 分类页面中的二维码扫描的数据请求
    get_scanBarcode:function(_data){

    },
    // 分类详情页面的数据请求
    get_sortdetail: function(sortdetailID) {
      console.log("get_sortdetail : " + sortdetailID);
      var deferred = $q.defer();
      $http.get('json/sortdetail' + sortdetailID + '.json').success(function(data) {
        console.log('success');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    },
    // 产品细节页面的数据请求
    get_productdetail: function(productID) {
      var deferred = $q.defer();
      $http.get('json/productdetail' + productID + '.json').success(function(data) {
        console.log('productdetail');
        deferred.resolve(data);
      }).error(function() {
        console.log('error');
        deferred.reject();
      });
      return deferred.promise;
    }
  }
})
// 键盘的search 按钮绑定事件
.directive('mysearch', function() {
  return {
    restrict: 'EAC',
    scope: {
      gotosearch: '&searchinfo'
    },
    link: function(scope, ele, attrs, ctrl, trans) {
      ele.bind('search', function() {
        scope.$apply(function() {
          // alert("search");
          scope.gotosearch();

        })
      });
    }
  }
})