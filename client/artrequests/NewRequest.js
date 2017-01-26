Template.NewRequest.events({
  'click .fa-close': function() {
    Session.set('newRequest', false);
  }
});
