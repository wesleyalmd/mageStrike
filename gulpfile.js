/**
 *
 * @category:   design
 * @package:    magestrike_default
 * @author:     Wesley Almeida <wesleyalmd@gmail.com>
 *
 */



//== Dependencies
//

var gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    less          = require('gulp-less'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglify'),
    util          = require('gulp-util'),
    autoprefixer  = require('gulp-autoprefixer'),
    streamqueue   = require('streamqueue'),
    path          = require('path');

//==


//== Variables
//

var path_dev      = 'skin/develop',
    path_public   = 'skin/public';

//==


//== JS - core
//

gulp.task('js_core', function() {
  return streamqueue({ objectMode: true },
    gulp.src('bower_components/Formstone/src/js/core.js'),
    gulp.src('bower_components/Formstone/src/js/mediaquery.js'),
    gulp.src('bower_components/slick-carousel/slick/slick.js'),
    gulp.src('bower_components/sharer.js/sharer.js'),
    gulp.src('bower_components/jquery-mask-plugin/src/jquery.mask.js'),
    gulp.src(path_dev + '/js/core.js')
  )
  .pipe(concat('core.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path_public + '/js'));
});

//==


//== JS - bootstrap
//

gulp.task('js_bootstrap', function() {
  return streamqueue({ objectMode: true },
    gulp.src('bower_components/bootstrap/js/dropdown.js'),
    gulp.src('bower_components/bootstrap/js/tooltip.js'),
    gulp.src('bower_components/bootstrap/js/tab.js'),
    gulp.src(path_dev + '/js/bootstrap.js')
  )
  .pipe(concat('bootstrap.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path_public + '/js'));
});

//==


//== JS - custom
//

gulp.task('js_custom', function() {
  return streamqueue({ objectMode: true },
    gulp.src(path_dev + '/js/custom.js')
  )
  .pipe(concat('custom.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path_public + '/js'));
});

//==


//== JS - product
//

gulp.task('js_product', function() {
  return streamqueue({ objectMode: true },
    gulp.src('bower_components/easyzoom/dist/easyzoom.js'),
    gulp.src(path_dev + '/js/product.js')
  )
  .pipe(concat('product.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path_public + '/js'));
});

//==


//== JS - checkout
//

gulp.task('js_checkout', function() {
  return streamqueue({ objectMode: true },
    // Brazilian cep autocomplete
    gulp.src('bower_components/magic-address/dist/magic-address.js'),
    gulp.src(path_dev + '/js/checkout.js')
  )
  .pipe(concat('checkout.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path_public + '/js'));
});

//==


//== less
//

gulp.task('less', function() {
  return streamqueue({ objectMode: true },
    gulp.src(path_dev + '/less/core.less')
  )
  .pipe(less({compress: true}).on('error', util.log))
  .pipe(autoprefixer())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(gulp.dest(path_public + '/css'));
});

//==


//== watch patchs
//

gulp.task('watch', function() {
  gulp.watch(path_dev    + '/js/core.js',      ['js_core']);
  gulp.watch(path_dev    + '/js/bootstrap.js', ['js_bootstrap']);
  gulp.watch(path_dev    + '/js/custom.js',    ['js_custom']);
  gulp.watch(path_dev    + '/js/product.js',   ['js_product']);
  gulp.watch(path_dev    + '/js/checkout.js',  ['js_checkout']);
  gulp.watch(path_dev    + '/less/**/*.less',  ['less']);
});

//==


//== Running default
//

gulp.task('default', [
  'watch',
  'js_core',
  'js_bootstrap',
  'js_custom',
  'js_product',
  'js_checkout',
  'less'
]);

//==
