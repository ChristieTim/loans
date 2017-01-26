import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../api/artrequests/artrequests.js';
import './Artrequests.html'

Template.Artrequests.helpers({
  artrequests: ()=> {
    return Artrequests.find({archived: false}); //this will need to be changed to show uncompleted requests
  },
  showRequest: function(){
    var sessionVar = Session.get('newRequest');
    return sessionVar;
  }


});
Template.Artrequests.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('artrequests')
  });
});



Template.Artrequests.events({
  'click .new-request': ()=> {
    Session.set('newRequest', true);
  }
});
