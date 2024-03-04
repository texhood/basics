module.exports = {


  friendlyName: 'View products',


  description: 'Display "Products" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/squarespace/products'
    }

  }, 


  fn: async function () {

    const products = await Product.find();

    return { products };

  }


};
