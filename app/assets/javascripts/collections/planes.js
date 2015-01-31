var App = App || {};

(function(App) {
  App.Planes = Backbone.Collection.extend({
    url: "/planes",
    model: App.Plane
  });

  App.planesCollection = new App.Planes();
})(App);
