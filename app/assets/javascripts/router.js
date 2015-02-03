'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    
    routes: {
      '': 'planes',
      'planes': 'planes',
      'flights': 'flights'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);

      $("nav a:not([data-backbone-navigation='false'])").on("click", function(event) {
        event.preventDefault();
        App.router.navigate($(this).attr("href"), { trigger: true });
      });
    },

    planes: function() {
      App.planesCollection.fetch().then(function() {
        App.rootView.display(App.PlanesView);
      });
    },

    flights: function() {
      App.planesCollection.fetch().then(function() {
        App.flightsCollection.fetch().then(function() {
          App.rootView.display(App.FlightsView);
        });
      });
    },

  });
  App.router = new App.Router();
})(App);
