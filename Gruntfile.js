module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
    ' * <%= pkg.name %>\n' +
    ' * version: <%= pkg.version %>\n' +
    ' * lastupdate: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    ' * author: <%= pkg.author %>\n' +
    ' * <%= pkg.repository.type %>: <%= pkg.repository.url %>\n' +
    ' * license: MIT\n' +
    ' */\n',

    connect: {
      options: {
      },
      livereload: {
        options: {
          open: true
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'js/jquery.scrollPlug.min.js': ['js/jquery.scrollPlug.js']
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/jquery.scrollPlug.js']
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/jquery.scrollPlug.js'],
        tasks: ['jshint', 'uglify']
      },
      compass: {
        files: ['_sass/*.scss'],
        tasks: ['compass']
      },
      livereload: {
        files: ['index.html']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['connect', 'watch', 'compass', 'uglify']);
};