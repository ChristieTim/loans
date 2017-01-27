import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './ArtrequestSingle.html';

Template.ArtrequestSingle.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    var requestnum = FlowRouter.getParam('requestnum');
    self.subscribe('singleArtRequest', requestnum);
  });
});

Template.ArtrequestSingle.helpers({
  artrequest: ()=> {
    var requestnum = FlowRouter.getParam('requestnum');
    return Artrequests.findOne({ requestnum: requestnum });

    //var id = FlowRouter.getParam('id')
    //return Artrequests.findOne({_id: id});
  },
});
