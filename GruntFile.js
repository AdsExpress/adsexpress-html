'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['assets/css/*.css']
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
        src: ['assets/js/*.js']
      }
    },
    watch: {
      css: {
        files: ['assets/css/*.css'],
        tasks: ['csslint']
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['jshint']
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
