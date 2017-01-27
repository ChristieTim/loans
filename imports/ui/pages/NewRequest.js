import { Template } from 'meteor/templating';

import './NewRequest.html';

Template.NewRequest.events({
  'click .fa-close': function () {
    Session.set('newRequest', false);
  },
});
