Meteor.publish('artrequests',function(){
  return Artrequests.find({})
  //  return Artrequests.find({author: this.userId})
  //  set to only return requests belongning to the userId
  //  could be useful to only show non-completed requests
});
