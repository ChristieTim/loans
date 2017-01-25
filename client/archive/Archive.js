Template.Archive.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('artrequests')
  });
});

Template.Archive.helpers({
  artrequests: ()=> {
    return Artrequests.find({archived: true});
  }
});
