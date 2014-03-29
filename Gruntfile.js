module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: "public/bower_components"
        }
      }
    },

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['public'],
          livereload: true
        }
      }
    },
    
    watch: {
      all: {
        files: ['public/**', '!public/cljs/*.cljs', '!public/bower_components/**'],

        options: {
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });

  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
};
