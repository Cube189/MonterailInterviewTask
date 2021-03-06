var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var gulp_uglify = require('gulp-uglify');
var gulp_compile_sass = require('gulp-sass');
var gulp_live_reload = require('gulp-livereload');
var gulp_autoprefixer = require('gulp-autoprefixer');


gulp.task('browsersync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        open: false,
        online: false,
        notify: false,
    });
});

gulp.task('compile_sass', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(plumber())
        .pipe(gulp_compile_sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp_autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('uglify', function() {
    gulp.src('assets/js/*.js')
        .pipe(plumber())
        .pipe(gulp_uglify())
        .pipe(gulp.dest('assets/minjs'));
    // gulp.src('assets/css/*.css')
        // .pipe(plumber())
        // .pipe(gulp_uglify())
        // .pipe(gulp.dest('assets/css'));
});



gulp.task('default', [
    'uglify',
    'compile_sass',
    'browsersync'
]);



gulp.task('watch', function() {    
    gulp.watch('assets/js/*.js', ['uglify']);

    gulp.watch('assets/sass/**/*.scss', ['compile_sass']);

    gulp.watch('**/*.*', ['browsersync']);
});

gulp.task('watch_sass', function() {
  gulp.watch('assets/sass/**/*.scss', ['compile_sass']);
});
