
module.exports = function(grunt){

  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['assets/css/*.css']
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
  grunt.registerTask('default', ['csslint', 'watch']);

};
