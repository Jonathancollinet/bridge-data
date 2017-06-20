"use strict";
import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import livereload from 'gulp-livereload'

gulp.task('css', () => {
    gulp.watch('public/**/*.css', (files) => {
        livereload()
    })
})

gulp.task('launchServer', () => {
    nodemon({
        script: './server.js',
        ext: 'js html'
    }).on('restart', () => {
        gulp.src('./server.js')
            .pipe(livereload())
    })
})

gulp.task('default', ['launchServer'], () => {
    livereload.listen()
    gulp.watch('public/*.css', (file) => {
        livereload.changed(file)
    })
})