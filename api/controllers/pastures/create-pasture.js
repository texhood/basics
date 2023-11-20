module.exports = {


  friendlyName: 'Create a new pasture definition',


  description: '',


  inputs: {
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


  fn: async function ({ pasture_name, pasture_size, latitude, longitude, map, productivity }) {

    const { id } = await Pasture.create({ pasture_name, pasture_size, latitude, longitude, map, productivity }).fetch();

    // For this syntax, it is important to remember to use "`" rather than "'". The use of
    // "'" will turn the return value into a text string, overriding the purpose of the object value
    // added to the end of the redirect. This is called ES6 Template Syntax.
    return `/pastures/${id}`;

  }


};
