import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './productOfferingsList.html';

class ProductOfferingsList {
  constructor($scope, $reactive) {
    'ngInject';

    $scope.viewModel(this);

    this.query = {products:{$elemMatch:{_id:this.product}}};

    this.subscribe('users', () => []);

    this.helpers({
      user() {
        return Meteor.users.findOne(this.query, this.query);
      }
    });
  }

  yes() {
    this.answer('yes');
  }
}

const name = 'productOfferingsList';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    product: '<'
  },
  controller: ProductOfferingsList
});
