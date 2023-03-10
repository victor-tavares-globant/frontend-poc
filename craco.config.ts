import * as path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@layouts': path.resolve(__dirname, 'src/app/layouts'),
      '@containers': path.resolve(__dirname, 'src/app/containers'),
      '@constants': path.resolve(__dirname, 'src/utils/constants')
    }
  }
};
