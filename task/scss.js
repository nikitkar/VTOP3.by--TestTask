import gulp from "gulp";

import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";

import app from "../config/app.js";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

import path from "../config/path.js";

export const scss = () => {
    return gulp
        .src(path.scss.src, { sourcemaps: app.isDev })
        .pipe(sass()) 
        .pipe(autoPrefixer())
        .pipe(shorthand()) // если можно, то сокращает стили в однин стиль
        .pipe(groupCssMediaQueries()) // группирирует медиа выражения
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};
