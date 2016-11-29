import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './navigation.html';

const name = 'navigation';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name
});
