/**
 * Variant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
/* Sample incoming json
"variants" : [ {
      "id" : "6e1a03f7-433b-4268-aa24-177e876ee124",
      "sku" : "SQ2473188",
      "pricing" : {
        "basePrice" : {
          "currency" : "USD",
          "value" : "6.00"
        },
        "salePrice" : {
          "currency" : "USD",
          "value" : "0.00"
        },
        "onSale" : false
      },
      "stock" : {
        "quantity" : 3,
        "unlimited" : false
      },
      "attributes" : {
        "Size" : "One Dozen"
      },
      "shippingMeasurements" : {
        "weight" : {
          "unit" : "POUND",
          "value" : 0.0
        },
        "dimensions" : {
          "unit" : "INCH",
          "length" : 0.0,
          "width" : 0.0,
          "height" : 0.0
        }
      },
      "image" : {
        "id" : "5dfee6277f83a564191dac88",
        "altText" : "",
        "orderIndex" : 0,
        "url" : "https://static1.squarespace.com/static/5cb69ab47a1fbd701676934b/5d839d561ee7f012e8428e0e/5dfee6277f83a564191dac88/1576986159364/eggs+2.JPG",
        "originalSize" : {
          "width" : 2500,
          "height" : 1875
        },
        "availableFormats" : [ "100w", "300w", "500w", "750w", "1000w", "1500w", "2500w", "2500w" ]
      }
     } ]
*/

module.exports = {

  attributes: {
    id: {
      type: 'string',
      required: true
    },
    sku: {
      type: 'string'
    },
    pricing: {
      collection: 'Pricing'
    },
    stock: {
      collection: 'Stock'
    },
    attributes: {
      type: 'string'
    },
    shippingMeasurements: {
      collection: 'ShippingMeasurement'
    },
    dimensions: {
      collection: 'Dimension'
    },
    image: {
      collection: 'Image'
    },
    availableFormats: {
      type: 'string'
    }
  },

};

