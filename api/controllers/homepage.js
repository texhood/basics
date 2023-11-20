module.exports = {


  friendlyName: 'Homepage',


  description: 'Homepage something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/homepage'
    }
  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
