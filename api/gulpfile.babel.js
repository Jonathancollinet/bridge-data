"use strict";
import gulp from 'gulp'
import nodemon from 'gulp-nodemon'

gulp.task('launchAPI', () => {
    nodemon({
        script: './api.js',
        ext: 'js'
    })
})

gulp.task('default', ['launchAPI'])