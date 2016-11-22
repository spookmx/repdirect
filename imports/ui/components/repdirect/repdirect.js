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
import { name as PartyDetails } from '../partyDetails/partyDetails';
import { name as Navigation } from '../navigation/navigation';

class Repdirect {}

const name = 'repdirect';

// create a module
export default angular.module(name, [
  angularMeteor,
  ngSanitize,
  ngAnimate,
  uiRouter,
  SearchView,
  PartyDetails,
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

function config($locationProvider, $urlRouterProvider) {
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
