# gulp-error-handler
Pipe handler for gulp.js based on gulp-plumber and gulp-notify

#### Install:
```
npm i cluejs/gulp-error-handler --save-dev
```

```
npm i gulp-notify -g
```

#### Options:
- (Boolean) `exitOnError`: emit `process.exit(1)` on Error

#### Usage:
``` javascript
...
global.$$ = {};

$$.env = require('@cluejs/gulp-env');
$$.gulp_error_handler = require('@cluejs/gulp-error-handler');

...
gulp.src()
    .pipe($$.gulp_error_handler({exitOnError: $$.env.isProduction()}))
...
```