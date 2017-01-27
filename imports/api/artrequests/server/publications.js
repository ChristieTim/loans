import { Meteor } from 'meteor/meteor';

import '../artrequests.js';

Meteor.publish('artrequests', function artrequestsPublication() {
  return Artrequests.find({});

  //  return Artrequests.find({author: this.userId})
  //  set to only return requests belongning to the userId
  //  could be useful to only show non-completed requests
});

Meteor.publish('singleArtRequest', function (requestnum) {
  check(requestnum, String);
  return Artrequests.find({ requestnum: requestnum });
});
