var gulp = require('gulp'),
    sass = require('gulp-sass'),
    //sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    jade = require('gulp-jade'),
    csscomb = require('gulp-csscomb'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    reload = browserSync.reload;

// Params
var params = {
    currentFile: 'index',
    jadeSrc: 'jade',
    sassSrc: 'sass',
    blocks: 'common.blocks',
    jsSrc: 'js',
    cssDst: 'css',
    buildDst: ['.', '']
};

// Default Task
gulp.task('default', ['watch', 'sass', 'jade', 'browser-sync', 'csscomb']);

// Watch Task
gulp.task('watch', ['sass', 'jade', 'browser-sync'], function() {
    gulp.watch([params.sassSrc + '/*.sass'], ['sass']);
    gulp.watch([params.jadeSrc + '/*.jade'], ['jade']);
    //gulp.watch([params.jsSrc + '/*.js'], ['js']); */
    gulp.watch([params.blocks + '/**/*'], ['sass', 'jade']); //Watch on files in common blocks directory
});
gulp.task('build', ['sass', 'jade', 'browser-sync'])
    // Sass Complie Task
gulp.task('sass', function() {
    gulp.src([params.sassSrc + '/main.sass'])
        //.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        //.pipe(sourcemaps.write('./')) 
        .pipe(csscomb())
        .pipe(gulp.dest(params.cssDst))
});

// Css  styling
gulp.task('csscomb', function() {
    gulp.src(params.cssDst + '/' + params.currentFile + '.css')
        .pipe(csscomb())
        .pipe(gulp.dest(params.cssDst))
});

// Jade
gulp.task('jade', function() {
    gulp.src(params.jadeSrc + '/' + params.currentFile + '.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(params.buildDst[0]))
        .pipe(browserSync.stream());
});

// Static server
gulp.task('browser-sync', function() {
    var files = [
        //params.jadeSrc + '/*.html',
        params.cssDst + '/*.css',
        params.jsSrc + '/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: params.buildDst,
            index: params.currentFile + '.html'
        }
    });
});
