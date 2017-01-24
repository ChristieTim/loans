import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Artrequests = new Mongo.Collection('artrequests');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish artrequests that are public or belong to the current user
  Meteor.publish('artrequests', function artrequestsPublication() {
    return Artrequests.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'artrequests.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a artrequest
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Artrequests.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'artrequests.remove'(artrequestId) {
    check(artrequestId, String);

    const artrequest = Artrequests.findOne(artrequestId);
    if (artrequest.private && artrequest.owner !== this.userId) {
      // If the artrequest is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Artrequests.remove(artrequestId);
  },
  'artrequests.setChecked'(artrequestId, setChecked) {
    check(artrequestId, String);
    check(setChecked, Boolean);

    const artrequest = Artrequests.findOne(artrequestId);
    if (artrequest.private && artrequest.owner !== this.userId) {
      // If the artrequest is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Artrequests.update(artrequestId, { $set: { checked: setChecked } });
  },
  'artrequests.setPrivate'(artrequestId, setToPrivate) {
    check(artrequestId, String);
    check(setToPrivate, Boolean);

    const artrequest = Artrequests.findOne(artrequestId);

    // Make sure only the artrequest owner can make a artrequest private
    if (artrequest.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Artrequests.update(artrequestId, { $set: { private: setToPrivate } });
  },
});
