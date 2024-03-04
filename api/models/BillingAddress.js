/**
 * Squarespace/BillingAddress.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    address1: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    countryCode: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    phone: {
      type: 'string'
    }
  },

};

