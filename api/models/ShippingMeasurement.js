/**
 * ShippingMeasurement.js
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
    weight: {
      collection: 'Weight'
    },
    dimensions: {
      collection: 'Dimension'
    }
  },

};

