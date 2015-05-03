
var fs = require('fs'),
	path = require('path');

function WriteStatsPlugin(file, options) {
	this.file = file;
	this.options = options;
}

WriteStatsPlugin.prototype.apply = function apply(source) {
	var file = this.file, options = this.options;
	source.plugin('done', function outputStats(stats) {
		var out = path.join(this.options.output.path, file);
		fs.writeFileSync(out, JSON.stringify(stats.toJson(options)));
	});
};

module.exports = WriteStatsPlugin;
