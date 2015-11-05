'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		uglify: {
			target : {
				expand: true,
				cwd: './',
				src: ['shadowengine/**/**/**/**/**/**/*.js'],
				dest: './'
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: './',
					src: ['shadowengine/**/**/**/**/**/**/*.html'],
					dest: './'
				}]
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// Default task.
	grunt.registerTask('default', ['uglify', 'htmlmin']);

};
