'use strict';

var App = App || {};

(function(App) {
  App.Flight = Backbone.Model.extend({
    urlRoot: "/flight"
  });
})(App);
