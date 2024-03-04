/**
 * Squarespace/OrderItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'financials',
  tableName: 'orderItems',
  attributes: {
    orderNumber: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    variantId: {
      type: 'string'
    },
    sku: {
      type: 'string'
    },
    weight: {
      type: 'number'
    },
    width: {
      type: 'number'
    },
    length: {
      type: 'number'
    },
    height: {
      type: 'number'
    },
    productId: {
      type: 'string'
    },
    productName: {
      type: 'string'
    },
    unitPricePaid: {
      type: 'json'
      //collection: 'UnitPricePaid'
    },
    // variantOptions: {
    //   collection: 'VariantOptions'
    // },
    // customizations: {
    //   type: 'string'
    // },
    imageUrl: {
      type: 'string'
    },
    lineItemType: {
      type: 'string'
    },
    subtotal: {
      type: 'json'
      //collection: 'Subtotal'
    },
    shippingTotal: {
      type: 'json'
      //collection: 'ShippingTotal'
    },
    discountTotal: {
      type: 'json'
      //collection: 'DiscountTotal'
    },
    taxTotal: {
      type: 'json'
      //collection: 'TaxTotal'
    },
    refundedTotal: {
      type: 'json'
      //collection: 'RefundedTotal'
    },
    grandTotal: {
      type: 'json'
      //collection: 'GrandTotal'
    },
    channelName: {
      type: 'string'
    },
    externalOrderReference: {
      type: 'string'
    },

  },
};