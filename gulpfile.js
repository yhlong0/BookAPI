var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');
var supertest = require('supertest');

gulp.task('default', function() {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT:5004
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function(){
		console.log('Restarting')
	});
});

gulp.task('test', function(){
	env({vars: {ENV: 'Test'}});
	gulp.src('Tests/*.js', {read: false})
		.pipe(gulpMocha({reporter: 'nyan'}));
});