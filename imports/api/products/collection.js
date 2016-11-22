import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('products');
//To do - implement security to only allow admins to update products
Products.allow({
  insert(userId, product) {
    return true;
  },
  update(userId, product, fields, modifier) {
    return true;
  },
  remove(userId, product) {
    return true;
  }
});
