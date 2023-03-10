import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import gulpif from "gulp-if";

export const images = () => {
  return gulp
    .src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin()))
    .pipe(gulp.dest(path.img.dest));
};
