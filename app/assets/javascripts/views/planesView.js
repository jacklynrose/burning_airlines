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
      App.rootView.displayForm(App.PlaneForm,{},{update:false});
    },

    editPlane: function(event){
      var plane_id = $(event.currentTarget).attr("data-id");
      var currentPlane = App.planesCollection.get({id: plane_id});
      App.rootView.displayForm(App.PlaneForm, { 
        id: currentPlane.attributes.id,
        name: currentPlane.attributes.name,
        rows: currentPlane.attributes.rows,
        columns: currentPlane.attributes.columns
      },{update: true});

    },

  });
})(App);
