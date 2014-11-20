var gulp = require('gulp')
var jade = require('gulp-jade')
var less = require('gulp-less')

gulp.task('less', function(){
  gulp.src('src/lift.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
  gulp.src('demo/animation.less')
    .pipe(less())
    .pipe(gulp.dest('demo'))
  gulp.src('demo/demo.less')
    .pipe(less())
    .pipe(gulp.dest('demo'))
})

gulp.task('js', function(){
  gulp.src('src/lift.js')
    .pipe(gulp.dest('dist'))
  gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('demo'))
  gulp.src('bower_components/hammerjs/hammer.min.js')
    .pipe(gulp.dest('demo'))
  gulp.src('bower_components/jquery-hammerjs/jquery.hammer.js')
    .pipe(gulp.dest('demo'))
})

gulp.task('jade', function(){
  gulp.src('demo/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('demo'))
})

gulp.task('default', ['less', 'js', 'jade'])
