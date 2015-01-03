'use strict';

// Apply all polyfills
require('object.assign').shim();
global.Promise = require('bluebird');
Promise.longStackTraces();

// Init .jsx require()
require('node-jsx').install({extension: '.jsx'});

var express = require('express'),
    fluxexapp = require('./fluxexapp'),
    serverAction = require('./actions/server'),
    fluxexServerExtra = require('fluxex/extra/server'),
    app = express();

// Provide /static/js/main.js
fluxexServerExtra.initStatic(app);

// Mount test page at /test
app.use('/test', fluxexServerExtra.middleware(fluxexapp, serverAction.samplePageWithQuery));

// Start server
app.listen(3000);
console.log('Fluxex started! Go http://localhost:3001/test?id=123');