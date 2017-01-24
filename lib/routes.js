FlowRouter.route('/',{
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/current-request',{
  name: 'current-request',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Artrequests'});
  }
});

FlowRouter.route('/artrequest/:requestnum',{
//FlowRouter.route('/artrequest/:id',{
  name: 'request-detail',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ArtrequestSingle'});
  }
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
