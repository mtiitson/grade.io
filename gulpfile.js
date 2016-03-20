var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(replace(/@import 'jspm:/gi, "@import 'node_modules/"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 