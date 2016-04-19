var gulp = require('gulp');

require('./webfiles');
require('./watch');

gulp.task('build', ['webfiles']);
gulp.task('watch', ['build', 'listen']);
gulp.task('default', ['watch']);
