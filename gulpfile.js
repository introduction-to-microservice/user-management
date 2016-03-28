var gulp = require('gulp');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

gulp.task('default', function(cb) {
    gulp.start('analyze', 'test', function() {
        console.log('gulp.start callback');
        cb()
    })
});

gulp.task('analyze', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

/**
 * Execute all tests.
 */
gulp.task('test', function () {
    return gulp.src('src/**/*.spec.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});
