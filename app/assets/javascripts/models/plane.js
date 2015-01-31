'use strict';

var App = App || {};

(function(App) {
  App.Plane = Backbone.Model.extend({
    urlRoot: "/planes"
  });
})(App);
