const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/hekar.github.io/' : '',
};