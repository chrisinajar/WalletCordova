var gulp = require('gulp');
var watch = require('gulp-sane-watch');

gulp.task('listen', function () {
  watch('node_modules/greenaddress-webfiles/dist/**/*', {debounce: 1000}, function () {
    gulp.start('webfiles')
  });
});
