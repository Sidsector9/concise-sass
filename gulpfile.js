var gulp   = require( 'gulp' ),
	sass   = require( 'gulp-sass' );

// SCSS to CSS
gulp.task( 'sass', function() {
	return gulp.src( [
		'assets/scss/*.scss'
	])
	.pipe( sass( {
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1,
		} ).on( 'error', sass.logError ) )
	.pipe( gulp.dest( 'assets/css/' ) );
});

gulp.task( 'watch', function() {
	gulp.watch( ['assets/scss/*.scss'], ['sass']);
});

// Default Task
gulp.task( 'default', [
	'sass',
	'watch'
]);