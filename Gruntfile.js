module.exports = function(grunt) {
  grunt.initConfig({
    bookmarklet: {
      generate: {
        body: 'unsubscribe-all.js',
        out: 'unsubscribe-all-bookmarklet.js',
        timestamp: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-bookmarklet-thingy');
  grunt.registerTask('default', 'bookmarklet');
};
