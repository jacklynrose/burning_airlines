var App = App || {};

(function(App) {
  App.Planes = Backbone.Collection.extend({
    
    url: "/api/planes",
    model: App.Plane
    
  });

  App.planesCollection = new App.Planes();
})(App);
