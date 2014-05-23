// Generated on 2014-05-20 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            dist: {
                src: ['src/struct.js', 'src/*.js'],
                dest: 'dist/struct.js' 
            }
        },

        uglify: {
            options: {
                banner: "/* <%= pkg.name %> <%= pkg.version %> */ \n ",
                beautify: true
            },

            dist: {
                files: [{
                    src: 'dist/struct.js',
                    dest: 'dist/struct.min.js' 
                }]
            }
        },

        mocha: {
            dev: {
                src: ['test/dev.html'],
                options: {
                    run: true
                }
            },   

            build: {
                src: ['test/build.html'],
                options: {
                    run: true
                }
            }
        }


    });

    grunt.registerTask('default', ['mocha:dev']);
    grunt.registerTask('build', ['concat', 'uglify','mocha:build'] );


};
