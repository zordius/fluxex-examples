'use strict';

var Handlebars = require('handlebars'),
    fs = require('fs');

module.exports = function (data, opts) {
    var file = (opts && opts.file) ? opts.file :  __dirname + '/index.html',
        hbfile = (opts && opts.hbfile) ? opts.hbfile : __dirname + '/index.html.hb',
        cssfile = (opts && opts.cssfile) ? opts.cssfile : null,

        template = (opts && opts.template) ? opts.template : '',
        css = (opts && opts.css) ? opts.css : '';

    if (!data) {
        data = {};
    }

    if (hbfile) {
        template = fs.readFileSync(hbfile, 'utf8')
    }

    if (cssfile) {
        css = fs.readFileSync(cssfile, 'utf8');
    }

    if (css !== '') {
        data.extracss = css;
    }

    if (!data.title) {
        data.title = 'badge-render';
    }

    if (!data.assets) {
        data.assets = require('path').normalize(__dirname + '/../browser-badge/static/');
    }

    fs.writeFileSync(file, Handlebars.compile(template)(data), 'utf8');
}
