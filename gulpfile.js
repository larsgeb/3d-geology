var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('test-gulp', function() {
  console.log('Hello World!');
});

gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  connect.server({
    livereload:true
  });
});

gulp.task('html-reload', function(){
  return gulp.src('*.html').pipe(connect.reload());
});

gulp.task('default', ['webserver', 'sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['*.html'],['html-reload']);
});
