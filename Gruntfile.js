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
			target : {
				expand: true,
				cwd: './',
				src: ['src/*.js', 'views/*.js', 'libs/**/**/**/*.js'],
				dest: './'
			}
		},
		'json-minify': {
			build: {
				files: 'config/**/*.json'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-json-minify');

	// Default task.
	grunt.registerTask('default', ['clean', 'uglify', 'json-minify']);

};
