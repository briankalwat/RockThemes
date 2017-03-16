var gulp = require('gulp');

//include plugins
var less = require('gulp-less');

gulp.task('less', function() {
	gulp.src('Themes/**/[^_]*.less')
	.pipe(less())
	.pipe(gulp.dest('Themes/.'))
});