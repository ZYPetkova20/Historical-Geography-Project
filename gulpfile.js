const { src, dest, watch, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const babel = require('gulp-babel');
const scssPath = 'Website/src/scss/**/*.scss';
const cssPath = 'Website/dist/css/';
const jsPath = 'Website/src/js/**/*.js';
const jsMinifiedPath = 'Website/dist/js/';

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
    .pipe(babel(
        {
            presets: [
                [
                  "@babel/env",
                  {
                    "targets": {
                        "browsers": [
                          "last 2 versions"
                        ]
                      }
                  },
                ],
              ],
        }
    ))
    .pipe(terser())
    .pipe(dest(jsMinifiedPath))
}

function watchJs(){
    watch(jsPath, js)
}

exports.watch = parallel(watchScss, watchJs);