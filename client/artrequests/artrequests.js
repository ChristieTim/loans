Template.Artrequests.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('artrequests')
  });
});

Template.Artrequests.helpers({
  artrequests: ()=> {
    return Artrequests.find({}); //this will need to be changed to show uncompleted requests
  }
});
