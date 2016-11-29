import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './searchView.html';
import { Companies } from '../../../api/companies';
import { Products } from '../../../api/products';
import { name as PartiesSort } from '../partiesSort/partiesSort';
import { name as PartyAdd } from '../partyAdd/partyAdd';
import { name as PartyRemove } from '../partyRemove/partyRemove';
import { name as PartyCreator } from '../partyCreator/partyCreator';
import { name as ProductOfferingsList } from '../productOfferingsList/productOfferingsList';

class SearchView {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);

    this.searchText = '';

    this.subscribe('products', () => [this.getReactively('searchText'), ['drug']]);

    this.helpers({
      products() {
        return Products.find({});
      },
      isLoggedIn() {
        return !!Meteor.userId();
      }
    });
  }
}

const name = 'searchView';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PartiesSort,
  PartyAdd,
  PartyRemove,
  PartyCreator,
  ProductOfferingsList
]).component(name, {
  template,
  controllerAs: name,
  controller: SearchView
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('search', {
      url: '/search',
      title: 'Search',
      template: '<search-view></search-view>'
    });
}
