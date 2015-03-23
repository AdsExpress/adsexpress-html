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
    watch: {
      css: {
        files: ['assets/css/*.css'],
        tasks: ['csslint']
      }
    },
    concurrent: {
      tasks: ['http-server:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  grunt.hook.push('concurrent', 9999);
  grunt.hook.push('csslint', 100);

  grunt.registerTask('default', ['hook']);

};
