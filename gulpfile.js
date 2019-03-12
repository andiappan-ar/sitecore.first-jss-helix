var gulp = require("gulp"),
  path = require('path'),
  fs = require('fs'),
  watch = require('gulp-watch')
  ;

var targetComponentPath = 'samples/jsswebreact/project/';

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}


var files = [
  'samples/jsswebreact/feature/**/**/*.*'
];

gulp.task('default', function () {

  var folders = getFolders(targetComponentPath);

  var tasks = folders.map(function (folder) {

    var currentTargetPath = path.join(targetComponentPath, folder, '/src/feature/');

    console.log("Feature files copied: " + currentTargetPath);

    return gulp.src(files).pipe(gulp.dest(currentTargetPath));
  });

  return null;

});


gulp.task('watch', function () {

  var watcher = gulp.watch('./samples/jsswebreact/project/abc-tution/src/feature/Article/components/Article/index.js');
  watcher.on("change", function (event) {
    console.log("file changed: " + event.path);
    gulp.src(event).pipe(gulp.dest('./output'));
  })

});

