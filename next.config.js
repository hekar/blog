const withOptimizedImages = require('next-optimized-images');

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = withOptimizedImages({
  basePath: ghPages ? '/blog' : '',
});
