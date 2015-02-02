'use strict';

var App = App || {};

(function(App) {
  App.PlanesView = Backbone.View.extend({
    events: {
      'dblclick tr': 'editPlane',
      'click .create-plane': 'createPlane'
    },

    editPlane: function(event){
      var id = $(event.currentTarget).attr("data-id");
      var currentPlane = App.planesCollection.get(id);
      var columns = currentPlane.attributes.columns;
      var rows = currentPlane.attributes.rows;
      var name = currentPlane.attributes.name;
      App.rootView.displayForm(App.PlaneForm, {
        id: id,
        name: name,
        columns: columns,
        rows: rows
      });
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
