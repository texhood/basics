/**
 * Squarespace/TaxTotal.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    value: {
      type: 'number',
      columnType: 'decimal(28,10)'
    },
    currency: {
      type: 'string'
    }

  },

};

