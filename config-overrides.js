const { override, addWebpackPlugin } = require('customize-cra');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = override(
    addWebpackPlugin(
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/photos', to: 'photos' },
            ],
        }),
    ),
);