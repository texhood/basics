// Synchronous version. Async version did not run, probably because n+1th and following recusrions
// contained undefined pagination and cursor variables.
const https = require('follow-redirects').https;
require('dotenv').config({ path: '././.env' });

module.exports = {
  friendlyName: 'Get products',
  description: 'Retrieve a list of products from a Squarespace account',

  inputs: {},

  exits: {
    success: {
      description: 'The products were successfully retrieved',
      //responseType: 'redirect'
      viewTemplatePath: '/pages/homepage'
    },
    error: {
      description: 'An error occurred, no Products were retrieved',
      responseType: 'serverError'
    }
  },

  fn: function (_, exits) {
    const options = {
      method: `${process.env.SQUARESPACE_METHOD}`,
      hostname: `${process.env.SQUARESPACE_HOSTNAME}`,
      path: `${process.env.SQUARESPACE_PRODUCT_PATH}`,
      headers: {
        'Authorization': `${process.env.SQUARESPACE_HEADER_AUTHORIZATION}`,
        'User-Agent': `${process.env.SQUARESPACE_HEADER_USER_AGENT}`
      },
      maxRedirects: 20
    };

    // console.log(options);
    let hasNextPage = true;
    let nextPageCursor = '';

    const fetchProducts = () => {
      const req = https.request(options, (res) => {
        const chunks = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const body = Buffer.concat(chunks);
          const products = JSON.parse(body.toString());

          Product.createEach(products.products)
            .then(() => {
              // Log the retrieved products
              //console.log(products);
              hasNextPage = products.pagination.hasNextPage;
              nextPageCursor = products.pagination.nextPageCursor;
              console.log('hasNextPage: ', hasNextPage);
              console.log('nextPageCursor: ', nextPageCursor);

              options.path = `/1.0/commerce/products?cursor=${nextPageCursor}`;
              console.log('Path: ', options.path);
              
              if (hasNextPage) {
                // Fetch the next page of products recursively
                fetchProducts();
              } else {
                // Return success indicating that all products were retrieved
                req.end();
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

    // Start fetching the products
    fetchProducts();
  }
};
