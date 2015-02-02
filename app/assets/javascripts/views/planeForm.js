'use strict';

var App = App || {};

(function(App) {
  App.PlaneForm = Backbone.View.extend({
    events: {
      'click .save': 'savePlane',
      'click .update': 'updatePlane',
      'click .cancel': 'cancel',
      'click .preview': 'previewSeating',
      'submit form': 'preventSubmission'
    },

    render: function(data, update) {
      this.$el.html(
        HandlebarsTemplates['planes/form'](data)
      );
      if (update.update === true) {     
        this.$el.find(".save").removeClass("save").addClass("update");
      }

      return this;
    },

      updatePlane: function() {
      var plane = App.planesCollection.get(this.$el.find("input[name='plane_id']").val());
      plane.save({
        name: this.$el.find("input[name='name']").val(),
        rows: this.$el.find("input[name='rows']").val(),
        columns: this.$el.find("input[name='columns']").val()
      });
      App.rootView.hideForm();
    },

    savePlane: function() {
      App.planesCollection.create({
        name: this.$el.find("input[name='name']").val(),
        rows: this.$el.find("input[name='rows']").val(),
        columns: this.$el.find("input[name='columns']").val()
      });
      App.rootView.hideForm();
    },

    previewSeating: function() {
      var numRows = parseInt(this.$el.find("input[name='rows']").val());
      var rows = [];
      for(var i=1; i <= numRows; i++) {
        rows.push({ row: i });
      }

      var columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var numColumns = parseInt(this.$el.find("input[name='columns']").val());
      var columns = [];
      for(var i=0; i < numColumns; i++) {
        columns.push({ column: columnLetters[i] });
      }

      this.$el.find(".seating-preview").html(
        HandlebarsTemplates['planes/seating_preview']({
          rows: rows,
          columns: columns
        })
      );
    },

    cancel: function() {
      App.rootView.hideForm();
    },

    preventSubmission: function(event) {
      event.preventDefault();
    }
  });
})(App);
