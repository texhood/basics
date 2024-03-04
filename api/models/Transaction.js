/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

/* Sample json return from Squarespace
{
    "documents": [
        {
            "id": "170196c3-8ffe-4136-9c9b-c5eee0e81898",
            "createdOn": "2023-06-09T21:20:40.997622Z",
            "modifiedOn": "2023-06-09T21:20:42.594156Z",
            "customerEmail": "kyri.low@gmail.com",
            "salesOrderId": "648397a854f699634f65f4e6",
            "voided": false,
            "totalSales": {
                "value": "37.00",
                "currency": "USD"
            },
            "totalNetSales": {
                "value": "37.00",
                "currency": "USD"
            },
            "totalNetShipping": {
                "value": "0.00",
                "currency": "USD"
            },
            "totalTaxes": {
                "value": "0.00",
                "currency": "USD"
            },
            "total": {
                "value": "37.00",
                "currency": "USD"
            },
            "totalNetPayment": {
                "value": "35.63",
                "currency": "USD"
            },
            "payments": [
                {
                    "id": "4f31b6ac-d4d5-4d2f-adce-f4c0d1652190",
                    "amount": {
                        "value": "37.00",
                        "currency": "USD"
                    },
                    "refundedAmount": {
                        "value": "0.00",
                        "currency": "USD"
                    },
                    "netAmount": {
                        "value": "35.63",
                        "currency": "USD"
                    },
                    "creditCardType": "MASTERCARD",
                    "provider": "STRIPE",
                    "refunds": [],
                    "processingFees": [
                        {
                            "id": "932a85b4-dbac-4e5a-b6a8-077df75f1184",
                            "amount": {
                                "value": "1.37",
                                "currency": "USD"
                            },
                            "amountGatewayCurrency": {
                                "value": "1.37",
                                "currency": "USD"
                            },
                            "exchangeRate": 1,
                            "refundedAmount": {
                                "value": "0.00",
                                "currency": "USD"
                            },
                            "refundedAmountGatewayCurrency": {
                                "value": "0.00",
                                "currency": "USD"
                            },
                            "netAmount": {
                                "value": "1.37",
                                "currency": "USD"
                            },
                            "netAmountGatewayCurrency": {
                                "value": "1.37",
                                "currency": "USD"
                            },
                            "feeRefunds": []
                        }
                    ],
                    "giftCardId": null,
                    "paidOn": "2023-06-09T21:20:38.842Z",
                    "externalTransactionId": "ch_3NHCjbGElazOCW4O1ICCe3lY",
                    "externalTransactionProperties": [],
                    "externalCustomerId": null
                }
            ],
            "salesLineItems": [
                {
                    "id": "22e3b2bc-4369-458c-976d-e97711f0e95a",
                    "discountAmount": {
                        "value": "0.00",
                        "currency": "USD"
                    },
                    "totalSales": {
                        "value": "13.00",
                        "currency": "USD"
                    },
                    "totalNetSales": {
                        "value": "13.00",
                        "currency": "USD"
                    },
                    "total": {
                        "value": "13.00",
                        "currency": "USD"
                    },
                    "taxes": []
                },
                {
                    "id": "05ce5469-10bc-4836-841a-997121d9dec5",
                    "discountAmount": {
                        "value": "0.00",
                        "currency": "USD"
                    },
                    "totalSales": {
                        "value": "24.00",
                        "currency": "USD"
                    },
                    "totalNetSales": {
                        "value": "24.00",
                        "currency": "USD"
                    },
                    "total": {
                        "value": "24.00",
                        "currency": "USD"
                    },
                    "taxes": []
                }
            ],
            "discounts": [],
            "shippingLineItems": [],
            "paymentGatewayError": null
        }
	]
}
*/

module.exports = {

  // datastore: 'default',
  datastore: 'financials',
  tableName: 'transactions',
  attributes: {
    id: {
      type: 'string',
      required: true
    },
    createdOn: {
      type: 'string'
    },
    modifiedOn: {
      type: 'string'
    },
    customerEmail: {
      type: 'string',
      isEmail: true,
      allowNull: true
    },
    salesOrderid: {
      type: 'string'
    },
    voided: {
      type: 'boolean'
    },
    totalSales: {
      type: 'ref'
    },
    totalNetSales: {
      type: 'ref'
    },
    totalNetShipping: {
      type: 'ref'
    },
    totalTaxes: {
      type: 'ref'
    },
    total: {
      type: 'ref'
    },
    totalNetPayment: {
      type: 'ref'
    },
    payments: {
      type: 'ref'
    },
    salesLineItems: {
      type: 'ref'
    },
    discounts: {
      type: 'ref'
    },
    shippingLineItems: {
      type: 'ref'
    },
    paymentGatewayError: {
      type: 'ref'
    }
  }
};