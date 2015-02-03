'use strict';

var App = App || {};

(function(App) {
  App.FlightsView = Backbone.View.extend({

     events: {
      'click .create-flight': 'createFlight',
      'dblclick tr': 'editFlight'
    },

    initialize: function(){
      App.flightsCollection.on("add", this.render, this);    
    },    

    createFlight: function(){
      App.rootView.displayForm(App.FlightForm); 
    },

    editFlight: function(){
      alert("Edit Flight");
    },


    render: function(){

      var flightsWithPlanes = [];
      App.flightsCollection.each(function(flight) {
        var withPlane = flight.toJSON();
        withPlane.planeName = App.planesCollection.get(flight.get('plane_id')).get('name');
        flightsWithPlanes.push(withPlane)
      });

      this.$el.html(
        HandlebarsTemplates['flights/index']({ flights: flightsWithPlanes })
        );


      return this;
    }
  });

})(App)