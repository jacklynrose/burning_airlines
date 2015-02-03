var App = App || {};

(function(App) {
	App.Flights = Backbone.Collection.extend({

		url: '/api/flights',
		model: App.Flight

	});

	App.flightsCollection = new App.Flights();
})(App);