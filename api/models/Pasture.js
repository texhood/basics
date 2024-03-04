/**
 * Pasture.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  // datastore: 'pastures',

  attributes: {
    // Data Types:
    // string
    // number
    // boolean
    // json
    // ref

    // Attribute properties:
    // type
    // unique
    // required
    // columnName (used to map to database tableName)
    // example
    // defaultsTo
    // allowNull
    // isIn (used for validation, i.e. ['boring', 'too many emails', 'recipes too difficult', 'other'])
    // isInteger
    // encrypt
    // autoIncrement
  
    /*CREATE TABLE `pasture` (
      `createdAt` BIGINT(20) NULL DEFAULT NULL,
      `updatedAt` BIGINT(20) NULL DEFAULT NULL,
      `id` INT(11) NOT NULL AUTO_INCREMENT,
      `pasture_size` DECIMAL(12,4) NULL DEFAULT NULL,
      `pasture_name` VARCHAR(30) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
      `latitude` INT(11) NULL DEFAULT NULL,
      `longitude` INT(11) NULL DEFAULT NULL,
      `pasture_map` VARCHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
      `pasture_productivity` DECIMAL(12,4) NULL DEFAULT NULL,
      PRIMARY KEY (`id`) USING BTREE,
      UNIQUE INDEX `id` (`id`) USING BTREE
      )
      COLLATE='latin1_swedish_ci'
      ENGINE=InnoDB
      ; */

    id: {
      type: 'string',
      required: true
    },

    pasture_size: {
    type: 'number'
    },
    
    pasture_name: {
      type: 'string'
    },
    
    longitude: {
      type: 'number'
    },
    
    latitude: {
      type: 'number'
    },

    pasture_map: {
      type: 'string'
    },

    pasture_productivity: {
      type: 'number'
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

