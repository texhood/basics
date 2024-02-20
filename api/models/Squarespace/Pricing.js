/**
 * Pricing.js
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
    basePrice: {
      collection: 'BasePrice'
    },
    salePrice: {
      collection: 'SalePrice'
    },
    onSale: {
      type: 'number'
    }
  },

};

