/** This is a description of the foo function. */
module.exports = function (grunt) {
  "use strict";

  var jsFiles = ['app/**/*.js'];
  var srcFiles = jsFiles.concat(['README.md']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      src: ['tests/**/*.js']
    },
    jshint: {
      src: jsFiles,
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jscs: {
      src: jsFiles,
      options: {
        config: ".jscsrc"
      }
    },
    jsdoc: {
      src: srcFiles,
      options: {
        destination: 'docs',
        template: "node_modules/minami"
      }
    },
    watch: {
      docs: {
        files: srcFiles,
        tasks: ['default']
      }
    }

  });


  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jscs', "mochaTest", "jsdoc:all"]);
  grunt.registerTask('dev', ['jshint', "mochaTest"]);
};
