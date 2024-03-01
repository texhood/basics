/**
 * Squarespace/Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
/* Sample incoming json
{
    "id" : "5dfee5f08c6e911e4ff44d48",
    "type" : "PHYSICAL",
    "storePageId" : "5d839d561ee7f012e8428e0e",
    "name" : "Pasture Raised Eggs - One Dozen",
    "description" : "<p class=\"\">Chickens are natural omnivores, and our ladies are never caged, they roam free and forage and hunt for their food as nature intended. This results in some of the best tasting, healthiest eggs you can buy!</p><p class=\"\">Our newly added small size eggs are from our pullets, young chickens just beginning to lay. Currently the colors for these eggs are only brown and white.&nbsp;</p>",
    "url" : "https://www.hoodfamilyfarms.com/shopping/pasture-raised-eggs",
    "urlSlug" : "pasture-raised-eggs",
    "images" : [ {
      "id" : "5dfee6277f83a564191dac88",
      "altText" : "",
      "orderIndex" : 0,
      "url" : "https://static1.squarespace.com/static/5cb69ab47a1fbd701676934b/5d839d561ee7f012e8428e0e/5dfee6277f83a564191dac88/1576986159364/eggs+2.JPG",
      "originalSize" : {
        "width" : 2500,
        "height" : 1875
      },
      "availableFormats" : [ "100w", "300w", "500w", "750w", "1000w", "1500w", "2500w", "2500w" ]
    }, {
      "id" : "5dfee6445a4eb35ea776562c",
      "altText" : "",
      "orderIndex" : 1,
      "url" : "https://static1.squarespace.com/static/5cb69ab47a1fbd701676934b/5d839d561ee7f012e8428e0e/5dfee6445a4eb35ea776562c/1578075324353/eggs%2B3.jpg",
      "originalSize" : {
        "width" : 1470,
        "height" : 1925
      },
      "availableFormats" : [ "100w", "300w", "500w", "750w", "1000w" ]
    }, {
      "id" : "5e82be6dfe021518d24b0f43",
      "altText" : "",
      "orderIndex" : 2,
      "url" : "https://static1.squarespace.com/static/5cb69ab47a1fbd701676934b/5d839d561ee7f012e8428e0e/5e82be6dfe021518d24b0f43/1585627027071/DA4D00E1-1877-45AE-8B81-A565B752B575",
      "originalSize" : {
        "width" : 2500,
        "height" : 2101
      },
      "availableFormats" : [ "100w", "300w", "500w", "750w", "1000w", "1500w", "2500w", "2500w" ]
    }, {
      "id" : "5e82be71e958d45ab145dd9e",
      "altText" : "",
      "orderIndex" : 3,
      "url" : "https://static1.squarespace.com/static/5cb69ab47a1fbd701676934b/5d839d561ee7f012e8428e0e/5e82be71e958d45ab145dd9e/1585627006801/0EAE07A4-2FCE-4085-87E4-13C313B3AADD",
      "originalSize" : {
        "width" : 2500,
        "height" : 1875
      },
      "availableFormats" : [ "100w", "300w", "500w", "750w", "1000w", "1500w", "2500w", "2500w" ]
    } ],
    "tags" : [ "pasture raised eggs", "farm fresh eggs", "free range eggs", "eggs" ],
    "isVisible" : true,
    "variantAttributes" : [ "Size" ],
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
    } ],
    "seoOptions" : {
      "title" : "",
      "description" : ""
    },
    "createdOn" : "2020-09-11T20:21:01.227Z",
    "modifiedOn" : "2021-09-26T23:32:24.492Z"
  }
*/

module.exports = {

  datastore: 'default',
  // datastore: 'financials',
  tableName: 'items',

  attributes: {
    // Add any attributes here as needed
    id: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string'
    },
    storepageId: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    urlSlug: {
      type: 'string'
    },
    isVisible: {
      type: 'string'
    },
    // variantAttributes: {
    //   type: 'string'
    // },
    // seoOptions: {
    //   collection: 'SeoOption'
    // },
    // variants: {
    //   collection: 'Variant'
    // },
    createdOn: {
      type: 'string'
    },
    modifiedOn: {
      type: 'string'
    }
  },
};

