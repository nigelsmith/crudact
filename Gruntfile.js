module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        buildDir: 'example',
        exampleFile: 'example/example.js',
        sass: {
            dev: {
                files: [
                    {
                        expand: true,
                        src: 'src/style/<%= pkg.name %>.scss',
                        dest: '<%= buildDir %>/<%= pkg.name %>.css'
                    }
                ]
            }
        },
        browserify: {
            dev: {
                options: {
                    watch: true,
                    keepAlive: true,
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: [
                    {
                        src: '<%= exampleFile %>',
                        dest: '<%= buildDir %>/<%= pkg.name %>.js'
                    }
                ]
            }
        },
        env: {
            dev: {
                "NODE_ENV": 'development'
            },
            build: {
                "NODE_ENV": 'production'
            }
        },
        watch: {
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-env');


    grunt.registerTask('default', ['env:dev', 'sass:dev', 'watch']);
    grunt.registerTask('js', ['env:dev', 'browserify:dev']);
};
