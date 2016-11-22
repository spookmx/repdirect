import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';


import { Companies } from './collection';

if (Meteor.isServer) {
  Meteor.publish('companies', function(searchString, filters) {
    const selector = {};

    filters.length ? selector.type = { '$in': filters } : null;

    if (typeof searchString === 'string' && searchString.length) {
      selector.name = {
        $regex: `.*${searchString}.*`,
        $options : 'i'
      };
    }

    Counts.publish(this, 'numberOfCompanies', Companies.find(selector), {
      noReady: true
    });

    return Companies.find(selector, options);
  });
}
