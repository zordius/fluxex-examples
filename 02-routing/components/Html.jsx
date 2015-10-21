var React = require('react');
var Fluxex = require('fluxex');
var Product = require('./Product.jsx');
var TopProducts = require('./TopProducts.jsx');

var Html = React.createClass({
    mixins: [
        Fluxex.mixin,
        require('fluxex/extra/storechange'),
        require('fluxex/extra/pjax'),
        {listenStores: ['page']}
    ],

    getStateFromStores: function () {
        return {
            route_name: this.getStore('page').getRouteName()
        };
    },

    render: function () {
        var Routing = {
            top: <TopProducts />,
            product: <Product />
        };
        var body = Routing[this.state.route_name];

        return (
        <html>
         <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <Fluxex.Title />
         </head>
         <body onClick={this.handleClickLink}>
          <div>
           {body}
          </div>
          <hr />
          <a href="/main">Go to Main...</a>
          <Fluxex.InitScript />
         </body>
        </html> 
        );
    }
});

module.exports = Html;
