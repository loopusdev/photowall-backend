/**
 * PhotoController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PhotoController)
   */
  _config: {},

  upload: function (req, res) {
    var cloudinary = require('cloudinary');

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'hnuvannfg',
      api_key: process.env.CLOUDINARY_API_KEY || '756473867167364',
      api_secret: process.env.CLOUDINARY_API_SECRET || 'DAzxC17FDupRJ5ZsUW8pdSADvoA'
    });


    var imageData = req.param('imageData');

    var status = false;

    cloudinary.uploader.upload(imageData, function(result) {
      if (result) {
        status = true;
        res.json({ "status": status, data: result });
      }
      else {
        res.json({ "status": status, error: 'Error during image upload' }, 500);
      }
    });


  },




};
