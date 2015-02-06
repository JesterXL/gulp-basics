var gulp = require('gulp'),
	del = require('del'),
	browserSync = require('browser-sync'),
  	reload = browserSync.reload;

var files = {
	index: './src/index.html'
};

gulp.task('clean', function (cb) {
  del(['build'], {force: true}, cb);
});

gulp.task('copy-index', function () {
  return gulp.src(files.index)
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['clean', '6to5']);