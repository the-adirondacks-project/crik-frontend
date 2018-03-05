const glob = require('glob');
const _ = require('lodash');

const globOptions = {
  absolute: true,
};

class WebpackWatchPlugin {
  constructor({includes, excludes}) {
    this.includes = includes;
    this.excludes = excludes;
  }

  apply(compiler) {
    compiler.plugin('after-compile', (compilation, callback) => {
      const filesToInclude = [];
      _.each(this.includes, (includeGlob) => {
        const files = glob.sync(includeGlob, globOptions);
        filesToInclude.push(...files);
      });

      const filesToExclude = [];
      _.each(this.excludes, (excludeGlob) => {
        const files = glob.sync(excludeGlob, globOptions);
        filesToExclude.push(...files);
      });

      compilation.fileDependencies.push(...filesToInclude);

      callback();
    });
  }
}

module.exports = WebpackWatchPlugin;
