import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './LibrarySingle.html';

Template.LibrarySingle.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    var libnum = FlowRouter.getParam('libnum');
    _this.subscribe('singleLibrary', libnum);
  });
});

Template.LibrarySingle.helpers({
  library: ()=> {
    var libnum = FlowRouter.getParam('libnum');
    return Libraries.findOne({ libnum: libnum });
  },
});
