import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Journals = new Mongo.Collection('journals');

Journals.allow({
  insert: function (userId, doc) {
    return !!userId;
  },

  update: function (userId, doc) {
    return !!userId;
  },
});

LocationSchema = new SimpleSchema({
  name: {
    type: String,
  },
  Coverage: {
    type: String,
  },
  Notes: {
    type: String,
  },
});

JournalSchema = new SimpleSchema({
  jnum: {
    type: String,
    label: 'Journal code',
  },
  name: {
    type: String,
    label: 'Journal Name',
    optional: true,
  },
  abbreviation: {
    type: String,
    label: 'Abbreviation',
    optional: true,
  },
  locations: {
    type: [LocationSchema],
    label: 'Libraries',
  },
  issn: {
    type: String,
    label: 'ISSN',
    optional: true,
  },
  eIssn: {
    type: String,
    label: 'eISSN',
    optional: true,
  },
});

Meteor.methods({
  deleteJournal: function (id) {
    Journals.remove(id);
  },
});

Journals.attachSchema(JournalSchema);
