import _ from 'underscore';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Products } from './collection';

// function internalFunction(par1) {
//   return par1;
// }
//
// export function method1(par1, par2) {
//   check(par1, String);
//   check(par2, String);
//
//   if (!this.userId) {
//     throw new Meteor.Error(400, 'You have to be logged in!');
//   }
//   internalFunction(par1);
// }
//
// export function method2(par1, par2) {
//   check(par1, String);
//   check(par2, String);
//
//   if (!this.userId) {
//     throw new Meteor.Error(403, 'You must be logged in!');
//   }
// }
//
// Meteor.methods({
//   method1,
//   method2
// });
