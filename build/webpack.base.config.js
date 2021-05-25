const path = require('path');
const nodeExternals = require('webpack-node-externals');

const envName = (env) => {
  if (env.production) {
    return 'production';
  }
  if (env.test) {
    return 'test';
  }
  return 'development';
};

const envToMode = (env) => {
  if (env.production) {
    return 'production';
  }
  return 'development';
};

module.exports = (env) => ({
  target: 'electron-renderer',
  mode: envToMode(env),
  devtool: 'source-map',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    alias: {
      env: path.resolve(__dirname, `../config/env_${envName(env)}.json`),
    },
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
});
