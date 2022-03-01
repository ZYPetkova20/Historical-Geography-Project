const { src, dest, watch, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const scssPath = 'src/scss/**/*.scss';
const cssPath = 'dist/css/';
const jsPath = 'src/js/**/*.js';
const jsMinifiedPath = 'dist/js/';

function css(){
    return src(scssPath)
    .pipe(sass())
    .pipe(postcss([autoprefixer('last 2 versions'), cssnano()]))
    .pipe(dest(cssPath))
}

function watchScss(){
    watch(scssPath, css)
}

function js(){
    return src(jsPath)
    .pipe(terser())
    .pipe(dest(jsMinifiedPath))
}

function watchJs(){
    watch(jsPath, js)
}

exports.watch = parallel(watchScss, watchJs);