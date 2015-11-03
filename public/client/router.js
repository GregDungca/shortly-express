Shortly.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$el = options.el;
  },

  routes: {
    '':       'index',
    'create': 'create'
    // add login
    // add signup
    // 'login': 'login',
    // 'signup': 'signup'
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

  index: function(){
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function(){
    this.swapView(new Shortly.createLinkView());
  }

  // login route handler
     // instantiate a new loginView 
  // login: function() {
  //   this.swapView(new Shortly.LoginView());// verify this
  // },

  // // signup route handler
  //   // instantiate a new signupView
  // signup: function() {
  //   this.swapView(new Shortly.SignUpView());// verify this
  // }

});
