import { Meteor } from 'meteor/meteor';

import '../journals.js';

Meteor.publish('journals', function journalsPublication() {
  return Journals.find({});

});

Meteor.publish('singleJournal', function (jnum) {
  check(jnum, String);
  return Journals.find({ jnum: jnum });
});
