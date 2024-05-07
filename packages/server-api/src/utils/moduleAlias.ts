const moduleAlias = require('module-alias');
const path = require('path');

moduleAlias.addAliases({
  '@/utils': path.resolve(__dirname, '..', 'utils'),
  '@/routes': path.resolve(__dirname, '..', 'routes'),
  '@/components': path.resolve(__dirname, '..', 'components'),
  '@/interface': path.resolve(__dirname, '..', 'interface'),
  '@/middleware': path.resolve(__dirname, '..', 'middleware'),
  '@/models': path.resolve(__dirname, '..', 'models'),
  '@/errors': path.resolve(__dirname, '..', 'errors'),
  '@/shared': path.resolve(__dirname, '..', 'shared'),
  '@/services': path.resolve(__dirname, '..', 'services'),
  '@/app': path.resolve(__dirname, '../', 'app.ts'),
});

export default moduleAlias;
