import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/HomeLayout.js';
import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Artrequest.js';
import '../../ui/pages/Artrequests.js';
import '../../ui/pages/ArtrequestSingle.js';
import '../../ui/pages/NewRequest.js';
import '../../ui/pages/libraries/Libraries.js';
import '../../ui/pages/libraries/Library.js';
import '../../ui/pages/libraries/LibrarySingle.js';
import '../../ui/pages/libraries/NewLibrary.js';
import '../../ui/pages/journals/Journal.js';
import '../../ui/pages/journals/Journals.js';
import '../../ui/pages/journals/JournalSingle.js';
import '../../ui/pages/journals/NewJournal.js';

Accounts.onLogin(function () {
  FlowRouter.go('current-request');
});

Accounts.onLogout(function () {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function (context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }},
]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('current-request');
    };

    BlazeLayout.render('HomeLayout');
  },
});

FlowRouter.route('/current-request', {
  name: 'current-request',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Artrequests' });
  },
});

FlowRouter.route('/artrequest/:requestnum', {
  //FlowRouter.route('/artrequest/:id', {
  name: 'request-detail',
  action() {
    BlazeLayout.render('MainLayout', { main: 'ArtrequestSingle' });
  },
});

FlowRouter.route('/libraries/:libnum', {
  //FlowRouter.route('/artrequest/:id', {
  name: 'library-detail',
  action() {
    BlazeLayout.render('MainLayout', { main: 'LibrarySingle' });
  },
});

FlowRouter.route('/archived-requests', {
  name: 'archived-requests',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Archive' });
  },
});

FlowRouter.route('/libraries', {
  name: 'libraries',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Libraries' });
  },
});

FlowRouter.route('/journals', {
  name: 'journals',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Journals' });
  },
});

FlowRouter.route('/journals/:jnum', {
  name: 'journal-detail',
  action() {
    BlazeLayout.render('MainLayout', { main: 'JournalSingle' });
  },
});
/* Everything below still to be implemented

FlowRouter.route('/archived-request',{
  name: 'archived-request',
  action() {
    BlazeLayout.render('ArchivedRequests', {main: 'Artrequests'});
  }
});

FlowRouter.route('/readers',{
  name: 'readers',
  action() {
    BlazeLayout.render('CurrentRequest', {main: 'Artrequests'});
  }
});

FlowRouter.route('/libraries',{
  name: 'libraries',
  action() {
    BlazeLayout.render('CurrentRequest', {main: 'Artrequests'});
  }
});

FlowRouter.route('/reports',{
  name: 'reports',
  action() {
    BlazeLayout.render('CurrentRequest', {main: 'Artrequests'});
  }
});
*/
