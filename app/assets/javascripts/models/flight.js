var App = App || {};

(function(App) {
	App.Flight = Backbone.Model.extend({

		urlRoot: '/api/flights'

	});
})(App);