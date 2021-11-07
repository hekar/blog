const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  basePath: ghPages ? '/blog' : '',
  images: {
    loader: 'custom',
  },
};
