var browserify = require('browserify')
  , connect = require('gulp-connect')
  , gulp = require('gulp')
  , mocha = require('gulp-mocha')
  , source = require('vinyl-source-stream')


gulp.task('browserify', function() {
  return browserify('./app/scripts/app.js')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./app/dist/'))
  .pipe(connect.reload());
});

gulp.task('server', ['browserify'], function() {
  connect.server({
    root: 'app',
    livereload: true,
  });
});

gulp.task('watch', ['server'],function(){
  gulp.watch('./app/scripts/**/*.js', ['browserify'])
})
