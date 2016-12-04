module.exports = function(grunt){

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                
                files: [{
                    expand: true,
                    cwd:    'assets/sass',
                    dest:   'assets/css',
                    src:    ['**/*.scss'],
                    ext:    '.css'
                }]
            }
        },

        watch: {
            files: 'assets/sass/*.scss',
            
            tasks: [
                'sass'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'watch'
    ]);

};
