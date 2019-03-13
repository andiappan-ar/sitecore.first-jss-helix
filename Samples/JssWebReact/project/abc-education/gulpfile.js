var gulp = require("gulp"),
  path = require('path'),
  fs = require('fs'),
  watch = require('gulp-watch');

var packageFolders = ["feature", "foundation"];

/*
copy-packages copy the components from respective component layers to project layer.
*/
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

/*
copy-packages copy the components from respective project layer to respective component layers.
*/
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
