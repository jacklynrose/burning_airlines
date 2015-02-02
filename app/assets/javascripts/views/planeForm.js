'use strict';

var App = App || {};

(function(App) {
  App.PlaneForm = Backbone.View.extend({
    events: {
      'click .save': 'savePlane',
      'click .cancel': 'cancel',
      'click .preview': 'previewSeating',
      'submit form': 'preventSubmission'
    },

    render: function(data) {
      this.$el.html(
        HandlebarsTemplates['planes/form'](data)
      );

      return this;
    },

    savePlane: function() {
      var planeData = {
          name: this.$el.find("input[name='name']").val(),
          rows: this.$el.find("input[name='rows']").val(),
          columns: this.$el.find("input[name='columns']").val()
        };
      var id = this.$el.find("input[name='id']").val();
      if (id == ""){
        App.planesCollection.create(planeData);
        this.render();
      } else if (id !== undefined){
        var plane = App.planesCollection.get(id);
        plane.save(planeData);
        this.render();
      }
      

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
