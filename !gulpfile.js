var gulp = require('gulp'); // Gulp JS
var jade = require('gulp-jade'); // Плагин для Jade
var stylus = require('gulp-stylus'); // Плагин для Stylus


//Jade
gulp.task('jade', function(){
	return gulp.src('assets/blocks/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('assets/jade/'))
})

//Stylus
gulp.task('stylus', function(){
	return gulp.src('assets/blocks/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('assets/stylus/'))
});



//Watch
gulp.task('watch', function(){
	gulp.watch('assets/stylus/**/*.styl', ['stylus'])
	gulp.watch('assets/jade/**/*.jade', ['jade'])
});


//build 
gulp.task('build', function(){
	//build html
	gulp.src('assets/jade/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build/'))

	//build css
	gulp.src('assets/stylus/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('build/css/'))
});






