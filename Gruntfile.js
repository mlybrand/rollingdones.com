var grunt = require("grunt");

grunt.registerTask("foo", function() {
    console.log("bar");
});

grunt.registerTask("default", ["foo"]);