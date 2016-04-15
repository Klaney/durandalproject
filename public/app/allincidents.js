define(function (require) {
  var http = require('plugins/http'),
      ko = require('knockout');
 
  var url = '/allmi';
 
  return {
    incidents: ko.observableArray(),
    activate: function () {
      var that = this;
      if (this.incidents().length > 0) {
        return;
      }
 
      return http.get(url).then(function(response) {
        that.incidents(response);
        console.log(response);
      });
     }
   };
});