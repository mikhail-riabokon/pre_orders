const Cache = require('gulp-file-cache');
const nodemon = require('gulp-nodemon');
const webpack = require('gulp-webpack');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const gulp = require('gulp');
const del = require('del');

const cache = new Cache();

gulp.task('eslint:server', () => {
  return gulp.src('./src/server/**/*.*')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean:cache', (cb) => {
  del(['./.gulp-cache']).then(() => {
    cb();
  });
});

gulp.task('build:server', ['eslint:server'], () => {
  return gulp.src('./src/server/**/*.*')
    .pipe(cache.filter())
    .pipe(babel())
    .pipe(cache.cache())
    .pipe(gulp.dest('./build/server'));
});

gulp.task('nodemon', ['build:server'], () => {
  nodemon({
    script: 'build/server/index.js',
    watch: 'src/server/',
    ext: 'js jsx',
    ignore: ['.git', 'node_modules/**/node_modules'],
    tasks: ['build:server']
  });
});

gulp.task('dev', ['clean:cache', 'nodemon']);
gulp.task('build', ['clean:cache', 'build:server']);
