'use strict';

var App = App || {};

(function(App) {
	App.FlightsView = Backbone.View.extend({

		events: {
			'click .create-flight': 'createFlight'
		},

		initialize: function() {
			App.flightsCollection.on('add', this.render, this);
		},

		render: function() {
			var flightsWithPlanes = [];

			App.flightsCollection.each(function(flight) {
				var theFlight = flight.toJSON();
				var planeID = flight.get('plane_id');
				var planeModel = App.planesCollection.get(planeID);

				if (planeModel) {
					theFlight.planeName = planeModel.get('name');
				}

				flightsWithPlanes.push(theFlight);

			});

			this.$el.html(
				HandlebarsTemplates['flights/index']({ flights: flightsWithPlanes })
			);
			return this;
		},

		createFlight: function() {
			App.rootView.displayForm(App.FlightForm);
		},

	});
})(App);