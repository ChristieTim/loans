import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Journal.html';

Template.Journal.helpers({
  insertJournalForm: function () {
    return this._id;
  },
});
