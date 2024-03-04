module.exports = {


  friendlyName: 'View orders',


  description: 'Display "Orders" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/squarespace/orders'
    }

  }, 


  fn: async function () {

    const orders = await Order.find();

    return { orders };

  }


};
