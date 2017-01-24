import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Artrequests } from '../api/artrequests.js';

import './artrequest.js';
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();

});

// use this to receipt and archive completed requests (received and archived also need adding to schema)
Template.body.helpers({
  artrequests() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter artrequests
      return Artrequests.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the artrequests
    return Artrequests.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
  return Artrequests.find({ checked: { $ne: true } }).count();
},
});
