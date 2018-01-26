var gulp = require('gulp'),
    gutil = require('gulp-util'),
    //connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat');
    
var env,
    jsSources,
    sassSources,
    htmlSources,
    jsonSources,
    outputDir,
    sassStyle;
    
env = process.env.NODE_ENV || 'development';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}    
    
jsSources = [
  'components/scripts/script.js'
];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];

    
gulp.task('log',function(){
  gutil.log('workflow');  
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    //.pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    //.pipe(connect.reload())
});

gulp.task('sass', function() {
 gulp.src(sassSources)
    .pipe(sass({
      outputStyle: sassStyle
    })
    .on('error', gutil.log))
    .pipe(gulp.dest(outputDir + 'css'))
    //.pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    //.pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['sass']);
  gulp.watch('builds/development/*.html', ['html']);
  //gulp.watch('builds/development/images/**/*.*', ['images']);
});

gulp.task('default', ['html', 'sass' ,'js', 'watch']);