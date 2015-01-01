var page = require('webpage').create(),
    system = require('system'),
    url = system.args[1],
    png = system.args[2] || (encodeURIComponent(url) + '.png');

page.viewportSize = {
  width: system.args[4] || 500,
  height: system.args[5] || 320
};

page.zoomFactor = system.args[3] || 1;

// Open the Page, then save the png
page.open(url, function (status) {
    page.render(png);
    phantom.exit();
});
