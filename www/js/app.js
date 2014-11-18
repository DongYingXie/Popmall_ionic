// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ui.router','starter.homepageCtr','starter.morepageCtr','starter.cardpageCtr','start.sortother'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  // 主页的路由
    .state('tab.home', {
    url: "/home",
    views: {
      'tab-store': {
        templateUrl: "templates/home/home.html",
        controller: 'homeCtrl'
      }
    }
  })
  .state('tab.home.recommend', {
      url: "/recommend",
      views: {
        'inception' :{
          templateUrl: "templates/home/recommend.html",
          controller:'recommendCtrl'
        }
      }
    })
  .state('tab.home.brand', {
      url: "/brand",
      views: {
        'inception' :{
          templateUrl: "templates/home/brand.html",
          controller:'brandCtr'
        }
      }
    })
    .state('tab.home.newest', {
      url: "/newest",
      views: {
        'inception' :{
          templateUrl: "templates/home/newest.html",
          controller:'newestCtrl'
        }
      }
    })
      .state('tab.home.panicbuying', {
      url: "/panicbuying",
      views: {
        'inception' :{
          templateUrl: "templates/home/panicbuying.html",
          controller:'panicCtrl'
        }
      }
    })
    .state('storehome',{
      url:"/storehome",
      templateUrl:"templates/home/storehome.html"
    }
      ) 
    .state('storedetail',{
      url:"/storedetail",
      templateUrl:"templates/home/storedetail.html"
    }
      )
  // 分类的路由
  // .state('tab.sort', {
  //   url: '/sort',
  //   views: {
  //     'tab-sort': {
  //       templateUrl: 'templates/sort/sort.html',
  //       controller: 'sortCtrl'
  //     }
  //   }
  // })
    .state('tab.sortdetail', {
      url: '/sortdetail/:sortID',
      views: {
        'tab-sort': {
          templateUrl: 'templates/sort/sortdetail.html',
          controller: 'sortdetailCtrl'
        }
      }
    }) 
    .state('tab.production', {
      url: '/production/:productID',
      views: {
        'tab-sort': {
          templateUrl: 'templates/sort/production.html',
          controller: 'productionCtrl'
        }
      }
    })
    .state('tab.production.propgrag', {
      url: "/propgrag",
      views: {
        'productionview' :{
          templateUrl: "templates/sort/propgrag.html"
        }
      }
    })
    .state('tab.production.propcomt', {
      url: "/propcomt",
      views: {
        'productionview' :{
          templateUrl: "templates/sort/propcomt.html"
        }
      }
    })
    .state('tab.production.propict', {
      url: "/propict",
      views: {
        'productionview' :{
          templateUrl: "templates/sort/propict.html"
        }
      }
    })
    .state('tab.sortother', {
    url: '/sortother',
    views: {
      'tab-sort': {
        templateUrl: 'templates/sortother/sort.html',
        controller:'sortotherCtrl'
      }
    }
  })
    .state('tab.sortotherchirld', {
    url: '/sortotherchirld/:chilrdID',
    views: {
      'tab-sort': {
        templateUrl: 'templates/sortother/sortchilrd.html',
        controller:'sortotherchilrdCtrl'
      }
    }
  })
    // 购物车的路由
    .state('tab.order', {
      url: '/order',
      views: {
        'tab-order': {
          templateUrl: 'templates/cards/order.html',
          controller: 'orderCtrl'
        }
      }
    })    
    .state('tab.pay', {
      url: '/pay',
      views: {
        'tab-order': {
          templateUrl: 'templates/cards/pay.html',
          controller: 'payCtrl'
        }
      }
    })

// 附近页面的路由
  .state('tab.nearby', {
    url: '/nearby',
    views: {
      'tab-nearby': {
        templateUrl: 'templates/nearby.html',
        controller: 'nearbyCtrl'
      }
    }
  })
// 更多页面的路由
    .state('tab.more', {
      url: '/more',
      views: {
        'tab-more': {
          templateUrl: 'templates/orders/more.html',
          controller: 'moreCtrl'
        }
      }
    })
    // 我的订单页面
    .state('tab.myorder', {
      url: '/myorder',
      views: {
        'tab-more': {
          templateUrl: 'templates/orders/myorder.html',
          controller: 'myorder'
        }
      }
    })
    // 物流查询页面
    .state('tab.checkLogistics', {
      url: '/checkLogistics',
      views: {
        'tab-more': {
          templateUrl: 'templates/orders/checkLogistics.html',
          controller: 'checkLogisticsCtrl'
        }
      }
    }) 
    // 物流详细信息页面
    .state('tab.logisticsDetail', {
      url: '/logisticsDetail',
      views: {
        'tab-more': {
          templateUrl: 'templates/orders/logisticsDetail.html',
          controller: 'logisticsDetailCtrl'
        }
      }
    })
    // 我的账户页面
        .state('tab.myaccout', {
      url: '/myaccout',
      views: {
        'tab-more': {
          templateUrl: 'templates/orders/myaccout.html',
          controller: 'myaccoutCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home/recommend');

});