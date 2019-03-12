var gulp = require("gulp"),
  path = require('path'),
  fs = require('fs'),
  watch = require('gulp-watch');

var packageFolders = ["feature", "foundation"];

gulp.task('copy-packages', function () {

  var gulpRanInThisFolder = process.cwd();

  var merge = require('merge-stream');  

  var mergeCollection = [];

  var tasks = packageFolders.map(function (packageName) {

    var currentPackagePath = path.join(gulpRanInThisFolder, '/src/', packageName);

    var packageFolder = gulp.src(['./node_modules/' + packageName + '/src/**/**/*.*']).pipe(gulp.dest(currentPackagePath));

    mergeCollection.push(packageFolder);

    console.log("Package : "+packageName +"[" + currentPackagePath+"] ready");
  });

  return merge(mergeCollection);

});

gulp.task('push-packages', function () {

  var gulpRanInThisFolder = process.cwd();

  var merge = require('merge-stream');  

  var mergeCollection = [];

  var tasks = packageFolders.map(function (packageName) {

    var currentPackagePath = path.join(gulpRanInThisFolder, '/src/', packageName,'**/*');

    var currentPackagePathDestination = path.join(gulpRanInThisFolder, '/node_modules/' , packageName , '/src/');

    var packageFolder = gulp.src(currentPackagePath).pipe(gulp.dest([currentPackagePathDestination]));

    mergeCollection.push(packageFolder);

    console.log("Package : "+packageName +"[" + currentPackagePathDestination+"] ready");
  });

  return merge(mergeCollection);

});
