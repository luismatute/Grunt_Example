// Grunt Wrapper Function ======================/
var grunt_wrap = function (grunt) {
	// Configurations ==========================/
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				expand: true, //Dynamic expansion
				cwd: 'assets/sass/',
				src: ['**/*.scss'],
				dest: 'dist/css',
				ext: '.css',
				options: {
					style: "compressed"
				}
			}
		},
		uglify: {
			build: {
				files: [{
					expand: true, //Dynamic expansion
					cwd: 'assets/js',
					src: '**/*.js',
					dest: 'dist/js/',
					ext: '.js'
				}]
			}
		},
		imagemin: {
			png: {
				options: {
					optimizationLevel: 3
				},
				files: [
					{
						expand: true, //Dynamic expansion
						cwd: 'assets/img/',
						src: ['**/*.png'],
						dest: 'dist/img/',
						ext: '.png'
					}
				]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [
					{
						expand: true, //Dynamic expansion
						cwd: 'assets/img/',
						src: ['**/*.jpg','**/*.jpeg'],
						dest: 'dist/img/',
						ext: '.jpg'
					}
				]
			},
			gif: {
				options: {
					interlaced: true
				},
				files: [{
					expand: true, //Dynamic expansion
					cwd: 'assets/img/',
					src: ['**/*.gif'],
					dest: 'dist/img/',
					ext: '.gif'
				}]
			}
		},
		watch: {
			css: {
				files: 'assets/sass/**/*.scss',
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			scripts: {
				files: ['assets/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			},
			images: {
				files: ['assets/img/**/*.{png,jpg,jpeg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false,
				}
			}
		}
	})

	// Load Dependent Plugins ==================/
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-imagemin')
	grunt.loadNpmTasks('grunt-contrib-watch')

	// Tasks ===================================/
	grunt.registerTask('default', ['watch'])
}

module.exports = grunt_wrap