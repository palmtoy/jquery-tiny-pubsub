'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		uglify: {
			target : {
				expand: true,
				cwd: './',
				src: ['shadowengine/lib/framework/*.js'],
				dest: './'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['uglify']);

};
