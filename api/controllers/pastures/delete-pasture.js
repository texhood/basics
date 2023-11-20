module.exports = {


  friendlyName: 'Delete pasture',


  description: '',


  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs) {

    await destroyOne(id);

    return '/pastures';

  }


};
