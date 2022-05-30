const project_folder = "dist";
const source_folder = "src";

const path = {
   build: {
      html: project_folder + "/",
      css: project_folder + "/css/",
      js: project_folder + "/js/",
      img: project_folder + "/img/",
      fonts: project_folder + "/fonts/",
      vendor: project_folder + "/vendor/",
   },
   src: {
      html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
      css: source_folder + "/scss/style.scss",
      js: source_folder + "/js/script.js",
      img: source_folder + "/img/**/*.*",

      fonts: source_folder + "/fonts/*.*",
      vendor: source_folder + "/vendor/*.*",

   },
   watch: {
      html: source_folder + "/**/*.html",
      css: source_folder + "/scss/**/*.scss",
      js: source_folder + "/js/**/*.js",
      img: source_folder + "/img/**/*.*",
      fonts: source_folder + "/fonts/*.*",
      vendor: source_folder + "/vendor/*.*",
   },
   clean: "./" + project_folder + "/",
}

const {src, dest} = require('gulp'),
   gulp = require('gulp'),
   browsersync = require('browser-sync').create(),
   fileinclude = require('gulp-file-include'),
   del = require('del'),
   scss = require('gulp-sass')(require('sass')),
   autoprefixer = require('gulp-autoprefixer'),
   group_media = require('gulp-group-css-media-queries'),
   clean_css = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   uglify = require('gulp-uglify-es').default,
   imagemin = require('gulp-imagemin'),
   webp = require('gulp-webp'),
   webphtml = require('gulp-webp-html');

//Запуск локалхост
function browserSync(params) {
   browsersync.init({
      server: {
         baseDir: "./" + project_folder + "/",
      },
      port: 3000,
      notify: false,
   });
}

//Копирование html
function html() {
   return src(path.src.html)
      .pipe(fileinclude())
      // .pipe(webphtml())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}

//Обработка scss
function css() {
   return src(path.src.css)
      .pipe(
         scss({
            outputStyle: "expanded"
         })
      )
      .pipe(group_media())
      // .pipe(
      //    autoprefixer({
      //       overrideBrowserslist: ["last 5 version"],
      //       cascade: true,
      //    })
      // )
      .pipe(dest(path.build.css)) // выгрузка css до сжатие
      .pipe(clean_css()) // сжатие css файла
      //переименование сжатого css файла
      .pipe(
         rename({
            extname: ".min.css"
         })
      )
      .pipe(dest(path.build.css)) // выгруза сжатого css файла
      .pipe(browsersync.stream())
}

//обработка js
function js() {
   return src(path.src.js)
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(uglify())
      //переименование сжатого js файла
      .pipe(
         rename({
            extname: ".min.js"
         })
      )
      .pipe(dest(path.build.js)) // выгруза сжатого js файла
      .pipe(browsersync.stream())
}

//обработка изображений
function images() {
   return src(path.src.img)
      // .pipe(
      //    webp({
      //       quality: 70
      //    })
      // )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(imagemin([
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({quality: 75, progressive: true}),
         imagemin.optipng({optimizationLevel: 5}),
         imagemin.svgo({
            plugins: [
               {removeViewBox: true},
               {cleanupIDs: false}
            ]
         })
      ]))
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}

function fonts() {
   return src(path.src.fonts)
      .pipe(dest(path.build.fonts))
      .pipe(browsersync.stream())
}

function vendor() {
   return src(path.src.vendor)
      .pipe(dest(path.build.vendor))
      .pipe(browsersync.stream())
}

//Слушатель изменения файлов
function watchFiles(params) {
   gulp.watch([path.watch.html], html);
   gulp.watch([path.watch.css], css);
   gulp.watch([path.watch.js], js);
   gulp.watch([path.watch.fonts], fonts);
   gulp.watch([path.watch.vendor], vendor);
}

//Удаление папки dist
function clean(params) {
   return del(path.clean);
}


const build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, vendor)); //удаление папки dist и копирование js, css, html во вновь создаваемый dist
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.vendor = vendor;
exports.fonts = fonts;
exports.build = build;
exports.watch = watch;
exports.default = watch;