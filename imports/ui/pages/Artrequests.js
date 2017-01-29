import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../api/artrequests/artrequests.js';
import '../../api/libraries/libraries.js';
import './Artrequests.html';

Template.Artrequests.helpers({
  artrequests: function () {

    //this will need to be changed to show uncompleted requests
    return Artrequests.find({ archived: false });

  },

  showRequest: function () {
    var sessionVar = Session.get('newRequest');
    return sessionVar;
  },

});
Template.Artrequests.onCreated(function () {
  var _this = this;
  _this.autorun(function () {
    _this.subscribe('artrequests');
    _this.subscribe('libraries');
  });
});

Template.Artrequests.events({
  'click .new-request': ()=> {
    Session.set('newRequest', true);
  },
});
