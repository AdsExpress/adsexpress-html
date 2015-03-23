
module.exports = function(grunt){

  grunt.initConfig({
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['csslint', 'http-server:dev', 'watch']);

};
