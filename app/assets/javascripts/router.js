'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      '': 'planes',
      'planes': 'planes'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);

      $("nav a:not([data-backbone-navigation='false'])").on("click", function(event) {
        event.preventDefault();
        App.router.navigate($(this).attr("href"));
      });
    },

    planes: function() {
      App.planesCollection.fetch().then(function() {
        App.rootView.display(App.PlanesView);
      });
    }
  });
  App.router = new App.Router();
})(App);
