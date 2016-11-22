import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import { name as Repdirect } from '../imports/ui/components/repdirect/repdirect';

function onReady() {
  angular.bootstrap(document, [
    Repdirect
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
