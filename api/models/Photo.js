/**
 * Photo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

  	url: {
      type: "url",
      required: true,
    },

    wallId: {
      type: 'integer',
      required: true,
    }

  }

};
