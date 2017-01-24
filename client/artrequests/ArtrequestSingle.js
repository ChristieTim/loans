Template.ArtrequestSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var requestnum = FlowRouter.getParam('requestnum')
    self.subscribe('singleArtRequest', requestnum)
  });
});

Template.ArtrequestSingle.helpers({
  artrequest: ()=> {
    var requestnum = FlowRouter.getParam('requestnum')
    return Artrequests.findOne({requestnum: requestnum});
//    var id = FlowRouter.getParam('id')
//    return Artrequests.findOne({_id: id});
  }
});
