var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('webfiles', ['templates', 'static', 'prune-static']);

gulp.task('clean-templates', function () {
  return gulp.src([
      'de',
      'el',
      'en',
      'es',
      'fr',
      'fi',
      'it',
      'nl',
      'pl',
      'ru',
      'sv',
      'th',
      'uk'
    ].map(function (path) {
      return './www/greenaddress.it/' + path;
    }), {read: false})
    .pipe(clean());
});

gulp.task('templates', ['clean-templates'], function () {
  return gulp.src('node_modules/greenaddress-webfiles/dist/cordova-templates/**/*')
    .pipe(gulp.dest('./www/greenaddress.it/'));
});

gulp.task('clean-static', function() {
  return gulp.src([
      'www/greenaddress.it/static/css/',
      'www/greenaddress.it/static/fonts/',
      'www/greenaddress.it/static/img/',
      'www/greenaddress.it/static/js/',
      'www/greenaddress.it/static/sound/'
    ], {read: false})
    .pipe(clean());
});

gulp.task('static', ['clean-static'], function() {
  return gulp.src('node_modules/greenaddress-webfiles/dist/static/**/*')
    .pipe(gulp.dest('./www/greenaddress.it/static'));
});

/*

rm -rf WalletCordova/www/greenaddress.it/static/js/jsqrcode  # crx only


rm -rf WalletCordova/www/greenaddress.it/static/js/btchip-js-api  # crx only

# Cordova actually requires a subset of btchip files:
mkdir -p WalletCordova/www/greenaddress.it/static/js/btchip-js-api/api
mkdir -p WalletCordova/www/greenaddress.it/static/js/btchip-js-api/thirdparty
cp static/js/btchip-js-api/api/{ByteString,Convert,GlobalConstants}.js WalletCordova/www/greenaddress.it/static/js/btchip-js-api/api
cp -r static/js/btchip-js-api/thirdparty/{async,class,q} WalletCordova/www/greenaddress.it/static/js/btchip-js-api/thirdparty

rm WalletCordova/static/js/{greenaddress,instant}.js  # web only
mkdir -p WalletCordova/www/greenaddress.it/static/wallet >/dev/null
mv /tmp/config.js WalletCordova/www/greenaddress.it/static/wallet/config.js
mv /tmp/network.js WalletCordova/www/greenaddress.it/static/wallet/network.js
*/
gulp.task('prune-static', ['static'], function() {
  return gulp.src([
    'www/greenaddress.it/static/js/jsqrcode',
    'www/greenaddress.it/static/js/greenaddress.js',
    'www/greenaddress.it/static/js/instant.js',
    // selectively clean out btchip-js
    'www/greenaddress.it/static/js/btchip-js-api/api/BTChip.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/Card.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/CardTerminal.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/CardTerminalFactory.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/ChromeapiPlugupCard.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/ChromeapiPlugupCardTerminal.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/ChromeapiPlugupCardTerminalFactory.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/chromeDevice.js',
    'www/greenaddress.it/static/js/btchip-js-api/api/require.js',
  ])
  .pipe(clean());
});
