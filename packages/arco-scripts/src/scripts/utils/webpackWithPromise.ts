import webpack from 'webpack';
import { print } from '@arco-design/arco-dev-utils';

export default (config, callback?) => {
  return new Promise<void>((resolve, reject) => {
    webpack(config, (err, stats) => {
      callback && callback(err, stats);

      if (err) {
        console.error(err.stack || err);
        reject();
        return;
      }

      print(
        stats.toString({
          assets: true,
          colors: true,
          warnings: true,
          errors: true,
          errorDetails: true,
          entrypoints: true,
          version: true,
          hash: false,
          timings: true,
          chunks: false,
          chunkModules: false,
          children: false,
        })
      );

      if (stats.hasErrors()) {
        reject();
      } else {
        resolve(null);
      }
    });
  });
};