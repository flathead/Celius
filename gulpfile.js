import gulp from 'gulp';
import plumber from 'gulp-plumber';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('assets/scss/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: '.'
    },
    cors: true,
    port: 8080,
	open: true,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('assets/scss/**/*.scss', gulp.series(styles));
  gulp.watch('*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, server, watcher
);
