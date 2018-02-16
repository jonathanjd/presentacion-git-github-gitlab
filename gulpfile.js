const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");

// Static Server + watching scss/html files
gulp.task("serve", ['pug'], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch('./pug/*.pug', ['pug']);
  gulp.watch("./*.html").on("change", browserSync.reload);
});


gulp.task('pug', () => {

    gulp.src('./pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'));

});