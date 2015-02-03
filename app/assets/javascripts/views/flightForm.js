'use strict';

var App = App || {};


(function(App) {
  App.FlightForm = Backbone.View.extend({
    events: {
      'click .save': 'saveFlight',
      'click .update': 'updateFlight',
      'click .cancel': 'cancel',
      'submit form': 'preventSubmission'
    },

    render: function(id) {
      App.planesCollection.fetch();
      if (id === undefined){
        this.$el.html(
        HandlebarsTemplates['flights/form']({plane: App.planesCollection.toJSON(), flight: {}})
        ) }
        else {
        
        var flight = App.flightsCollection.get(id).toJSON(); 
        flight.formattedDate = flight.date.substr(0, 10);
        this.$el.html(
        HandlebarsTemplates['flights/form']({plane: App.planesCollection.toJSON(), flight: flight})
        );

        this.$el.find(".save").attr("data-id", flight.plane_id ).removeClass("save").addClass("update").html("Update");
        this.$el.find("option[value=\"" + flight.plane_id + "\"]").attr("selected", "selected");
        }
        return this;
    },

    updateFlight: function(){
      var id = this.$el.find(".update").data("id");
        var flight = App.flightsCollection.get(id);
        flight.save({
        flight_number: this.$el.find("input[name='flight-number']").val(),
        date: this.$el.find("input[name='date']").val(),
        origin: this.$el.find("input[name='origin']").val(),
        destination: this.$el.find("input[name='destination']").val(),
        plane_id: this.$el.find("select[name='plane_id']").val()
      });

      App.rootView.hideForm();
    },

    saveFlight: function() {

      App.flightsCollection.create({
        flight_number: this.$el.find("input[name='flight-number']").val(),
        date: this.$el.find("input[name='date']").val(),
        origin: this.$el.find("input[name='origin']").val(),
        destination: this.$el.find("input[name='destination']").val(),
        plane_id: this.$el.find("select[name='plane_id']").val()
      });

      App.rootView.hideForm();
    },


    cancel: function() {
      App.rootView.hideForm();
    },

    preventSubmission: function(event) {
      event.preventDefault();
    }
  });
})(App);
