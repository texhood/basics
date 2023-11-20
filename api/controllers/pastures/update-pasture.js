module.exports = {


  friendlyName: 'Update pasture',


  description: '',


  inputs: {
    id: {
      type: 'number',
      isInteger: true,
      required: true
    },
    pasture_name: {
      type: 'string',
      required: true
    },
    pasture_size: {
      type: 'number'
    },
    latitude: {
      type: 'number'
    },
    longitude: {
      type: 'number'
    },
    map: {
      type: 'string'
    },
    productivity: {
      type: 'number'
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function ({ id,pasture_name,pasture_size,latitude,longitude,map,productivity }) {

    const updatedPasture = await pasture.updateOne(id).set(pasture_name,pasture_size,latitude,longitude,map,productivity);

    return `/pastures/${updatedPasture.id}`;

  }


};
