Template.Artrequests.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('artrequests')
  });
});

Template.Artrequests.helpers({
  artrequests: ()=> {
    return Artrequests.find({archived: false}); //this will need to be changed to show uncompleted requests
  },

});

Template.Artrequests.events({
  'click .new-request': ()=> {
    Session.set('newRequest', true);
  }
});
