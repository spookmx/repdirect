import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';
import 'ionic-sdk/release/css/ionic.css';

import template from './repdirect.html';
import { name as SearchView } from '../searchView/searchView';
import { name as ProfileView } from '../profileView/profileView';
import { name as PortfolioView } from '../portfolioView/portfolioView';
import { name as PortfolioCompanyView } from '../portfolioCompanyView/portfolioCompanyView';
import { name as Navigation } from '../navigation/navigation';

class Repdirect {
  constructor($scope, $reactive, $state, $rootScope) {
    'ngInject';
    $reactive(this).attach($scope);
    this.$state = $state;
  }
  goBack(){
    console.log(this.$state);
  }
}

const name = 'repdirect';

// create a module
export default angular.module(name, [
  angularMeteor,
  ngSanitize,
  ngAnimate,
  uiRouter,
  SearchView,
  ProfileView,
  PortfolioView,
  PortfolioCompanyView,
  Navigation,
  'accounts.ui',
  'ionic'
]).component(name, {
  template,
  controllerAs: name,
  controller: Repdirect
})
.config(config)
.run();

function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/search');

}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('search');
      }
    }
  );
}
