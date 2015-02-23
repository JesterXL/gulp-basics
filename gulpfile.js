var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var babel		= require('gulp-babel');
var del 		= require('del');
var vinylPaths  = require('vinyl-paths');

gulp.task('hello', function()
{
	console.log('Waaazzuuuuuppp');
});

gulp.task('copyIndex', function()
{
	return gulp.src('src/index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function()
{
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('watchFiles', function()
{
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/**/*.js', ['babelIt']);
});

gulp.task('babelIt', function()
{
	return gulp.src('src/**/*.js')
			.pipe(babel())
			.pipe(gulp.dest('./build'))
			.pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function()
{
	return gulp.src('./build', {read: false})
			.pipe(vinylPaths(del));
});


gulp.task('default', ['clean', 'copyIndex', 'browserSync', 'watchFiles']);