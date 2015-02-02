'use strict';

var App = App || {};

(function(App) {
  App.PlanesView = Backbone.View.extend({
    events: {
      'click .create-plane': 'createPlane',
      'dblclick .plane-row': 'editPlane'
    },

    initialize: function() {
      App.planesCollection.on("add", this.render, this);
      App.planesCollection.on("change", this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['planes/index']({ planes: App.planesCollection.toJSON() })
      );

      return this;
    },

    createPlane: function() {
      App.rootView.displayForm(App.PlaneForm);
    },

    editPlane: function(event) {
      var id = $(event.currentTarget).data("id");
      App.rootView.displayFilledForm(App.PlaneForm, id);

    }
  });
})(App);
