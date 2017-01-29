import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../libraries/libraries.js';

Artrequests = new Mongo.Collection('artrequests');

Artrequests.allow({
  insert: function (userId, doc) {
    return !!userId;
  },

  update: function (userId, doc) {
    return !!userId;
  },
});

ArtrequestSchema = new SimpleSchema({
  requestnum: {
    type: String,
    label: 'Request ID',
  },
  title: {
      type: String,
      label: 'Title',
      optional: true,
    },
  journal: {
      type: String,
      label: 'Journal',
      optional: true,
    },
  reqLib: {
    type: String,
    label: 'Library',
    autoform: {
      type: String,
      options: function () {
        // return _.map(Libraries.find().fetch(), function (object, idx) {
        //   return (label: object.name, value: object.value)
        return Libraries.find({}).map(function (obj) {
          console.log(obj.libnum);
          return { label: obj.name, value: obj.name };
        });
      },
    },
  },
  authors: {
      type: String,
      label: 'Author(s)',
      optional: true,
    },
  year: {
      type: String,
      label: 'Year',
      optional: true,
    },
  vol: {
      type: String,
      label: 'Volume',
      optional: true,
    },
  part: {
      type: String,
      label: 'Part',
      optional: true,
    },
  pages: {
      type: String,
      label: 'Pages',
      optional: true,
    },
  photo: {
      type: String,
      label: 'Photocopy/loan',
      optional: true,
    },
  type: {
      type: String,
      label: 'Book/Serial/Other',
      optional: true,
    },
  controlnum: {
      type: String,
      label: 'ISBN/ISSN',
      optional: true,
    },
  doi: {
      type: String,
      label: 'DOI',
      optional: true,
    },
  notes: {
      type: String,
      label: 'Notes',
      optional: true,
    },
  requester: {
      type: String,
      label: 'Requester',
      autoValue: function () {
        return this.userId;
      },

      optional: true,
      autoform: {
        type: 'hidden',
      },
    },
  archived: {
      type: Boolean,
      defaultValue: false,
      optional: true,

      //autoform: {
      //  type: 'hidden'
      //}
    },
  sent: {
      type: Boolean,
      defaultValue: false,
      optional: true,

      //autoform: {
      //  type: 'hidden'
      //}
    },
});

Meteor.methods({
  toggleSent: function (id, currentState) {
    Artrequests.update(id, {
      $set: {
        sent: !currentState,
      },
    });
  },

  toggleArchived: function (id, currentState) {
    Artrequests.update(id, {
      $set: {
        archived: !currentState,
      },
    });
  },

  deleteRequest: function (id) {
    Artrequests.remove(id);
  },
});

Artrequests.attachSchema(ArtrequestSchema);
