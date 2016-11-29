import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';

import template from './profileView.html';

class ProfileView {
  constructor($scope, $reactive, $ionicLoading) {
    'ngInject';

    $reactive(this).attach($scope);

    this.$ionicLoading = $ionicLoading;

    this.subscribe('users', () => []);

    this.helpers({
      isLoggedIn() {
        return !!Meteor.userId();
      },
      user() {
        return Meteor.users.findOne({_id:Meteor.userId()});
      }
    });
  }
  loading(show){
    show ? this.$ionicLoading.show({template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>'}): this.$ionicLoading.hide();
  }
  logout(){
    this.loading(true);
    Meteor.logout(this.loading(false));
  }
  login(){
    this.loading(true);
    Meteor.loginWithPassword(this.loginForm.email, this.loginForm.password, this.loading(false));
  }
  forgotPassword(){
    //ToDo
  }
}

const name = 'profileView';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'ionic'
]).component(name, {
  template,
  controllerAs: name,
  controller: ProfileView
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profile', {
      url: '/profile',
      title: 'Profile',
      template: '<profile-view></profile-view>'
    });
}
