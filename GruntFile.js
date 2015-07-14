'use strict';

module.exports = function(grunt){

  var cssPaths = ['assets/css/**/*.css', '!assets/css/bootstrap/**/*.css', '!assets/css/owl-theme.css'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: cssPaths
    },
    'http-server': {
      dev: {
        port: 8080,
        cache: -1,
        runInBackground: true
      }
    },
    jshint: {
      all: {
        options: {
          jshintrc: true
        },
        src: ['assets/js/**/*.js']
      }
    },
    watch: {
      css: {
        files: cssPaths,
        tasks: ['csslint']
      },
      js: {
        files: ['assets/js/**/*.js'],
        tasks: ['jshint'],
      },
      configFiles: {
        options: {
          reload: true
        },
        files: ['GruntFile.js']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['assets/js/**/*.js', cssPaths, '*.html']
      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  grunt.hook.push('watch', 9999);
  grunt.hook.push('http-server:dev', 300);
  grunt.hook.push('csslint', 200);
  grunt.hook.push('jshint', 100);

  grunt.registerTask('default', ['hook']);

};
