module.exports = {


  friendlyName: 'View a single pasture definition',


  description: 'Display pasture definition page.',

  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/pastures/pasture'
    },
    notFound: {
      responseType: 'notFound'
    }

  },


  fn: async function ({ id }) {

    const pasture = await Pasture.findOne(id);
    if (!pasture) { throw 'notFound'; }

    return { pasture };

  }

};
