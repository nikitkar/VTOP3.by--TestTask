import gulp from "gulp";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

import path from "../config/path.js";
import app from "../config/app.js";

export const html = () => {
    return gulp
        .src(path.html.src)
        .pipe(fileinclude()) // в html можно будет использовать различные шаблоны (циклы, подключение компонентов)
        .pipe(htmlmin(app.htmlmin))
        .pipe(gulp.dest(path.html.dest));
};
