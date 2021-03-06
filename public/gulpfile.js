const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');
const spa = require('gulp-spa');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rev = require('gulp-rev');
const cleanCss = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin');
const browserify = require('gulp-browserify');
const csslint = require('gulp-csslint');
const jshint = require('gulp-jshint');
var html5Lint = require('gulp-html5-lint');

const input = './css/**/*.scss';
const output = './css';

/**
 * POSTPROCESSORS
 * $ gulp lint
 */
gulp.task("lint", () => {
    return gulp.src("./index.html")
    .pipe(spa.html({
        assetsDir: "./",
        pipelines: {
            main: (files) => {
                return files
                    .pipe(html5Lint())
            },

            js: (files) => {
                return files
                    .pipe(jshint())
                    .pipe(jshint.reporter('default'))
            },

            css: (files) => {
                return files
                    .pipe(csslint())
                    .pipe(csslint.formatter())
            }
        }
    }))
    .pipe(gulp.dest("./"));
});

/**
 * BUILD
 * $ gulp build
 */
gulp.task("build", () => {
    return gulp.src("./index.html")
        .pipe(spa.html({
            assetsDir: "./build",
            pipelines: {
                main: (files) => {
                    return files
                        .pipe(htmlMin());
                },

                js: (files) => {
                    return files
                        .pipe(uglify())
                        .pipe(concat("app.js"))
                        .pipe(rev());
                },

                css: (files) => {
                    return files
                        .pipe(cleanCss())
                        .pipe(concat("app.css"))
                        .pipe(rev());
                }
            }
        }))
        .pipe(gulp.dest("./"));
});



/**
 * DEVELOPMENT
 * $ gulp dev
 */

gulp.task('sass', () => {
	return gulp.src(input)
	.pipe(sourcemaps.init())
	.pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
	.pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(output))
	.pipe(browserSync.stream());
});
 
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    });

    gulp.watch("./css/*.scss", ['sass']);
    gulp.watch("./index.html").on('change', browserSync.reload);
});
 
gulp.watch(input, ['sass'])
	.on('change', (event) => {
		console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
});
 
gulp.task('dev', ['serve']);



/**
 * DEPLOYMENT
 * $ gulp deploy
 */
gulp.task('deploy', shell.task([
    'firebase deploy --project islandsushi-352e6'
]));