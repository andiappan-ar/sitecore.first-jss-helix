var gulp = require("gulp"),
  path = require('path'),
  fs = require('fs'),
  watch = require('gulp-watch')
  ;


gulp.task('folder', function () {

  var gulpRanInThisFolder = process.cwd();

  console.log("root directory : " + __dirname);

  var path = require("path");
  console.log("./ = %s", path.resolve("./"));
  console.log("__dirname = %s", path.resolve(__dirname));
  
  var rootDir = path.resolve('../', '../', '../', '../');
  var designFolderName = pkg.name;
  var sftpConfigPath = path.join(rootDir, '/sftp-config.json');

});
