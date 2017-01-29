import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../../api/journals/journals.js';
import './Journals.html';

Template.Journals.helpers({
  journals: function () {
    return Journals.find({});
  },
});

Template.Journals.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    _this.subscribe('journals');
  });
});
