define(function (require) {
  var router = require('plugins/router');
 
  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'home', nav: true },
        { route:'auth/signup', title:'Signup', moduleId:'signup', nav:true },
        { route:'auth/login', title:'Login', moduleId:'login', nav:true }
      ]).buildNavigationModel();

     	return router.activate();
    }
  };
});