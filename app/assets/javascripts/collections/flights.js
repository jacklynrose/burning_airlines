var App = App || {};

(function(App) {
  App.Planes = Backbone.Collection.extend({

    url: "/planes",
    model: App.Flight
  });

  App.flightsCollection = new App.Flight();
})(App);