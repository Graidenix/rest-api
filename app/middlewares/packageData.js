module.exports = function (req, res, next) {
  'use strict';

  /**
   * Add package data to request parameter
   */
  req.package = require('../../package.json');

  /**
   * Get full host string including protocols
   *
   * @returns {string}
   */
  req.getHost = function () {
    var port = req.package.config.port;
    var portStr = [80, 443].indexOf(port) !== -1 ? '' : ':' + port;
    return req.protocol + '://' + req.hostname + portStr;
  };

  /**
   * Get full URL including path
   *
   * @returns {string}
   */
  req.getFullUrl = function () {
    return req.getHost() + '' + req.path;
  };
  next();
};
