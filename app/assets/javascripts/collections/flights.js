var App = App || {};

(function(App) {
  App.Flights = Backbone.Collection.extend({
    url: "/flights",
    model: App.Flight
  });

  App.flightsCollection = new App.Flights();
})(App);