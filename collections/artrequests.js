Artrequests = new Mongo.Collection('artrequests');

Artrequests.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

ArtrequestSchema = new SimpleSchema({
  requestnum: {
    type: String,
    label: "Request ID",
    optional: true
  },
    title: {
      type: String,
      label: "Title",
      optional: true
  },
    journal: {
      type: String,
      label: "Journal",
      optional: true
    },
    authors: {
      type: String,
      label: "Author(s)",
      optional: true
    },
    year: {
      type: String,
      label: "Request ID",
      optional: true
    },
    vol: {
      type: String,
      label: "Volume",
      optional: true
    },
    part: {
      type: String,
      label: "part",
      optional: true
    },
    pages: {
      type: String,
      label: "Pages",
      optional: true
    },
    photo: {
      type: String,
      label: "Photocopy/loan",
      optional: true
    },
    type: {
      type: String,
      label: "Book/Serial/Other",
      optional: true
    },
    controlnum: {
      type: String,
      label: "ISBN/ISSN",
      optional: true
    },
    doi: {
      type: String,
      label: "DOI",
      optional: true
    },
    requester: {
      type: String,
      label: "Requester",
      autoValue: function() {
        return this.userId
      },
      optional: true
    },

});

Artrequests.attachSchema( ArtrequestSchema );
