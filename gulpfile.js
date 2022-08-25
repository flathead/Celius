import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import csso from 'gulp-csso';
import GulpUglify from 'gulp-uglify';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

// Styles

export const styles = () => {
  return gulp.src( 'assets/scss/style.scss', { sourcemaps: true } )
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( postcss( [
      autoprefixer()
    ] ) )
    .pipe( gulp.dest( 'assets/css', { sourcemaps: '.' } ) )
    .pipe( browser.stream() );
}

export const cssmin = () => {
	return gulp.src(['assets/css/style.css', 'lib/**/*.css'])
		.pipe( csso() )
		.pipe( rename( { extname: '.min.css' } ) )
		.pipe( gulp.dest( 'assets/css' ) )
}

// Minify and concat JS files

export const allJSMinify = () => {
	return gulp.src( [ 'assets/js/app.js', 'lib/**/*.js' ] )
		.pipe( concat( 'all.js' ) )
		.pipe( GulpUglify() )
		.pipe( rename( 'all.min.js' ) )
    	.pipe( gulp.dest( 'assets/js' ) );
}

// Server

const server = ( done ) => {
  browser.init( {
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
	// Doing Tasks
	gulp.watch( 'assets/scss/**/*.scss', gulp.series( styles ), browser.reload );
	gulp.watch( 'assets/scss/**/*.scss', gulp.series( cssmin ) );
	gulp.watch( 'assets/js/app.js', gulp.series( allJSMinify ) );

	// Reload browser
	gulp.watch( 'assets/scss/**/*.scss', browser.reload );
	gulp.watch( 'assets/js/app.js', browser.reload );
	gulp.watch( '*.html' ).on( 'change', browser.reload );
	gulp.watch( './**/*.html' ).on( 'change', browser.reload );
}

export default gulp.series(
  styles, server, watcher, cssmin, allJSMinify
);
