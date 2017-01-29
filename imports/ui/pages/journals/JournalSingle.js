import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './JournalSingle.html';

Template.JournalSingle.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    var jnum = FlowRouter.getParam('jnum');
    _this.subscribe('singleJournal', jnum);
  });
});

Template.JournalSingle.helpers({
  journal: ()=> {
    var jnum = FlowRouter.getParam('jnum');
    return Journals.findOne({ jnum: jnum });
  },
});
