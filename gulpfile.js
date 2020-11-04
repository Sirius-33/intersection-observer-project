var gulp = require("gulp");
var sass = require("gulp-sass"); //imports sass
var cleanCss = require("gulp-clean-css"); //css minify
var connect = require("gulp-connect");
var concat = require("gulp-concat");

function processHTML() {
    return gulp.src("src/html/**/*.html")
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());
}

function processSass() { //chews through sass and prints out css(task function)
    return gulp.src("src/sass/**/*.scss") //returns a promise and looks in all folders under sass
        .pipe(sass()) //preprocessor
        .pipe(cleanCss({
            compatibility: "ie8"
        })) //minify css
        .pipe(gulp.dest("dist/assets/css")) //prints to css
        .pipe(connect.reload()); //reloads liveserver 
}

function processJS() {
    return gulp.src("src/js/**/*.js")
        .pipe(concat("app.js"))
        //køre det igennem babel
        .pipe(gulp.dest('dist/assets/js')) //destinationen for filen
        .pipe(connect.reload()); //opdatere browseren hver gang der gemmes
}


function watch() {
    gulp.watch("src/scss/**/*.scss", {
            ignoreInitial: false
        },
        processSass);
    gulp.watch("src/html/**/*.html", {
            ignoreInitial: false
        },
        processHTML);
    // ignoreInitial køre filerne fra starten af/skaber dist mappen fra start + ved ændringer
    gulp.watch("src/js/**/*.js", {
            ignoreInitial: false
        },
        processJS);
}

function server() {
    return connect.server({
        root: 'dist',
        livereload: true
    });
}

gulp.task("default", gulp.parallel(server, watch)); //runs the liveserver function and reloads content


module.exports = {
    processHTML,
    processSass,
    watch,
    server
}