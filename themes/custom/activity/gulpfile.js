/**
 * @file
 * Gulp task runner.
 */

const gulp = require("gulp");
const path = require("path");
const $ = require("gulp-load-plugins")();

/**
 * Lint Sass files.
 */
gulp.task('lint', () => {
  gulp.src("scss/*.scss")
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());
});

/**
 * Compile Sass files.
 */
gulp.task( 'watch', () => {
    return gulp.src("scss/style.scss")
    .pipe($.sass())
    .pipe($.sass().on("error", $.sass.logError))
    .pipe(gulp.dest("css"));
} );

