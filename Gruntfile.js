module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      jade: {
        files: ['jade/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      }
    },
    jade: {
        compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "jade",
              src: ["**/*.jade", "!_*.jade"],
              dest: "html",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    sass: {
        options: {
          outputStyle: 'expanded'
        },
        dist: {
            files: {
                'css/main.css': 'scss/main.scss'
            }
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('build', ['jade', 'sass']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jade', 'sass', 'watch']);
};
