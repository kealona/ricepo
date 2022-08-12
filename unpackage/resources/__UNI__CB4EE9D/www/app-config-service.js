
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/home/home","pages/home/map","pages/address/address","pages/address/createAddress/createAddress","pages/home/search/search","pages/user/user","pages/user/collect/collect","pages/user/footprint/footprint","pages/user/card/card","pages/user/comment/comment","pages/order/order","pages/cart/cart","pages/order/detail/detail","pages/order/refund/refund","pages/order/evaluate/evaluate","pages/shop/shop","pages/shop/detail/detail","pages/shop/search/search","pages/shop/settlement/settlement"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f6f6f6","navigationStyle":"","backgroundColor":"#f6f6f6"},"tabBar":{"color":"#333333","backgroundColor":"#fff","list":[{"pagePath":"pages/home/home","iconPath":"./static/logo.png","selectedIconPath":"static/logo.png","text":"首页"},{"pagePath":"pages/cart/cart","iconPath":"./static/logo.png","selectedIconPath":"static/logo.png","text":"购物车"},{"pagePath":"pages/order/order","iconPath":"./static/logo.png","selectedIconPath":"static/logo.png","text":"订单"},{"pagePath":"pages/user/user","iconPath":"./static/logo.png","selectedIconPath":"static/logo.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"吃了吗","compilerVersion":"3.2.9","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/home/map","meta":{},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"收货地址","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/address/createAddress/createAddress","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/home/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/collect/collect","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/footprint/footprint","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/card/card","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/user/comment/comment","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":false,"navigationStyle":"custom","backgroundColor":"#fff"}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/order/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/order/refund/refund","meta":{},"window":{"navigationBarTitleText":"退款详情","enablePullDownRefresh":false}},{"path":"/pages/order/evaluate/evaluate","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/shop/shop","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/shop/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/shop/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/shop/settlement/settlement","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});