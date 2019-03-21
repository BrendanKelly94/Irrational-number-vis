const path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname , './public')
 },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ['@babel/react',
              [ "@babel/env", {
                "targets": {
                  "browsers": [ "last 2 versions" ]
                },
                //exclude: [ 'transform-regenerator' ],
                "modules": false
              }]
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]

  }

};
