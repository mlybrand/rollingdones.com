var grunt = require("grunt");

grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
        all: ['**/*.js'],
        options: {
            ignores: ['node_modules/**/*.js']
        }
    }
});

grunt.loadNpmTasks("grunt-contrib-jshint");

grunt.registerTask("default", ["jshint"]);