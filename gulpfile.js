var gulp   = require('gulp'),
	sass   = require('gulp-sass');

gulp.task('style', function () {
	return gulp
		.src('./sass/style.scss')
		.pipe( sass.sync({outputStyle: 'expanded'}).on('error', sass.logError) )
		.pipe( gulp.dest('./css') );
});

// Default
gulp.task('default', function () {
	gulp.watch('./sass/*.scss', ['style'] );
});