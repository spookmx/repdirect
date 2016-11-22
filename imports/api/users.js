import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({}, {
      fields: {
        givenName: 1,
        familyName: 1,
        products: 1
      }
    });
  });
}
