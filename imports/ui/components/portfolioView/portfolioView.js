import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';

import template from './portfolioView.html';

class PortfolioView {
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
  addCompany(companyId){

  }
  addProduct(product){

  }
}

const name = 'portfolioView';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'ionic'
]).component(name, {
  template,
  controllerAs: name,
  controller: PortfolioView
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profile.portfolio', {
      url: '/portfolio',
      title: 'Portfolio',
      template: '<portfolio-view></portfolio-view>'
    });
}
