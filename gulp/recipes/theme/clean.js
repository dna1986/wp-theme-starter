var del     = require('del');
var config  = require('../../config/theme');


/**
 * Delete all php files
 * within the built theme
 * directory
 *
 */
module.exports = function (done) {
	del(config.paths.clean, { force: true }, done);
};