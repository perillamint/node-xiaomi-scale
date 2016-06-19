let MiScale = require('../index.js');

let miscale = new MiScale();

miscale.startScanning();

miscale.on('data', function (scale) {
    console.log(scale);
});
