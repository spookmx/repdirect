import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';


import { Products } from './collection';

if (Meteor.isServer) {
  Meteor.publish('products', function(searchString) {
    const selector = {};

    // filters.length ? selector.type = { '$in': filters } : null;

    if (typeof searchString === 'string' && searchString.length) {
      selector.$or = [{
        name_brand:{
          $regex: `.*${searchString}.*`,
          $options : 'i'
        }
      },{
        name_generic:{
          $regex: `.*${searchString}.*`,
          $options : 'i'
        }
      }];
    }

    Counts.publish(this, 'numberOfProducts', Products.find(selector), {
      noReady: true
    });

    return Products.find(selector);
  });
}
