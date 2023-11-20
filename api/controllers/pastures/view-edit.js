module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',

  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/pastures/edit'
    }

  },


  fn: async function ({ id }) {

    const pastureToBeUpdated = await Pasture.findOne(id);
    
    return { pastureToBeUpdated };

  }


};
