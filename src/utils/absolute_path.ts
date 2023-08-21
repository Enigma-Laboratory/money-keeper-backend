const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@/utils': __dirname + '/..' + '/utils',
  '@/routes': __dirname + '/..' + '/routes',
  '@/components': __dirname + '/..' + '/components',
  '@/interface': __dirname + '/..' + '/interface',
  '@/middleware': __dirname + '/..' + '/middleware',
  '@/models': __dirname + '/..' + '/models',
  '@/errors': __dirname + '/..' + '/errors',
  '@/shared': __dirname + '/..' + '/shared',
  '@/services': __dirname + '/..' + '/services',
});
export default moduleAlias;
