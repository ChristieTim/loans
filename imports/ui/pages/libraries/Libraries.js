import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../../api/libraries/libraries.js';
import './Libraries.html';

Template.Libraries.helpers({
  libraries: function () {

    //this determines what libraries are shown by default
    return Libraries.find({});

  },

  showRequest: function () {
    var sessionVar = Session.get('newLibrary');
    return sessionVar;
  },

});
Template.Libraries.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    _this.subscribe('libraries');
  });
});

Template.Libraries.events({
  'click .new-request': ()=> {
    Session.set('newLibrary', true);
  },
});
