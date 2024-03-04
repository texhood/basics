/**
 * Squarespace/Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
/* Sample json from Squarespace Orders API
{
    "result": [
        {
            "id": "648397a854f699634f65f4e6",
            "orderNumber": "3998",
            "createdOn": "2023-06-09T21:20:38.842Z",
            "modifiedOn": "2023-06-09T21:20:40.912Z",
            "channel": "web",
            "testmode": false,
            "customerEmail": "kyri.low@gmail.com",
            "billingAddress": {
                "firstName": "Kyri",
                "lastName": "Low-Bingham",
                "address1": "2810 Stoneridge Drive",
                "address2": "Apt 1923",
                "city": "Grand Prairie",
                "state": "TX",
                "countryCode": "US",
                "postalCode": "75050",
                "phone": "8173123044"
            },
            "shippingAddress": {
                "firstName": "Kyri",
                "lastName": "Low-Bingham",
                "address1": "2810 Stoneridge Drive",
                "address2": "Apt 1923",
                "city": "Grand Prairie",
                "state": "TX",
                "countryCode": "US",
                "postalCode": "75050",
                "phone": "8173123044"
            },
            "fulfillmentStatus": "PENDING",
            "lineItems": [
                {
                    "id": "6483972d3d958166511018e0",
                    "variantId": "286ae0ee-42fb-476b-9674-001f712c6ec6",
                    "sku": "SQ00029",
                    "weight": 0,
                    "width": 0,
                    "length": 0,
                    "height": 0,
                    "productId": "63d9bc521a1d235bf53b016a",
                    "productName": "*Pasture Raised Eggs - One Dozen",
                    "quantity": 3,
                    "unitPricePaid": {
                        "value": "8.00",
                        "currency": "USD"
                    },
                    "variantOptions": [],
                    "customizations": null,
                    "imageUrl": "https://images.squarespace-cdn.com/content/v1/5cb69ab47a1fbd701676934b/99aa5f51-f37d-4638-8076-30adff25ae6a/IMG_6433.jpg?format=300w",
                    "lineItemType": "PHYSICAL_PRODUCT"
                },
                {
                    "id": "6483976ec466292f037d710b",
                    "variantId": "01f1a576-e702-4f7b-8f65-1a521c58b9a4",
                    "sku": "SQ8111267",
                    "weight": 0,
                    "width": 0,
                    "length": 0,
                    "height": 0,
                    "productId": "5de479871b24f4303d4fd71f",
                    "productName": "Specialty Jams",
                    "quantity": 1,
                    "unitPricePaid": {
                        "value": "13.00",
                        "currency": "USD"
                    },
                    "variantOptions": [
                        {
                            "optionName": "Flavor",
                            "value": "Raspberry Vanilla"
                        }
                    ],
                    "customizations": null,
                    "imageUrl": "https://images.squarespace-cdn.com/content/v1/5cb69ab47a1fbd701676934b/1583678550532-SIFFV4A71G2JP7UMQ57W/1232A79E-7D3D-4697-BD43-3F668330B51A?format=300w",
                    "lineItemType": "PHYSICAL_PRODUCT"
                }
            ],
            "internalNotes": [],
            "shippingLines": [
                {
                    "method": "DELIVERY DALLAS AREA - NEXT AVAILABLE",
                    "amount": {
                        "value": "0.00",
                        "currency": "USD"
                    }
                }
            ],
            "discountLines": [],
            "formSubmission": [
                {
                    "label": "How did you hear about us? ",
                    "value": ""
                },
                {
                    "label": "Select",
                    "value": "Within 15 miles of downtown Dallas"
                }
            ],
            "fulfillments": [],
            "subtotal": {
                "value": "37.00",
                "currency": "USD"
            },
            "shippingTotal": {
                "value": "0.00",
                "currency": "USD"
            },
            "discountTotal": {
                "value": "0.00",
                "currency": "USD"
            },
            "taxTotal": {
                "value": "0.00",
                "currency": "USD"
            },
            "refundedTotal": {
                "value": "0.00",
                "currency": "USD"
            },
            "grandTotal": {
                "value": "37.00",
                "currency": "USD"
            },
            "channelName": "Squarespace",
            "externalOrderReference": null,
            "fulfilledOn": null,
            "priceTaxInterpretation": "EXCLUSIVE"
        },
        }
    ]
    "pagination": {
        "nextPageUrl": "https://api.squarespace.com/1.0/commerce/orders?cursor=eyJhIjoxNjg1MjA1NzE5ODg0LCJiIjowLCJjIjoxNjg2MzQ2NzY1Mjk3LCJkIjoyLCJnIjoyLCJoIjo1MCwiaiI6Ik5PTl9ET05BVElPTiJ9",
        "nextPageCursor": "eyJhIjoxNjg1MjA1NzE5ODg0LCJiIjowLCJjIjoxNjg2MzQ2NzY1Mjk3LCJkIjoyLCJnIjoyLCJoIjo1MCwiaiI6Ik5PTl9ET05BVElPTiJ9",
        "hasNextPage": true
    }
}
*/


module.exports = {

  // datastore: 'default',
  datastore: 'financials',
  tableName: 'orders',
  attributes: {
    id: {
      type: 'string',
      required: true
    },
    orderNumber: {
      type: 'string',
      required: true
    },
    createdOn: {
      type: 'string',
      //columnType: 'datetime'
    },
    modifiedOn: {
      type: 'string',
      //columnType: 'datetime'
    },
    channel: {
      type: 'string'
    },
    testmode: {
      type: 'boolean'
    },
    customerEmail: {
      type: 'string',
      isEmail: true,
      allowNull: true
    },
    billingAddress: {
      type: 'json'
    //   collection: 'BillingAddress'
    },
    shippingAddress: {
      type: 'json'
    //   collection: 'ShippingAddress'
    },
    fulfillmentStatus: {
      type: 'string',
      defaultsTo: `''`,
      allowNull: true
    },
    // lineItems: {
    //   type: 'json'
    //   collection: 'OrderItem'
    // },
    fulfilledOn: {
      type: 'string',
      defaultsTo: `''`,
      allowNull: true
      //columnType: 'datetime'
    },
    priceTaxInterpretation: {
      type: 'string'
    }

  },

};

