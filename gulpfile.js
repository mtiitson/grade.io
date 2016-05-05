const gulp = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const jspm = require('jspm');
const builder = new jspm.Builder();
builder.loadConfig('./jspm.build.js');
 
gulp.task('sass', () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(replace(/@import 'jspm:/gi, "@import 'node_modules/"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('connect', () => {
  connect.server({
    livereload: false,
  });
});

gulp.task('build', (cb) => {
    builder.bundle('grade.io', 'build.js', {
        injectConfig: true,
    })
    .then(() =>  {
        console.log("Finished building without a glitch");
        cb();
    })
    .catch(e => {
        console.error("Failed building", e.stack)
        cb();
    });
});


