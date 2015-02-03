'use strict';

var App = App || {};

(function(App) {
	App.FlightsView = Backbone.View.extend({

		events: {

		},

		// initialize: function() {
		// 	App.flightsCollection.on('add', this.render, this);
		// },

		render: function() {
			this.$el.html(
				HandlebarsTemplates['flights/index']({ flights: App.flightsCollection.toJSON() })
			);
			return this;
		},

	});
})(App);