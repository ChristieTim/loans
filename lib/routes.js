Accounts.onLogin(function(){
  FlowRouter.go('current-request');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/',{
  name: 'home',
  action() {
    if(Meteor.userId()){
      FlowRouter.go('current-request');
    };
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

FlowRouter.route('/archived-requests',{
  name: 'archived-requests',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Archive'});
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
