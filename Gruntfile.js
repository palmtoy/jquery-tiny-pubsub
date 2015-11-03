'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkgname: 'tiny-pubsub',
    // Task configuration.
    clean: {
      src: ['dist']
    },
    uglify: {
      dist: {
        src: 'src/<%= pkgname %>.js',
        dest: 'dist/ba-<%= pkgname %>.min.js'
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['clean', 'uglify']);

};
