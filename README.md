# gulp-error-handler
Pipe handler for gulp.js based on gulp-plumber and gulp-notify

#### Install:
```
npm i cluejs/gulp-error-handler --save-dev
```

```
npm i gulp-notify -g
```

#### Usage:
```
...
    .pipe(require('gulp-error-handler')({}))
...
```

#### Options:
- (Boolean) `exitOnError`: emit `process.exit(1)` on Error