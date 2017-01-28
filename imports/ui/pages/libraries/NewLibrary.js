import { Template } from 'meteor/templating';

import './NewLibrary.html';

Template.NewLibrary.events({
  'click .fa-close': function () {
    Session.set('newLibrary', false);
  },
});
