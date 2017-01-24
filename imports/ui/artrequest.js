import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './articles.html';

Template.artrequest.helpers({
  isOwner() {
  },
});

Template.artrequest.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('artrequests.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('artrequests.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('artrequests.setPrivate', this._id, !this.private);
  },
});
