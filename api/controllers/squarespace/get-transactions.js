// Synchronous version. Async version did not run, probably because n+1th and following recusrions
// contained undefined pagination and cursor variables.
const https = require('follow-redirects').https;
require('dotenv').config({ path: '././.env' });

  //API Sample: GET https://api.squarespace.com/{api-version}/commerce/transactions?modifiedAfter={a-datetime}&modifiedBefore={b-datetime}&cursor={c}
  /* {api-version} string
      required

      See the Transactions API Overview page for the current API version.

      modifiedAfter={a-datetime} string
      optional

      Time-boxes the request to Documents that were modified after {a-datetime} where {a-datetime} is an ISO 8601 UTC date and time string, e.g. YYYY-MM-DDThh:mm:ss.sZ.

      modifiedBefore={b-datetime} string
      optional

      Time-boxes the request to Documents that were modified before {b-datetime} where {b-datetime} is an ISO 8601 UTC date and time string, e.g. YYYY-MM-DDThh:mm:ss.sZ.

      cursor={c} string
      optional

      Identifies where the next page of results should begin. {c} should be the value of pagination.nextPageCursor from a previous response.
      If this parameter is not present or empty, the endpoint returns up to 50 Documents. */

module.exports = {
  friendlyName: 'Get transactions',
  description: 'Retrieve a complete list of transactions from a Squarespace account',

  inputs: {},

  exits: {
    success: {
      description: 'The transactions were successfully retrieved',
      //responseType: 'redirect'
      viewTemplatePath: 'pages/homepage'
    },
    error: {
      description: 'An error occurred, no transactions were retrieved',
      responseType: 'serverError'
    }
  },

  fn: function (_, exits) {
    const options = {
      method: `${process.env.SQUARESPACE_METHOD}`,
      hostname: `${process.env.SQUARESPACE_HOSTNAME}`,
      path: `${process.env.SQUARESPACE_TRANSACTION_PATH}`,
      headers: {
        'Authorization': `${process.env.SQUARESPACE_HEADER_AUTHORIZATION}`,
        'User-Agent': `${process.env.SQUARESPACE_HEADER_USER_AGENT}`
      },
      maxRedirects: 20
    };
    console.log(options);
      
    let hasNextPage = true;
    let nextPageCursor = '';
    // Initialize page counter
    let i = 1;

    const fetchTransactions = () => {
      const req = https.request(options, (res) => {
        const chunks = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });
        
        res.on('end', () => {
          const body = Buffer.concat(chunks);
          const transactions = JSON.parse(body.toString());
          console.log(transactions);

          Transaction.createEach(transactions.document)
            .then(() => {
              hasNextPage = transactions.pagination.hasNextPage;
              nextPageCursor = transactions.pagination.nextPageCursor;
              console.log('Page: ', i);
              console.log('hasNextPage: ', hasNextPage);
              console.log('nextPageCursor: ', nextPageCursor);

              options.path = `/1.0/commerce/transactions?cursor=${nextPageCursor}`;
              console.log('Path: ', options.path);
              i+=1;
              
              if (hasNextPage) {
                // Fetch the next page of transactions recursively
                fetchTransactions();
              } else {
                // explicitly terminate the request 
                //req.end();
                // Return success indicating that all transactions were retrieved
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

    // Start fetching the transactions
    fetchTransactions();
  }
};
