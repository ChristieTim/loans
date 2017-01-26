import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './NewRequest.html'

Template.NewRequest.events({
  'click .fa-close': function() {
    Session.set('newRequest', false);
  }
});
