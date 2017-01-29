import { Meteor } from 'meteor/meteor';

import '../libraries.js';

Meteor.publish('libraries', function librariesPublication() {
  return Libraries.find({});
});

Meteor.publish('singleLibrary', function (libnum) {
  check(libnum, String);
  return Libraries.find({ libnum });
});
