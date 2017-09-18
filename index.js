const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

module.exports = function (options) {
    options = Object.assign({
        exitOnError: false
    }, options);

    return plumber({
        errorHandler: function (error) {
            // console.log(JSON.stringify(error, null, 2));
            notify.onError("\n\nError: \n <%= error.message %>")(error);
            console.error(`\n\nFullStack Error: \n ${JSON.stringify(error, null, 2)}`);
            this.emit('end');
            if(options.exitOnError) {
                process.exit(1);
            }
        }
    });
};