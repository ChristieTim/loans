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
  showRequest: function(){
    var sessionVar = Session.get('newRequest');
    console.log(sessionVar);
    return sessionVar;
  }


/*
Template.Artrequest.helpers({
  updateArtRequestId: function() {
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  }
});
*/
});

Template.Artrequests.events({
  'click .new-request': ()=> {
    Session.set('newRequest', true);
  }
});
