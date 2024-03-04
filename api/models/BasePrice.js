/**
 * BasePrice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      required: true
    },
    currency: {
      type: 'string'
    },
    value: {
      type: 'number'
    }

  },

};

