/**
 * Home controller
 *
 * @constructor
 */
function HomeController(req) {
  'use strict';

  this.index = function () {
    return {
      name: req.package.name,
      description: req.package.description,
      URL: req.getFullUrl(),
      routes: {
        '/': {
          'supports': 'GET',
          'meta': req.getHost() + '/'
        }
      },
      success: true,
      message: 'Home router'
    };
  };
}

module.exports = HomeController;
