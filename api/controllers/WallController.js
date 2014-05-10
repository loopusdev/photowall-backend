/**
 * WallController
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
   * (specific to WallController)
   */
  _config: {},



  photo: function(req, res) {

  },

  findOneByTitle: function(req, res) {
    var title = req.param('title');
    var status = false;
    Wall.findOneByTitle(title).done(function (err, wall) {
      if (err) {
        res.send({ "status": status, error: 'Error 400' }, 400);
      } else {
        if (!wall) {
          res.json({ "status": status, error: 'Wall not found' }, 404);
        }
        else {
          status = true;
          res.send({ "status": status, data: wall });
        }
      }
    });

  }






};
