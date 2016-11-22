import { Mongo } from 'meteor/mongo';

export const Companies = new Mongo.Collection('companies');
//To do - implement security to only allow admins to update companies
Companies.allow({
  insert(userId, company) {
    return true;
  },
  update(userId, company, fields, modifier) {
    return true;
  },
  remove(userId, company) {
    return true;
  }
});
