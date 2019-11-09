const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function(){
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});
