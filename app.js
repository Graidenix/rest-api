/**
 *
 * @todo: add allow cross origin
 */
(function (require) {
    "use strict";

    // App Init
    var appConfig = require("./package.json").config;
    var express = require('express');
    var app = express();

    app.use(require('./app/middlewares/packageData'));

    // Add distance library route for API;
    app.use(require('./app/routes/home'));

    var server = app.listen(appConfig.port, appConfig.host, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server start at http://%s:%s', host, port);
    });
}(require));
