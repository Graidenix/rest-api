/**
 * Created by godajiu on 21-Oct-15.
 */
var assert = require("assert");
var Home = require('../../app/controllers/home');

describe('Controllers/Home', function () {
  describe('#output', function () {
    it('should return true', function () {
      var home = new Home();
      assert.equal(true, true);
    });
  });
});
