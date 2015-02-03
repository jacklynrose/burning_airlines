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
      App.flightsCollection.on("change", this.render, this);   
    },    

    createFlight: function(){
      App.rootView.displayForm(App.FlightForm); 
    },

    editFlight: function(event){
      var id = $(event.currentTarget).data("id");
      App.rootView.displayForm(App.FlightForm, id ); 
    },


    render: function(){

      var flightsWithPlanes = [];
      App.flightsCollection.each(function(flight) {
        flight.attributes.formattedDate = flight.attributes.date.substr(0, 10);
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