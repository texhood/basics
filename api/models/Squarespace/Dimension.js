/**
 * Dimension.js
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
    unit: {
      type: 'string'
    },
    length: {
      type: 'number'
    },
    width: {
      type: 'number'
    },
    height: {
      type: 'number'
    }

  },

};

