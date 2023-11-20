module.exports = {


  friendlyName: 'View pastures',


  description: 'Display "Pastures" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pastures/pastures'
    }

  },


  fn: async function () {

    const pastures = await Pasture.find();

    return { pastures };

  }


};
