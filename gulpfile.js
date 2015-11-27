var gulp = require('gulp'),
    sass = require('gulp-sass'),
    //sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    jade = require('gulp-jade'),
    csscomb = require('gulp-csscomb'),
    reload = browserSync.reload;

// Params
var params = {
    currentFile: 'index',
    jadeSrc: 'jade',
    sassSrc: 'sass',
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
    //gulp.watch([params.jsSrc + '/*.js'], ['js']);
    gulp.watch([params.jadeSrc + '/blocks/*.jade'], ['jade']);
});

// Sass Complie Task
gulp.task('sass', function() {
    gulp.src([params.sassSrc + '/' + params.currentFile + '.sass', params.sassSrc + '/main.sass'])
        //.pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe(sourcemaps.write('./')) 
        .pipe(csscomb())
        .pipe(gulp.dest(params.cssDst))
        //.pipe(browserSync.stream());
        // Rewrite Main Css everytime
        //gulp.src(params.sassSrc + '/main.sass')
        //.pipe(sourcemaps.init())
        //.pipe(sass())
        //.pipe(sourcemaps.write('./')) // Css Build Folder
        //.pipe(csscomb())
        //.pipe(gulp.dest(params.cssDst))
});

// Css  styling
gulp.task('csscomb', function() {
    gulp.src(params.cssDst + '/' + params.currentFile + '.css')
        .pipe(csscomb())
        .pipe(gulp.dest(params.cssDst))
        //.pipe(browserSync.stream());
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
