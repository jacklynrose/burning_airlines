'use strict';

var App = App || {};

(function(App) {
	App.FlightForm = Backbone.View.extend({

		events: {
			'click .save': 'saveFlight',
			'click .cancel': 'cancel',
			'submit form': 'preventSubmission'
		},

		render: function() {
			
			this.$el.html(
				HandlebarsTemplates['flights/form']({ planes: App.planesCollection.toJSON() })
			);
			return this;
		},

		saveFlight: function() {
			App.flightsCollection.create({
				number: this.$el.find("input[name='number']").val(),
				date: this.$el.find("input[name='date']").val(),
				origin: this.$el.find("input[name='origin']").val(),
				destination: this.$el.find("input[name='destination']").val(),
				plane_id: this.$el.find("input[name='plane_id']").val()
			});

			App.rootView.hideForm();
		},

		cancel: function() {
			App.rootView.hideForm();
		},

		preventSubmission: function(event) {
      event.preventDefault();
    },


	});
})(App);