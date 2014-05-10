/**
 * isWallOwner
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  //TODO - provjeriti tko je vlasnik Walla
  //return next();

  return res.forbidden('You are not Wall owner.');
};
