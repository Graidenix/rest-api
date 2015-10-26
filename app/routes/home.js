'use strict';
/**
 * @author godajiu
 */

/**
 * Main app singleton
 *
 * @inner
 * @type {express}
 */
var express = require('express');

/**
 * Router
 *
 * @type {Router}
 * @name router
 */
var router = express.Router();

/**
 *
 */
router.get('/', function (req, res) {

  /**
   *
   * @type {HomeController}
   */
  var HomeController = require('../controllers/home');

  /**
   *
   * @type {HomeController}
   */
  var home = new HomeController(req);
  res.send(home.index()).end();

  return true;
});

/**
 * Home Route
 */
module.exports = router;

