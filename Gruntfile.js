// Grunt Wrapper Function ======================/
var grunt_wrap = function (grunt) {
	// Configurations ==========================/
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					banner: '/*! <%= pkg.name %> - Last Update <%= grunt.template.today("mmmyy") %> */',
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'assets/sass',
					src: ['**.*scss'],
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		jsmin: {},
		imagemin: {},
		watch: {}
	})

	// Load Dependent Plugins ==================/
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-imagemin')
	grunt.loadNpmTasks('grunt-contrib-watch')

	// Tasks ===================================/
	grunt.registerTask('default', ['watch'])
}

module.exports = grunt_wrap




/*
	/assets
	  ∟ css/
	  ∟ js/
	  ∟ img/
	  ∟ sass/
	Gruntfile.js
	index.html
	package.json
*/