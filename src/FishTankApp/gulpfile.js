/// <binding AfterBuild='copy' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var paths = require('./gulp.config')();

// TASKS
gulp.task('min:js', function() {
    return gulp
        .src([paths.jqueryJs, paths.raphaelJs, paths.morrisJs])
        .pipe(concat(paths.jsDest + '/min/site.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('copy:js', function() {
    return gulp
        .src([paths.jqueryJs, paths.raphaelJs, paths.morrisJs])
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task('min:css', function () {
    return gulp
        .src([paths.bootstrapCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss, paths.myCss])
        .pipe(concat(paths.cssDest + '/min/site.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('.'));
});

gulp.task('copy:css', function () {
    return gulp
        .src([paths.bootstrapCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss])
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task('copy:fonts', function () {
    return gulp
        .src([paths.fonts])
        .pipe(gulp.dest(paths.fontDest));
});

gulp.task('min', ['min:js', 'min:css']);
gulp.task('copy', ['copy:js', 'copy:css', 'copy:fonts']);

//gulp.task('default', function () {
//    // place code for your default task here
//});