const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'Public'), // Output directory
    filename: 'bundle.js' // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile all .js files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use Babel presets for React and modern JavaScript
          }
        }
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Public/index.html', // Template HTML file
      filename: 'index.html', // Output HTML file
    })
  ],
  devServer: {
    static: path.join(__dirname, 'Public'), // Directory to serve static files
    port: 3000, // Port to run the development server
    historyApiFallback: true // Enable HTML5 History API fallback
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve these extensions
  }
};