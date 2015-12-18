'use strict';

var path = require('path');

var csswring = require('csswring'),
    extReplace = require('gulp-ext-replace'),
    del = require('del'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    stylus = require('gulp-stylus');

var paths = {
  cwd: __dirname,
  stylus: path.join(__dirname, 'stylus'),
  css: path.join(__dirname, 'css')
};

gulp.task('build:css', ['clean:css'], function() {
  return gulp
    .src(path.join(paths.stylus, '*.styl'))
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest(paths.css))
    .pipe(postcss([
      csswring({
        preserveHacks: true
      })
    ]))
    .pipe(extReplace('.min.css'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('clean:css', function(done) {
  del([paths.css]).then(function() {
    done();
  });
});

gulp.task('watch', function() {
  gulp.watch(path.join(paths.stylus, '**/*.styl'), ['build:css']);
});

gulp.task('build', function(done) {
  runSequence('build:css', done);
});

gulp.task('default', function(done) {
  runSequence('build', done);
});
