// Synchronous version. Async version did not run, probably because n+1th and following recusrions
// contained undefined pagination and cursor variables.
const https = require('follow-redirects').https;
require('dotenv').config({ path: '././.env' });

// API Sample: GET https://api.squarespace.com/{api-version}/commerce/orders?modifiedAfter={a-datetime}&modifiedBefore={b-datetime}&cursor={c}&fulfillmentStatus={status}
/* {api-version} string
    required

    See the Orders API Overview page for the current API version.

    modifiedAfter={a-datetime} string
    conditional: required when modifiedBefore is passed, cannot be used with cursor

    Time-boxes the request to Orders that were modified after {a-datetime} where {a-datetime} is an ISO 8601 UTC date and time string, e.g. YYYY-MM-DDThh:mm:ss.sZ.

    modifiedBefore={b-datetime} string
    conditional: required when modifiedAfter is passed, cannot be used with cursor

    Time-boxes the request to Orders that were modified before {b-datetime} where {b-datetime} is an ISO 8601 UTC date and time string, e.g. YYYY-MM-DDThh:mm:ss.sZ.

    cursor={c} string
    conditional: cannot be used with other parameters

    Identifies where the next page of results should begin. {c} should be the value of pagination.nextPageCursor from a previous response. If this parameter is not present or empty, the endpoint returns up to 50 Orders.

    fulfillmentStatus={status} enum
    optional

    Used to filter Orders by fulfillment status, where {status} is PENDING, FULFILLED, or CANCELED. */

module.exports = {
  friendlyName: 'Get orders',
  description: 'Retrieve a complete list of orders from a Squarespace account',

  inputs: {},

  exits: {
    success: {
      description: 'The orders were successfully retrieved',
      //responseType: 'redirect'
      viewTemplatePath: 'pages/homepage'
    },
    error: {
      description: 'An error occurred, no Orders were retrieved',
      responseType: 'serverError'
    }
  },

  fn: function (_, exits) {
    const options = {
      method: `${process.env.SQUARESPACE_METHOD}`,
      hostname: `${process.env.SQUARESPACE_HOSTNAME}`,
      path: `${process.env.SQUARESPACE_ORDER_PATH}`,
      headers: {
        'Authorization': `${process.env.SQUARESPACE_HEADER_AUTHORIZATION}`,
        'User-Agent': `${process.env.SQUARESPACE_HEADER_USER_AGENT}`
      },
      maxRedirects: 20
    };
      
    let hasNextPage = true;
    let nextPageCursor = '';
    // Initialize page counter
    let i = 1;

    const fetchOrders = () => {
      const req = https.request(options, (res) => {
        const chunks = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });
        
        res.on('end', () => {
          const body = Buffer.concat(chunks);
          const orders = JSON.parse(body.toString());

          Order.createEach(orders.result)
            .then(() => {
              hasNextPage = orders.pagination.hasNextPage;
              nextPageCursor = orders.pagination.nextPageCursor;
              console.log('Page: ', i);
              console.log('hasNextPage: ', hasNextPage);
              console.log('nextPageCursor: ', nextPageCursor);

              options.path = `/1.0/commerce/orders?cursor=${nextPageCursor}`;
              console.log('Path: ', options.path);
              i+=1;
              
              if (hasNextPage) {
                // Fetch the next page of orders recursively
                fetchOrders();
              } else {
                // explicitly terminate the request 
                //req.end();
                // Return success indicating that all orders were retrieved
                return exits.success();
              }
            })
            .catch((error) => {
              console.error(error);
              return exits.error(error);
            });

        });

        res.on('error', (error) => {
          console.error(error);
          return exits.error(error);
        });
      });

      req.end();
    };

    // Start fetching the orders
    fetchOrders();
  }
};
