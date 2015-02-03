'use strict';

var App = App || {};

(function(App) {
  App.PlanesView = Backbone.View.extend({
    
    events: {
      'click .create-plane': 'createPlane'
    },

    initialize: function() {
      App.planesCollection.on("add", this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['planes/index']({ planes: App.planesCollection.toJSON() })
      );

      return this;
    },

    createPlane: function() {
      App.rootView.displayForm(App.PlaneForm);
    }
  });
})(App);
