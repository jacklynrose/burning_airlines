'use strict';

var App = App || {};

(function(App) {
  App.AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(
        HandlebarsTemplates['app/layout']()
      );

      return this;
    },

    display: function(View) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render().el);
    },

    displayForm: function(Form, data, update) {
      this.currentForm = new Form();
      this.$el.find(".app-form").html(this.currentForm.render(data, update).el).slideDown();
    },

    hideForm: function() {
      this.$el.find(".app-form").slideUp(function() {
        $(this).html("");
      });
    }
  });
})(App);
