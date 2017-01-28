import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Library.html';

Template.Library.onCreated(function () {
  this.editMode = new ReactiveVar(false);
});

Template.Library.helpers({
  insertLibraryForm: function () {
    return this._id;
  },

  editMode: function () {
    return Template.instance().editMode.get();
  },
});

Template.Library.events({
  'click .toggle-sent': function () {
    Meteor.call('toggleSent', this._id, this.sent);
  },

  'click .toggle-archive': function () {
    Meteor.call('toggleArchived', this._id, this.archived);
  },

  'click .fa-trash': function () {
    Meteor.call('deleteRequest', this._id);
  },

  'click .fa-pencil': function (event, template) {
    template.editMode.set(!template.editMode.get());
  },
});
