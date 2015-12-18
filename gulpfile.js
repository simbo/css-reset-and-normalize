'use strict';

var path = require('path');

var csswring = require('csswring'),
    extReplace = require('gulp-ext-replace'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus');

var paths = {
  cwd: __dirname,
  stylus: path.join(__dirname, 'stylus'),
  css: path.join(__dirname, 'css')
};

gulp.task('build:css', function() {
  return gulp
    .src(path.join(paths.stylus, '*.styl'))
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest(paths.css));
});

gulp.task('build:css-minified', ['build:css'], function() {
  return gulp
    .src([
      path.join(paths.css, '*.css'),
      '!' + path.join(paths.css, '*.min.css')
    ])
    .pipe(plumber())
    .pipe(postcss([
      csswring({
        preserveHacks: true
      })
    ]))
    .pipe(extReplace('.min.css'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function(done) {
  gulp.watch(path.join(paths.stylus, '**/*.styl'), ['build:css-minified']);
});

gulp.task('default', ['build:css-minified']);
