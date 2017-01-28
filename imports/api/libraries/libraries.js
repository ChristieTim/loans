import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Libraries = new Mongo.Collection('libraries');

Libraries.allow({
  insert: function (userId, doc) {
    return !!userId;
  },

  update: function (userId, doc) {
    return !!userId;
  },
});

LibrarySchema = new SimpleSchema({
  libnum: {
    type: String,
    label: 'Library code',
  },
  name: {
      type: String,
      label: 'Library Name',
      optional: true,
    },
  location: {
      type: String,
      label: 'Address',
      optional: true,
    },
  postCode: {
      type: String,
      label: 'Post code',
      optional: true,
    },
  contact: {
      type: String,
      label: 'Contact',
      optional: true,
    },
  email: {
      type: String,
      label: 'Email',
      optional: true,
    },
  phoneNum: {
      type: String,
      label: 'Phone number',
      optional: true,
    },
  faxNum: {
      type: String,
      label: 'Fax number',
      optional: true,
    },
  url: {
      type: String,
      label: 'Website',
      optional: true,
    },
  memberOfLihnn: {
      type: Boolean,
      label: 'LIHNN',
      optional: true,
    },
  memberOfNulj: {
      type: Boolean,
      label: 'NULJ',
      optional: true,
    },
});

Meteor.methods({
  deleteLibrary: function (id) {
    Libraries.remove(id);
  },
});

Libraries.attachSchema(LibrarySchema);
