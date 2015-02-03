'sue strict';

var App = App || {};

(function(App) {
	App.FlightForm = Backbone.View.extend({

		events: {

		},

		render: function() {
			this.$el.html(
				HandlebarsTemplates['flights/form']()
			);
			return this;
		},

	});
})(App);