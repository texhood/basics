/**
 * Squarespace/Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// const request = require('request');
const https = require('follow-redirects').https;
// const { promisify } = require('util');
require('dotenv').config({ path: '././TEST.env' });

module.exports = {

  datastore: 'default',
  // datastore: 'financials',
  tableName: 'items',

  attributes: {
    // Add any attributes here as needed
    id: {
      type: 'number',
      required: 'true'
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
    variantAttributes: {
      type: 'string'
    },
    seoOptions: {
      type: 'string'
    }
  },

  getProducts: () => {
    const options = {
      method: process.env.SQUARESPACE_METHOD,
      hostname: process.env.SQUARESPACE_HOSTNAME,
      path: process.env.SQUARESPACE_PATH,
      headers: {
        'Authorization': process.env.SQUARESPACE_AUTHORIZATION,
        'User-Agent': process.env.SQUARESPACE_USER_AGENT
      },
      maxRedirects: 20
    };

    let hasNextPage = true;
    let nextPageCursor = '';

    fetchProducts () => {
      const req = https.request(options, (res) => {
        const chunks = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const products = Buffer.concat(chunks);
          hasNextPage = products.pagination.hasNextPage;
          nextPageCursor = products.pagination.nextPageCursor;
          options.path = `${process.env.SQUARESPACE_PATH}=${nextPageCursor}`;
    
          products.forEach(function toDB(product) {
            this.create(
              product.id,
              product.type,
              product.storepageId,
              product.name,
              product.description,
              product.url,
              product.urlSlug,
              product.isVisible,
              product.variantAttributes,
              product.seoOptions);
          });

          if (hasNextPage) {
            // Fetch the next page of products recursively
            fetchProducts();
          } else {
            // Return success indicating that all products were retrieved
            return exits.success();
          }
        });
        req.end();
      });

      // Start fetching the products
      fetchProducts();
    };
  },

  // Custom function to fetch and create products in the database
  fetchAndCreateProducts: async function () {
    try {
      // Fetch products from Squarespace API
      const products = await this.getProducts();

      // Create each product in the database
      for (const product of products) {
        await SquarespaceProduct.create({
          name: product.name,
          price: product.price,
          description: product.description,
          // Add more attributes here as needed
        });
      }

      return 'Products fetched and created successfully';
    } catch (err) {
      throw new Error('Failed to fetch and create products');
    }
  },

  // Function to truncate the table
  truncateTable: async function () {
    try {
      // Use `destroy` method with `where` clause to delete all records
      await SquarespaceProduct.destroy({ where: {} });
      return 'Table truncated successfully';
    } catch (err) {
      throw new Error('Failed to truncate the table');
    }
  },
};

